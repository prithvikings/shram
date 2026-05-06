"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-6 uppercase max-md:mb-4"
    >
      Pricing
    </motion.div>
    <motion.h1
      variants={fadeUpItem}
      className="text-5xl md:text-6xl font-heading font-medium tracking-tight mb-6 max-sm:text-4xl max-sm:leading-tight"
    >
      Stop forgetting your replies.
    </motion.h1>
    <motion.p
      variants={fadeUpItem}
      className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 max-sm:text-base max-sm:px-2"
    >
      One simple subscription covers everything — trackers, drafting agents, and
      app syncing. No hidden costs, no per-message fees ever.
    </motion.p>

    <motion.div
      variants={fadeUpItem}
      className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-700 max-sm:flex-col max-sm:items-start max-sm:w-fit max-sm:mx-auto max-sm:gap-3"
    >
      <div className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4 text-emerald-600" /> Unlimited history
      </div>
      <div className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4 text-emerald-600" /> Unlimited syncs
      </div>
      <div className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4 text-emerald-600" /> Free auto drafting
        included
      </div>
      <div className="text-zinc-400 max-sm:pl-6">— in every plan</div>
    </motion.div>
  </motion.section>
);

const PricingGrid = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-300"
  >
    {pricingPlans.map((plan, index) => (
      <motion.div
        variants={fadeUpItem}
        key={plan.name}
        className={`flex flex-col p-8 max-md:p-6 ${
          index !== 2
            ? "border-b md:border-b-0 md:border-r border-zinc-300"
            : ""
        }`}
      >
        <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-4 uppercase">
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-5xl font-heading font-medium tracking-tight max-sm:text-4xl">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-zinc-500 font-medium">{plan.period}</span>
          )}
        </div>
        <p className="text-sm text-zinc-600 mb-8 min-h-[40px] max-md:min-h-0 max-md:mb-6">
          {plan.description}
        </p>

        <ul className="flex-1 space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-zinc-700"
            >
              <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-zinc-900" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <button
            className={`w-full py-2.5 px-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 ${
              plan.primary
                ? "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
                : "border border-zinc-300 bg-white/50 text-zinc-800 hover:bg-zinc-100"
            }`}
          >
            {plan.buttonText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <div className="text-center mt-3 text-xs text-zinc-400 hover:text-zinc-600 cursor-pointer transition-colors">
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
    className="grid grid-cols-1 lg:grid-cols-2 border-t border-zinc-300"
  >
    {/* Enterprise Left */}
    <motion.div
      variants={fadeUpItem}
      className="p-8 lg:border-r border-zinc-300 border-b lg:border-b-0 flex flex-col max-md:p-6"
    >
      <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-4 uppercase">
        ENTERPRISE
      </div>
      <h2 className="text-4xl font-heading font-medium tracking-tight mb-4 max-sm:text-3xl">
        Custom
      </h2>
      <p className="text-sm text-zinc-600 mb-8 max-md:mb-6">
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
            className="flex items-start gap-3 text-sm text-zinc-700"
          >
            <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-zinc-900" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-2.5 px-4 border border-zinc-300 bg-white/50 text-zinc-800 hover:bg-zinc-100 transition-colors font-medium rounded-sm flex items-center justify-center gap-2">
        Talk to Founder
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </motion.div>

    {/* Overage Right */}
    <motion.div
      variants={fadeUpItem}
      className="p-8 flex flex-col justify-between bg-zinc-50/50 max-md:p-6"
    >
      <div>
        <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-6 uppercase max-md:mb-4">
          OVERAGE • PRO & TEAMS
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 max-sm:gap-3">
          <div className="border border-zinc-300 p-4 bg-white max-sm:p-3">
            <div className="text-2xl font-medium tracking-tight max-sm:text-xl">
              $0.01
            </div>
            <div className="text-xs text-zinc-500 mt-1">per 1,000 tracks</div>
          </div>
          <div className="border border-zinc-300 p-4 bg-white max-sm:p-3">
            <div className="text-2xl font-medium tracking-tight max-sm:text-xl">
              $0.10
            </div>
            <div className="text-xs text-zinc-500 mt-1">per 1,000 threads</div>
          </div>
        </div>
        <p className="text-xs text-zinc-500">
          Only charged when you exceed your plan limits. No surprises.
        </p>
      </div>

      <div className="mt-8 border border-zinc-300 bg-zinc-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-md:p-4 max-md:mt-6">
        <div>
          <div className="font-medium text-zinc-900">Startup Program</div>
          <div className="text-xs text-zinc-500 mt-1">
            $1,000 in credits · Dedicated support · 6 months of tracks
          </div>
        </div>
        <button className="bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shrink-0 rounded-sm max-sm:w-full">
          Apply now
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
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
      className="py-24 px-6 border-t border-zinc-300 bg-white max-md:py-16 max-md:px-4"
    >
      <motion.div
        variants={fadeUpItem}
        className="text-center mb-12 max-md:mb-8"
      >
        <h2 className="text-3xl font-heading font-medium tracking-tight mb-3 max-sm:text-2xl">
          Frequently asked questions
        </h2>
        <p className="text-zinc-500 max-sm:text-sm">
          Everything you need to know about our pricing.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpItem}
        className="max-w-3xl mx-auto border-t border-zinc-200"
      >
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div key={index} className="border-b border-zinc-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-5 cursor-pointer group text-left focus:outline-none max-md:py-4"
              >
                <span className="text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors max-sm:text-sm max-sm:pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-zinc-400 group-hover:text-zinc-900 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}
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
                    <div className="pb-6 text-sm text-zinc-500 leading-relaxed pr-8 max-md:pb-4 max-md:pr-2">
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
    className="py-24 px-6 text-center border-t border-zinc-300 bg-zinc-50 max-md:py-16 max-md:px-4"
  >
    <motion.h2
      variants={fadeUpItem}
      className="text-3xl font-heading font-medium tracking-tight mb-4 max-sm:text-2xl"
    >
      Ready to get started?
    </motion.h2>
    <motion.p
      variants={fadeUpItem}
      className="text-zinc-500 mb-8 max-sm:text-sm max-md:mb-6"
    >
      Start free with 1k tracks. No credit card required.
    </motion.p>
    <motion.div
      variants={fadeUpItem}
      className="flex flex-wrap justify-center gap-4 max-sm:flex-col max-sm:gap-3 max-w-sm mx-auto"
    >
      <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm max-sm:w-full">
        Start Tracking
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
      <button className="border border-zinc-300 bg-white px-6 py-2.5 rounded-sm text-zinc-800 font-medium hover:bg-zinc-100 transition-colors shadow-sm max-sm:w-full">
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
    className="pt-16 pb-8 px-8 border-t border-zinc-300 bg-white max-md:pt-12 max-md:px-6"
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-md:gap-y-10 max-md:mb-12">
      {Object.entries(footerLinks).map(([title, links]) => (
        <motion.div variants={fadeUpItem} key={title}>
          <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 font-bold mb-4 uppercase">
            {title}
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.div variants={fadeUpItem}>
        <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 font-bold mb-4 uppercase">
          CONNECT
        </h4>
        <div className="flex items-center gap-2 text-zinc-400">
          <div className="hover:text-zinc-900 cursor-pointer transition-colors">
            <NewTwitterRectangleIcon />
          </div>
          <div className="hover:text-zinc-900 cursor-pointer transition-colors">
            <Github01Icon />
          </div>
          <div className="hover:text-zinc-900 cursor-pointer transition-colors">
            <Linkedin01Icon />
          </div>
          <div className="hover:text-zinc-900 cursor-pointer transition-colors">
            <RedditIcon />
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      variants={fadeUpItem}
      className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 max-md:items-start max-md:pt-6"
    >
      <div className="flex items-center gap-2 text-xl font-heading font-medium">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        Shram.ai
      </div>
      <div className="text-xs text-zinc-500">
        © 2026 Shram.ai Inc. All rights reserved.
      </div>
    </motion.div>
  </motion.footer>
);

// ==========================================
// 4. MAIN WRAPPER COMPONENT
// ==========================================
const Pricing = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <main className="max-w-6xl mx-auto border-t-0 border-x border-zinc-300 max-md:border-x-0 overflow-hidden">
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
