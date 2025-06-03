import SkillSection from "./components/SkillsSection";
import CareerSection from "./components/CareerSection";
import InterestSection from "./components/InterestsSection";
import HobbySection from "./components/HobbiesSection";
import ProfileSection from "./components/ProfileSection";



export default function AboutPage() {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 py-8 px-4 flex flex-col items-center">
        <ProfileSection />

        <div className="w-full max-w-3xl space-y-10">
          {/* Career Section */}
            <CareerSection />

          {/* スキルセクションを追加 */}
          <SkillSection />

          {/* Interests Section */}
            <InterestSection />

          {/* Hobbies Section */}
            <HobbySection/>

        </div>
      </div>
    );
}