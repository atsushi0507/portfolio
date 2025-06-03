import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { CareerItemType } from "@/types/career";
import { cn } from "@/lib/utils";

const CareerItem: React.FC<CareerItemType> = ({ year, title, role, type }) => {
    const isWork = type === "work";

    return (
        <div className={cn(
            "border rounded-2x1 p-4 shadow-sm transition duration-200",
            isWork ? "border-blue-400 bg-blue-50" : "border-green-400 bg-green-50"
        )}>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    {isWork ? (
                        <Briefcase className="w-5 h-5 text-blue-500" />
                    ) : (
                        <GraduationCap className="w-5 h-5 text-green-500" />
                    )}
                    <span className="text-sm font-medium text-gray-700">{year}</span>
                </div>
                <span
                    className={cn(
                        "text-xs px-2 py-0.5 rounded-full font-semibold",
                        isWork ? "bg-blue-200 text-blue-800" : "bg-green-200 text-green-800"
                    )}
                >
                    {isWork ? "職歴" : "学歴"}
                </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-700">{role}</p>
        </div>
    );
};

export default CareerItem;