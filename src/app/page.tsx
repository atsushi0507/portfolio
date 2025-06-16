import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import CardContent from '@/components/ui/CardContent';
import { AppItems } from '@/data/app';
import ProfileSidebar from '@/components/ui/ProfileSidebar';


export default async function HomePage() {
  const blogs = (await getAllPosts()).slice(0, 3);
  return (
    <div className="px-4 sm:px-8 bg-gradient-to-br from-gray-100 to-blue-100">
      {/* Hero Section */}
      <div className="w-full h-[180px] bg-cover bg-center text-white flex items-center justify-center text-2xl font-bold" style={{ backgroundImage: `url(https://unsplash.it/1440/250)` }}>
      <div className="w-full h-[180px] bg-cover bg-center text-white flex items-center justify-center text-2xl font-bold" style={{ backgroundImage: "/herobar.png" }}>
        Transforming Tomorrow with AI
      </div>
    </div>
      {/* <div className="w-full h-[40px] flex items-center justify-center bg-gray-100">
        <img
          src="/herobar.png"
          alt="herobar"
          className="h-[40px] w-auto"
        />
      </div> */}

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Profile Sidebar */}
        <ProfileSidebar />

        {/* Main Content */}
        <div className="flex-1 lg:ml-8">
          {/* Web Apps */}
          <h2 className="text-xl font-bold mb-4">Web Application</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {AppItems.slice(0, 3).map((app) => (
              <CardContent
                key={app.title}
                mainImage={app.mainImage}
                link={app.link}
                title={app.title}
                description={app.description}
                isApp={true}
              />
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
              <CardContent
                key={blog.title}
                mainImage={blog.mainImage}
                link={`/blog/${blog.slug}`}
                title={blog.title}
                description={blog.summary}
                isApp={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
