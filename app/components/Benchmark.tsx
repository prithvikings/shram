"use client";

import React from "react";
import { motion, Variants } from "motion/react";

const Benchmark = () => {
  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-zinc-800 shrink-0"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const CrossIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-zinc-300 shrink-0"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const PartialText = () => (
    <span className="text-sm font-medium text-zinc-500 whitespace-nowrap">
      Partial
    </span>
  );

  const tableData = [
    {
      feature: "Task Tracker",
      sm: <CheckIcon />,
      mem0: <PartialText />,
      zep: <CrossIcon />,
    },
    {
      feature: "User Memories",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Message retrieving",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Integrates",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <PartialText />,
    },
    {
      feature: "Reads WhatsApp text",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CrossIcon />,
    },
    {
      feature: "Instant Responses",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Customizable ",
      sm: <CheckIcon />,
      mem0: <CheckIcon />,
      zep: <CheckIcon />,
    },
    {
      feature: "Context matching",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CrossIcon />,
    },
    {
      feature: "Always running AI ",
      sm: <CheckIcon />,
      mem0: <CrossIcon />,
      zep: <CrossIcon />,
    },
  ];

  // --- Animation Variants ---
  // Orchestrates the staggering of children elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 100ms delay between each item
        delayChildren: 0.1,
      },
    },
  };

  // The buttery slide-up effect for individual items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // Premium cubic-bezier ease
      },
    },
  };

  return (
    <>
      <div className="max-w-6xl mx-auto border border-y-0 bg-neutral-100 border-zinc-300 flex flex-col items-center justify-center p-4 py-6 text-center max-md:border-x-0 max-md:py-4">
        <p className="text-md font-medium max-md:text-sm">
          100k+ chats monitored secretly · Zero missed leads
        </p>
      </div>

      <div className="max-w-6xl mx-auto border-x border-zinc-300 bg-[#FAFAFA] font-sans relative max-md:border-x-0">
        {/* Header Bar */}
        <div className="sticky top-[64px] bg-[#FAFAFA] z-40 flex justify-between items-center px-6 py-4 border-y border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-wider max-md:px-4 max-md:py-3">
          <div>Value add</div>
          <div>
            [<span className="text-blue-500">2</span>/3]
          </div>
        </div>

        {/* 1. Hero Section (Animated) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% in view
          className="text-center px-6 pt-14 pb-20 max-w-4xl mx-auto flex flex-col items-center gap-2 max-md:pt-10 max-md:pb-12 max-md:px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="max-w-[700px] font-heading text-[44px] font-medium tracking-[-0.04em] leading-[120%] text-text text-center max-lg:text-[36px] max-md:text-[28px]"
          >
            We do not think reminders tell the full story.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-md text-zinc-500 leading-relaxed max-w-xl mx-auto max-md:text-sm"
          >
            But we beat every other app anyway. The state-of-the-art on Threads,
            Emails, and WhatsApp. We also built{" "}
            <span className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4">
              MemoryLayer
            </span>
            , an auto pilot tracker for busy workflows.
          </motion.p>
        </motion.div>

        {/* 2. Stats Grid (Animated staggered cascade) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-200 border-y border-zinc-200 font-space"
        >
          {/* Row 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA] max-md:p-6"
          >
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">
              FOLLOW UP %
            </p>
            <p className="text-4xl font-space font-medium text-zinc-900 mb-2">
              99.9%
            </p>
            <p className="text-xs text-zinc-500 font-medium">
              Automated follow-up success
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA] max-md:p-6"
          >
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">
              MISSED
            </p>
            <p className="text-4xl font-medium text-zinc-900 mb-2">0%</p>
            <p className="text-xs text-zinc-500 font-medium">
              Cold or forgotten chains
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA] max-md:p-6"
          >
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">
              DRAFTING
            </p>
            <p className="text-4xl font-medium text-zinc-900 mb-2">#1</p>
            <p className="text-xs text-zinc-500 font-medium">
              Context-aware writing
            </p>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] max-md:p-6"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium text-zinc-900">0</span>
              <span className="text-lg font-medium text-zinc-900">
                manual actions
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500">
              Others need 5-10
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] max-md:p-6"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium text-zinc-900">
                {"<10sec"}
              </span>
              <span className="text-lg font-medium text-zinc-900">
                draft delay
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500">Full context</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] max-md:p-6"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-medium text-zinc-900">100k+</span>
              <span className="text-lg font-medium text-zinc-900">
                hours saved
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-500">
              Constantly active
            </p>
          </motion.div>
        </motion.div>

        {/* 3. Comparison Table Section (Animated rows) */}
        <div className="px-6 py-8 bg-white flex flex-col items-center max-md:px-4 max-md:py-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            // Fix applied here: added overflow-y-hidden
            className="w-full max-w-5xl border border-zinc-200 rounded-xl overflow-x-auto overflow-y-hidden font-space bg-white custom-scrollbar"
          >
            <div className="max-md:min-w-[600px]">
              {/* Table Header */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-4 bg-white border-b border-zinc-200"
              >
                <div className="p-5 text-sm font-medium text-zinc-600 max-md:p-4">
                  Feature
                </div>
                <div className="p-5 text-sm font-semibold text-zinc-900 text-center bg-zinc-50 border-x border-zinc-200 max-md:p-4">
                  Shram Agent
                </div>
                <div className="p-5 text-sm font-medium text-zinc-600 text-center max-md:p-4">
                  Task
                </div>
                <div className="p-5 text-sm font-medium text-zinc-600 text-center max-md:p-4">
                  Bot
                </div>
              </motion.div>

              {/* Table Body - Staggered Rows */}
              {tableData.map((row, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants} // Each row slides up gently
                  className={`grid grid-cols-4 items-center hover:bg-zinc-50/50 transition-colors ${
                    index !== tableData.length - 1
                      ? "border-b border-zinc-100"
                      : ""
                  }`}
                >
                  <div className="p-5 py-3.5 text-sm text-zinc-700 font-dmsans max-md:p-4">
                    {row.feature}
                  </div>
                  <div className="p-5 py-3.5 flex justify-center bg-zinc-50 border-x border-zinc-200 h-full items-center max-md:p-4">
                    {row.sm}
                  </div>
                  <div className="p-5 py-3.5 flex justify-center h-full items-center max-md:p-4">
                    {row.mem0}
                  </div>
                  <div className="p-5 py-3.5 flex justify-center h-full items-center max-md:p-4">
                    {row.zep}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-6xl mx-auto text-center py-6 border border-zinc-300 w-full flex items-center justify-center text-sm text-zinc-500 max-md:border-x-0 max-md:text-xs max-md:py-4 max-md:px-4">
        <span>
          Request your early access key{" "}
          <span className="relative group inline-block text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4 cursor-pointer">
            here
            {/* Tooltip Container */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-zinc-900 text-white text-[11px] font-sans font-medium rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none whitespace-nowrap shadow-sm z-50">
              Get link
              {/* Tooltip little bottom arrow/triangle */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900"></span>
            </span>
          </span>
          .
        </span>
      </div>
    </>
  );
};

export default Benchmark;
