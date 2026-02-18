"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { CrossfadeVideo } from "@/components/shared/CrossfadeVideo";

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Safety timeout: Ensure content is visible even if video fails to load events
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVideoLoaded(true);
        }, 1500); // 1.5s max wait time
        return () => clearTimeout(timer);
    }, []);

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const title = siteConfig.hero.headline;
    const words = title.split(" ");



    return (
        <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
            {/* Loading State / Poster Placeholder */}
            {/* We use a solid background or a blur placeholder until video is loaded to prevent black flash */}
            <div className={`absolute inset-0 bg-neutral-900 transition-opacity duration-1000 z-0 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`} />

            {/* Background Video with Loop Animation */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <CrossfadeVideo
                        src="/hero-video.mp4"
                        containerClassName={`absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
                    />
                </motion.div>

                {/* Cinematic Noise Overlay (fixes banding, adds texture) */}
                <div className="absolute inset-0 opacity-[0.05] z-10 pointer-events-none mix-blend-overlay will-change-[opacity]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 z-10" />
            </div>

            {/* Content */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-20 container mx-auto px-4 md:px-6 text-center max-w-5xl"
            >


                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-tight flex flex-wrap justify-center gap-x-2 md:gap-x-4 drop-shadow-2xl">
                    {/* Efficient mobile-first animation logic */}
                    <span className="md:hidden">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {title}
                        </motion.span>
                    </span>

                    <span className="hidden md:contents">
                        {words.map((word: string, i: number) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3 + i * 0.1,
                                    ease: [0.2, 0.65, 0.3, 0.9],
                                }}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md"
                >
                    {siteConfig.hero.subline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-accent hover:bg-accent-light text-white text-lg px-10 py-7 rounded-none shadow-[0_0_20px_rgba(161,98,7,0.3)] hover:shadow-[0_0_30px_rgba(161,98,7,0.5)] transition-all duration-500 hover:-translate-y-1"
                    >
                        <Link href="#kontakt">Jetzt anfragen</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white text-lg px-10 py-7 rounded-none hover:border-white/40 transition-all duration-300"
                    >
                        <Link href="#leistungen">Unsere Leistungen</Link>
                    </Button>
                </motion.div>
            </motion.div>


        </section >
    );
}
