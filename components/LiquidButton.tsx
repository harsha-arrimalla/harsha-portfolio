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
        primary: "bg-black text-white hover:shadow-lg hover:-translate-y-1",
        secondary: "bg-white/10 backdrop-blur-md border border-white/20 text-black hover:bg-white/20 hover:border-black/10 hover:-translate-y-1",
        outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:-translate-y-1",
        ghost: "bg-transparent text-black hover:bg-black/5 hover:-translate-y-0.5",
        white: "bg-white text-black hover:shadow-lg hover:-translate-y-1 hover:text-white",
        whiteOutline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:-translate-y-1",
    };

    const sizes = {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-4 text-base",
        lg: "px-10 py-5 text-lg",
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
            {(variant === "primary" || variant === "white") && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="inline-block transition-transform group-hover:translate-x-1">{icon}</span>}
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
