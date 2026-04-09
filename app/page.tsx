import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import TechStack from "@/components/TechStack";
import ThemesShowcase from "@/components/ThemesShowcase";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import GettingStarted from "@/components/GettingStarted";
import Changelog from "@/components/Changelog";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Features />
      <ScreenshotGallery />
      <TechStack />
      <ThemesShowcase />
      <KeyboardShortcuts />
      <GettingStarted />
      <Changelog />
      <OpenSource />
      <Footer />
    </main>
  );
}
