"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Unlock scroll
            document.body.style.overflow = "auto";
        }, 2200); // 2.2s total intro

        // Lock scroll initially
        if (isLoading) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "auto";
            clearTimeout(timer);
        };
    }, [isLoading]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className="relative overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className="bg-accent/10 p-5"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                                {siteConfig.preloader.title}
                            </h1>
                            {siteConfig.preloader.subline && (
                                <p className="text-white/80 text-lg mt-2 font-light tracking-widest uppercase">
                                    {siteConfig.preloader.subline}
                                </p>
                            )}
                        </motion.div>
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-accent"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
