"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/config";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Danke für Ihre Nachricht! Wir melden uns in Kürze.");
    };

    return (
        <section id="kontakt" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <RevealOnScroll className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">Kontakt</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Ihr Projekt startet hier
                    </h2>
                    <p className="text-xl text-slate-600 font-light">
                        Lassen Sie uns über Ihren Garten sprechen. Unverbindlich und persönlich.
                    </p>
                </RevealOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                    <Input id="name" required placeholder="Max Mustermann" className="bg-slate-50 border-slate-200 focus:border-primary h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon</label>
                                    <Input id="phone" type="tel" placeholder="Für Rückrufe" className="bg-slate-50 border-slate-200 focus:border-primary h-12" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">E-Mail</label>
                                <Input id="email" type="email" required placeholder="max@beispiel.de" className="bg-slate-50 border-slate-200 focus:border-primary h-12" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-slate-700">Worum geht es?</label>
                                <select id="service" className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option value="">Bitte wählen...</option>
                                    <option value="pflege">Gartenpflege</option>
                                    <option value="neuanlage">Neuanlage / Umgestaltung</option>
                                    <option value="pflaster">Pflasterarbeiten</option>
                                    <option value="zaun">Zaun & Sichtschutz</option>
                                    <option value="baum">Baumfällung</option>
                                    <option value="sonstiges">Sonstiges</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Nachricht</label>
                                <Textarea id="message" required placeholder="Beschreiben Sie kurz Ihr Vorhaben..." className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-primary resize-none" />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-light text-white h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                            >
                                {isSubmitting ? (
                                    "Wird gesendet..."
                                ) : (
                                    <>
                                        Anfrage absenden
                                        <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>
                            <p className="text-xs text-slate-400 text-center mt-4">
                                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu.
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-10 lg:pt-10"
                    >
                        {/* Info Cards */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Anschrift</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {siteConfig.company.name}<br />
                                        {siteConfig.company.address.street}<br />
                                        {siteConfig.company.address.zip} {siteConfig.company.address.city}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Telefon</h3>
                                    <p className="text-slate-600 mb-2">Wir sind für Sie erreichbar.</p>
                                    <a href={`tel:${siteConfig.company.phone}`} className="text-lg font-semibold text-primary hover:underline">
                                        {siteConfig.company.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">E-Mail</h3>
                                    <p className="text-slate-600 mb-2">Schreiben Sie uns jederzeit.</p>
                                    <a href={`mailto:${siteConfig.company.email}`} className="text-lg font-semibold text-primary hover:underline">
                                        {siteConfig.company.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Öffnungszeiten</h3>
                                    <div className="text-slate-600 space-y-1">
                                        <p>{siteConfig.company.openingHours.weekdays}</p>
                                        <p>{siteConfig.company.openingHours.saturday}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
