"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage after mount to prevent hydration mismatch
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
                >
                    <div className="bg-white border border-slate-200 shadow-2xl p-6 rounded-lg relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />

                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-accent/10 p-2 rounded-full shrink-0">
                                <Cookie className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Wir nutzen Cookies</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                                    <Link href="/datenschutz" className="text-primary hover:underline ml-1">
                                        Mehr erfahren
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleDecline}
                                className="text-slate-600 hover:text-slate-900"
                            >
                                Ablehnen
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleAccept}
                                className="bg-primary hover:bg-primary-light text-white"
                            >
                                Akzeptieren
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
