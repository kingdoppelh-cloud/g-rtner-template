"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CrossfadeVideoProps {
    src: string;
    className?: string;
    containerClassName?: string;
}

export function CrossfadeVideo({ src, className, containerClassName }: CrossfadeVideoProps) {
    const [active, setActive] = useState(1); // 1 or 2 is the "main" video
    const video1 = useRef<HTMLVideoElement>(null);
    const video2 = useRef<HTMLVideoElement>(null);

    // Config
    const FADE_DURATION = 1.6; // Seconds to crossfade

    useEffect(() => {
        const primary = active === 1 ? video1.current : video2.current;
        const secondary = active === 1 ? video2.current : video1.current;

        if (!primary || !secondary) return;

        let fadeInterval: NodeJS.Timeout;

        const onTimeUpdate = () => {
            if (!primary.duration) return;

            const timeLeft = primary.duration - primary.currentTime;

            // Trigger crossfade
            if (timeLeft <= FADE_DURATION) {
                // Ensure secondary is playing
                if (secondary.paused) {
                    secondary.currentTime = 0;
                    secondary.play().catch(e => console.log("Auto-play blocked", e));
                    secondary.style.zIndex = "10"; // Bring to top
                    primary.style.zIndex = "1";   // Send to back
                }

                // Calculate Opacity for Secondary (Incoming)
                // We want it to go from 0 to 1
                const progress = 1 - (timeLeft / FADE_DURATION);
                const opacity = Math.min(1, Math.max(0, progress));

                secondary.style.opacity = opacity.toString();
            }

            // End of cycle
            if (primary.ended || timeLeft <= 0.05) {
                // Swap roles logic
                // Primary is done. Secondary is now fully visible (opacity ~1).
                // We make Secondary the new Primary.

                // Reset old primary
                primary.pause();
                primary.currentTime = 0;
                primary.style.opacity = "0";
                primary.style.zIndex = "1";

                // Ensure new primary is solid
                secondary.style.opacity = "1";
                secondary.style.zIndex = "5"; // Middle ground, ready to be overtaken next time? 
                // Actually, zIndex swapping is tricky. 
                // State update is safer to trigger the "Swap Refs" concept, but might flash.

                // Let's just use the state to toggle which one we are listening to.
                setActive(prev => prev === 1 ? 2 : 1);
            }
        };

        primary.addEventListener("timeupdate", onTimeUpdate);
        return () => {
            primary.removeEventListener("timeupdate", onTimeUpdate);
        };
    }, [active]);

    // Initial Start
    useEffect(() => {
        if (video1.current) {
            video1.current.play().catch(() => { });
            video1.current.style.opacity = "1";
            video1.current.style.zIndex = "5";
        }
    }, []);

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
