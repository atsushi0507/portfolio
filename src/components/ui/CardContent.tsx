import React from "react";
import { CardType } from "@/types/card";

const CardContent: React.FC<CardType> = ({ mainImage, link, title, description }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex-shrink-0"
        >
            <div className="relative aspect-[4/3] w-full">
                <img
                    src={mainImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-md"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </a>
    );
};

export default CardContent;