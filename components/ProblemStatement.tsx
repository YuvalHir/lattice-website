'use client';

import { motion } from 'framer-motion';

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-terminal-black/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Running Multiple AI Agents Shouldn't Mean <br />
              <span className="text-white/50">Managing 20 Terminal Tabs</span>
            </h2>
            
            <div className="text-xl md:text-2xl text-slate-400 leading-relaxed space-y-8">
              <p>
                You're orchestrating an AI swarm. <span className="text-electric-cyan">Claude</span> is refactoring your codebase. 
                <span className="text-vivid-violet">Gemini</span> is reviewing architecture. 
                <span className="text-neon-mint">Codex</span> is generating tests. 
                Your custom scripts are monitoring APIs.
              </p>
              
              <p className="bg-white/5 p-8 rounded-2xl border border-white/10 italic">
                "And you're stuck alt-tabbing between terminal windows, lost in a sea of tabs, 
                trying to keep track of it all."
              </p>
              
              <p className="font-bold text-white pt-4">
                Traditional terminal workflows weren't built for the age of AI agent swarms.
              </p>
              
              <p className="text-electric-cyan font-bold text-3xl md:text-4xl mt-8">
                Lattice was built to fix that.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-vivid-violet/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
