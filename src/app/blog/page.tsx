import { getAllPosts } from "@/lib/posts";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="px-4 sm:px-6 lg:px-24">
            <BlogListClient posts={posts} />
        </div>
    );
}