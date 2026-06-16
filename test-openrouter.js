const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting OpenRouter Cost & API Validation Test...");

  // 1. Read .env.local file
  const envPath = path.join(__dirname, ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("Error: .env.local file not found.");
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, "utf8");
  const env = {};
  envContent.split("\n").forEach((line) => {
    const parts = line.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join("=").trim();
      env[key] = value;
    }
  });

  const apiKey = env["OPENROUTER_API_KEY"];
  const supabaseUrl = env["NEXT_PUBLIC_SUPABASE_URL"];
  const supabaseAnonKey = env["NEXT_PUBLIC_SUPABASE_ANON_KEY"];

  if (!apiKey) {
    console.error("Error: OPENROUTER_API_KEY is missing in .env.local.");
    process.exit(1);
  }

  console.log("API Key loaded successfully: sk-or-v1-..." + apiKey.slice(-6));

  // 2. Query OpenRouter using OpenAI GPT-4o
  const topic = "How AI Agents are Revolutionizing Business Workflows in 2026";
  console.log(`Sending draft request for topic: "${topic}"...`);

  const systemPrompt = `
You are an elite, human-level technology writer and SEO strategist. Draft a comprehensive blog post for Beyond Bots.
DNA: Beyond Bots is an AI Automation and custom Next.js engineering firm.
Guidelines:
- Word Count: 1200 - 1500 words.
- Format: Markdown (headers, bullet lists).
- Tone: Conversational, senior-architect level, direct.
- Clichés to AVOID: "delve", "testament", "in conclusion", "furthermore", "moreover", "landscape", "beacon".
- Return ONLY a JSON object:
{
  "title": "A catchy, SEO title",
  "slug": "how-ai-agents-revolutionize-business-workflows",
  "category": "AI Automation",
  "excerpt": "Brief meta description (~150 chars)",
  "content": "Full markdown content (1200-1500 words)",
  "keywords": ["AI Automation", "AI Agents", "Workflows"]
}
`;

  const startTime = Date.now();
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://www.bb360.in",
        "X-Title": "Beyond Bots Cost Validator",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Write an in-depth, expert-level blog post about: "${topic}".` },
        ],
        temperature: 0.7,
      }),
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const json = await response.json();

    if (!response.ok || json.error) {
      console.error("OpenRouter API Error:", json.error || json);
      process.exit(1);
    }

    console.log(`\nAPI Call Completed successfully in ${duration} seconds.`);

    // 3. Extract and display usage statistics
    const usage = json.usage;
    if (usage) {
      const promptTokens = usage.prompt_tokens;
      const completionTokens = usage.completion_tokens;
      const totalTokens = usage.total_tokens;

      // OpenAI GPT-4o Pricing on OpenRouter:
      // Input: $2.50 / M tokens ($0.0000025 per token)
      // Output: $10.00 / M tokens ($0.0000100 per token)
      const inputCost = promptTokens * 0.0000025;
      const outputCost = completionTokens * 0.0000100;
      const totalCost = inputCost + outputCost;

      console.log("=========================================");
      console.log("            TOKEN USAGE & COST           ");
      console.log("=========================================");
      console.log(`Prompt (Input) Tokens:      ${promptTokens}`);
      console.log(`Completion (Output) Tokens:  ${completionTokens}`);
      console.log(`Total Tokens:                ${totalTokens}`);
      console.log("-----------------------------------------");
      console.log(`Input Token Cost:            $${inputCost.toFixed(6)}`);
      console.log(`Output Token Cost:           $${outputCost.toFixed(6)}`);
      console.log(`Estimated Total Cost:        $${totalCost.toFixed(4)} USD`);
      console.log("=========================================");
    } else {
      console.log("Usage stats not returned by OpenRouter.");
    }

    // 4. Update the database in Supabase
    if (supabaseUrl && supabaseAnonKey) {
      console.log("\nConnecting to Supabase to update the blog post...");
      const replyText = json.choices?.[0]?.message?.content?.trim();
      
      let articleData;
      try {
        const jsonStart = replyText.indexOf("{");
        const jsonEnd = replyText.lastIndexOf("}");
        const cleanedJson = replyText.substring(jsonStart, jsonEnd + 1);
        articleData = JSON.parse(cleanedJson);
      } catch (e) {
        console.error("Could not parse AI reply as JSON. Storing raw text instead.");
        articleData = {
          title: "How AI Agents are Revolutionizing Business Workflows in 2026 (AI Generated)",
          excerpt: "An in-depth guide to AI agents in business workflows.",
          content: replyText,
          category: "AI Automation"
        };
      }

      // Execute SQL RPC call using fetch to update the post
      const updateResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/update_blog_post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseAnonKey,
          "Authorization": `Bearer ${supabaseAnonKey}`
        },
        body: JSON.stringify({
          passcode: "BEYOND_ADMIN_2026",
          post_id: "522fad0f-1d35-4f7e-ad79-e51696f10dad", // Seed Post ID for Blog 1
          title: articleData.title,
          slug: articleData.slug || "how-ai-agents-revolutionize-business-workflows",
          excerpt: articleData.excerpt,
          content: articleData.content,
          image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
          category: articleData.category,
          author: "Beyond Bots Team (AI Writer)"
        })
      });

      if (updateResponse.ok) {
        console.log("Success: Supabase database updated with the new AI-generated draft!");
      } else {
        const errText = await updateResponse.text();
        console.error("Supabase Update Failed:", errText);
      }
    } else {
      console.log("\nSupabase credentials missing. Database update skipped.");
    }

  } catch (err) {
    console.error("Request failed:", err.message);
  }
}

main();
