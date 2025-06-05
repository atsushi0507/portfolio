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
  
          return (
            <SkillBarWrapper
              key={skill.name}
              label={skill.name}
              experienceText={years}
              experiencePercentage={percentage}
            />
          );
        })}
      </div>
    );
  };

  export default SkillList;