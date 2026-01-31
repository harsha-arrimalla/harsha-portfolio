"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    link?: string;
    github?: string;
    variant?: "dark" | "light";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    tags,
    link,
    github,
    variant = "dark",
}) => {
    const isLight = variant === "light";

    // Base styles
    const containerClasses = isLight
        ? "group relative w-full overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 transition-all hover:shadow-lg shadow-sm"
        : "group relative w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20";

    const titleClasses = isLight
        ? "text-lg font-bold text-black group-hover:text-blue-600 transition-colors"
        : "text-lg font-bold text-white group-hover:text-blue-400 transition-colors";

    const descClasses = isLight
        ? "text-sm text-gray-700 line-clamp-2 leading-relaxed"
        : "text-sm text-gray-400 line-clamp-2 leading-relaxed";

    const tagClasses = isLight
        ? "rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-medium text-blue-600 border border-blue-100"
        : "rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400 border border-blue-500/20";

    const linkClasses = isLight
        ? "flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors"
        : "flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors";

    return (
        <div className={containerClasses}>
            {image && (
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
            )}

            <div className="space-y-2">
                <h3 className={titleClasses}>
                    {title}
                </h3>
                <p className={descClasses}>
                    {description}
                </p>

                {tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className={tagClasses}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-4 pt-4">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClasses}
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClasses}
                        >
                            <Github size={14} />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
