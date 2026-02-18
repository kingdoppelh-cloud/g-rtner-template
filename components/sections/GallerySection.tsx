"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ZoomIn } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function GallerySection() {
    return (
        <section id="galerie" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <RevealOnScroll className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-3 block">{siteConfig.gallery.sectionTitle}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        {siteConfig.gallery.headline}
                    </h2>
                    <p className="text-xl text-slate-600 font-light">
                        {siteConfig.gallery.subline}
                    </p>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {siteConfig.gallery.images.map((project: any) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                            >
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={project.src}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg text-center">
                                                    <p className="font-bold text-slate-900">{project.title}</p>
                                                    <ZoomIn className="w-5 h-5 text-accent mx-auto mt-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 overflow-hidden">
                                        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black">
                                            <Image
                                                src={project.src}
                                                alt={project.title}
                                                fill
                                                unoptimized
                                                className="object-contain"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
