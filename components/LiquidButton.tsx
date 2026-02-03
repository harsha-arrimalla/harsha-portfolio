"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "whiteOutline";
    size?: "sm" | "md" | "lg";
    href?: string;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

export default function LiquidButton({
    children,
    variant = "primary",
    size = "md",
    href,
    icon,
    className,
    fullWidth = false,
    ...props
}: LiquidButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 group active:scale-95";

    const variants = {
        primary: "bg-black text-white hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl border border-transparent",
        secondary: "bg-white text-black border border-gray-200 hover:border-black hover:scale-105 active:scale-95 shadow-sm hover:shadow-md",
        outline: "bg-transparent text-black border-2 border-black/10 hover:border-black hover:bg-black hover:text-white transition-colors duration-300",
        ghost: "bg-transparent text-black hover:bg-black/5 hover:-translate-y-0.5",
        white: "bg-white text-black hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl border border-transparent",
        whiteOutline: "bg-transparent border-2 border-white/20 text-white hover:border-white hover:bg-white hover:text-black transition-colors duration-300",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-xs tracking-wide uppercase font-bold",
        md: "px-8 py-4 text-sm tracking-wide uppercase font-bold",
        lg: "px-10 py-5 text-base tracking-wide uppercase font-bold",
    };

    const classes = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
    );

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-3">
                {children}
                {icon && <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
            </span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes} {...props as any}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            className={classes}
            whileTap={{ scale: 0.95 }}
            {...props as any}
        >
            {content}
        </motion.button>
    );
}
