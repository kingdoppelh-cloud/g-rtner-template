"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { siteConfig } from "@/lib/config";

export function FAQSection() {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <RevealOnScroll className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">Fragen & Antworten</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-slate-600">
                        Alles, was Sie über unsere Arbeitsweise und Ihr Projekt wissen müssen.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll>
                    <Accordion type="single" collapsible className="w-full">
                        {siteConfig.faq.map((faq: any, index: number) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </RevealOnScroll>
            </div>
        </section>
    );
}
