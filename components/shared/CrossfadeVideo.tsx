"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CrossfadeVideoProps {
    src: string;
    className?: string;
    containerClassName?: string;
}

export function CrossfadeVideo({ src, className, containerClassName }: CrossfadeVideoProps) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [active, setActive] = useState(1); // 1 or 2 is the "main" video
    const video1 = useRef<HTMLVideoElement>(null);
    const video2 = useRef<HTMLVideoElement>(null);

    // Fade Duration for Desktop
    const FADE_DURATION = 1.6;

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;
            setIsMobile(mobile);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip complex logic on mobile

        const primary = active === 1 ? video1.current : video2.current;
        const secondary = active === 1 ? video2.current : video1.current;

        if (!primary || !secondary) return;

        const onTimeUpdate = () => {
            if (!primary.duration) return;

            const timeLeft = primary.duration - primary.currentTime;

            // Trigger crossfade
            if (timeLeft <= FADE_DURATION) {
                if (secondary.paused) {
                    secondary.currentTime = 0;
                    secondary.play().catch(e => console.log("Auto-play blocked", e));
                    secondary.style.zIndex = "10";
                    primary.style.zIndex = "1";
                }

                const progress = 1 - (timeLeft / FADE_DURATION);
                const opacity = Math.min(1, Math.max(0, progress));
                secondary.style.opacity = opacity.toString();
            }

            // End of cycle
            if (primary.ended || timeLeft <= 0.05) {
                primary.pause();
                primary.currentTime = 0;
                primary.style.opacity = "0";
                primary.style.zIndex = "1";

                secondary.style.opacity = "1";
                secondary.style.zIndex = "5";
                setActive(prev => prev === 1 ? 2 : 1);
            }
        };

        primary.addEventListener("timeupdate", onTimeUpdate);
        return () => {
            primary.removeEventListener("timeupdate", onTimeUpdate);
        };
    }, [active, isMobile]);

    // Initial Start
    useEffect(() => {
        if (video1.current) {
            video1.current.play().catch(() => { });
            video1.current.style.opacity = "1";
            video1.current.style.zIndex = "5";
        }
    }, []);

    // Return simple loop for mobile
    if (isMobile) {
        return (
            <div className={cn("relative w-full h-full overflow-hidden bg-black", containerClassName)}>
                <video
                    src={src}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className={cn("absolute inset-0 w-full h-full object-cover", className)}
                />
            </div>
        );
    }

    return (
        <div className={cn("relative w-full h-full overflow-hidden bg-black", containerClassName)}>
            <video
                ref={video1}
                src={src}
                muted
                playsInline
                preload="metadata"
                className={cn("absolute inset-0 w-full h-full object-cover transition-none will-change-[opacity]", className)}
                style={{ opacity: 1, zIndex: 5 }}
            />
            <video
                ref={video2}
                src={src}
                muted
                playsInline
                preload="metadata"
                className={cn("absolute inset-0 w-full h-full object-cover transition-none will-change-[opacity]", className)}
                style={{ opacity: 0, zIndex: 1 }}
            />
        </div>
    );
}
