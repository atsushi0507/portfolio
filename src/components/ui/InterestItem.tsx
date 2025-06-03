import React from "react";
import { InterestItemType } from "@/types/interest";

const InterestItem: React.FC<InterestItemType> = ({ icon, title, text }) => {
    return (
        <div className="bg-muted p-4 rounded-lg shadow">
            <p className="text-base">
                {icon} <strong>{title}</strong><br />
                {text}
            </p>
        </div>
    );
};

export default InterestItem;