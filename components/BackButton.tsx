'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BackButton() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="fixed top-6 left-6 md:top-10 md:left-10 z-[60]"
        >
            <Link
                href="/#projects"
                className="group flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-black/5 pl-4 pr-6 py-3 rounded-full hover:bg-black transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95"
            >
                <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black group-hover:text-white transition-colors transform group-hover:-translate-x-0.5"
                    >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </div>
                <span className="text-[13px] font-black tracking-tight text-black group-hover:text-white transition-colors uppercase">
                    Back to Work
                </span>
            </Link>
        </motion.div>
    );
}
