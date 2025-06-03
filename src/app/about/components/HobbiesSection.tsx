"use client";

import React from "react";
import HobbyItem from "@/components/ui/HobbyItem";
import { hobbyItems } from "@/data/hobby";

const HobbySection: React.FC = () => {
    return (
        <section className="mb-12">
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