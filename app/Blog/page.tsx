"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, Variants } from "motion/react";
import { Navbar } from "../components/Navbar";
import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
  RedditIcon,
} from "hugeicons-react";

// ==========================================
// DATA
// ==========================================
const filterCategories = [
  "All",
  "Showcase",
  "Product Ops",
  "Client Win",
  "News",
  "Insights",
];

const textOnlyPosts = [
  {
    category: "NEWS",
    title:
      "Empowering the Next Generation of Agencies: shram.ai Partner Program",
    excerpt:
      "If there’s one thing we’ve learned while building shram.ai, it’s that busy...",
    date: "31 Dec 2025",
  },
  {
    category: "NEWS",
    title: "shram.ai raises $3 million with the best memory engine for task",
    excerpt:
      "Today, I am excited to announce our first funding round to accelerate our product...",
    date: "06 Oct 2025",
  },
  {
    category: "CLIENT WIN",
    title: "Task vs shram.ai: Why Scale AI Switched And What’s Better For You?",
    excerpt:
      "“Task was not great. Glad to have found shram.ai” That’s how Zaid...",
    date: "02 Oct 2025",
  },
  {
    category: "PRODUCT OPS",
    title: "Architecting a memory engine inspired by the busy agency",
    excerpt:
      "Tracking is at the heart of productivity, but what truly powers meaningful...",
    date: "05 Jun 2025",
  },
];

const featuredPost = {
  category: "PRODUCT OPS",
  title: "Introducing @shram.ai/syncs v2.0.0",
  excerpt:
    "Today we're releasing v2.0.0. This release unifies the app across all tracking sdk integrations from AI CRM to Notion, makes conversation identity a first-class concept, and ships with...",
  date: "27 Apr 2026 · 5 min read",
  gradient: "from-blue-50 to-white dark:from-blue-950/30 dark:to-zinc-900",
};

const imagePosts = [
  {
    category: "PRODUCT OPS",
    title: "Switching Tasker Infrastructure",
    excerpt:
      "Most teams don’t even consider switching tasker infrastructure. And it’s not because of...",
    date: "09 Apr 2026 · 3 min read",
    gradient:
      "from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/20",
  },
  {
    category: "PRODUCT OPS",
    title: "shram.ai will make your Slack channel crazy powerful",
    excerpt:
      "Today, we are launching shram.ai support to your Slack channel TLDR: you can use...",
    date: "07 Apr 2026 · 6 min read",
    gradient: "from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-700",
  },
  {
    category: "PRODUCT OPS",
    title: "Solving the Precision-Recall Tradeoff: Thread Result Aggregation",
    excerpt:
      "When you're building memory for AI, thread is your foundational layer. The way thread generally work...",
    date: "07 Apr 2026 · 3 min read",
    gradient: "from-zinc-900 to-black dark:from-zinc-800 dark:to-zinc-950",
  },
  {
    category: "NEWS",
    title: "We broke the frontier in chats memory: To prove a point.",
    excerpt:
      "Read the follow up here! https://x.com/DhravyaShah/status/20362439955...",
    date: "22 Mar 2026 · 5 min read",
    gradient:
      "from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800",
  },
  {
    category: "PRODUCT OPS",
    title: "Infinitely running stateful agency setups",
    excerpt:
      "We built a plugin for WhatsApp Web and Telegrams that gives your agency setup persistent memory. I...",
    date: "19 Feb 2026 · 5 min read",
    gradient: "from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500",
  },
  {
    category: "NEWS",
    title:
      "Why everyone is complaining about Zapier Bot's memory (it sucks) - and...",
    excerpt:
      "TLDR: Today, we are releasing a new version of our slack bot plugin -...",
    date: "19 Feb 2026 · 4 min read",
    gradient: "from-red-600 to-red-800 dark:from-red-700 dark:to-red-900",
  },
  {
    category: "PRODUCT OPS",
    title: "We added shram.ai to Slack Inbox. It's INSANELY powerful now...",
    excerpt:
      "Today, we are launching the shram.ai plugin for Slack Inbox! TLDR: You can use shram.ai...",
    date: "30 Jan 2026 · 4 min read",
    gradient:
      "from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700",
  },
  {
    category: "NEWS",
    title: "Zapier / Make bot's memory SUCKS. We gave it shram.ai.",
    excerpt:
      "I'm the founder of shram.ai. Zapier/Make bot is blowing up right now, with many, many use...",
    date: "28 Jan 2026 · 2 min read",
    gradient: "from-zinc-900 to-zinc-700 dark:from-zinc-800 dark:to-zinc-600",
  },
  {
    category: "NEWS",
    title: "AI's next big thing: auto-drafting and (super)tracking.",
    excerpt:
      "You are probably thinking of AI drafts in the wrong way. Over the last few years, we've all seen ...",
    date: "24 Jan 2026 · 6 min read",
    gradient: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
  },
  {
    category: "NEWS",
    title:
      "Faster, smarter, reliable infinite sync: shram.ai IS context engineering.",
    excerpt:
      "People are obsessed with taskers and taskers engineering. Sure, what you say is important, but...",
    date: "09 Jul 2025 · 4 min read",
    gradient: "from-blue-50 to-white dark:from-blue-900/30 dark:to-zinc-900",
  },
  {
    category: "PRODUCT OPS",
    title: "We solved AI App interoperability",
    excerpt:
      "One app to rule them all, One spec to find them, One platform to bring them all and in the TypeScrip...",
    date: "07 Jul 2025 · 7 min read",
    gradient: "from-blue-50 to-white dark:from-blue-900/30 dark:to-zinc-900",
  },
  {
    category: "PRODUCT OPS",
    title: "2 Approaches For Extending Context Tracking in CRMs",
    excerpt:
      "Integration-based large tracking layers have become the poster boys of modern AI, yet they...",
    date: "04 Jul 2025 · 9 min read",
    gradient:
      "from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20",
  },
];

const footerLinks = {
  Product: ["App", "Add-ons", "Pricing", "Changelog"],
  Resources: ["User Manuals ", "Blog", "Case study"],
  Company: ["About", "Careers", "Privacy", "Terms"],
};

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Buttery Apple-style easing
    },
  },
};

// ==========================================
// SUB-COMPONENTS
// ==========================================
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-100 dark:focus-visible:ring-offset-zinc-950 bg-zinc-200 dark:bg-zinc-700"
    >
      <span className="sr-only">Toggle theme</span>

      {/* The sliding "thumb" of the switch */}
      <span
        className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {/* Sun Icon (Visible when light) */}
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </span>

        {/* Moon Icon (Visible when dark) */}
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-zinc-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </span>
      </span>
    </button>
  );
};

const FooterSection = () => (
  <motion.footer
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="pt-16 pb-8 px-8 border-t border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 max-md:pt-12 max-md:px-6 transition-colors duration-300 mt-auto"
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-md:gap-y-10 max-md:mb-12">
      {Object.entries(footerLinks).map(([title, links]) => (
        <motion.div variants={fadeUpItem} key={title}>
          <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 dark:text-zinc-100 font-bold mb-4 uppercase transition-colors duration-300">
            {title}
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.div variants={fadeUpItem}>
        <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 dark:text-zinc-100 font-bold mb-4 uppercase transition-colors duration-300">
          CONNECT
        </h4>
        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <NewTwitterRectangleIcon />
          </div>
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <Github01Icon />
          </div>
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <Linkedin01Icon />
          </div>
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <RedditIcon />
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      variants={fadeUpItem}
      className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 max-md:items-start max-md:pt-6 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 text-xl font-heading font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <Image
          src="/logo.png"
          alt="Logo"
          className="object-cover dark:invert transition-all"
          width={32}
          height={32}
        />
        Shram.ai
      </div>
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
        <div className="text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          © 2026 Shram.ai Inc. All rights reserved.
        </div>
        <ThemeToggle />
      </div>
    </motion.div>
  </motion.footer>
);

// ==========================================
// MAIN PAGE
// ==========================================
const Blog = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-zinc-950 w-full min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <div className="max-w-6xl mx-auto border-x border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 min-h-screen flex flex-col transition-colors duration-300">
        {/* Hero Section */}
        <div className="pt-24 pb-16 px-6 text-center transition-colors duration-300">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-900 dark:text-zinc-50 transition-colors duration-300"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            <h1 className="text-5xl font-bold font-space tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
              shram.ai
            </h1>
          </div>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-dmmono tracking-tight max-w-2xl mx-auto transition-colors duration-300">
            How we build shram.ai - best tracking tool on the planet.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 px-6 mb-10">
          {filterCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 text-sm border font-space transition-colors duration-300 ${
                idx === 0
                  ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-600 dark:border-blue-600"
                  : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              } ${idx !== 0 ? "-ml-[1px]" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Text-Only Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mb-8">
          {textOnlyPosts.map((post, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900/50 hover:shadow-md dark:hover:bg-zinc-800/80 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <span className="text-[10px] font-dmmono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 transition-colors duration-300">
                {post.category}
              </span>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-snug font-space transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                {post.excerpt}
              </p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-dmmono transition-colors duration-300">
                {post.date}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Post (Full Width Split) */}
        <div className="px-6 mb-8">
          <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-md dark:hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer flex flex-col md:flex-row overflow-hidden min-h-[300px]">
            {/* Left side text */}
            <div className="w-full md:w-[45%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-center transition-colors duration-300">
              <span className="text-[10px] font-dmmono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 transition-colors duration-300">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 font-space tracking-tight transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed transition-colors duration-300">
                {featuredPost.excerpt}
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-dmmono transition-colors duration-300">
                {featuredPost.date}
              </p>
            </div>
            {/* Right side Image Abstract Placeholder */}
            <div
              className={`w-full md:w-[55%] bg-gradient-to-br ${featuredPost.gradient} p-8 flex items-center justify-center relative transition-colors duration-300`}
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
                style={{
                  backgroundImage:
                    "radial-gradient(currentColor 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  color: "var(--tw-prose-body, currentColor)",
                }}
              ></div>
              <div className="text-zinc-900/10 dark:text-white/10 font-bold text-9xl absolute -right-10 -bottom-10 rotate-12 select-none transition-colors duration-300">
                v2
              </div>
            </div>
          </div>
        </div>

        {/* Image Posts Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-24">
          {imagePosts.map((post, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-md dark:hover:bg-zinc-800/80 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Image Placeholder */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center transition-colors duration-300`}
              >
                <div
                  className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
                  style={{
                    backgroundImage:
                      "radial-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    color: "white",
                  }}
                ></div>
                <span className="text-white/40 dark:text-white/30 font-space font-bold text-3xl px-6 text-center select-none leading-none transition-colors duration-300">
                  {post.title.split(" ")[0]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                {post.category && (
                  <span className="text-[10px] font-dmmono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 transition-colors duration-300">
                    {post.category}
                  </span>
                )}
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-snug font-space transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                  {post.excerpt}
                </p>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-dmmono transition-colors duration-300">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- REPLACED STATIC FOOTER WITH PREMIUM FOOTER SECTION --- */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Blog;
