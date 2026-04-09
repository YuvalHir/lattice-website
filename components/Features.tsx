'use client';

import { motion } from 'framer-motion';
import { 
  Grid, Users, History, Columns, Server, GitBranch, Folder, Palette, Keyboard 
} from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Grid className="text-electric-cyan" />,
    title: "Zero-Scroll Workspace Grid",
    description: "Your entire agent swarm visible at once. Terminals are perfectly tiled, edge-to-edge, with no gaps and no scrolling.",
    image: "/docs/workspace.webp"
  },
  {
    icon: <Users className="text-vivid-violet" />,
    title: "Multi-Agent Swarm Builder",
    description: "Configure mixed session layouts — Gemini, Claude, Codex, OpenCode, WSL, Browser — with a live grid preview.",
    image: "/docs/swarmlauncher.webp"
  },
  {
    icon: <History className="text-neon-mint" />,
    title: "Workspace History & Relaunch",
    description: "Launch a previous workspace from history. Your recent sessions are saved and one-click away. No need to reconfigure.",
    image: "/docs/workspacehistory.gif"
  },
  {
    icon: <Columns className="text-electric-cyan" />,
    title: "Terminal Splitting & Add",
    description: "Split any terminal session directly from the tile header, or add new agents to your existing workspace on the fly.",
    image: "/docs/splitagent.gif"
  },
  {
    icon: <Server className="text-vivid-violet" />,
    title: "Server Management & Monitoring",
    description: "Automatically discover background services, view clean logs (ANSI-stripped), rename processes, and manage lifecycles.",
    image: "/docs/servermanager.webp"
  },
  {
    icon: <GitBranch className="text-neon-mint" />,
    title: "First-Class Git Integration",
    description: "Stage changes, commit, and view file diffs directly within the IDE-like interface. Source control, built in.",
    image: "/docs/sourcecontrol.webp"
  },
  {
    icon: <Folder className="text-electric-cyan" />,
    title: "Integrated File Explorer",
    description: "High-fidelity file navigation with branded icons for Rust, Python, TypeScript, Docker, and more.",
    image: "/docs/workspace.webp"
  },
  {
    icon: <Palette className="text-vivid-violet" />,
    title: "6 Professional Themes",
    description: "GitHub Dark, Dracula, Monokai, Nord, One Dark, and GitHub Light. Themes apply to the entire UI and all terminal sessions instantly.",
    image: "/docs/switchtheme.gif"
  },
  {
    icon: <Keyboard className="text-neon-mint" />,
    title: "Keyboard-First UX",
    description: "Close any modal, dialog, or panel with a single Escape press. Fast, intuitive, and always consistent keyboard shortcuts.",
    image: "/docs/workspace.webp"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-terminal-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for AI Agent Orchestration</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Lattice provides the high-performance tools you need to manage complex parallel agent workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-8 rounded-2xl group hover:border-electric-cyan/50 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-electric-cyan transition-colors">{feature.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
