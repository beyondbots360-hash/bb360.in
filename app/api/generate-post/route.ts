import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { prompt: userTopic, apiKey: userKey } = await request.json();

    if (!userTopic) {
      return NextResponse.json({ error: "Missing topic prompt" }, { status: 400 });
    }

    const apiKey = userKey || process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenRouter API Key not configured. Please add it in your settings." },
        { status: 401 }
      );
    }

    // 1. Fetch titles of recent posts to provide context for "last blogs"
    const { data: lastPosts } = await supabase
      .from("posts")
      .select("title, category")
      .order("published_at", { ascending: false })
      .limit(10);

    const recentPostsText = lastPosts && lastPosts.length > 0
      ? lastPosts.map((p) => `- ${p.title} (${p.category})`).join("\n")
      : "No posts currently exist.";

    // 2. Define the company DNA
    const businessDNA = `
Beyond Bots (www.bb360.in) is a modern technology company (not a generic marketing agency) providing:
- Web Development: Custom, high-performance web systems, landing pages, and web applications built using modern stacks (Next.js, React, Tailwind CSS). We avoid templates and prioritize speed, clean code, and Core Web Vitals.
- AI Agentic Solutions: Custom AI assistants, workflow automation, autonomous operations agents, and systems that streamline business tasks.
- Digital Marketing: SEO optimization, local SEO, content marketing, lead generation, and performance marketing campaigns that compound growth over time.
Target Audience: Startup founders, small business owners, and enterprise decision-makers in India, Middle East, Europe, and North America.
Brand Tone: Direct, conversational, engineering-led, practical, and authoritative. We value clarity and depth over buzzwords.
`;

    // 3. Build the system prompt enforcing Helpful Content and human voice guidelines
    const systemPrompt = `
You are an elite, human-level technology writer and SEO strategist. Your job is to draft a comprehensive, high-fidelity blog post for Beyond Bots that complies with the latest Google Helpful Content guidelines and SEO best practices.

Here is the DNA of the business you are writing for:
${businessDNA}

Here are the titles of the recent blog posts. Avoid duplicating these topics, and instead focus on complementary or new angles:
${recentPostsText}

Writing Style Instructions (Crucial for passing Google Helpful Content checks):
- Word Count: Ensure the article is between 1200 and 2000 words. Be comprehensive, detailed, and write with real depth.
- Tone & Voice: Direct, conversational, and authoritative. Avoid generic corporate speak. Write as if you are a senior software architect and growth consultant explaining concepts to a colleague or founder.
- Formatting: Use semantic Markdown. Write clear headers (##, ###) every 2-3 paragraphs. Use bulleted lists, bold text for key terms, and code blocks if showing technical code or structure.
- Sentence Variation: Use short paragraphs (2-4 sentences max). Vary your sentence lengths—mix short, punchy statements with longer explanatory sentences to create a natural human reading rhythm.
- Clichés to AVOID (Strict Rule: Do not use these words/phrases):
  - "delve", "testament", "in conclusion", "furthermore", "moreover", "landscape", "beacon", "demystify", "look no further", "revolutionary", "game-changer", "lastly", "in this digital era", "tapestry".
- Practicality: Include concrete examples, step-by-step blueprints, database structures, or code snippets where appropriate to provide actual technical utility.

Output Format:
You must return your output ONLY as a valid JSON object. Do not include any markdown code blocks (like \`\`\`json) or conversational text outside the JSON.
The JSON structure must be:
{
  "title": "A catchy, SEO-optimized title containing keywords but written for human appeal (e.g. 50-60 chars)",
  "slug": "url-friendly-slug-in-lowercase",
  "category": "Must be exactly one of: AI Automation, Web Development, or Digital Marketing",
  "excerpt": "A compelling meta description summarizing the post (140-160 characters)",
  "content": "The full article content in Markdown format (approx 1200-2000 words). Include all headers, lists, and formatting here.",
  "keywords": ["array", "of", "5-7", "relevant", "search", "keywords"]
}
`;

    // 4. Query OpenRouter via API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://www.bb360.in",
        "X-Title": "Beyond Bots",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3.5-sonnet",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Write an in-depth, expert-level blog post about: "${userTopic}". Make sure it is 1200-2000 words.` },
        ],
        temperature: 0.7,
      }),
    });

    const completion = await response.json();

    if (!response.ok || completion.error) {
      const errorMsg = completion.error?.message || response.statusText;
      return NextResponse.json({ error: `OpenRouter API Error: ${errorMsg}` }, { status: response.status });
    }

    const replyText = completion.choices?.[0]?.message?.content?.trim();

    if (!replyText) {
      return NextResponse.json({ error: "Empty response received from AI model." }, { status: 500 });
    }

    // Parse JSON safely
    try {
      // In case the model wrapped it in markdown json block
      const jsonStart = replyText.indexOf("{");
      const jsonEnd = replyText.lastIndexOf("}");
      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error("Could not find JSON object in model response.");
      }
      const cleanedJson = replyText.substring(jsonStart, jsonEnd + 1);
      const parsedData = JSON.parse(cleanedJson);

      return NextResponse.json({ success: true, data: parsedData });
    } catch (parseError: any) {
      console.error("JSON parsing error:", parseError.message);
      // Fallback: return raw text if JSON parsing fails
      return NextResponse.json({
        success: false,
        error: "Failed to parse model output as JSON. Raw output returned.",
        rawOutput: replyText,
      });
    }
  } catch (err: any) {
    console.error("Generate API Route error:", err.message || err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
