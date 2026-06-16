"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image_url?: string;
  published_at: string;
}

export default function BloggerPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // OpenRouter State
  const [openRouterKey, setOpenRouterKey] = useState("");
  const [aiTopic, setAiTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiStatus, setAiStatus] = useState("");

  // Form Editor State
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "AI Automation",
    excerpt: "",
    content: "",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: "Beyond Bots Team",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  // Check auth state and load API Key
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authorized");
    const savedPasscode = sessionStorage.getItem("admin_passcode");
    if (savedAuth === "true" && savedPasscode) {
      loadPosts(savedPasscode);
    }

    const savedKey = localStorage.getItem("openrouter_api_key");
    if (savedKey) {
      setOpenRouterKey(savedKey);
    }
  }, []);

  const loadPosts = async (code: string) => {
    setIsLoadingList(true);
    setErrorMessage("");
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) {
        throw error;
      }

      setPosts(data || []);
      setIsAuthorized(true);
      sessionStorage.setItem("admin_authorized", "true");
      sessionStorage.setItem("admin_passcode", code);
    } catch (err: any) {
      console.error("Auth error:", err.message || err);
      setErrorMessage(err.message || "Failed to load database posts.");
      sessionStorage.removeItem("admin_authorized");
      sessionStorage.removeItem("admin_passcode");
    } finally {
      setIsLoadingList(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) {
      setErrorMessage("Please enter the passcode.");
      return;
    }
    loadPosts(passcode);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authorized");
    sessionStorage.removeItem("admin_passcode");
    setPasscode("");
    setPosts([]);
    setIsAuthorized(false);
  };

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("openrouter_api_key", openRouterKey);
    alert("OpenRouter API Key saved locally in browser.");
  };

  // 1. AI Content generation via /api/generate-post
  const handleAiGenerate = async () => {
    if (!aiTopic) {
      alert("Please enter a topic or prompt for the AI.");
      return;
    }

    setIsGenerating(true);
    setAiStatus("Connecting to OpenRouter (ChatGPT - GPT-4o)...");
    setFormMessage("");

    try {
      const res = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: aiTopic,
          apiKey: openRouterKey || undefined, // Send override key if stored locally
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to generate blog draft.");
      }

      if (json.success && json.data) {
        const article = json.data;
        
        // Auto populate editor
        setFormData({
          title: article.title || "",
          slug: article.slug || "",
          category: article.category || "AI Automation",
          excerpt: article.excerpt || "",
          content: article.content || "",
          imageUrl: formData.imageUrl, // keep default cover or let user edit
          author: formData.author,
        });

        setAiStatus("");
        setFormStatus("success");
        setFormMessage(`AI drafted a ~${article.content.split(/\s+/).length} word article! Please review details below.`);
      } else if (json.rawOutput) {
        // Fallback if model output is not strict JSON
        setFormData({
          ...formData,
          content: json.rawOutput,
        });
        setAiStatus("");
        setFormStatus("error");
        setFormMessage("AI returned unstructured text. Placed raw content inside text editor.");
      }
    } catch (err: any) {
      console.error(err);
      setAiStatus("");
      alert("AI Generation failed: " + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  // 2. Publish or Update Lead (Submit Form)
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = sessionStorage.getItem("admin_passcode");
    if (!code) return;

    setFormStatus("submitting");
    setFormMessage("");

    if (!formData.title || !formData.slug || !formData.excerpt || !formData.content) {
      setFormStatus("error");
      setFormMessage("Please fill out all fields.");
      return;
    }

    try {
      if (editingPostId) {
        // Update existing post
        const { error } = await supabase.rpc("update_blog_post", {
          passcode: code,
          post_id: editingPostId,
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          content: formData.content,
          image_url: formData.imageUrl,
          category: formData.category,
          author: formData.author,
        });

        if (error) throw error;
        setFormMessage("Blog post updated successfully.");
      } else {
        // Create new post
        const { error } = await supabase.rpc("create_blog_post", {
          passcode: code,
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          content: formData.content,
          image_url: formData.imageUrl,
          category: formData.category,
          author: formData.author,
        });

        if (error) throw error;
        setFormMessage("Blog post published successfully.");
      }

      setFormStatus("success");
      
      // Clear form
      setFormData({
        title: "",
        slug: "",
        category: "AI Automation",
        excerpt: "",
        content: "",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        author: "Beyond Bots Team",
      });
      setEditingPostId(null);
      setAiTopic("");

      // Reload posts feed
      loadPosts(code);
    } catch (err: any) {
      setFormStatus("error");
      setFormMessage("Failed to publish: " + err.message);
    }
  };

  // 3. Edit Action
  const handleEditClick = (post: Post) => {
    setEditingPostId(post.id);
    setFormData({
      title: post.title,
      slug: post.slug,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      imageUrl: post.image_url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      author: post.author,
    });
    // Scroll up to editor
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 4. Delete Action
  const handleDeleteClick = async (postId: string) => {
    const code = sessionStorage.getItem("admin_passcode");
    if (!code) return;

    if (!confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      const { error } = await supabase.rpc("delete_blog_post", {
        passcode: code,
        post_id: postId,
      });

      if (error) throw error;

      // Update UI state
      setPosts(posts.filter((p) => p.id !== postId));
    } catch (err: any) {
      alert("Failed to delete post: " + err.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setFormData({
      title: "",
      slug: "",
      category: "AI Automation",
      excerpt: "",
      content: "",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      author: "Beyond Bots Team",
    });
    setFormMessage("");
    setFormStatus("idle");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Render Passcode Gate Screen
  if (!isAuthorized) {
    return (
      <section className="min-h-[75vh] flex items-center justify-center bg-brand-white py-16 px-6">
        <div className="w-full max-w-[450px] bg-brand-white border border-black/[0.08] p-8 rounded-[20px] shadow-sm text-center">
          <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange mb-3 block">
            Writer Access
          </span>
          <h1 className="font-display font-extrabold text-2xl uppercase text-brand-black mb-6">
            Blogger Command Center
          </h1>
          <p className="text-zinc-600 text-xs font-sans font-semibold leading-relaxed mb-6">
            Enter the authorized passcode to access the blog drafting interface and publishing CMS.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="flex flex-col space-y-2">
              <label htmlFor="passcode" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[12px] placeholder:text-zinc-300 w-full"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-xs font-semibold">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isLoadingList}
              className="w-full bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-4 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-orange/10 cursor-pointer text-center"
            >
              {isLoadingList ? "Verifying..." : "Access CMS Portal"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Render Authorized CMS Portal
  return (
    <section className="bg-brand-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Portal Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12 border-b border-zinc-100 pb-8">
          <div>
            <nav className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">
              CMS Console
            </nav>
            <h1 className="font-display font-extrabold text-brand-black text-3xl uppercase">
              Blogger Command Center
            </h1>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/blog"
              className="bg-zinc-100 text-zinc-800 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              View Live Blog
            </Link>
            <button
              onClick={handleLogout}
              className="bg-zinc-950 text-brand-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Logout Portal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: OpenRouter Settings & AI Generator Tool */}
          <div className="space-y-8 lg:col-span-1">
            
            {/* OpenRouter Config Card */}
            <div className="bg-brand-white border border-black/[0.08] p-6 rounded-[20px] shadow-sm">
              <h3 className="text-brand-black text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-zinc-100">
                1. OpenRouter Credentials
              </h3>
              <form onSubmit={handleSaveApiKey} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="apiKey" className="text-[9px] font-black uppercase tracking-wider text-zinc-500">
                    OpenRouter API Key
                  </label>
                  <input
                    type="password"
                    id="apiKey"
                    value={openRouterKey}
                    onChange={(e) => setOpenRouterKey(e.target.value)}
                    placeholder="sk-or-v1-..."
                    className="bg-brand-white border border-black/[0.08] p-3 text-xs font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] placeholder:text-zinc-300 w-full"
                  />
                  <p className="text-[9px] text-zinc-400 font-sans leading-relaxed">
                    Leave empty to fallback to the server environment variables. Saved in local storage.
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-zinc-900 text-brand-white text-[10px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-[8px] hover:bg-zinc-800 transition-colors cursor-pointer w-full text-center"
                >
                  Save API Key
                </button>
              </form>
            </div>

            {/* AI Generator Panel Card */}
            <div className="bg-brand-white border border-black/[0.08] p-6 rounded-[20px] shadow-sm">
              <h3 className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-brand-orange/10">
                2. AI Blog Drafter (ChatGPT - GPT-4o)
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="aiTopic" className="text-[9px] font-black uppercase tracking-wider text-zinc-500">
                    Article Topic / Keyword prompt
                  </label>
                  <textarea
                    id="aiTopic"
                    rows={4}
                    value={aiTopic}
                    onChange={(e) => setAiTopic(e.target.value)}
                    placeholder="e.g., Explain why local SEO in India is crucial for service startups, detailing structured JSON-LD schemas and speed optimizations."
                    className="bg-brand-white border border-black/[0.08] p-3 text-xs font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] placeholder:text-zinc-300 w-full resize-none leading-relaxed"
                  />
                  <p className="text-[9px] text-zinc-400 leading-relaxed font-sans font-semibold">
                    The AI will read your business DNA and past blogs context to draft a detailed 1200-2000 word, SEO-compliant guide.
                  </p>
                </div>

                {aiStatus && (
                  <div className="bg-zinc-50 text-[10px] font-bold text-brand-orange border border-zinc-100 p-3 rounded-[10px]">
                    {aiStatus}
                  </div>
                )}

                <button
                  onClick={handleAiGenerate}
                  disabled={isGenerating}
                  className="w-full bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-orange/10 disabled:bg-zinc-300 disabled:pointer-events-none cursor-pointer text-center"
                >
                  {isGenerating ? "Drafting 1500+ Words..." : "AI Generate Draft"}
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Blog Form Editor */}
          <div className="lg:col-span-2">
            <div className="bg-brand-white border border-black/[0.08] p-8 rounded-[20px] shadow-sm">
              
              <div className="flex justify-between items-center mb-6 pb-3 border-b border-zinc-100">
                <h3 className="text-brand-black text-lg font-bold uppercase tracking-tight">
                  {editingPostId ? "Modify Blog Post" : "Write Blog Post Editor"}
                </h3>
                {editingPostId && (
                  <button
                    onClick={handleCancelEdit}
                    className="text-red-500 text-xs font-bold uppercase tracking-wider hover:underline"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Title */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="title" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="How AI Automation transforms operations..."
                    className="bg-brand-white border border-black/[0.08] p-3 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full"
                  />
                </div>

                {/* Slug & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="slug" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="how-ai-automation-transforms"
                      className="bg-brand-white border border-black/[0.08] p-3 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="category" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                      Category
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="bg-brand-white border border-black/[0.08] p-3 text-sm font-bold text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full"
                    >
                      <option value="AI Automation">AI Automation</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                {/* Cover Image & Author */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="imageUrl" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                      Cover Image URL
                    </label>
                    <input
                      type="text"
                      id="imageUrl"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      className="bg-brand-white border border-black/[0.08] p-3 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="author" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="bg-brand-white border border-black/[0.08] p-3 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="excerpt" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                    Excerpt (Meta Description)
                  </label>
                  <input
                    type="text"
                    id="excerpt"
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Short summary of the post for listing cards..."
                    className="bg-brand-white border border-black/[0.08] p-3 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full"
                  />
                </div>

                {/* Markdown Content */}
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="content" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                      Article Content (Markdown)
                    </label>
                    <span className="text-zinc-400 text-[10px] font-semibold">
                      Word Count: {formData.content ? formData.content.trim().split(/\s+/).length : 0} words
                    </span>
                  </div>
                  <textarea
                    id="content"
                    required
                    rows={12}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="# Main Header&#10;&#10;Write your markdown content here. AI draft fills this automatically."
                    className="bg-brand-white border border-black/[0.08] p-4 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[10px] w-full leading-relaxed font-mono"
                  />
                </div>

                {formMessage && (
                  <div className={`p-4 rounded-[12px] text-xs font-bold ${
                    formStatus === "success" 
                      ? "bg-green-50 text-green-700 border border-green-100" 
                      : "bg-red-50 text-red-700 border border-red-100"
                  }`}>
                    {formMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-4 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-orange/10 cursor-pointer text-center"
                >
                  {formStatus === "submitting" 
                    ? "Saving changes..." 
                    : editingPostId 
                    ? "Save Blog Updates" 
                    : "Publish Blog Post"
                  }
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* Existing Posts list Section */}
        <div className="mt-16 bg-brand-white border border-black/[0.08] rounded-[20px] shadow-sm p-6 overflow-hidden">
          <h3 className="text-brand-black text-sm font-bold uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
            Existing Blog Posts ({posts.length})
          </h3>

          <div className="overflow-x-auto">
            {posts.length === 0 ? (
              <p className="text-zinc-500 font-bold text-center text-xs py-10">No articles currently published in the database.</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100 text-[10px] font-black uppercase tracking-wider text-zinc-500">
                    <th className="py-4 px-6">Published</th>
                    <th className="py-4 px-6">Title</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Author</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-xs font-sans font-semibold text-zinc-800">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 whitespace-nowrap text-zinc-500 font-bold">
                        {formatDate(post.published_at)}
                      </td>
                      <td className="py-4 px-6 max-w-sm">
                        <div className="font-bold text-brand-black text-sm leading-snug">{post.title}</div>
                        <div className="text-zinc-400 text-[10px] mt-1 font-mono">{post.slug}</div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className="inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[6px] bg-brand-orange/5 text-brand-orange border border-brand-orange/20">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        {post.author}
                      </td>
                      <td className="py-4 px-6 text-right space-x-3 whitespace-nowrap">
                        <button
                          onClick={() => handleEditClick(post)}
                          className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors py-2 px-4 rounded-[8px] text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(post.id)}
                          className="bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-colors py-2 px-4 rounded-[8px] text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
