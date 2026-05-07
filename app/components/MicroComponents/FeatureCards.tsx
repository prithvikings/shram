"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, AnimatePresence } from "motion/react";

// --- SVG Icons ---
export const TitleIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mx-2 text-[#16a34a] dark:text-green-500 translate-y-[-2px]"
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect
      x="7"
      y="5"
      width="4"
      height="4"
      rx="1"
      fill="currentColor"
      stroke="none"
    />
    <rect
      x="13"
      y="10"
      width="4"
      height="4"
      rx="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM16.707 9.707L11 15.414L7.293 11.707L8.707 10.293L11 12.586L15.293 8.293L16.707 9.707Z"
    />
  </svg>
);

export const LockIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 9V7A5 5 0 007 7V9a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zM9 7a3 3 0 116 0v2H9V7z" />
  </svg>
);

export const GenerateIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="transparent" />
    <path
      d="M24 14L24 34M24 14L16 22M24 14L32 22"
      stroke="#a855f7"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14L14 16M36 14L34 16M32 32L34 34M14 34L12 32"
      stroke="#d8b4fe"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const SendIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="4" fill="#60a5fa" />
    <circle cx="16" cy="24" r="4" fill="#3b82f6" />
    <circle cx="16" cy="32" r="4" fill="#93c5fd" />
    <path d="M24 18L36 24L24 30V18Z" fill="#2563eb" />
  </svg>
);

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[image:repeating-linear-gradient(315deg,_#e5e7eb_0,_#e5e7eb_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_#27272a_0,_#27272a_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed pointer-events-none opacity-60"></div>
  );
};

export const TaskExtractionCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const appIcons = [
    { title: "Gmail", path: "/gmail.webp" },
    { title: "Meet", path: "/notion.png" }, // Assuming this uses notion.png as in your snippet
    { title: "WhatsApp", path: "/whats.png" },
    { title: "Slack", path: "/slack.png" },
    { title: "Outlook", path: "/outlook.png" },
  ];

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const activeZone = 100;

    itemsRef.current.forEach((item) => {
      if (!item) return;

      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < activeZone) {
        const scale = 1 + (1 - distance / activeZone) * 0.5;
        item.style.transform = `scale(${scale})`;
        item.style.zIndex = "10";
      } else {
        item.style.transform = "scale(1)";
        item.style.zIndex = "1";
      }
    });
  });

  return (
    <div className="bg-[#f8f9fa] dark:bg-zinc-900 rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden h-[450px] border border-transparent dark:border-zinc-800/50 transition-colors">
      {/* Outer wrapper with added dark mode classes */}
      <div className="bg-zinc-100 dark:bg-zinc-800/30 border border-transparent dark:border-zinc-700/50 rounded-2xl p-4 mb-4 w-full">
        <div className="relative h-[200px] bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-sm rounded-xl overflow-hidden flex items-center">
          {/* Vertical Mask (Top & Bottom Fade) */}
          <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            {/* Horizontal Mask (Left & Right Fade) */}
            <div
              ref={containerRef}
              className="relative w-full h-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] flex items-center overflow-hidden"
            >
              <Pattern />

              <motion.div
                // Removed gap and padding to fix the mathematical snapping bug
                className="relative z-10 flex whitespace-nowrap w-max"
                animate={{ x: ["0%", "-16.666666%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 10, // Slowed down
                }}
              >
                {/* Map 6 identical sets to ensure a perfectly seamless loop */}
                {[...Array(6)].map((_, setIndex) => (
                  <div key={setIndex} className="flex">
                    {appIcons.map((item, index) => {
                      const globalIndex = setIndex * appIcons.length + index;
                      return (
                        <div
                          key={`${item.title}-${globalIndex}`}
                          ref={(el) => {
                            itemsRef.current[globalIndex] = el;
                          }}
                          // Replaced gap with mr-8 for perfect pixel math
                          className="mr-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center size-14 shadow-sm border border-zinc-200 dark:border-zinc-700 flex-shrink-0 transition-colors duration-200 will-change-transform"
                        >
                          <Image
                            src={item.path}
                            alt={item.title}
                            width={30}
                            height={30}
                            className="object-contain rounded-md"
                            quality={100} // Fixes blurry images
                            unoptimized={true} // Bypasses compression for small logos
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-3 z-10">
        <h3 className="text-lg font-dmsans font-semibold text-zinc-900 dark:text-zinc-100">
          Extract Actionable Tasks From Any Chat
        </h3>
        <div className="w-full h-[2px] bg-zinc-300/30 dark:bg-zinc-700/50 shadow-xs rounded-2xl"></div>
      </div>
      <p className="text-[14px] text-zinc-700/60 dark:text-zinc-400 max-w-xs font-geist font-medium z-10">
        Shram silently scans WhatsApp, Slack, and Email threads to extract
        commitments and tasks before they fall through the cracks.
      </p>
    </div>
  );
};

// Small sparkle icon for the AI draft label
const SparkleIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-400"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

// Static conversation array
const staticMessages = [
  {
    id: 2,
    role: "shram",
    text: "Yes, we confirmed a 12-day delivery window with them.",
  },
  {
    id: 3,
    role: "client",
    text: "Awesome. Can you send the purchase order?",
  },
  {
    id: 4,
    role: "shram",
    text: "I have the PO ready. Should I send it over now?",
  },
];

export const AutoDraftingCard = () => {
  return (
    <div className="bg-[#f8f9fa] dark:bg-zinc-900 rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden h-[450px] border border-transparent dark:border-zinc-800/50 transition-colors">
      {/* Outer Mockup Wrapper */}
      <div className="bg-zinc-100 dark:bg-zinc-800/30 border border-transparent dark:border-zinc-700/50 rounded-2xl p-4 mb-4 w-full">
        {/* Chat Window Mockup */}
        <div className="relative h-[200px] bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 shadow-sm rounded-xl overflow-hidden flex flex-col justify-end p-4">
          {/* Top-to-Bottom Mask to gently fade out the top message */}
          <div className="flex flex-col gap-3 w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)] relative z-0">
            {staticMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col w-full ${
                  msg.role === "client" ? "items-end" : "items-start" // Client right, AI left
                }`}
              >
                {/* AI Suggested Reply Label */}
                {msg.role === "shram" && (
                  <div className="flex items-center gap-1 mb-1 ml-1 text-[9px] font-geist font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    <SparkleIcon /> Suggested Draft
                  </div>
                )}

                {/* Standard Message Bubbles */}
                <div
                  className={`text-[12px] font-geist font-medium leading-relaxed px-3.5 py-2.5 max-w-[85%] text-left ${
                    msg.role === "client"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl rounded-br-sm border border-blue-400" // Blue user bubble
                      : "bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50 text-zinc-800 dark:text-zinc-200 rounded-2xl rounded-bl-sm" // White AI bubble
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4 mb-3">
        <h3 className="text-lg font-dmsans font-semibold text-zinc-900 dark:text-zinc-100">
          Flawless Contextual Auto-Drafting
        </h3>
        <div className="w-full h-[2px] bg-zinc-300/30 dark:bg-zinc-700/50 shadow-xs rounded-2xl"></div>
      </div>
      <p className="text-[14px] text-zinc-700/60 dark:text-zinc-400 max-w-sm mx-auto font-geist font-medium z-10">
        Shram analyzes past chat messages, specific promises made, and exact
        project context to generate human sounding replies for your approval.
      </p>
    </div>
  );
};
export const SecureLeadCard = () => (
  <div className="bg-[#f8f9fa] dark:bg-zinc-900 rounded-3xl p-8 flex flex-row items-center justify-between gap-6 h-[180px] border border-transparent dark:border-zinc-800/50 transition-colors">
    <div className="text-left flex-1">
      <h3 className="text-[16px] font-dmsans font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        Automatically Secure Every Single Lead
      </h3>
      <p className="text-[13px] text-zinc-600/70 dark:text-zinc-400 leading-relaxed pr-4 font-geist font-medium max-w-[95%]">
        Shram instantly logs all pending questions and client commitments so you
        effortlessly follow up and win highly paid deals.
      </p>
    </div>
    <div className="flex-shrink-0 bg-white dark:bg-zinc-950 p-2 rounded-xl shadow-sm dark:shadow-none border border-zinc-100 dark:border-zinc-800">
      <GenerateIcon />
    </div>
  </div>
);

export const SendRepliesCard = () => (
  <div className="bg-[#f8f9fa] dark:bg-zinc-900 rounded-3xl p-8 flex flex-row items-center justify-between gap-6 h-[180px] border border-transparent dark:border-zinc-800/50 transition-colors">
    <div className="text-left flex-1">
      <h3 className="text-[16px] font-dmsans font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        Review And Send Replies In One Click
      </h3>
      <p className="text-[13px] text-zinc-600/70 dark:text-zinc-400 leading-relaxed pr-4 font-geist font-medium">
        Review AI generated message drafts and send them directly to clients
        without opening new windows or manually typing responses.
      </p>
    </div>
    <div className="flex-shrink-0 bg-white dark:bg-zinc-950 p-2 rounded-xl shadow-sm dark:shadow-none border border-zinc-100 dark:border-zinc-800">
      <SendIcon />
    </div>
  </div>
);
