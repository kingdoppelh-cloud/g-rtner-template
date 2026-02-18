"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface RevealOnScrollProps {
    children: React.ReactNode;
    variants?: Variants;
    className?: string;
    delay?: number;
}

export function RevealOnScroll({
    children,
    variants = fadeUp,
    className,
    delay = 0,
}: RevealOnScrollProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className={className}
            transition={delay ? { delay } : undefined}
        >
            {children}
        </motion.div>
    );
}
