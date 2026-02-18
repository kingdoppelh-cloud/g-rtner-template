import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutSection } from "@/components/sections/AboutSection";
import dynamic from "next/dynamic";

const GallerySection = dynamic(() => import("@/components/sections/GallerySection").then(mod => mod.GallerySection), {
  ssr: true,
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />
});

const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection), {
  ssr: true,
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AboutSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
