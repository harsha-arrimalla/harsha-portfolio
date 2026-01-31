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
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    tags,
    link,
    github,
}) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20">
            {image && (
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
            )}

            <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {description}
                </p>

                {tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400 border border-blue-500/20"
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
                            className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
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
                            className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
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
