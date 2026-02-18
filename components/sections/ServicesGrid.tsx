"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flower2, Hammer, Shield, Axe, ArrowRight, Bug, Leaf } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// Map strings to Icon components
const iconMap: Record<string, LucideIcon> = {
    Flower2,
    Leaf,
    Hammer,
    Shield,
    Axe,
    Bug,
};

export function ServicesGrid() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
    };

    return (
        <section id="leistungen" className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern - subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <RevealOnScroll className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">Unsere Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Meisterhaftes Handwerk für Ihren Garten
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Von der präzisen Pflege bis zur komplexen Neugestaltung. Wir verbinden traditionelles Handwerk mit modernster Technik.
                    </p>
                </RevealOnScroll>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    {siteConfig.services.map((service: any, index: number) => {
                        const Icon = iconMap[service.icon] || Flower2;

                        return (
                            <motion.div key={service.slug} variants={item} className="h-full">
                                <Card className={cn(
                                    "h-full border border-slate-200 bg-white p-6 md:p-8 transition-all duration-300 group relative overflow-hidden",
                                    "rounded-none hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2"
                                )}>
                                    <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-full" />

                                    <CardHeader className="p-0 mb-6">
                                        <div className="w-14 h-14 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-none text-slate-700 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                            {service.titel}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex flex-col h-full">
                                        <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                                            {service.beschreibung}
                                        </p>
                                        <div className="mt-auto">
                                            <ul className="space-y-3 mb-8">
                                                {service.kundenprobleme.slice(0, 2).map((problem: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                                                        <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent block shrink-0" />
                                                        {problem}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button
                                                asChild
                                                variant="link"
                                                className="p-0 h-auto text-primary font-semibold text-base hover:no-underline group/btn"
                                            >
                                                <Link href={`/leistungen/${service.slug}`} className="inline-flex items-center gap-2">
                                                    Mehr erfahren
                                                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
