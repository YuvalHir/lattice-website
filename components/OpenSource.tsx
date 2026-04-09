'use client';

import { motion } from 'framer-motion';
import { Star, GitPullRequest, MessageSquare, AlertCircle } from 'lucide-react';

export default function OpenSource() {
  return (
    <section className="py-24 bg-terminal-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glassmorphism p-12 md:p-20 rounded-[3rem] border border-white/10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-10 group hover:border-electric-cyan/50 transition-colors">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="group-hover:text-electric-cyan transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Open Source. Built for the <br />
              <span className="cyan-glow-text">AI Agent Community.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Lattice is licensed under the MIT License — free to use, modify, and distribute. 
              We welcome contributions from everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: <AlertCircle />, title: "Report Bugs", desc: "Open an issue with reproduction steps" },
                { icon: <Star />, title: "Suggest Features", desc: "Tag issues with 'enhancement'" },
                { icon: <GitPullRequest />, title: "Submit PRs", desc: "Fork, branch, code, and test" },
                { icon: <MessageSquare />, title: "Improve Docs", desc: "Help us make documentation better" }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center group hover:bg-white/10 transition-all">
                  <div className="flex justify-center mb-4 text-slate-500 group-hover:text-electric-cyan transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://github.com/YuvalHir/Lattice"
                className="w-full sm:w-auto px-10 py-5 bg-white text-terminal-black font-bold rounded-2xl hover:bg-electric-cyan transition-all flex items-center justify-center gap-3 text-lg"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Star on GitHub
              </a>
              <a 
                href="https://github.com/YuvalHir/Lattice/blob/main/CONTRIBUTING.md"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg"
              >
                View Contributing Guide
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
}
