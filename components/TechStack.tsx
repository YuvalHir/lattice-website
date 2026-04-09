'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Layout, Layers, Terminal } from 'lucide-react';

const stack = [
  {
    component: "Backend",
    tech: "Rust (Tauri v2)",
    why: "Zero-cost abstractions, memory safety, blazing fast",
    icon: <Shield className="text-electric-cyan" />
  },
  {
    component: "Async Runtime",
    tech: "Tokio",
    why: "Handle hundreds of concurrent sessions with minimal overhead",
    icon: <Zap className="text-vivid-violet" />
  },
  {
    component: "Terminal Engine",
    tech: "portable-pty + xterm.js (WebGL)",
    why: "GPU-accelerated terminal rendering, cross-platform PTY support",
    icon: <Terminal className="text-neon-mint" />
  },
  {
    component: "Frontend Framework",
    tech: "SolidJS",
    why: "Fine-grained reactivity, no virtual DOM overhead",
    icon: <Layout className="text-electric-cyan" />
  },
  {
    component: "IPC Bridge",
    tech: "Tauri Command + Event System",
    why: "Zero-latency communication between Rust and JS",
    icon: <Cpu className="text-vivid-violet" />
  },
  {
    component: "Styling",
    tech: "Vanilla CSS + CSS Grid",
    why: "Predictable, performant, no framework lock-in",
    icon: <Layers className="text-neon-mint" />
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-terminal-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineered for Performance</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Lattice is built with a high-performance stack designed for zero-latency AI orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-terminal-black flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-slate-500 text-xs font-mono uppercase tracking-widest">{item.component}</h4>
                  <h3 className="text-lg font-bold text-white">{item.tech}</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.why}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl border-l-4 border-l-electric-cyan"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield size={20} className="text-electric-cyan" />
              Architecture Highlights
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <span className="text-electric-cyan font-mono">→</span>
                <span><code className="text-slate-300">Arc&lt;Mutex&lt;SessionRegistry&gt;&gt;</code> — Thread-safe global state management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-electric-cyan font-mono">→</span>
                <span>Dedicated <code className="text-slate-300">tokio</code> tasks for I/O streaming — Non-blocking, high-throughput</span>
              </li>
              <li className="flex gap-3">
                <span className="text-electric-cyan font-mono">→</span>
                <span>Raw byte stream passthrough — ANSI escape codes preserved, zero parsing overhead</span>
              </li>
              <li className="flex gap-3">
                <span className="text-electric-cyan font-mono">→</span>
                <span>OS abstraction layer — Seamless Native Windows ↔ WSL routing</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl border-l-4 border-l-vivid-violet"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Layers size={20} className="text-vivid-violet" />
              Advanced Orchestration
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <span className="text-vivid-violet font-mono">→</span>
                <span>Detached DOM Registry — Terminals persist across tab switches without memory leaks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-vivid-violet font-mono">→</span>
                <span>WebGL Rendering — GPU-accelerated graphics for smooth 60FPS terminal updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-vivid-violet font-mono">→</span>
                <span>Fine-grained reactivity — SolidJS signals update only the DOM nodes that change</span>
              </li>
              <li className="flex gap-3">
                <span className="text-vivid-violet font-mono">→</span>
                <span>Zero-Latency IPC — Tauri Command + Event system for high-frequency data streams</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Visual connection lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-electric-cyan/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-vivid-violet/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
