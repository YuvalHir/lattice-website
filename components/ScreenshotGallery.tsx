'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const screenshots = [
  { src: "/docs/workspace.webp", title: "Main Workspace", caption: "Perfectly tiled terminal sessions." },
  { src: "/docs/swarmlauncher.webp", title: "Swarm Builder", caption: "Configure and launch multi-agent sessions." },
  { src: "/docs/servermanager.webp", title: "Server Manager", caption: "Discover and manage background services." },
  { src: "/docs/sourcecontrol.webp", title: "Git Integration", caption: "Stage, commit, and diff in the UI." },
  { src: "/docs/themes.webp", title: "Themes", caption: "6 professional built-in themes." },
  { src: "/docs/launchworkspace.gif", title: "Launch Swarm", caption: "Instant multi-agent workspace activation." },
  { src: "/docs/splitagent.gif", title: "Split Terminals", caption: "On-the-fly tiling and session management." },
  { src: "/docs/switchtheme.gif", title: "Live Theming", caption: "Switch themes instantly across all components." },
  { src: "/docs/workspacehistory.gif", title: "History", caption: "Relaunch previous sessions with one click." }
];

export default function ScreenshotGallery() {
  return (
    <section className="py-24 bg-terminal-black/30">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See Lattice in Action</h2>
          <p className="text-xl text-slate-400">High-performance tools for modern AI orchestration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((shot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative aspect-video">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-slate-900/90 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">{shot.title}</h4>
                  <p className="text-slate-500 text-xs">{shot.caption}</p>
                </div>
                <div className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 font-mono">
                  {shot.src.split('.').pop()?.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
