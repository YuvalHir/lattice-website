'use client';

import { motion } from 'framer-motion';

const shortcuts = [
  { keys: ["Ctrl", "L"], action: "Open Launcher" },
  { keys: ["Ctrl", "N"], action: "Open New Session" },
  { keys: ["Ctrl", ","], action: "Open Settings" },
  { keys: ["Ctrl", "W"], action: "Close Current Workspace" },
  { keys: ["Escape"], action: "Close Modal / Settings" },
  { keys: ["Ctrl", "+"], action: "Zoom In" },
  { keys: ["Ctrl", "-"], action: "Zoom Out" },
  { keys: ["Ctrl", "0"], action: "Reset Zoom" }
];

export default function KeyboardShortcuts() {
  return (
    <section className="py-24 bg-terminal-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Keyboard-First. Always.</h2>
          <p className="text-xl text-slate-400">Lattice is built for power users who move at the speed of thought.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {shortcuts.map((shortcut, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all"
            >
              <span className="text-slate-400 font-medium group-hover:text-white transition-colors">{shortcut.action}</span>
              <div className="flex gap-2">
                {shortcut.keys.map((key, keyIndex) => (
                  <kbd 
                    key={keyIndex}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-600 text-white font-mono text-xs shadow-lg min-w-[40px] flex items-center justify-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
}
