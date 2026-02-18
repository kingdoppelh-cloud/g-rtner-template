"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                            {siteConfig.company.name}
                        </Link>
                        <p className="text-slate-400 font-light leading-relaxed max-w-sm">
                            {siteConfig.company.footerText}
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-sm">Navigation</h3>
                        <ul className="space-y-3">
                            {siteConfig.navigation.map((item: { label: string; href: string }) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-primary transition-colors block py-1">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-sm">Leistungen</h3>
                        <ul className="space-y-3">
                            {siteConfig.services.map((service: any) => (
                                <li key={service.slug}>
                                    <Link href={`/leistungen/${service.slug}`} className="hover:text-primary transition-colors block py-1">
                                        {service.titel}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt Info */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-sm">Kontakt</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>
                                    {siteConfig.company.address.street}<br />
                                    {siteConfig.company.address.zip} {siteConfig.company.address.city}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href={`tel:${siteConfig.company.phone}`} className="hover:text-primary transition-colors">
                                    {siteConfig.company.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-primary transition-colors">
                                    {siteConfig.company.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} {siteConfig.company.name}. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-8">
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
