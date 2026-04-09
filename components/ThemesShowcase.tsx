'use client';

import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const themes = [
  { name: "GitHub Dark", vibe: "Professional & Clean", color: "#0D1117" },
  { name: "Dracula", vibe: "Vibrant & Bold", color: "#282A36" },
  { name: "Monokai", vibe: "Warm & Energetic", color: "#272822" },
  { name: "Nord", vibe: "Calm & Arctic", color: "#2E3440" },
  { name: "One Dark", vibe: "Classic Atom Feel", color: "#282C34" },
  { name: "GitHub Light", vibe: "Bright & Readable", color: "#FFFFFF" }
];

export default function ThemesShowcase() {
  return (
    <section className="py-24 bg-terminal-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">6 Professional Themes</h2>
          <p className="text-xl text-slate-400">One click to transform your entire workspace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-white/30 transition-all"
            >
              <div 
                className="w-full aspect-video rounded-lg mb-6 shadow-2xl relative overflow-hidden flex items-center justify-center border border-white/5"
                style={{ backgroundColor: theme.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="flex gap-2 relative z-10">
                  <div className="w-8 h-8 rounded bg-electric-cyan shadow-lg"></div>
                  <div className="w-8 h-8 rounded bg-vivid-violet shadow-lg"></div>
                  <div className="w-8 h-8 rounded bg-neon-mint shadow-lg"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{theme.name}</h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">{theme.vibe}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 glassmorphism p-12 rounded-3xl">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Live Theme Switching</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Lattice features a global theme engine that updates all UI components, scrollbars, and terminal 
              sessions in real-time. No restart required. Themes are carefully crafted to ensure 
              readability and reduce eye strain during long coding sessions.
            </p>
          </div>
          <div className="flex-1 w-full relative aspect-video rounded-xl overflow-hidden border border-white/10">
            <OptimizedImage
              src="/docs/switchtheme.gif"
              alt="Theme Switching"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
