"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { Github, XIcon } from "lucide-react"; // lucide-react は入っていれば使用可
import React from "react";

const ProfileSection: React.FC = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 py-8 px-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center mb-6">
        <img
          src="/profile_LHC.png"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-600 object-cover mb-4 w-[150px] h-[150px]"
        />
        <h1 className="text-2xl font-bold mb-1">水上 淳 (Mizukami Atsushi)</h1>
        <p className="text-gray-600 text-lg text-center">
          データ分析とAIの専門家。未来を変えるデータとAIの力を活用推進をしています。
        </p>
        <p className="text-sm text-gray-500 mt-2 text-center">
          データサイエンティスト｜AI活用支援｜素粒子物理バックグラウンド
        </p>

        <div className="flex justify-center space-x-4 mt-4 text-blue-600">
          <a
            href="https://github.com/atsushi0507"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-blue-800 transition-colors duration-200" />
          </a>
          <a
            href="https://x.com/amizkami"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <XIcon className="w-5 h-5 hover:text-blue-800 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfileSection;
