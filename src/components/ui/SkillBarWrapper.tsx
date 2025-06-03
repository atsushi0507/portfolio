"use client";
import React from "react";
import { SkillLabel } from "./SkillLabel";
import ExperienceText from "./ExperienceText";
import { ExperienceBar } from "./ExperienceBar";

type SkillBarWrapperProps = {
    label: string;
    experienceText: string;
    experiencePercentage: number;
};

const SkillBarWrapper: React.FC<SkillBarWrapperProps> = ({
    label,
    experienceText,
    experiencePercentage
}) => {
    return (
        <div className="w-full space-y-1">
            <div className="flex items-center justify-between">
                <SkillLabel label={label} />
                <ExperienceText experienceText={experienceText} />
            </div>
            <ExperienceBar years={experiencePercentage} />
        </div>
    );
};

export default SkillBarWrapper;