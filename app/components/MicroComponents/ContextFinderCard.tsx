"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";
import { Tick02Icon, WhatsappIcon } from "hugeicons-react";

export default function ContextFinderCard() {
  // Arrow portal animation
  const arrowVariants: Variants = {
    rest: { x: 0, y: 0, opacity: 1 },
    hover: {
      x: [0, 24, -24, 0],
      y: [0, -24, 24, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 0.45, 1],
        ease: "easeInOut",
      },
    },
  };

  // State machine for the loading sequence
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delay = step === 4 ? 4000 : 1200;

    const timer = setTimeout(() => {
      setStep((prev) => (prev === 4 ? 0 : prev + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [step]);

  // Buttery transition for entering and moving
  const smoothTransition = {
    duration: 0.6,
    ease: "easeInOut" as const,
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="left-card flex-1 bg-[#FAFAFA] border border-zinc-100 rounded-3xl p-8 flex flex-col max-md:p-5 max-md:rounded-2xl"
    >
      <div className="flex justify-between items-start mb-4 max-md:mb-3">
        <h3 className="text-xl font-medium text-zinc-900 max-md:text-lg">
          Context finder
        </h3>

        <button className="relative overflow-hidden bg-zinc-100 p-2.5 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 flex items-center justify-center">
          <motion.svg
            variants={arrowVariants}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 19L17 7M7 7h10v10" />
          </motion.svg>
        </button>
      </div>

      <p className="text-zinc-500 mb-6 text-xs max-md:mb-5">
        Watches your activity across all apps to catch missed tasks.
      </p>

      {/* Inner Mock UI */}
      <div className="bg-[#F4F4F5] rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px] max-md:p-4 max-md:min-h-0">
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 max-md:mb-5">
          <span>Parsing</span>
          <Image
            src="/whats.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-5 h-5 object-contain shrink-0"
          />
          <span>WhatsApp chat</span>
        </div>

        <div className="space-y-4 max-w-sm mx-auto w-full">
          {/* User message (Static context) */}
          <div className="bg-white rounded-xl p-2 flex items-center gap-3 shadow-sm border border-zinc-100">
            <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 shrink-0">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-xs text-zinc-800 font-medium">
              Send it by tomorrow
            </span>
          </div>

          {/* Dynamic Status List */}
          {/* FIX 1: Added h-[130px] to rigidly reserve exact space for 4 list items */}
          <div className="pl-3 space-y-2.5 flex flex-col h-[130px]">
            <AnimatePresence>
              {[0, 1, 2, 3].map((index) => {
                if (step < index) return null;

                const isCurrentlyLoading = step === index;

                return (
                  <motion.div
                    key={`line-${index}`}
                    layout="position"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={smoothTransition}
                    className={`flex items-center gap-3 text-xs font-medium min-h-[24px] ${
                      isCurrentlyLoading ? "text-zinc-500" : "text-zinc-600"
                    }`}
                  >
                    {isCurrentlyLoading ? (
                      // LOADING STATE (Spinner + Detect)
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="animate-spin text-zinc-400 shrink-0"
                          style={{ animationDuration: "1.5s" }}
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        <span className="flex items-center gap-1 flex-wrap">
                          Detect missing follow-ups
                          <span className="w-3.5 h-3.5 bg-indigo-500 text-white rounded-sm flex items-center justify-center text-[8px] font-bold shrink-0">
                            D
                          </span>
                        </span>
                      </>
                    ) : (
                      // COMPLETED STATE (Green Tick + Scan memory)
                      <>
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                          <Tick02Icon size={14} color="white" strokeWidth={2} />
                        </div>
                        <span>Scan memory</span>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Final Output Box (Appears at Step 4) */}
          {/* FIX 2: Wrapped in h-[96px] to permanently reserve the box's height */}
          <div className="w-full h-[96px]">
            <AnimatePresence mode="popLayout">
              {step === 4 && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.15 },
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-xl p-3 flex items-start gap-3 shadow-sm border border-zinc-100"
                >
                  <div className="w-6 h-6 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-400 shrink-0 overflow-hidden relative mt-0.5">
                    <Image
                      src="/logo.png"
                      fill
                      className="object-cover"
                      alt="logo"
                      sizes="20px"
                    />
                  </div>
                  <span className="text-xs text-zinc-700 font-medium leading-relaxed">
                    Yes, since your last payment was under 14 days ago (within
                    our refund policy), I've refunded it for you. Let me know if
                    I can help with anything else!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Tabs will now never move, because the content above has fixed reservations */}
        <div className="mt-auto pt-6 flex justify-center gap-6 text-xs w-full">
          <div className="flex items-center justify-between gap-4 bg-neutral-200 px-3 py-1 border-b-2 border-zinc-900 rounded-md">
            <button className="cursor-pointer text-zinc-900 font-medium">
              Identified
            </button>
            <button className="cursor-pointer text-zinc-500 hover:text-zinc-700 transition-colors">
              All tasks
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
