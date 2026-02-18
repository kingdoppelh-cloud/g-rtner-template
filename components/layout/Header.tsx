"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 20;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
                isScrolled
                    ? "bg-white/85 backdrop-blur-md border-slate-200/50 shadow-sm py-3"
                    : "bg-transparent border-white/10 py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-bold tracking-tighter transition-colors duration-300",
                        isScrolled ? "text-slate-900" : "text-white"
                    )}
                >
                    {siteConfig.company.name}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {siteConfig.navigation.map((item: { label: string; href: string }) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-300 relative group tracking-tight",
                                isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.label}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                isScrolled ? "bg-primary" : "bg-white"
                            )} />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href={`tel:${siteConfig.company.phone}`}
                        className={cn(
                            "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent tracking-tight",
                            isScrolled ? "text-slate-900" : "text-white"
                        )}
                    >
                        <Phone className="w-4 h-4" />
                        <span>{siteConfig.company.phone}</span>
                    </a>
                    <Button
                        asChild
                        className="bg-accent hover:bg-accent-light text-white rounded-none font-medium px-6 shadow-none hover:shadow-lg transition-all duration-300"
                    >
                        <Link href="#kontakt">Anfrage</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "md:hidden hover:bg-white/10",
                                isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white"
                            )}
                        >
                            <Menu className="w-6 h-6" />
                            <span className="sr-only">Menü öffnen</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetTitle className="text-left mb-8 text-2xl font-bold tracking-tighter">{siteConfig.company.name}</SheetTitle>
                        <nav className="flex flex-col gap-6">
                            {siteConfig.navigation.map((item: { label: string; href: string }) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-xl font-medium text-slate-900 py-2 border-b border-slate-100 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-8 flex flex-col gap-4">
                                <a
                                    href={`tel:${siteConfig.company.phone}`}
                                    className="flex items-center gap-3 text-xl font-medium text-slate-900"
                                >
                                    <Phone className="w-5 h-5 text-accent" />
                                    {siteConfig.company.phone}
                                </a>
                                <Button
                                    asChild
                                    className="bg-accent hover:bg-accent-light text-white w-full rounded-none h-12 text-lg"
                                >
                                    <Link href="#kontakt">Anfrage senden</Link>
                                </Button>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
}
