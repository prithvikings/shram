"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const stackData = [
  {
    id: 0,
    title: "Context Layer",
    content:
      "Shram monitors daily conversations in the background. The app doesn't just read messages. It spots your forgotten tasks or missed follow-ups.",
  },
  {
    id: 1,
    title: "Time Tracker",
    content:
      "Silent background engine checks dates on active chats. The app tracks, reads, categorizes, and timestamps. It never loses track.",
  },
  {
    id: 2,
    title: "Detection",
    content:
      "Smart tracking notices when any active chat goes cold. Perfect timing ensures that the most important task drafts surface first.",
  },
  {
    id: 3,
    title: "Auto-Draft",
    content:
      "Generates exact text: emails, chats, texts, and notes. Smart drafting that preserves meanings across all app boundaries.",
  },
  {
    id: 4,
    title: "Connection",
    content:
      "Links to WhatsApp, Gmail, Slack, Outlook, Calendar, and team inboxes. Chat history syncs automatically. No manual tracking, no cold threads.",
  },
];

// Reusable SVG component for the wireframe isometric cube
const WireframeCube = ({ isActive }: { isActive: boolean }) => {
  const strokeColor = isActive ? "#16a34a" : "#d4d4d8"; // Green-600 for active, zinc-300 for inactive
  const strokeWidth = isActive ? "2" : "1";

  return (
    <svg
      width="160"
      height="140"
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500"
    >
      {/* Top Face */}
      <path
        d="M70 5 L135 35 L70 65 L5 35 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Left Face */}
      <path
        d="M5 35 L70 65 L70 115 L5 85 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Right Face */}
      <path
        d="M70 65 L135 35 L135 85 L70 115 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Inner Top Face Detail */}
      <path
        d="M70 18 L115 35 L70 52 L25 35 Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Vertical dashed lines for left face */}
      <path
        d="M25 45 L25 90"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray="2 3"
      />
      <path
        d="M48 55 L48 100"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray="2 3"
      />

      {/* Vertical dashed lines for right face */}
      <path
        d="M115 45 L115 90"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray="2 3"
      />
      <path
        d="M92 55 L92 100"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray="2 3"
      />
    </svg>
  );
};

const Whatwedo = () => {
  const [activeItem, setActiveItem] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % stackData.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto border border-t-0 border-zinc-300 bg-[#FAFAFA] py-20 pb-10 px-6 md:px-12 font-sans relative overflow-hidden max-md:py-12 max-md:pb-8 max-md:px-4 max-md:border-x-0">
      {/* Main Title Section */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 max-md:mb-10">
        <h2 className="text-3xl md:text-4xl font-space font-bold text-zinc-900 tracking-tight mb-4 max-sm:text-2xl max-sm:px-2">
          The ultimate memory autopilot.
        </h2>
        <p className="text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto max-sm:text-sm max-sm:px-2">
          Other task managers wait for you to type. Shram watches your apps,
          acting for you. So instead of writing to-do lists, you just let Shram
          do it. Saving time, sanity, and ensuring no conversation ever goes
          cold.
        </p>
      </div>

      {/* Split Content Area */}
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-12 relative z-10 max-md:gap-8">
        {/* Left Side: Accordion */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Top boundary dashed line */}
          <div className="border-t border-dashed border-zinc-200" />

          {stackData.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <div
                key={item.id}
                className="border-b border-dashed border-zinc-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveItem(index)}
                  className="w-full flex items-center gap-4 py-5 text-left focus:outline-none group max-md:py-4"
                >
                  {/* Circle Indicator */}
                  <div
                    className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "bg-rose-600 text-white"
                        : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Title */}
                  <span
                    className={`text-[15px] transition-colors duration-300 font-space max-sm:text-sm ${
                      isActive
                        ? "text-zinc-900 font-bold"
                        : "text-zinc-500 font-medium group-hover:text-zinc-700"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>

                {/* Accordion Content (Animated) */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-13 pb-6 pr-8 text-[13px] text-zinc-500 leading-relaxed max-md:pb-4 max-md:pr-2">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Side: Vertical Isometric Cube Stack */}
        <div className="w-full lg:w-[45%] flex items-center justify-center min-h-[500px] max-md:min-h-0 max-md:h-[350px]">
          {/* Scaled down on mobile to prevent massive empty vertical space */}
          <div className="relative w-[160px] h-[550px] max-md:transform max-md:scale-[0.7] max-md:origin-top max-md:h-[385px]">
            {stackData.map((item, index) => {
              const isActive = activeItem === index;

              return (
                <div
                  key={item.id}
                  className="absolute left-0 transition-transform duration-500 ease-out"
                  style={{
                    top: `${index * 85}px`,
                    zIndex: index,
                    transform: isActive
                      ? "scale(1.05) translateX(-5px)"
                      : "scale(1) translateX(0)",
                  }}
                >
                  <WireframeCube isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
