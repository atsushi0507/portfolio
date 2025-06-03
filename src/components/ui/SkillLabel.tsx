import React from "react";
import {cn} from "@/lib/utils";

type SkillLabelProps = {
    label: string;
    className?: string; // 追加スタイルを許容
};

export const SkillLabel: React.FC<SkillLabelProps> = ({label, className}) => {
    return (
        <span
            className={cn(
                "bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block",
                className
            )}
        >
            {label}
        </span>
    );
};