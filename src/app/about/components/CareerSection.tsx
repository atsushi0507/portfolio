"use client";

import React from "react";
import CareerItem from "@/components/ui/CareerItem";
import { careerItems } from "@/data/career";

const CareerSection: React.FC = () => {
    return (
        <section className="mt-8">
            <h2 className="text-xl font-semibold border-b-2 border-blue-500 mb-4">
                Career
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {careerItems.map((item, index) => (
                    <CareerItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        role={item.role}
                        type={item.type}
                    />
                ))}
            </div>
        </section>
    );
};

export default CareerSection;