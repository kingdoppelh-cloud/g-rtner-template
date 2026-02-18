"use client";

import { siteConfig } from "@/lib/config";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { counterReveal } from "@/lib/animations";

export function TrustBar() {
    const metrics = [
        {
            value: siteConfig.socialProof.yearsExperience,
            label: "Jahre Erfahrung",
            suffix: "+"
        },
        {
            value: siteConfig.socialProof.completedProjects,
            label: "Projekte",
            suffix: "+"
        },
        {
            value: siteConfig.socialProof.googleRating,
            label: "Google Bewertung",
            suffix: " ★"
        },
        {
            value: siteConfig.company.employees,
            label: "Mitarbeiter",
            suffix: ""
        },
    ];

    return (
        <section className="bg-primary text-white py-12 border-b border-primary-light">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-white/10">
                    {metrics.map((m, i) => (
                        <RevealOnScroll
                            key={m.label}
                            variants={counterReveal}
                            delay={i * 0.1}
                            className="flex flex-col items-center"
                        >
                            <div className="text-4xl md:text-5xl font-mono font-bold text-accent mb-2">
                                <AnimatedCounter value={m.value} />
                                {m.suffix}
                            </div>
                            <span className="text-sm md:text-base text-white/80 font-medium">
                                {m.label}
                            </span>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
