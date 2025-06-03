"use client";

import React from "react";
import InterestItem from "@/components/ui/InterestItem";
import { interestItems } from "@/data/interest";

const InterestSection: React.FC = () => {
    return (
        <section>
            <h2 className="text-xl font-semibold border-b-2 border-blue-500 mb-4">Recent Interests</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {interestItems.map((item, index) => (
                    <InterestItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </section>
    );
};

export default InterestSection;