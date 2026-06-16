import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { marked } from "marked";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: post } = await supabase
    .from("posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  if (!post) {
    return {
      title: "Article Not Found | Beyond Bots",
    };
  }

  return {
    title: `${post.title} | Beyond Bots Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    return notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Compile Markdown to HTML
  const contentHtml = await marked.parse(post.content);

  return (
    <article className="bg-brand-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <nav className="text-xs font-bold tracking-widest text-zinc-500 uppercase flex space-x-2">
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-black truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>
          
          <Link 
            href="/blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-orange hover:underline"
          >
            ← Back to insights
          </Link>
        </div>

        {/* Post Metadata Header */}
        <div className="mb-10">
          <span className="inline-block text-[10px] font-black uppercase tracking-wider text-brand-orange border border-brand-orange/30 px-3 py-1 rounded-[8px] bg-brand-orange/5 mb-4">
            {post.category}
          </span>
          <h1 className="font-display font-extrabold text-brand-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-xs font-bold text-zinc-500 border-b border-zinc-200 pb-6">
            <span>By {post.author}</span>
            <span>•</span>
            <span>Published {formatDate(post.published_at)}</span>
          </div>
        </div>

        {/* Cover Image */}
        {post.image_url && (
          <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] bg-zinc-950 rounded-[20px] overflow-hidden mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={post.image_url} 
              alt={post.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        )}

        {/* Markdown Rich Content Area */}
        <div 
          className="blog-content font-sans font-semibold text-zinc-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA Section at bottom of blog post */}
        <div className="mt-16 bg-zinc-950 text-brand-white border border-zinc-900 rounded-[20px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange mb-3 block">
              Work With Beyond Bots
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase mb-4 tracking-tight leading-tight">
              Ready to automate operations and accelerate growth?
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans font-semibold leading-relaxed mb-8">
              Let’s discuss how custom web systems and AI Agentic workflows can optimize your processes, save time, and generate revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-orange/15"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/#services"
                className="bg-transparent border-2 border-zinc-800 text-brand-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-[12px] hover:bg-zinc-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
