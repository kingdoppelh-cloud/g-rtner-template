import type { Variants } from "framer-motion";

// Standard-Reveal (für die meisten Sektionen)
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Für Split-Layouts (Text links)
export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Für Split-Layouts (Bild rechts)
export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Container für gestaggerte Kinder
export const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// Für Hero-Elemente (etwas langsamer, mehr Versatz)
export const heroReveal: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// Für den Trust-Bar Counter
export const counterReveal: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

// Für den Emergency-Banner Pulse
export const pulse = {
    scale: [1, 1.15, 1],
    opacity: [1, 0.7, 1],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" as const },
};

// NICHT VERWENDEN:
// ❌ spring mit bounce
// ❌ duration > 0.6s
// ❌ y/x offset > 40px
// ❌ scale-Animationen auf große Elemente
// ❌ rotate-Animationen
// ❌ Endlos-Animationen (außer pulse auf Notdienst-Punkt)
