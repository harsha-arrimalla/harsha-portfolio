"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./LoadingContext";

export default function LoadingScreen() {
    const { isLoading, setIsLoading } = useLoading();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Minimum loading time for the vibe - reduced for better performance
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // Counter animation
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }}
                >
                    {/* Centered Logo/Name */}
                    <div className="relative flex flex-col items-center">
                        <motion.h2
                            className="text-2xl font-black tracking-[0.4em] uppercase text-black mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Harsha
                        </motion.h2>

                        {/* Progress Bar Container */}
                        <div className="w-[120px] h-[1px] bg-gray-100 overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-black origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Counter */}
                        <motion.span
                            className="mt-4 text-[10px] font-bold text-gray-400 tracking-widest tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {counter}%
                        </motion.span>
                    </div>

                    {/* Subtle Background Elements */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-50/50 rounded-full blur-[100px]"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
