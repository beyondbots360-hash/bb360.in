import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import BlogListingClient from "@/components/BlogListingClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights & Blueprints",
  description: "Expert articles, blueprints, and strategies in AI Automation, Custom Web Development, and Performance Marketing to help your business scale.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, slug, excerpt, category, author, published_at, image_url")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch blog posts:", error.message);
  }

  const initialPosts = posts || [];

  return <BlogListingClient initialPosts={initialPosts} />;
}
