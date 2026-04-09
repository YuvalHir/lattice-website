'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 bg-terminal-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 relative">
                <Image src="/docs/logo.svg" alt="Lattice Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">Lattice</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              The high-performance multiplexed workspace for AI agent swarms. 
              Built with Rust, SolidJS, and Tauri for zero-latency orchestration.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Heart size={14} className="text-vivid-violet fill-vivid-violet" />
              Built for the AI Agent Community
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Project</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="https://github.com/YuvalHir/Lattice" className="hover:text-electric-cyan transition-colors">GitHub Repository</a></li>
              <li><a href="https://github.com/YuvalHir/Lattice/releases" className="hover:text-electric-cyan transition-colors">Releases</a></li>
              <li><a href="https://github.com/YuvalHir/Lattice/blob/main/CHANGELOG.md" className="hover:text-electric-cyan transition-colors">Changelog</a></li>
              <li><a href="https://github.com/YuvalHir/Lattice/blob/main/LICENSE" className="hover:text-electric-cyan transition-colors">MIT License</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Community</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="https://github.com/YuvalHir/Lattice/blob/main/CONTRIBUTING.md" className="hover:text-electric-cyan transition-colors">Contributing Guide</a></li>
              <li><a href="https://github.com/YuvalHir/Lattice/issues" className="hover:text-electric-cyan transition-colors">Report Bugs</a></li>
              <li><a href="https://github.com/YuvalHir" className="hover:text-electric-cyan transition-colors">Author</a></li>
              <li className="flex items-center gap-4 pt-4">
                <a href="https://github.com/YuvalHir/Lattice" className="text-slate-500 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-sm">
            © 2026 YuvalHir. Released under the MIT License.
          </p>
          <div className="flex flex-wrap items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Powered by</span>
            <span className="text-white font-bold text-xs uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">Rust</span>
            <span className="text-white font-bold text-xs uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">Tauri</span>
            <span className="text-white font-bold text-xs uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">SolidJS</span>
            <span className="text-white font-bold text-xs uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">Next.js</span>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vivid-violet/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
}
