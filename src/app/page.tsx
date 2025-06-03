import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

type App = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

const appData: App[] = [
  {
    id: 1,
    image: 'https://unsplash.it/200/200',
    title: 'Bitcoin DAQ',
    description: 'Bitcoin price data acquisition system of Bitflyer-JPY',
    link: 'https://bitcoin-daq-visualization.streamlit.app',
  },
  {
    id: 2,
    image: 'https://unsplash.it/200/201',
    title: 'Health Hive',
    description:
      'あなたの健康を管理します。あなたにフィットした献立、運動メニューの提案を通じて、無理なく理想のボディーを手に入れましょう！',
    link: 'https://healthhive.streamlit.app',
  },
  {
    id: 3,
    image: 'https://unsplash.it/200/202',
    title: 'Music Recommendation',
    description: 'Now under development. To be announced the detail',
    link: '#',
  },
];

export default async function HomePage() {
  const blogs = (await getAllPosts()).slice(0, 3);
  return (
    <div className="px-4 sm:px-8">
      {/* Hero Section */}
      <div className="w-full h-[180px] bg-cover bg-center text-white flex items-center justify-center text-2xl font-bold" style={{ backgroundImage: `url(https://unsplash.it/1440/250)` }}>
        Transforming Tomorrow with AI
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Profile Sidebar */}
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:sticky lg:top-24 bg-gray-100 p-6 rounded-xl shadow-md">
          {/* <img src="/profile_diving.JPG" alt="Profile" className="w-24 h-24 mx-auto rounded-full mb-4" /> */}
          <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4">
            {/* <Image */}
            <img
              src="/profile_diving.JPG"
              alt="Profile"
              // fill
              className="rounded-full object-cover"
              // priority
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold mb-2">水上 淳 (Mizukami Atsushi)</h2>
            <p className="text-sm mb-1">データ分析とAIの専門家。</p>
            <p className="text-sm mb-1">データ×AIで未来を変えるパートナーです。</p>
            <p className="text-sm mt-2"><strong>スキル:</strong> Python, Streamlit, GCP, Chat-GPT</p>
            <p className="text-sm"><strong>情熱:</strong> AI で明日に革命を！</p>
            <a href="/about" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">About ページへ</a>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-8">
          {/* Web Apps */}
          <h2 className="text-xl font-bold mb-4">Web Application</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {appData.map((app) => (
              <a key={app.id} href={app.link} target="_blank" rel="noopener noreferrer" className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative w-full h-40">
                  <img
                    src={app.image}
                    alt={app.title}
                    // fill
                    className="object-cover rounded-t-md"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{app.title}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Blog Section */}
          <div className="flex justify-between items-center mt-8 mb-4">
            <h2 className="text-xl font-bold">Blog</h2>
            <Link href="/blog" className="text-blue-800 hover:underline">
              ブログ一覧を見る
            </Link>
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {blogs.map((blog) => (
              <a key={blog.title} href={`/blog/${blog.slug}`} className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative w-full h-40">
                  <img
                    src={blog.mainImage}
                    alt={blog.title}
                    // fill
                    className="object-cover rounded-t-md"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
