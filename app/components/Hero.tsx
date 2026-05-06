"use client";

import React from "react";
import { ArrowRight01Icon } from "hugeicons-react";
import { motion, Variants } from "motion/react";

const Hero = () => {
  // 1. Parent Orchestrator: Controls the timing of all children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 150ms delay between each element appearing
        delayChildren: 0.1, // Slight pause before the sequence starts
      },
    },
  };

  // 2. Child Elements: The buttery fade + slide up effect
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom curve for a premium, frictionless glide
      },
    },
  };

  return (
    <div className="mt-10 border border-b-0 border-zinc-300 max-w-6xl mx-auto bg-zinc-50 pb-16 overflow-hidden max-lg:mx-6 max-md:mx-0 max-md:mt-0 max-md:border-x-0">
      {/* We wrap the content in a motion.div to trigger the cascade */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dashed Section (Badge) */}
        <motion.div
          variants={itemVariants}
          className="w-full border-y border-dashed border-zinc-300 mt-16 px-6 hidden md:flex items-center max-md:mt-8 max-md:justify-center max-md:px-4"
        >
          {/* Announcement Badge */}
          <div className="inline-flex items-center text-sm bg-zinc-200/60 border border-y-0 border-zinc-300 transition-colors hover:bg-zinc-200 cursor-pointer max-sm:flex-col max-sm:w-full max-sm:items-start max-sm:text-left">
            <div className="flex items-center gap-2 px-3 py-1.5 border-r border-zinc-300 text-zinc-700 font-medium max-sm:border-r-0 max-sm:border-b max-sm:w-full">
              <div className="p-1 bg-zinc-800 flex items-center justify-center">
                <div className="w-1 h-1 bg-zinc-50"></div>
              </div>
              Autopilot
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 text-zinc-800 max-sm:w-full max-sm:justify-between max-sm:py-3">
              <span className="max-sm:text-xs max-sm:whitespace-normal max-sm:leading-relaxed">
                Your personal memory layer: zero missed messages or meetings
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-600 max-sm:flex-shrink-0"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="flex flex-col gap-16 items-center justify-center mt-24 px-6 max-md:gap-10 max-md:mt-12 max-md:px-4">
          <div className="flex flex-col justify-between items-center gap-7 max-md:gap-5">
            <motion.h1
              variants={itemVariants}
              className="text-5xl text-center font-space font-medium max-w-xl max-md:text-4xl max-sm:text-3xl max-sm:leading-tight"
            >
              Stop forgetting to reply to people
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm font-dmsans text-zinc-600 font-normal max-w-xl text-center max-sm:px-2"
            >
              Shram quietly monitors your chats and emails. When someone needs a
              reply or meeting, it drafts the perfect response instantly.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 max-sm:flex-col max-sm:w-full max-sm:gap-4"
            >
              <button className="group relative overflow-hidden flex items-center gap-2 rounded-md bg-zinc-900 text-zinc-50 text-sm font-medium py-2 pl-5 pr-4 shadow-sm transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:shadow-md active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 cursor-pointer max-sm:w-full max-sm:justify-center">
                <span className="relative z-10">Request access</span>
                <ArrowRight01Icon
                  size={16}
                  className="relative z-10 text-zinc-400 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-zinc-50"
                />
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-md"></div>
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2),_transparent_60%)] mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>
              <button className="rounded-md text-sm font-medium py-2 px-4 text-zinc-600 transition-all duration-300 ease-in-out hover:text-zinc-900 hover:bg-zinc-200/60 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 cursor-pointer max-sm:w-full max-sm:justify-center max-sm:border max-sm:border-zinc-300">
                See demo
              </button>
            </motion.div>
          </div>

          {/* YouTube Video Demo */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl h-[500px] bg-zinc-800 rounded-md overflow-hidden shadow-lg border border-zinc-200/50 max-lg:h-[400px] max-md:h-[350px] max-sm:h-[220px]"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2ZWOaVK6sMk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
