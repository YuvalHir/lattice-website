'use client';

import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [version, setVersion] = useState<string>('...');

  useEffect(() => {
    async function fetchVersion() {
      try {
        const res = await fetch('https://api.github.com/repos/YuvalHir/Lattice/releases/latest');
        const data = await res.json();
        setVersion(data.tag_name || 'v0.1.7');
      } catch {
        setVersion('v0.1.7');
      }
    }
    fetchVersion();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden grid-bg">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-electric-cyan/10 border border-electric-cyan/30 rounded-full px-4 py-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
              <span className="text-electric-cyan text-sm font-mono tracking-wider uppercase">{version} — Stable Release</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Orchestrate AI Swarms at <br />
            <span className="cyan-glow-text">Zero Latency</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Lattice is a high-performance multiplexed workspace that lets you run multiple AI agents — 
            <span className="text-white font-medium"> Claude, Gemini, Codex, and more </span> 
            — in a perfectly tiled, zero-scroll terminal grid.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/YuvalHir/Lattice/releases"
              className="w-full sm:w-auto px-8 py-4 bg-electric-cyan text-terminal-black font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              <Download size={20} />
              Download Free
            </a>
            <a
              href="https://github.com/YuvalHir/Lattice"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 font-mono text-xs uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> MIT License</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Open Source</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> Windows • macOS • Linux</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/80 backdrop-blur-md flex items-center px-4 gap-1.5 z-20 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              <div className="ml-4 text-[10px] text-slate-500 font-mono flex items-center gap-2">
                <Terminal size={12} />
                lattice — workspace
              </div>
            </div>
            <Image
              src="/docs/workspace.webp"
              alt="Lattice Workspace"
              width={1920}
              height={1080}
              className="w-full h-auto mt-8 scale-[1.01]"
              priority
            />
          </div>
          
          {/* Decorative glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-electric-cyan/20 blur-[100px] rounded-full z-0"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-vivid-violet/20 blur-[100px] rounded-full z-0"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
