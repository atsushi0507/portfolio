'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import { Heart, Search } from 'lucide-react';
import { BlogPostList } from '@/lib/posts';
import { motion } from 'framer-motion';
import { incrementLikes } from '@/lib/posts';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export default function BlogListClient({ posts }: { posts: BlogPostList[] }) {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [likedBlogs, setLikedBlogs] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 5;
  const filteredBlogs = posts.filter(blog => {
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => blog.tags.includes(tag));
    const matchesKeyword = keyword === '' || blog.title.includes(keyword) || blog.summary.includes(keyword);
    const blogDate = dayjs(blog.createdAt);
    const matchesStart = !startDate || blogDate.isAfter(dayjs(startDate));
    const matchesEnd = !endDate || blogDate.isBefore(dayjs(endDate));
    return matchesTags && matchesKeyword && matchesStart && matchesEnd;
  });

  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleLike = async (id: string) => {
    const isLiked = likedBlogs[id] ?? false;
    try {
        await incrementLikes(id, isLiked);
        setLikedBlogs(prev => ({...prev, [id]: !isLiked}))

        const blogIndex = posts.findIndex(blog => blog.id === id)
        if (blogIndex !== -1) {
            posts[blogIndex].likes += isLiked ? -1 : 1;
        }
    } catch (e) {
        console.error("Failed to toggle like:", e)
    }
  };

  return (
    <div>
      {/* フィルターパネル */}
      <div className="px-4 sm:px-6 lg:px-24 py-6 pt-24">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">ブログ一覧</h2>
            <button
                className="bg-gray-800 text-white px-4 py-2 rounded"
                onClick={() => setShowFilter(!showFilter)}
            >
                <Search />
            </button>
        </div>
      </div>

      {showFilter && (
        <motion.div
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -50, opacity: 0}}
            className="bg-gray-100 p-4 rounded mb-6"
        >
            <div className="mb-2">
                <p className="font-bold">タグ</p>
                {Array.from(new Set(posts.flatMap(b => b.tags))).map(tag => (
                    <button
                        key={tag}
                        className={`inline-block px-3 py-1 m-1 rounded-full border ${selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="mb-2">
                <label className="block font-bold mb-1">キーワード</label>
                <input type="text" className="w-full border px-3 py-2 rounded" value={keyword} onChange={e => setKeyword(e.target.value)} />
            </div>
            <div className="flex gap-2">
                <div className="flex-1">
                    <label className="block font-bold mb-1">開始日:</label>
                    <input type="date" className="w-full border px-2 py-1 rounded" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="flex-1">
                    <label className="block font-bold mb-1">終了日:</label>
                    <input type="date" className="w-full border px-2 py-1 rounded" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>
            </div>

            {/* フィルターリセット */}
            <button
                onClick={() => {
                    setSelectedTags([]);
                    setKeyword("");
                    setStartDate("");
                    setEndDate("");
                }}
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
                リセット
            </button>
        </motion.div>
      )}

      <div className="space-y-6 mt-4">
        {currentBlogs.map(blog => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={blog.mainImage}
              alt={blog.title}
              width={800}
              height={300}
              className="w-full h-48 object-cover"
             />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 text-sm mb-2">{blog.summary}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="bg-gray-200 text-sm px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-2">作成日: {dayjs(blog.createdAt).format('YYYY年M月D日')}</p>
              <div className="flex justify-between items-center">
                <button className="flex items-center space-x-1 text-red-500" onClick={() => handleLike(blog.slug)}>
                  <Heart fill={likedBlogs[blog.slug] ? 'red' : 'none'} stroke="currentColor" size={20} />
                  <span>{blog.likes + (likedBlogs[blog.slug] ? 1 : 0)}</span>
                </button>
                <a
                  href={`/blog/${blog.slug}`}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ページネーション */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          className="px-3 py-1 rounded border bg-gray-200"
          onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
          disabled={currentPage === 0}
        >
          前へ
        </button>
        <button
          className="px-3 py-1 rounded border bg-gray-200"
          onClick={() => setCurrentPage(p => Math.min(pageCount - 1, p + 1))}
          disabled={currentPage >= pageCount - 1}
        >
          次へ
        </button>
      </div>
    </div>
  );
}
