'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Terminal, Copy, Check, Monitor, AppWindow, Cpu } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useReleaseData } from '@/hooks/useReleaseData';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

function getAssetUrl(assets: ReleaseAsset[], platform: string): string | null {
  const patterns: Record<string, RegExp[]> = {
    windows: [/\.exe$/i, /-windows/i, /_windows/i, /msi$/i],
    macos: [/\.dmg$/i, /-macos/i, /_macos/i, /\.app\b/i, /\.pkg$/i],
    linux: [/\.deb$/i, /\.rpm$/i, /\.appimage$/i, /-linux/i, /_linux/i, /\.tar\.gz$/i],
  };

  for (const pattern of patterns[platform] || []) {
    const asset = assets.find(a => pattern.test(a.name));
    if (asset) return asset.browser_download_url;
  }
  return null;
}

export default function GettingStarted() {
  const [activeTab, setActiveTab] = useState<'users' | 'developers'>('users');
  const [copied, setCopied] = useState(false);
  const { version, platform, allAssets } = useReleaseData();

  const windowsUrl = getAssetUrl(allAssets, 'windows');
  const macosUrl = getAssetUrl(allAssets, 'macos');
  const linuxUrl = getAssetUrl(allAssets, 'linux');

  const installCode = `# Clone the repository
git clone https://github.com/YuvalHir/Lattice.git
cd Lattice

# Install dependencies
npm install

# Run in development mode
npm run tauri dev`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-terminal-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Started in Minutes</h2>
          <p className="text-xl text-slate-400">Lattice is free, open-source, and ready to orchestrate your swarms.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl mb-12">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex-1 py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'users' ? 'bg-electric-cyan text-terminal-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Download size={20} />
              For Users
            </button>
            <button
              onClick={() => setActiveTab('developers')}
              className={`flex-1 py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'developers' ? 'bg-vivid-violet text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal size={20} />
              For Developers
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'users' ? (
              <motion.div
                key="users"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glassmorphism p-10 rounded-3xl"
              >
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-bold mb-4">Download Lattice</h3>
                  <p className="text-slate-400">Installers are available for all major platforms. Lattice is currently in early access ({version}).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a 
                    href={windowsUrl || 'https://github.com/YuvalHir/Lattice/releases'}
                    className={`flex flex-col items-center gap-6 p-8 border rounded-2xl transition-all group ${platform === 'windows' ? 'bg-electric-cyan/10 border-electric-cyan/50' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                  >
                    <div className={`w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform ${platform === 'windows' ? 'ring-2 ring-electric-cyan' : ''}`}>
                      <Monitor className={platform === 'windows' ? 'text-electric-cyan' : 'text-slate-400'} size={32} />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-1">Windows</h4>
                      <p className="text-slate-500 text-sm">.exe installer</p>
                      {platform === 'windows' && <span className="text-electric-cyan text-xs font-mono">Recommended</span>}
                    </div>
                  </a>
                  <a 
                    href={macosUrl || 'https://github.com/YuvalHir/Lattice/releases'}
                    className={`flex flex-col items-center gap-6 p-8 border rounded-2xl transition-all group ${platform === 'macos' ? 'bg-vivid-violet/10 border-vivid-violet/50' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                  >
                    <div className={`w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform ${platform === 'macos' ? 'ring-2 ring-vivid-violet' : ''}`}>
                      <AppWindow className={platform === 'macos' ? 'text-vivid-violet' : 'text-slate-400'} size={32} />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-1">macOS</h4>
                      <p className="text-slate-500 text-sm">.dmg or .app</p>
                      {platform === 'macos' && <span className="text-vivid-violet text-xs font-mono">Recommended</span>}
                    </div>
                  </a>
                  <a 
                    href={linuxUrl || 'https://github.com/YuvalHir/Lattice/releases'}
                    className={`flex flex-col items-center gap-6 p-8 border rounded-2xl transition-all group ${platform === 'linux' ? 'bg-neon-mint/10 border-neon-mint/50' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                  >
                    <div className={`w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform ${platform === 'linux' ? 'ring-2 ring-neon-mint' : ''}`}>
                      <Cpu className={platform === 'linux' ? 'text-neon-mint' : 'text-slate-400'} size={32} />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-1">Linux</h4>
                      <p className="text-slate-500 text-sm">.AppImage or .deb</p>
                      {platform === 'linux' && <span className="text-neon-mint text-xs font-mono">Recommended</span>}
                    </div>
                  </a>
                </div>

                <div className="mt-12 text-center p-6 bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl">
                  <p className="text-sm text-slate-400">
                    Looking for the latest updates? Visit our <a href="https://github.com/YuvalHir/Lattice/releases" className="text-electric-cyan hover:underline font-bold">Releases page</a>.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="developers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glassmorphism p-10 rounded-3xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Terminal size={24} className="text-vivid-violet" />
                      Prerequisites
                    </h3>
                    <ul className="space-y-4 text-slate-400">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-vivid-violet"></div>
                        <span>Rust Toolchain (latest stable)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-vivid-violet"></div>
                        <span>Node.js 18+</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-vivid-violet"></div>
                        <span>Tauri system prerequisites</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-vivid-violet"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Contributing
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      We welcome contributions! Please check our <a href="https://github.com/YuvalHir/Lattice/blob/main/CONTRIBUTING.md" className="text-vivid-violet hover:underline font-bold">Contributing Guide</a> for local setup and coding standards.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-4 right-4 z-20">
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors border border-white/10"
                    >
                      {copied ? <Check size={18} className="text-neon-mint" /> : <Copy size={18} />}
                    </button>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <SyntaxHighlighter 
                      language="bash" 
                      style={vscDarkPlus}
                      customStyle={{ 
                        margin: 0, 
                        padding: '2rem', 
                        backgroundColor: '#0c0c0c',
                        fontSize: '0.9rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {installCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vivid-violet/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
