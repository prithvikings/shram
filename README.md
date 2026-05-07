# 🦕 Shram.ai — The Ultimate Memory Autopilot

**Stop forgetting to reply to people.** Shram quietly monitors your chats and emails, and when someone needs a response or a meeting, it drafts the perfect reply instantly.

[**Live Demo**](https://shram-five.vercel.app/) • [**GitHub Repository**](https://github.com/prithvikings/shram)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=for-the-badge&logo=framer)](https://motion.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

## ✨ Overview

Shram.ai is a premium productivity platform designed to eliminate the mental overhead of message management. It acts as your **Personal Memory Layer**, ensuring zero missed messages or meetings by auto-drafting responses across your entire communication stack.

### Key Capabilities

- **🧠 MemoryLayer™:** A state-of-the-art autopilot tracker for busy workflows that notices when conversations "die" and flags them for follow-up.
- **🔍 Context Finder:** Silently scans WhatsApp, Slack, and Email threads to extract commitments and tasks before they fall through the cracks.
- **⚡ Flawless Auto-Drafting:** Analyzes past messages and specific promises to generate human-sounding replies for your approval in one click.
- **🔗 Deep Integrations:** Seamlessly links with WhatsApp, Slack, Telegram, Discord, Notion, Linear, X, Gmail, and Outlook.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4.0 (Utilizing modern CSS-first approach)
- **Animations:** `motion/react` (Framer Motion) for buttery smooth physics-based transitions.
- **State Management:** React Context & Hooks
- **Type Safety:** TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prithvikings/shram.git
   cd shram
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

Shram.ai follows a strict **"Buttery Smooth"** aesthetic:

- **Zero Layout Shifts:** Proactive prevention of jumping content using Framer Motion's `layout` props and fixed containers.
- **Staggered Orchestration:** Cascading "waterfall" animations that guide the user's eye naturally.
- **Contextual Interactions:** Micro-interactions (hovers, clicks) designed as physical state machines for a premium, native-app feel.
- **Modern Typography:** Optimized loading of Geist, Gilroy, and Space Grotesk fonts.

## 📁 Project Structure

- `/app`: Next.js App Router (Pages, Layouts, and API routes).
- `/components`: Premium UI components built with Radix UI and Framer Motion.
- `/public`: High-quality assets and custom local fonts.
- `/lib`: Core utilities, animation variants, and theme providers.

---

Built with ❤️ by the Shram.ai Team.
