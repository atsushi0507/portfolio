"use client";

import React from "react";
import HobbyItem from "@/components/ui/HobbyItem";
import { hobbyItems } from "@/data/hobby";

const HobbySection: React.FC = () => {
    return (
        <section className="mb-12">
            <h2 className="text-xl font-semibold border-b-2 border-blue-500 mb-4">Hobbies</h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {hobbyItems.map((item, index) => (
                    <HobbyItem
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

export default HobbySection;