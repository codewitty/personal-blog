import { getAllBlogs } from "@/lib/markdown";
import BlogCard from "./blog-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua Gomes - Blog",
  description:
    "Sharing my insights in code and life.",
};

export default async function BlogIndexPage() {
  const blogs = await getAllBlogs();
  return (
    <div>
      <h3 className="mb-8 text-2xl font-medium">Explore my blogs.</h3>
      <div className="flex flex-col gap-5">
        {blogs.map(({ frontmatter }) => (
          <BlogCard key={frontmatter.slug} {...frontmatter} />
        ))}
      </div>
    </div>
  );
}
