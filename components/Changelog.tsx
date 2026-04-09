'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Version {
  version: string;
  date: string;
  added: string[];
  changed: string[];
  fixed: string[];
}

export default function Changelog() {
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const res = await fetch('https://raw.githubusercontent.com/YuvalHir/Lattice/main/CHANGELOG.md');
        const text = await res.text();
        
        const parsed: Version[] = [];
        const lines = text.split('\n');
        let currentVersion: Version | null = null;
        let currentSection: 'added' | 'changed' | 'fixed' | null = null;

        for (const line of lines) {
          const versionMatch = line.match(/##\s*\[([\d.]+)\]\s*-\s*(\d{4}-\d{2}-\d{2})/);
          if (versionMatch) {
            if (currentVersion) parsed.push(currentVersion);
            currentVersion = { version: `v${versionMatch[1]}`, date: versionMatch[2], added: [], changed: [], fixed: [] };
            currentSection = null;
            continue;
          }

          if (currentVersion) {
            if (line.match(/###\s*Added/i)) { currentSection = 'added'; continue; }
            if (line.match(/###\s*Changed/i)) { currentSection = 'changed'; continue; }
            if (line.match(/###\s*Fixed/i)) { currentSection = 'fixed'; continue; }

            const itemMatch = line.match(/^-\s*\*\*([^*]+)\*\*:\s*(.+)/);
            if (itemMatch && currentSection) {
              currentVersion[currentSection].push(`${itemMatch[1]}: ${itemMatch[2]}`);
            }
          }
        }
        if (currentVersion) parsed.push(currentVersion);
        setVersions(parsed.slice(0, 6));
      } catch {
        setVersions([{ version: "v0.1.7", date: "2026-04-09", added: [], changed: [], fixed: ["Latest stable release"] }]);
      } finally {
        setLoading(false);
      }
    }

    fetchChangelog();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-terminal-black/30">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What's New</h2>
            <p className="text-xl text-slate-400">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-terminal-black/30">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What's New</h2>
          <p className="text-xl text-slate-400">Continuous improvements for the AI agent community.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {versions.map((v, index) => (
            <motion.div
              key={v.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-electric-cyan shadow-[0_0_10px_rgba(0,229,255,1)]"></div>
              
              <div className="mb-4 flex items-center gap-4 flex-wrap">
                <span className="text-2xl font-bold text-white">{v.version}</span>
                {index === 0 && (
                  <span className="px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-[10px] font-mono uppercase tracking-widest">
                    Latest
                  </span>
                )}
                <span className="text-slate-500 text-sm font-mono">{v.date}</span>
              </div>

              <div className="space-y-3">
                {v.added.length > 0 && (
                  <div>
                    <span className="text-neon-mint text-xs font-mono uppercase tracking-wide">Added</span>
                    <ul className="mt-2 space-y-1">
                      {v.added.map((item, i) => (
                        <li key={`a-${i}`} className="text-slate-400 flex gap-3">
                          <span className="text-neon-mint font-mono">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {v.changed.length > 0 && (
                  <div>
                    <span className="text-electric-cyan text-xs font-mono uppercase tracking-wide">Changed</span>
                    <ul className="mt-2 space-y-1">
                      {v.changed.map((item, i) => (
                        <li key={`c-${i}`} className="text-slate-400 flex gap-3">
                          <span className="text-electric-cyan font-mono">~</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {v.fixed.length > 0 && (
                  <div>
                    <span className="text-vivid-violet text-xs font-mono uppercase tracking-wide">Fixed</span>
                    <ul className="mt-2 space-y-1">
                      {v.fixed.map((item, i) => (
                        <li key={`f-${i}`} className="text-slate-400 flex gap-3">
                          <span className="text-vivid-violet font-mono">!</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          <div className="pt-8 text-center">
            <a 
              href="https://github.com/YuvalHir/Lattice/blob/main/CHANGELOG.md" 
              className="text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 group font-mono text-sm"
            >
              View Full Changelog
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
