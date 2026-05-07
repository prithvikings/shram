"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, Variants } from "motion/react";
import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
  RedditIcon,
} from "hugeicons-react";

// ==========================================
// 1. SHARED DATA & ICONS
// ==========================================
const pricingPlans = [
  {
    name: "TEST",
    price: "$0",
    description: "Get started with local tracking folder",
    features: [
      "1k chats/months",
      "10k background scans/day",
      "Unlimited tracks & drafts",
      "Free multi-thread catchups ",
      "Basic support",
      "Slack plugin (free)",
    ],
    buttonText: "Get Shram.ai",
    primary: false,
  },
  {
    name: "PRO",
    price: "$19",
    period: "/mo.",
    description: "For freelancers managing multiple chats",
    features: [
      "3k chats/months",
      "100k background scans/day",
      "Unlimited tracks & drafts",
      "Free multi-thread catchups ",
      "Priority support",
      "All plugins (WhatsApp, Telegram, Discord, Notion, Linear, X)",
    ],
    buttonText: "Get Shram.ai Pro",
    primary: true,
  },
  {
    name: "TEAMS",
    price: "$399",
    period: "/mo.",
    description: "For agencies and high volume chats",
    features: [
      "80k chats/months",
      "20m background scans/day",
      "Unlimited tracks & drafts",
      "Free multi-thread catchups ",
      "Dedicated support",
      "Gmail, Outlook, Zendesk CRM sync",
    ],
    buttonText: "Get Shram.ai Teams",
    primary: false,
  },
];

const faqs = [
  {
    q: "What counts as a track?",
    a: "A track is counted whenever Shram successfully identifies a cold conversation that requires a follow-up or reply. Background monitoring itself does not consume tracks.",
  },
  {
    q: "What counts as a scanned chat?",
    a: "A scanned chat is a single conversation thread (e.g., a WhatsApp chat, an email chain, or a Slack channel) that Shram reads to maintain context and history.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will be pro-rated and applied to your next billing cycle.",
  },
  {
    q: "What happens if I exceed my chat limits?",
    a: "If you exceed your plan limits, you will be billed standard overage rates for the extra volume. We will always notify you before you hit your limit.",
  },
  {
    q: "Is there a commitment or contract?",
    a: "No, all standard plans are month-to-month. You can cancel anytime. Custom Enterprise plans may have annual contracts based on volume.",
  },
  {
    q: "What plugins are included with Pro?",
    a: "The Pro plan includes all premium integrations out-of-the-box, including WhatsApp, Telegram, Discord, Notion, Linear, X, and priority sync options.",
  },
];

const footerLinks = {
  Product: ["App", "Add-ons", "Pricing", "Changelog"],
  Resources: ["User Manuals ", "Blog", "Case study"],
  Company: ["About", "Careers", "Privacy", "Terms"],
};

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// ==========================================
// 3.5 THEME TOGGLE BUTTON
// ==========================================
// ==========================================
// 3.5 THEME TOGGLE BUTTON (SWITCH STYLE)
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

// ==========================================
// 2. SHARED ANIMATION VARIANTS
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
// 3. SUB-COMPONENTS
// ==========================================

const HeroSection = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="py-24 px-6 text-center max-md:py-16 max-md:px-4"
  >
    <motion.div
      variants={fadeUpItem}
      className="text-xs font-dmmono tracking-widest text-zinc-500 dark:text-zinc-400 font-medium mb-6 uppercase max-md:mb-4 transition-colors duration-300"
    >
      Pricing
    </motion.div>
    <motion.h1
      variants={fadeUpItem}
      className="text-5xl md:text-6xl font-heading font-medium tracking-tight mb-6 max-sm:text-4xl max-sm:leading-tight text-zinc-900 dark:text-zinc-50 transition-colors duration-300"
    >
      Stop forgetting your replies.
    </motion.h1>
    <motion.p
      variants={fadeUpItem}
      className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 max-sm:text-base max-sm:px-2 transition-colors duration-300"
    >
      One simple subscription covers everything — trackers, drafting agents, and
      app syncing. No hidden costs, no per-message fees ever.
    </motion.p>

    <motion.div
      variants={fadeUpItem}
      className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300 max-sm:flex-col max-sm:items-start max-sm:w-fit max-sm:mx-auto max-sm:gap-3 transition-colors duration-300"
    >
      <div className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-500 transition-colors duration-300" />{" "}
        Unlimited history
      </div>
      <div className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-500 transition-colors duration-300" />{" "}
        Unlimited syncs
      </div>
      <div className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-500 transition-colors duration-300" />{" "}
        Free auto drafting included
      </div>
      <div className="text-zinc-400 dark:text-zinc-500 max-sm:pl-6 transition-colors duration-300">
        — in every plan
      </div>
    </motion.div>
  </motion.section>
);

const PricingGrid = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-300 dark:border-zinc-800 transition-colors duration-300"
  >
    {pricingPlans.map((plan, index) => (
      <motion.div
        variants={fadeUpItem}
        key={plan.name}
        className={`flex flex-col p-8 max-md:p-6 transition-colors duration-300 ${
          index !== 2
            ? "border-b md:border-b-0 md:border-r border-zinc-300 dark:border-zinc-800"
            : ""
        }`}
      >
        <div className="text-xs font-dmmono tracking-widest text-zinc-500 dark:text-zinc-400 font-medium mb-4 uppercase transition-colors duration-300">
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl font-heading font-medium tracking-tight max-sm:text-4xl text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-zinc-500 dark:text-zinc-400 font-medium transition-colors duration-300">
              {plan.period}
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 min-h-[40px] max-md:min-h-0 max-md:mb-6 transition-colors duration-300">
          {plan.description}
        </p>

        <ul className="flex-1 space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
            >
              <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-zinc-900 dark:text-zinc-100 transition-colors duration-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          {plan.primary ? (
            <button className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-medium py-2.5 px-4 shadow-sm transition-all duration-300 ease-in-out hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-md active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 cursor-pointer w-full">
              <span className="relative z-10">{plan.buttonText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-zinc-50 dark:group-hover:text-zinc-900"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <div className="absolute inset-0 pointer-events-none border border-white/10 dark:border-black/10 rounded-md"></div>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.1),_transparent_60%)] mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
          ) : (
            <button className="group w-full rounded-md text-sm font-medium py-2.5 px-4 border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 transition-all duration-300 ease-in-out hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 cursor-pointer flex items-center justify-center gap-2">
              <span>{plan.buttonText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-50"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          )}

          <div className="text-center mt-3 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer transition-colors duration-300">
            Or try the web demo app →
          </div>
        </div>
      </motion.div>
    ))}
  </motion.section>
);

const EnterpriseSection = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="grid grid-cols-1 lg:grid-cols-2 border-t border-zinc-300 dark:border-zinc-800 transition-colors duration-300"
  >
    {/* Enterprise Left */}
    <motion.div
      variants={fadeUpItem}
      className="p-8 lg:border-r border-zinc-300 dark:border-zinc-800 border-b lg:border-b-0 flex flex-col max-md:p-6 transition-colors duration-300"
    >
      <div className="text-xs font-dmmono tracking-widest text-zinc-500 dark:text-zinc-400 font-medium mb-4 uppercase transition-colors duration-300">
        ENTERPRISE
      </div>
      <h2 className="text-4xl font-heading font-medium tracking-tight mb-4 max-sm:text-3xl text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        Custom
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 max-md:mb-6 transition-colors duration-300">
        Custom integrations with your internal stack.
      </p>

      <ul className="space-y-4 mb-10 flex-1 max-md:mb-8">
        {[
          "Unlimited tracks",
          "Unlimited background run",
          "Dedicated account manager",
          "Custom integrations & SSO",
        ].map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
          >
            <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-zinc-900 dark:text-zinc-100 transition-colors duration-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Enterprise Left Button: Premium Secondary Style */}
      <button className="group w-full rounded-md text-sm font-medium py-2.5 px-4 border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 transition-all duration-300 ease-in-out hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 cursor-pointer flex items-center justify-center gap-2">
        <span>Talk to Founder</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-50"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </motion.div>

    {/* Overage Right */}
    <motion.div
      variants={fadeUpItem}
      className="p-8 flex flex-col justify-between bg-zinc-50/50 dark:bg-zinc-900/30 max-md:p-6 transition-colors duration-300"
    >
      <div>
        <div className="text-xs font-dmmono tracking-widest text-zinc-500 dark:text-zinc-400 font-medium mb-6 uppercase max-md:mb-4 transition-colors duration-300">
          OVERAGE • PRO & TEAMS
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 max-sm:gap-3">
          <div className="border border-zinc-300 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900 max-sm:p-3 transition-colors duration-300">
            <div className="text-2xl font-medium tracking-tight max-sm:text-xl text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
              $0.01
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">
              per 1,000 tracks
            </div>
          </div>
          <div className="border border-zinc-300 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900 max-sm:p-3 transition-colors duration-300">
            <div className="text-2xl font-medium tracking-tight max-sm:text-xl text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
              $0.10
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">
              per 1,000 threads
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          Only charged when you exceed your plan limits. No surprises.
        </p>
      </div>

      <div className="mt-8 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-md:p-4 max-md:mt-6 transition-colors duration-300">
        <div>
          <div className="font-medium text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            Startup Program
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">
            $1,000 in credits · Dedicated support · 6 months of tracks
          </div>
        </div>
        {/* Enterprise Right Button: Premium Primary Style */}
        <button className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-medium py-2 px-4 shadow-sm transition-all duration-300 ease-in-out hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-md active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 cursor-pointer shrink-0 max-sm:w-full">
          <span className="relative z-10">Apply now</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-zinc-50 dark:group-hover:text-zinc-900"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <div className="absolute inset-0 pointer-events-none border border-white/10 dark:border-black/10 rounded-md"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.1),_transparent_60%)] mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
      </div>
    </motion.div>
  </motion.section>
);
const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-24 px-6 border-t border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 max-md:py-16 max-md:px-4 transition-colors duration-300"
    >
      <motion.div
        variants={fadeUpItem}
        className="text-center mb-12 max-md:mb-8"
      >
        <h2 className="text-3xl font-heading font-medium tracking-tight mb-3 max-sm:text-2xl text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
          Frequently asked questions
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-sm:text-sm transition-colors duration-300">
          Everything you need to know about our pricing.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpItem}
        className="max-w-3xl mx-auto border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
      >
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className="border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-5 cursor-pointer group text-left focus:outline-none max-md:py-4"
              >
                <span className="text-zinc-700 dark:text-zinc-300 font-medium group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300 max-sm:text-sm max-sm:pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-all duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}
                >
                  <PlusIcon />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pr-8 max-md:pb-4 max-md:pr-2 transition-colors duration-300">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

const CTASection = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    className="py-24 px-6 text-center border-t border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 max-md:py-16 max-md:px-4 transition-colors duration-300"
  >
    <motion.h2
      variants={fadeUpItem}
      className="text-3xl font-heading font-medium tracking-tight mb-4 max-sm:text-2xl text-zinc-900 dark:text-zinc-50 transition-colors duration-300"
    >
      Ready to get started?
    </motion.h2>
    <motion.p
      variants={fadeUpItem}
      className="text-zinc-500 dark:text-zinc-400 mb-8 max-sm:text-sm max-md:mb-6 transition-colors duration-300"
    >
      Start free with 1k tracks. No credit card required.
    </motion.p>
    <motion.div
      variants={fadeUpItem}
      className="flex flex-wrap justify-center gap-4 max-sm:flex-col max-sm:gap-3 max-w-sm mx-auto"
    >
      {/* Premium Primary Button */}
      <button className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-medium py-2.5 pl-6 pr-5 shadow-sm transition-all duration-300 ease-in-out hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-md active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 cursor-pointer max-sm:w-full">
        <span className="relative z-10">Start Tracking</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-zinc-50 dark:group-hover:text-zinc-900"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        {/* Inner subtle border for depth */}
        <div className="absolute inset-0 pointer-events-none border border-white/10 dark:border-black/10 rounded-md"></div>
        {/* Radial gradient hover effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.1),_transparent_60%)] mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </button>

      {/* Premium Secondary Button */}
      <button className="rounded-md text-sm font-medium py-2.5 px-6 text-zinc-600 dark:text-zinc-400 transition-all duration-300 ease-in-out hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 cursor-pointer max-sm:w-full max-sm:justify-center max-sm:border max-sm:border-zinc-300 dark:max-sm:border-zinc-800">
        Talk to Sales
      </button>
    </motion.div>
  </motion.section>
);
const FooterSection = () => (
  <motion.footer
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="pt-16 pb-8 px-8 border-t border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 max-md:pt-12 max-md:px-6 transition-colors duration-300"
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
// 4. MAIN WRAPPER COMPONENT
// ==========================================
const Pricing = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300">
      <main className="max-w-6xl mx-auto border-t-0 border-x border-zinc-300 dark:border-zinc-800 max-md:border-x-0 overflow-hidden transition-colors duration-300">
        <HeroSection />
        <PricingGrid />
        <EnterpriseSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Pricing;
