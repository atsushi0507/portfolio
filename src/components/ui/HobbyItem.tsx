import React from "react";
import { HobbyItemType } from "@/types/hobby";

const HobbyItem: React.FC<HobbyItemType> = ({ icon, title, text}) => {
    return (
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border">
            <span className="text-2xl">{icon}</span>
            <div>
                <strong>{title}</strong>
                <p className="text-sm text-gray-600">{text}</p>
            </div>
        </div>
    );
};

export default HobbyItem;