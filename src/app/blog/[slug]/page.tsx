import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import BlogContent from "./components/BlogContent";
import { notFound } from "next/navigation";


type BlogProps = {
  params: Promise<{ slug: string }>;
};

// SSG 用
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getAllSlugs(); // Firestore から全 slug を取得
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogProps) {
  const {slug} = await params
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return <BlogContent blogData={post} />;
}
