"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { Heart } from "lucide-react";
// import BlogPostPage from "../page";
import { incrementLikes } from "@/lib/posts";
import { tocToList } from "@/lib/parseToc";
// import Image from "next/image";

// memo
// ![Ironmanランキングのプロット](https://storage.googleapis.com/portfolio-site-blog-images/ironman_ranking_plotly_cards.png)
// この記法で、本文中からでも GCS の画像を表示できる

type BlogPost = {
  title: string;
  mainImage: string;
  summary: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  slug: string;
  toc?: string;
};

type BlogContentProps = {
  blogData: BlogPost;
};


const BlogContent: React.FC<BlogContentProps> = ({ blogData }) => {
  const formattedDate = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeZone: "Asia/Tokyo",
  }).format(blogData.createdAt);

  const [isLiked, setIsLiked] = useState(false);
  const [displayLikes, setDisplayLikes] = useState(blogData.likes);

  const handleLikeClick = async ({slug, isLiked}: {slug: string, isLiked: boolean}) => {
    try {
      // await incrementLikes(blogData.slug, isLiked);
      await incrementLikes(slug, isLiked);
      setIsLiked(!isLiked);
      setDisplayLikes((prev) => prev + (isLiked ? -1 : 1));
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2 pt-24">{blogData.title}</h1>

      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
        <time>{formattedDate}</time>
        {blogData.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
            {tag}
          </span>
        ))}
        {/* ❤️ いいねボタン */}
        <button
          onClick={() => handleLikeClick({slug: blogData.slug, isLiked})}
          className="ml-auto flex items-center space-x-1 text-red-500 hover:opacity-80"
        >
          <Heart fill={isLiked ? "red" : "none"} stroke="currentColor" size={20} />
          <span>{displayLikes}</span>
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <div className="max-w-full">
          <img
            src={blogData.mainImage}
            alt="メイン画像"
            className="max-h-[250px] h-auto w-auto max-w-full rounded-xl shadow object-contain"
          />
        </div>
      </div>
      {/* <div className="flex justify-center mb-6">
        <div className="relative max-w-full max-h-[250px] w-auto h-auto">
          <Image
            src={blogData.mainImage}
            alt="メイン画像"
            fill
            className="rounded-xl shadow object-contain"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div> */}
      {/* <div className="flex justify-center mb-6">
        <div className="max-w-full max-h-[250px] overflow-hidden rounded-xl shadow">
          <Image
            src={blogData.mainImage}
            alt="メイン画像"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-auto max-h-[250px] max-w-full object-contain"
          />
        </div>
      </div> */}




      {/* Responsive TOC */}
      {blogData.toc && (
        <div className="mb-6">
          <details className="bg-gray-100 p-4 rounded">
            <summary className="cursor-pointer font-semibold text-sm text-gray-700">
              目次を開く
            </summary>
            <div className="mt-2 text-sm text-gray-800 leading-relaxed">
              {tocToList(blogData.toc)}
            </div>
          </details>
        </div>
      )}


    <div className="lg:flex gap-8">
         <article className="prose prose-lg max-w-none lg:w-4/4">
             <div className="prose prose-neutral max-w-none">
                 <ReactMarkdown
                     remarkPlugins={[remarkGfm]}
                     rehypePlugins={[rehypeSanitize]}
                  >
                    {blogData.content}
                  </ReactMarkdown>
             </div>
         </article>
     </div>

    </main>
  );
};

export default BlogContent;
