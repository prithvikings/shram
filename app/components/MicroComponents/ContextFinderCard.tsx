"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";
import { Tick02Icon } from "hugeicons-react";

export default function ContextFinderCard() {
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

  const [step, setStep] = useState(0);

  useEffect(() => {
    const delay = step === 4 ? 4000 : 1200;
    const timer = setTimeout(() => {
      setStep((prev) => (prev === 4 ? 0 : prev + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [step]);

  const smoothTransition = {
    duration: 0.6,
    ease: "easeInOut" as const,
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="left-card flex-1 bg-[#FAFAFA] dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60 rounded-3xl p-8 flex flex-col max-md:p-5 max-md:rounded-2xl transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-4 max-md:mb-3">
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 transition-colors max-md:text-lg">
          Context finder
        </h3>

        <button className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 dark:text-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100 flex items-center justify-center">
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

      <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-xs max-md:mb-5 transition-colors">
        Watches your activity across all apps to catch missed tasks.
      </p>

      {/* Inner Mock UI */}
      <div className="bg-[#F4F4F5] dark:bg-zinc-900/60 rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px] max-md:p-4 max-md:min-h-0 transition-colors duration-300">
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6 max-md:mb-5 transition-colors">
          <span>Parsing</span>
          <Image
            src="/whats.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-5 h-5 object-contain shrink-0 "
          />
          <span>WhatsApp chat</span>
        </div>

        <div className="space-y-4 max-w-sm mx-auto w-full">
          {/* User message */}
          <div className="bg-white dark:bg-zinc-950 rounded-xl p-2 flex items-center gap-3 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
            <div className="w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 dark:text-zinc-500 shrink-0 transition-colors">
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
            <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium transition-colors">
              Send it by tomorrow
            </span>
          </div>

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
                    className={`flex items-center gap-3 text-xs font-medium min-h-[24px] transition-colors ${
                      isCurrentlyLoading
                        ? "text-zinc-500 dark:text-zinc-400"
                        : "text-zinc-600 dark:text-zinc-300"
                    }`}
                  >
                    {isCurrentlyLoading ? (
                      <>
                        {/* FLICKER LOADER REPLACEMENT */}
                        <div className="flex items-center justify-center w-4 h-4 shrink-0 gap-[2px]">
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "easeInOut",
                              delay: 0,
                            }}
                            className="w-1 h-1 bg-zinc-400 dark:bg-zinc-500 rounded-full"
                          />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "easeInOut",
                              delay: 0.15,
                            }}
                            className="w-1 h-1 bg-zinc-400 dark:bg-zinc-500 rounded-full"
                          />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "easeInOut",
                              delay: 0.3,
                            }}
                            className="w-1 h-1 bg-zinc-400 dark:bg-zinc-500 rounded-full"
                          />
                        </div>

                        <span className="flex items-center gap-1 flex-wrap">
                          Detect missing follow-ups
                          <span className="w-3.5 h-3.5 bg-indigo-500 text-white rounded-sm flex items-center justify-center text-[8px] font-bold shrink-0">
                            D
                          </span>
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-4 h-4 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center shrink-0">
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

          {/* Final Output Box */}
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
                  className="bg-white dark:bg-zinc-950 rounded-xl p-3 flex items-start gap-3 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors duration-300"
                >
                  <div className="w-6 h-6 border border-zinc-200 dark:border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 shrink-0 overflow-hidden relative mt-0.5 transition-colors">
                    <Image
                      src="/logo.png"
                      fill
                      className="object-cover dark:invert transition-all"
                      alt="logo"
                      sizes="20px"
                    />
                  </div>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed transition-colors">
                    Yes, since your last payment was under 14 days ago (within
                    our refund policy), I've refunded it for you. Let me know if
                    I can help with anything else!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-auto pt-6 flex justify-center gap-6 text-xs w-full">
          <div className="flex items-center justify-between gap-4 bg-neutral-200 dark:bg-zinc-800/80 px-3 py-1 border-b-2 border-zinc-900 dark:border-zinc-500 rounded-md transition-colors duration-300">
            <button className="cursor-pointer text-zinc-900 dark:text-zinc-100 font-medium transition-colors">
              Identified
            </button>
            <button className="cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
              All tasks
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
