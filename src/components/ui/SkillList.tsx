"use client";

import React from "react";
import SkillBarWrapper from "./SkillBarWrapper";
import {calculateExperience} from "@/lib/date";

type Skill = {
    name: string;
    startDate: string;
};

type SkillListProps = {
    skills: Skill[];
};

const SkillList: React.FC<SkillListProps> = ({ skills }) => { 
    return (
      <div className="space-y-4">
        {skills.map((skill) => {
          const { years, percentage } = calculateExperience(skill.startDate);
          const experienceText =
            years < 1 ? `${Math.round(percentage)}% of 1 year` : `${years} year${years > 1 ? 's' : ''}`;
  
          return (
            <SkillBarWrapper
              key={skill.name}
              label={skill.name}
              experienceText={experienceText}
              experiencePercentage={percentage}
            />
          );
        })}
      </div>
    );
  };

  export default SkillList;