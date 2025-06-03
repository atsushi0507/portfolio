"use client";

import React from "react";

type ExperienceTextProps = {
    experienceText: string;
};

const ExperienceText: React.FC<ExperienceTextProps> = ({experienceText}) => {
    return (
        <span className="text-sm text-muted-foreground whitespace-nowrap">
            {experienceText}
        </span>
    );
};

export default ExperienceText;