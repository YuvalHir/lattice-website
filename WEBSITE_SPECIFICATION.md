# Lattice Website - Complete Development Specification

## Project Overview

This document provides complete specifications for building the official Lattice website. Lattice is a **free, open-source, high-performance multiplexed orchestration environment for parallel AI agent swarms**.

The website should be built using the existing **LatticeWeb** Next.js project (Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript).

---

## Brand Identity

### Product Name
**Lattice**

### Tagline Options
- "Orchestrate AI Swarms at Zero Latency"
- "The Multiplexed Workspace for AI Agent Swarms"
- "Run Multiple AI Agents. One Workspace. Zero Compromise."

### Core Value Proposition
Lattice transforms the chaotic experience of running multiple AI agents (Claude, Gemini, Codex, etc.) into a clean, perfectly tiled workspace where you can monitor and interact with all your agents simultaneously — no tab switching, no scrolling, no context switching.

### Brand Voice
- **Technical but accessible** — speak to developers and AI practitioners
- **Performance-focused** — emphasize speed, efficiency, zero latency
- **Open and community-driven** — free, open-source, MIT licensed
- **Professional** — this is a serious tool for serious work

### Visual Identity Guidelines
- **Primary Colors**: Electric Cyan (#00E5FF), Vivid Violet (#7000FF)
- **Accent Colors**: Neon Mint (#00FF9C), Deep Slate (#0F172A)
- **Terminal Theme**: Campbell/PowerShell aesthetic (#0C0C0C background)
- **Font Style**: Monospace for code (Cascadia Code), clean sans-serif for body (Assistant)
- **Design Aesthetic**: Cyber-glass, glassmorphism, clean edges, high contrast

---

## Website Architecture

### Page Structure (Single-Page Application with Sections)

1. **Hero Section** (Above the fold)
2. **Problem Statement** (Why Lattice exists)
3. **Key Features** (What Lattice does)
4. **Live Demo / Screenshots** (Show, don't just tell)
5. **Tech Stack** (Built with the best)
6. **Themes Showcase** (Visual appeal)
7. **Getting Started** (Download & Install)
8. **Open Source / Community** (GitHub, Contributing)
9. **Footer** (Links, License, Credits)

---

## Section-by-Section Specifications

### 1. HERO SECTION

**Purpose**: Immediate impact, clear value proposition, primary CTAs

**Content**:
- **Headline**: "Orchestrate AI Swarms at Zero Latency"
- **Subheadline**: "Lattice is a high-performance multiplexed workspace that lets you run multiple AI agents — Claude, Gemini, Codex, and more — in a perfectly tiled, zero-scroll terminal grid. No tab switching. No context loss. Just pure productivity."
- **Primary CTA**: "Download Free" (links to GitHub Releases)
- **Secondary CTA**: "View on GitHub" (links to repository)
- **Badge Row**:
  - `v0.1.7` (current version)
  - `MIT License`
  - `Open Source`
  - `Windows • macOS • Linux`

**Visual**:
- Hero screenshot or embedded video showing the full Lattice workspace with 4+ agents running
- Animated terminal-like text effect for tagline
- Subtle grid pattern background (evoking the lattice/grid concept)

**Design Notes**:
- Dark theme background (#0C0C0C or gradient from #0F172A to #0C0C0C)
- Cyan accent glow effects
- Smooth scroll indicator at bottom

---

### 2. PROBLEM STATEMENT

**Purpose**: Help users feel the pain point Lattice solves

**Headline**: "Running Multiple AI Agents Shouldn't Mean Managing 20 Terminal Tabs"

**Content**:
"You're orchestrating an AI swarm. Claude is refactoring your codebase. Gemini is reviewing architecture. Codex is generating tests. Your custom scripts are monitoring APIs. And you're stuck alt-tabbing between terminal windows, lost in a sea of tabs, trying to keep track of it all.

**Traditional terminal workflows weren't built for the age of AI agent swarms.**

Lattice was built to fix that."

**Visual**:
- Side-by-side comparison (mockup): Left side showing messy terminal tabs, right side showing clean Lattice grid
- Optional: GIF showing launchworkspace.gif from docs

**Design Notes**:
- Slightly lighter background than hero
- Use subtle animation on scroll (fade in)

---

### 3. KEY FEATURES

**Purpose**: Showcase what makes Lattice powerful

**Headline**: "Built for AI Agent Orchestration"

**Features Grid** (3 columns on desktop, 1 on mobile):

#### Feature 1: Zero-Scroll Workspace Grid
- **Icon**: Grid/Layout icon
- **Title**: "Zero-Scroll Workspace"
- **Description**: "Your entire agent swarm visible at once. Terminals are perfectly tiled, edge-to-edge, with no gaps and no scrolling. Always fits your viewport."
- **Visual**: workspace.webp or workspace.png screenshot

#### Feature 2: Swarm Builder
- **Icon**: Users/Team icon
- **Title**: "Multi-Agent Swarm Builder"
- **Description**: "Configure mixed session layouts — Gemini, Claude, Codex, OpenCode, WSL, Browser — with a live grid preview. Launch your entire swarm in one click."
- **Visual**: swarmlauncher.webp or swarmlauncher.png

#### Feature 3: Workspace History
- **Icon**: History/Clock icon
- **Title**: "Workspace History & Relaunch"
- **Description**: "Launch a previous workspace from history. Your recent sessions are saved and one-click away. No need to reconfigure."
- **Visual**: workspacehistory.gif

#### Feature 4: Terminal Splitting
- **Icon**: Columns/Split icon
- **Title**: "Terminal Splitting & Add"
- **Description**: "Split any terminal session directly from the tile header, or add new agents to your existing workspace on the fly."
- **Visual**: agentsplit.gif

#### Feature 5: Server Management
- **Icon**: Server icon
- **Title**: "Server Management & Monitoring"
- **Description**: "Automatically discover background services, view clean logs (ANSI-stripped), rename processes, and manage lifecycles from a dedicated panel."
- **Visual**: servermanager.webp or servermanager.png

#### Feature 6: Git Integration
- **Icon**: Git/Branch icon
- **Title**: "First-Class Git Integration"
- **Description**: "Stage changes, commit, and view file diffs directly within the IDE-like interface. Source control, built in."
- **Visual**: sourcecontrol.webp or sourcecontrol.png

#### Feature 7: File Explorer
- **Icon**: Folder/Files icon
- **Title**: "Integrated File Explorer"
- **Description**: "High-fidelity file navigation with branded icons for Rust, Python, TypeScript, Docker, and more. Browse your projects without leaving Lattice."

#### Feature 8: 6 Professional Themes
- **Icon**: Palette/Theme icon
- **Title**: "6 Built-in Themes"
- **Description**: "GitHub Dark, Dracula, Monokai, Nord, One Dark, and GitHub Light. Themes apply to the entire UI and all terminal sessions instantly."
- **Visual**: themes.webp or themes.png + theme selector screenshot

#### Feature 9: ESC Key Everywhere
- **Icon**: Keyboard icon
- **Title**: "Keyboard-First UX"
- **Description**: "Close any modal, dialog, or panel with a single Escape press. Fast, intuitive, and always consistent."

**Design Notes**:
- Each feature card: glassmorphic style with subtle border
- On hover: slight lift + glow effect
- Screenshots appear on hover or are always visible below description

---

### 4. LIVE DEMO / SCREENSHOTS SECTION

**Purpose**: Show the product in action

**Headline**: "See Lattice in Action"

**Content**:
- **Image Gallery / Carousel** with the following images (from `agenticide/docs/screenshots/` and `agenticide/docs/gifs/`):
  1. `workspace.webp` — Main workspace view
  2. `swarmlauncher.webp` — Swarm builder UI
  3. `servermanager.webp` — Server management panel
  4. `sourcecontrol.webp` — Git integration
  5. `themes.webp` — Theme showcase
  6. `launchworkspace.gif` — Animated: launching a workspace
  7. `agentsplit.gif` — Animated: splitting terminals
  8. `themeswitch.gif` — Animated: switching themes
  9. `workspacehistory.gif` — Animated: workspace history

- Each image should have a caption describing what's shown
- GIFs should autoplay on scroll into viewport (lazy load)

**Design Notes**:
- Masonry or grid layout
- Lightbox on click (full-screen view)
- Smooth transitions between images

---

### 5. TECH STACK

**Purpose**: Build credibility, show technical depth

**Headline**: "Engineered for Performance"

**Content** (table or card layout):

| Component | Technology | Why |
|-----------|-----------|-----|
| **Backend** | Rust (Tauri v2) | Zero-cost abstractions, memory safety, blazing fast |
| **Async Runtime** | Tokio | Handle hundreds of concurrent sessions with minimal overhead |
| **Terminal Engine** | portable-pty + xterm.js (WebGL) | GPU-accelerated terminal rendering, cross-platform PTY support |
| **Frontend Framework** | SolidJS | Fine-grained reactivity, no virtual DOM overhead |
| **IPC Bridge** | Tauri Command + Event System | Zero-latency communication between Rust and JS |
| **Styling** | Vanilla CSS + CSS Grid | Predictable, performant, no framework lock-in |

**Architecture Highlights** (bullet points or callout boxes):
- `Arc<Mutex<SessionRegistry>>` — Thread-safe global state management
- Dedicated `tokio` tasks for I/O streaming — Non-blocking, high-throughput
- Raw byte stream passthrough — ANSI escape codes preserved, zero parsing overhead
- OS abstraction layer — Seamless Native Windows ↔ WSL routing
- Detached DOM Registry — Terminals persist across tab switches without memory leaks

**Design Notes**:
- Use Rust, Tauri, SolidJS, xterm.js logos/badges
- Dark background with glowing accent lines connecting components

---

### 6. THEMES SHOWCASE

**Purpose**: Show visual polish and customization options

**Headline**: "6 Professional Themes. One Click to Transform."

**Content**:
Grid of 6 theme cards, each showing:
- Theme name
- Preview thumbnail (screenshot of Lattice in that theme)
- Short "vibe" description

| Theme | Vibe |
|-------|------|
| **GitHub Dark** | Professional & clean |
| **Dracula** | Vibrant & bold |
| **Monokai** | Warm & energetic |
| **Nord** | Calm & arctic |
| **One Dark** | Classic Atom editor feel |
| **GitHub Light** | Bright & readable |

**Visual**:
- themes.png or themes.webp showing theme selector in Settings
- Each theme card should have a small preview swatch using actual theme colors

**Design Notes**:
- Interactive: clicking a theme card could preview colors on the website itself (optional enhancement)
- Use themeswitch.gif to show live theme switching

---

### 7. KEYBOARD SHORTCUTS

**Purpose**: Show power-user appeal

**Headline**: "Keyboard-First. Always."

**Content** (table):

| Shortcut | Action |
|----------|--------|
| `Ctrl + L` / `Ctrl + N` | Open Launcher |
| `Ctrl + ,` | Open Settings |
| `Ctrl + W` | Close Current Workspace |
| `Escape` | Close Modal / Settings / Server Manager |

**Design Notes**:
- Style keys like actual keyboard caps (rounded rectangles, monospace font)
- Dark background section

---

### 8. GETTING STARTED

**Purpose**: Drive downloads and adoption

**Headline**: "Get Started in Minutes"

**Tabbed Interface** or **Two Columns**:

#### Tab 1: For Users (Download)
"**Lattice is free and open-source.** Download the latest installers for your platform:"

- **Windows**: `.exe` installer — [Download from Releases](https://github.com/YuvalHir/Lattice/releases)
- **macOS**: `.dmg` or `.app` — [Download from Releases](https://github.com/YuvalHir/Lattice/releases)
- **Linux**: `.AppImage` or `.deb` — [Download from Releases](https://github.com/YuvalHir/Lattice/releases)

"Currently in early access (**v0.1.7**). Check the [Releases page](https://github.com/YuvalHir/Lattice/releases) for the latest version."

#### Tab 2: For Developers (Build from Source)
"**Prerequisites:**"
- Rust Toolchain
- Node.js 18+
- Tauri prerequisites

"**Installation:**"
```bash
# Clone the repository
git clone https://github.com/YuvalHir/Lattice.git
cd Lattice

# Install dependencies
npm install

# Run in development mode
npm run tauri dev
```

**Design Notes**:
- Code blocks with syntax highlighting (use existing Next.js setup)
- Copy-to-clipboard button for code blocks
- Platform icons (Windows, Apple, Linux)

---

### 9. CHANGELOG / VERSION HIGHLIGHTS

**Purpose**: Show active development and progress

**Headline**: "What's New"

**Content** (selected highlights from CHANGELOG.md):

#### v0.1.7 — Current
- Latest stable release

#### v0.1.5 — Windows Polish
- Prevented flash console windows when spawning background processes
- Implemented `CREATE_NO_WINDOW` flag for all internal shell commands

#### v0.1.4 — Performance
- Throttled terminal emitter (20ms) to reduce IPC pressure
- Stream-safe UTF-8 buffering to prevent garbled characters

#### v0.1.3 — Auto-Updater
- Corrected endpoint configuration for GitHub releases

#### v0.1.2 — Major Features
- **Swarm Builder**: New onboarding flow for multi-agent configuration
- **Git Integration**: Staging, commits, and diffs in the UI
- **Server Discovery**: Automatic background service detection
- **WebGL Rendering**: High-performance terminal rendering

**Link**: "[View Full Changelog →](https://github.com/YuvalHir/Lattice/blob/main/CHANGELOG.md)"

**Design Notes**:
- Timeline or vertical list with version badges
- Collapse older versions under "Show more"

---

### 10. OPEN SOURCE / COMMUNITY

**Purpose**: Encourage contributions, discussions, and community engagement

**Headline**: "Open Source. Built for the AI Agent Community."

**Content**:
"Lattice is licensed under the **MIT License** — free to use, modify, and distribute.

We welcome contributions from everyone. Whether you're fixing bugs, adding features, improving documentation, or suggesting enhancements — your input matters.

**How to Contribute:**
- **Report Bugs**: Open an issue on GitHub with steps to reproduce
- **Suggest Features**: Tag issues with `enhancement`
- **Submit PRs**: Fork, branch, code, test, and submit a pull request
- **Improve Docs**: Help us make documentation better

**Development Guidelines:**
- **Rust**: Use `cargo fmt` and `clippy`
- **Frontend**: Follow existing TypeScript patterns, use Prettier
- **Commit Messages**: We prefer [Conventional Commits](https://www.conventionalcommits.org/)

**[View Contributing Guide →](https://github.com/YuvalHir/Lattice/blob/main/CONTRIBUTING.md)**

**Design Notes**:
- GitHub-style contribution badges/icons
- Link to GitHub Discussions if enabled

---

### 11. ARCHITECTURE DEEP DIVE (Optional / Advanced Section)

**Purpose**: Attract serious developers and technical users

**Headline**: "Under the Hood"

**Content**:
"Lattice's architecture is designed for **zero-latency, high-throughput terminal orchestration**."

#### Backend (Rust)
- **Session Registry**: `Arc<Mutex<SessionRegistry>>` manages all active terminal sessions
- **I/O Pipeline**: Dedicated `tokio` tasks monitor `stdout`/`stderr` and emit raw byte streams
- **OS Bridge**: Abstracts execution between Native Windows (`cmd`/`powershell`) and WSL
- **Process Lifecycle**: Spawn → Background → Graceful termination with zombie prevention

#### Frontend (SolidJS)
- **Detached DOM Registry**: Terminals persist across tab switches without memory leaks
- **WebGL Rendering**: GPU-accelerated `xterm.js` for smooth terminal graphics
- **Fine-Grained Reactivity**: SolidJS signals update only the DOM nodes that change
- **CSS Grid Layout**: Reactive tiling calculates optimal rows/columns for 1 to 12+ sessions

#### IPC Protocol
- **Events (Backend → Frontend)**: `terminal-output`, `process-spawn`, `process-exit`
- **Commands (Frontend → Backend)**: `spawn_process`, `write_to_stdin`, `kill_process`
- **Zero-Latency**: Async Tauri events for high-frequency data streams

**Links to Documentation**:
- [Backend Architecture →](https://github.com/YuvalHir/Lattice/blob/main/docs/ARCHITECTURE_BACKEND.md)
- [Frontend Architecture →](https://github.com/YuvalHir/Lattice/blob/main/docs/ARCHITECTURE_FRONTEND.md)
- [IPC & Data Flow →](https://github.com/YuvalHir/Lattice/blob/main/docs/ARCHITECTURE_IPC_AND_DATA.md)

---

### 12. FOOTER

**Content**:
- **Logo** + "Lattice"
- **Tagline**: "Built with ❤️ for the AI Agent Community"
- **Links**:
  - GitHub Repository
  - Releases
  - Documentation
  - Contributing Guide
  - Changelog
  - License (MIT)
- **Badges**:
  - GitHub stars badge
  - License badge (MIT)
  - Tauri badge
  - Rust badge
  - SolidJS badge
- **Copyright**: "© 2026 YuvalHir. Released under the MIT License."

---

## Asset Inventory

### Images to Include (from `agenticide/docs/`)

#### Screenshots (`screenshots/` folder)
1. `workspace.webp` — Main workspace view
2. `swarmlauncher.webp` — Swarm builder UI
3. `servermanager.webp` — Server management panel
4. `sourcecontrol.webp` — Git source control panel
5. `themes.webp` — Theme showcase
6. `workspace.png` — Alternate workspace screenshot
7. `swarmlauncher.png` — Alternate swarm launcher screenshot
8. `servermanager.png` — Alternate server manager screenshot
9. `sourcecontrol.png` — Alternate source control screenshot
10. `themes.png` — Alternate themes screenshot

#### GIFs (`gifs/` folder)
1. `launchworkspace.gif` — Animated: launching a workspace
2. `agentsplit.gif` — Animated: splitting terminals
3. `themeswitch.gif` — Animated: switching themes
4. `workspacehistory.gif` — Animated: workspace history

#### Other Assets
1. `social-preview.svg` — Social media preview image
2. `../src/assets/logo.svg` — Lattice logo (SVG)

### Note for Gemini (Website Builder)
- All image paths should be relative to `agenticide/docs/`
- Copy all images to `LatticeWeb/public/` or `LatticeWeb/public/docs/`
- Reference images in Next.js using `/docs/filename.ext` paths

---

## Technical Implementation Notes (For Gemini)

### Framework
- **Next.js 16** (already set up in LatticeWeb)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

### Recommended Libraries
- **Lucide React** or **Heroicons** — For icons
- **Framer Motion** or **GSAP** — For scroll animations and transitions
- **React Syntax Highlighter** — For code blocks
- **Next/Image** — For optimized image loading

### Page Structure
```
app/
├── layout.tsx          # Root layout (keep as-is)
├── page.tsx            # Main landing page (build here)
├── globals.css         # Global styles + Tailwind config
└── components/         # Section components
    ├── Hero.tsx
    ├── ProblemStatement.tsx
    ├── Features.tsx
    ├── FeatureCard.tsx
    ├── ScreenshotGallery.tsx
    ├── TechStack.tsx
    ├── ThemesShowcase.tsx
    ├── KeyboardShortcuts.tsx
    ├── GettingStarted.tsx
    ├── Changelog.tsx
    ├── OpenSource.tsx
    └── Footer.tsx
```

### Performance Considerations
- Use Next.js `<Image>` component for all screenshots
- Lazy load GIFs (load on scroll into viewport)
- Use `loading="lazy"` on images below the fold
- Compress images before deployment
- Consider using WebP format (already available)

### SEO & Metadata
```html
<title>Lattice — Multiplexed Workspace for AI Agent Swarms</title>
<meta name="description" content="Lattice is a free, open-source, high-performance multiplexed orchestration environment for parallel AI agent swarms. Run Claude, Gemini, Codex, and more in a perfectly tiled terminal grid." />
<meta property="og:image" content="/docs/social-preview.svg" />
<meta property="og:title" content="Lattice — Orchestrate AI Swarms at Zero Latency" />
<meta property="og:description" content="Free, open-source multiplexed workspace for AI agent swarms. Built with Rust + SolidJS + Tauri." />
```

### Accessibility
- All interactive elements must be keyboard-accessible
- Use proper ARIA labels on images and icons
- Ensure sufficient color contrast (WCAG AA minimum)
- Test with screen readers

---

## Content Checklist

### Must-Have Content
- [x] Product name: Lattice
- [x] Version: v0.1.7
- [x] License: MIT (free, open-source)
- [x] Tagline / Value proposition
- [x] Problem statement (why it exists)
- [x] 9 key features (detailed above)
- [x] Tech stack breakdown
- [x] 6 themes showcase
- [x] Keyboard shortcuts
- [x] Download instructions (Users)
- [x] Build from source instructions (Developers)
- [x] Changelog highlights
- [x] Contributing guide
- [x] Architecture deep dive
- [x] GitHub links (repo, releases, issues)
- [x] Author credit: YuvalHir
- [x] All screenshots and GIFs

### Optional Enhancements
- [ ] Video embed (if a demo video exists)
- [ ] Testimonials / quotes (if available)
- [ ] "Star on GitHub" call-to-action with star count
- [ ] Newsletter signup (if mailing list exists)
- [ ] Discord/Slack community link (if available)

---

## Color Palette Reference

### Primary Palette
- Electric Cyan: `#00E5FF`
- Vivid Violet: `#7000FF`
- Neon Mint: `#00FF9C`
- Deep Slate: `#0F172A`
- Terminal Black: `#0C0C0C`

### Theme Colors (for Themes Showcase section)
- GitHub Dark: `#0D1117` background
- Dracula: `#282A36` background
- Monokai: `#272822` background
- Nord: `#2E3440` background
- One Dark: `#282C34` background
- GitHub Light: `#FFFFFF` background

---

## Links Reference

### GitHub URLs
- Repository: `https://github.com/YuvalHir/Lattice`
- Releases: `https://github.com/YuvalHir/Lattice/releases`
- Issues: `https://github.com/YuvalHir/Lattice/issues`
- Contributing: `https://github.com/YuvalHir/Lattice/blob/main/CONTRIBUTING.md`
- Changelog: `https://github.com/YuvalHir/Lattice/blob/main/CHANGELOG.md`
- Backend Architecture: `https://github.com/YuvalHir/Lattice/blob/main/docs/ARCHITECTURE_BACKEND.md`
- Frontend Architecture: `https://github.com/YuvalHir/Lattice/blob/main/docs/ARCHITECTURE_FRONTEND.md`
- IPC & Data Flow: `https://github.com/YuvalHir/Lattice/blob/main/docs/ARCHITECTURE_IPC_AND_DATA.md`
- License: `https://github.com/YuvalHir/Lattice/blob/main/LICENSE`
- Author: `https://github.com/YuvalHir`

### External Links
- Tauri: `https://tauri.app/`
- Rust: `https://www.rust-lang.org/`
- SolidJS: `https://www.solidjs.com/`
- xterm.js: `https://xtermjs.org/`
- MIT License: `https://opensource.org/licenses/MIT`
- Conventional Commits: `https://www.conventionalcommits.org/en/v1.0.0/`

---

## Final Notes for Gemini

1. **This is a FREE, open-source project** — emphasize accessibility, community, and zero cost
2. **Target audience**: AI engineers, developers, prompt engineers, anyone running multiple AI coding agents simultaneously
3. **Tone**: Professional, technical, but welcoming
4. **Visual priority**: Show the product working (screenshots + GIFs are critical)
5. **Performance messaging**: Emphasize "zero-latency", "Rust-powered", "high-performance"
6. **Call to action**: Download → Try it → Star on GitHub → Contribute
7. **Keep it to one long scrolling page** — modern, clean, no navigation needed (single-page marketing site)
8. **Dark theme by default** — matches the terminal/developer aesthetic

Good luck building! 🚀
