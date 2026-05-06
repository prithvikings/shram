"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";
import { Tick02Icon } from "hugeicons-react";

export default function DraftingAgentCard() {
  // State machine for the button swap (idle -> loading -> approved)
  const [isInnerHovered, setIsInnerHovered] = useState(false);
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "approved"
  >("idle");

  // Handle the timed transition from loading to approved
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInnerHovered) {
      setButtonState("loading");
      timeout = setTimeout(() => {
        setButtonState("approved");
      }, 1200);
    } else {
      setButtonState("idle");
    }

    return () => clearTimeout(timeout);
  }, [isInnerHovered]);

  // Parent Container Variants (Orchestrates the cascade)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Child Item Variants (Buttery slide up and fade in)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Connector Line Variants (Grows vertically)
  const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Portal arrow animation variants (Triggered by outer card hover)
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

  // Shared buttery transition for the button swap
  const buttonSwapTransition = {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="flex-1 bg-[#FAFAFA] border border-zinc-100 rounded-3xl p-8 flex flex-col max-md:p-5 max-md:rounded-2xl"
    >
      {/* Header (Static) */}
      <div className="flex justify-between items-start mb-4 max-md:mb-3">
        <h3 className="text-xl font-medium text-zinc-900 max-md:text-lg">
          Drafting agent
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
        Drafts and finishes your pending tasks.
      </p>

      {/* Inner Mock UI */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onMouseEnter={() => setIsInnerHovered(true)}
        onMouseLeave={() => setIsInnerHovered(false)}
        className="bg-[#F4F4F5] rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px] max-md:p-4 max-md:pb-16 max-md:min-h-0"
      >
        {/* Parsing Text */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-8 max-md:mb-6"
        >
          <span>Parsing</span>
          <span className="text-[#E01E5A] font-bold text-sm">#</span>
          <span>#client-project-tasks</span>
        </motion.div>

        <div className="max-w-sm mx-auto w-full mb-12 relative max-md:mb-6">
          {/* Connector Line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-4 top-8 bottom-12 w-px bg-zinc-200 origin-top"
          ></motion.div>

          <div className="space-y-4">
            {/* Trigger Message */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-2.5 shadow-sm border border-zinc-100 w-full relative z-10"
            >
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-zinc-700">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Trigger: Days pass
              </div>
              <p className="text-xs text-zinc-700">
                Notice the cold chats and, if required, draft new replies.
              </p>
            </motion.div>

            {/* Shram Message with Dynamic Buttons */}
            <motion.div
              variants={itemVariants}
              // Removed 'layout' from here because the fixed height on the button wrapper prevents the need for layout recalculations!
              className="bg-white rounded-xl p-4 shadow-sm border border-zinc-100 w-full relative z-10"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-6 h-6 bg-zinc-200 rounded flex items-center justify-center shrink-0 overflow-hidden relative">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-cover"
                    sizes="16px"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 leading-none mb-1">
                    Shram.ai
                  </div>
                  <div className="text-[11px] text-zinc-500 font-medium flex items-center gap-1">
                    <span className="opacity-70">📄</span> Draft execution
                    request
                  </div>
                </div>
              </div>
              <p className="text-xs text-zinc-800 mb-4 leading-relaxed">
                <strong className="font-semibold">Drafting recap:</strong> I
                have written a new follow-up response for the client you met
                last week, as they have not replied to your previous email
                messages.
              </p>

              {/* Dynamic Button Swap Area - LOCKED HEIGHT to stop jitter */}
              <div className="relative h-[32px] w-full">
                <AnimatePresence mode="popLayout" initial={false}>
                  {buttonState === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      // Removed blur to prevent font-rendering anti-aliasing snaps
                      exit={{ opacity: 0, y: -10 }}
                      transition={buttonSwapTransition}
                      className="flex gap-2 max-sm:flex-col w-full h-full"
                    >
                      <button className="flex-1 flex items-center justify-center gap-1.5 text-xs border border-zinc-200 px-2 py-1.5 rounded font-medium text-zinc-700 hover:bg-zinc-50 transition-colors h-full">
                        <span className="bg-green-100 p-0.5 rounded-sm">
                          <Tick02Icon size={14} color="green" />
                        </span>
                        Approve drafts
                      </button>
                      <button className="flex-1 text-xs border border-zinc-200 px-2 py-1.5 rounded font-medium text-zinc-700 hover:bg-zinc-50 transition-colors text-center h-full">
                        Edit in interface
                      </button>
                    </motion.div>
                  )}

                  {buttonState === "loading" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={buttonSwapTransition}
                      className="w-full h-full"
                    >
                      <button className="w-full flex items-center justify-center gap-2 text-xs border border-zinc-200 bg-zinc-50 px-2 py-1.5 rounded font-medium text-zinc-500 cursor-default h-full">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="animate-spin text-zinc-400 shrink-0"
                          style={{ animationDuration: "1s" }}
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Approving...
                      </button>
                    </motion.div>
                  )}

                  {buttonState === "approved" && (
                    <motion.div
                      key="approved"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={buttonSwapTransition}
                      className="w-full h-full"
                    >
                      <button className="w-full flex items-center justify-center gap-1.5 text-xs bg-green-600 border border-green-800 px-2 py-1.5 rounded font-medium text-white hover:bg-green-700 transition-colors h-full shadow-md">
                        <Tick02Icon size={16} color="white" strokeWidth={2.5} />
                        Approved
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-xs"
        >
          <div className="flex items-center justify-between gap-4 bg-neutral-200 px-3 py-1 border-b-2 border-zinc-900 rounded-md">
            <button className="cursor-pointer text-zinc-900 font-medium">
              Identified
            </button>
            <button className="cursor-pointer text-zinc-500 hover:text-zinc-700 transition-colors">
              All tasks
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
