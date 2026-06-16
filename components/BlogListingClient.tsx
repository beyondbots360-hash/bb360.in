"use client";

import { useState } from "react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  published_at: string;
  image_url?: string;
}

interface BlogListingClientProps {
  initialPosts: Post[];
}

export default function BlogListingClient({ initialPosts }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI Automation", "Web Development", "Digital Marketing"];

  const filteredPosts = selectedCategory === "All"
    ? initialPosts
    : initialPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="bg-brand-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Page Breadcrumbs */}
        <nav className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4 flex space-x-2">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-black">Blog</span>
        </nav>

        {/* Page Heading */}
        <div className="max-w-3xl mb-12">
          <h1 className="font-display font-extrabold text-brand-black mb-4 uppercase">
            Beyond Bots Insights
          </h1>
          <p className="text-zinc-600 text-lg sm:text-xl font-sans font-semibold leading-relaxed">
            Expert articles, blueprints, and strategies in AI Automation, Custom Web Development, and Performance Marketing to help your business scale.
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-zinc-200 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-[12px] text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-brand-orange text-brand-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-300 rounded-[20px]">
            <p className="text-zinc-500 font-sans font-bold text-sm">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-brand-white border border-zinc-200 rounded-[20px] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
              >
                
                {/* Optional Cover Image */}
                {post.image_url && (
                  <div className="h-48 w-full overflow-hidden bg-zinc-950 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-brand-orange border border-brand-orange/30 px-3 py-1 rounded-[8px] bg-brand-orange/5 mb-4">
                      {post.category}
                    </span>

                    {/* Post Title */}
                    <h3 className="font-sans font-bold text-lg leading-snug text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-600 text-xs font-sans font-semibold leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Metadata & Read Link */}
                  <div className="border-t border-zinc-100 pt-4 flex justify-between items-center text-[10px] font-bold text-zinc-500">
                    <div className="flex space-x-2">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-brand-orange uppercase tracking-wider hover:underline"
                    >
                      Read Post
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
