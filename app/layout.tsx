import type { Metadata } from "next";
import { Assistant, Geist_Mono } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lattice — Multiplexed Workspace for AI Agent Swarms",
  description: "Lattice is a free, open-source, high-performance multiplexed orchestration environment for parallel AI agent swarms. Run Claude, Gemini, Codex, and more in a perfectly tiled terminal grid.",
  openGraph: {
    title: "Lattice — Orchestrate AI Swarms at Zero Latency",
    description: "Free, open-source multiplexed workspace for AI agent swarms. Built with Rust + SolidJS + Tauri.",
    images: [{ url: "/docs/social-preview.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
