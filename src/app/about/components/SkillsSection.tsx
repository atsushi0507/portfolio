"use client";
import React from "react";
import SkillBarWrapper from "@/components/ui/SkillBarWrapper";
import { calculateExperience } from "@/lib/date";
import { SkillItems } from "@/data/skill";

const SkillSection: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold border-b-2 border-blue-500 mb-4">Skills</h2>
      <div className="space-y-4">
        {SkillItems.map((skill, index) => {
          const { years, percentage } = calculateExperience(skill.startDate);
          return (
            <SkillBarWrapper
              key={index}
              label={skill.name}
              experienceText={years}
              experiencePercentage={percentage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
