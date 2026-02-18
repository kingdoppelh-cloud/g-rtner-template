"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function AboutSection() {
    return (
        <section id="ueber-uns" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Content */}
                    <RevealOnScroll className="relative group">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={siteConfig.about.image}
                                alt="Unser Team bei der Arbeit"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </div>

                        {/* Experience Badge */}
                        {siteConfig.socialProof.yearsExperience > 0 && (
                            <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                                <p className="text-4xl font-bold text-primary mb-1">{siteConfig.socialProof.yearsExperience}+</p>
                                <p className="text-sm text-slate-600 font-medium uppercase tracking-wider">Jahre Erfahrung</p>
                            </div>
                        )}
                    </RevealOnScroll>

                    {/* Text Content */}
                    <div className="space-y-8">
                        <RevealOnScroll>
                            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">{siteConfig.about.sectionTitle}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                {siteConfig.about.headline}
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                {siteConfig.about.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {siteConfig.about.badges.map((item: string) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="pt-4">
                            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-slate-500 text-lg">
                                "{siteConfig.about.quote}"
                            </blockquote>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
