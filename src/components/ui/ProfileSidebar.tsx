import React from "react";

const ProfileSidebar: React.FC = () => {
    return (
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:sticky lg:top-24 bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4">
            <img
              src="/profile_diving.JPG"
              alt="Profile"
              className="w-full h-full aspect-square rounded-full object-cover border-blue-600 border-4"
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
    );
};

export default ProfileSidebar;