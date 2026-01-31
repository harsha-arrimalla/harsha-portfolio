"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface SkillCardProps {
    name: string;
    level?: string;
    category?: string;
    description?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
    name,
    level,
    category,
    description,
}) => {
    return (
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Sparkles size={18} className="text-blue-400 group-hover:animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white truncate">{name}</h4>
                    {level && (
                        <span className="text-[10px] text-gray-500 uppercase tracking-tighter font-bold">
                            {level}
                        </span>
                    )}
                </div>
                {category && (
                    <p className="text-[10px] text-blue-400/70 uppercase tracking-widest leading-none mt-0.5">
                        {category}
                    </p>
                )}
                {description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{description}</p>
                )}
            </div>
        </div>
    );
};
