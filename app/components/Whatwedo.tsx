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

const AnimatedCube = ({
  index,
  isActive,
}: {
  index: number;
  isActive: boolean;
}) => {
  const springTransition = { type: "spring", stiffness: 300, damping: 25 };

  const getTransformations = () => {
    switch (index % 5) {
      case 0: // 1st SVG: Right face slides right (translateX 18px)
      case 3: // 4th SVG: Same as 1st
        return {
          rightFace: { x: isActive ? 18 : 0 },
          topFace: { y: 0 },
          leftFace: { x: 0 },
        };
      case 1: // 2nd SVG: Top face slides up (translateY -18px)
      case 4: // 5th SVG: Same as 2nd
        return {
          rightFace: { x: 0 },
          topFace: { y: isActive ? -18 : 0 },
          leftFace: { x: 0 },
        };
      case 2: // 3rd SVG: Left face slides left (translateX -18px)
        return {
          rightFace: { x: 0 },
          topFace: { y: 0 },
          leftFace: { x: isActive ? -18 : 0 },
        };
      default:
        return { rightFace: { x: 0 }, topFace: { y: 0 }, leftFace: { x: 0 } };
    }
  };

  const { rightFace, topFace, leftFace } = getTransformations();

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-44 transition-colors duration-500 ${
        isActive ? "text-sky-600" : "text-zinc-300 dark:text-zinc-700"
      }`}
    >
      {/* Top Face Group */}
      <motion.g animate={topFace} transition={springTransition}>
        <path
          d="M100 40 Q108 40 155 68 Q162 72 155 76 Q108 104 100 104 Q92 104 45 76 Q38 72 45 68 Q92 40 100 40 Z"
          className="fill-zinc-100 dark:fill-zinc-800"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M100 52 Q105 52 132 68 Q138 72 132 76 Q105 92 100 92 Q95 92 68 76 Q62 72 68 68 Q95 52 100 52 Z"
          className="fill-white dark:fill-zinc-950"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.g>

      {/* Left Face Group (includes dashed lines) */}
      <motion.g animate={leftFace} transition={springTransition}>
        <path
          d="M45 76 L100 104 L100 164 Q100 170 92 166 L45 140 Q38 136 38 128 L38 80 Q38 72 45 76 Z"
          className="fill-zinc-100 dark:fill-zinc-800/80"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M55 86 L55 145"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="M70 95 L70 155"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="M85 104 L85 162"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </motion.g>

      {/* Right Face Group (includes dashed lines) */}
      <motion.g animate={rightFace} transition={springTransition}>
        <path
          d="M155 76 L100 104 L100 164 Q100 170 108 166 L155 140 Q162 136 162 128 L162 80 Q162 72 155 76 Z"
          className="fill-zinc-200 dark:fill-zinc-800"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M145 86 L145 145"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="M130 95 L130 155"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="M115 104 L115 162"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </motion.g>
    </svg>
  );
};

const Whatwedo = () => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % stackData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto border border-t-0 border-zinc-300 dark:border-zinc-800 bg-[#FAFAFA] dark:bg-zinc-950/40 py-20 pb-10 px-6 md:px-12 font-sans relative overflow-hidden transition-colors duration-300">
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 max-md:mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4 transition-colors duration-300">
          The ultimate memory autopilot.
        </h2>
        <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
          Other task managers wait for you to type. Shram watches your apps,
          acting for you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-12 relative z-10">
        <div className="w-full lg:w-[55%] flex flex-col">
          <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800" />
          {stackData.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-dashed border-zinc-200 dark:border-zinc-800"
            >
              <button
                onClick={() => setActiveItem(index)}
                className="w-full flex items-center gap-4 py-5 text-left focus:outline-none group"
              >
                <div
                  className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    activeItem === index
                      ? "bg-sky-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-[15px] transition-colors duration-300 ${
                    activeItem === index
                      ? "text-zinc-900 dark:text-zinc-50 font-bold"
                      : "text-zinc-500 dark:text-zinc-400 font-medium"
                  }`}
                >
                  {item.title}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {activeItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-11 pb-6 pr-8 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[45%] flex items-center justify-center min-h-[500px]">
          <div className="relative w-[176px] h-[550px] max-md:scale-75">
            {stackData.map((item, index) => (
              <div
                key={item.id}
                className="absolute left-0 transition-all duration-500"
                style={{
                  top: `${index * 80}px`,
                  zIndex: stackData.length - index,
                  opacity: activeItem === index ? 1 : 0.4,
                  filter: activeItem === index ? "none" : "grayscale(0.5)",
                }}
              >
                <AnimatedCube index={index} isActive={activeItem === index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
