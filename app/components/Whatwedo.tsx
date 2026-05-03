"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const stackData = [
  {
    id: 0,
    number: "01",
    title: "User Profiles",
    content: "An internal model that builds deep user profiles from behavior. Your AI doesn't just recall. It understands intent, preferences, and context."
  },
  {
    id: 1,
    number: "02",
    title: "Memory Graph",
    content: "Custom vector graph engine with ontology-aware edges. Knowledge updates, merges, contradicts, and infers. It never just appends."
  },
  {
    id: 2,
    number: "03",
    title: "Retrieval",
    content: "Hybrid vector + keyword search with sub-300ms latency. Context-aware reranking ensures the most relevant memories surface first."
  },
  {
    id: 3,
    number: "04",
    title: "Extractors",
    content: "Understand any format: PDFs, web pages, images, audio. Smart chunking that preserves meaning across document boundaries."
  },
  {
    id: 4,
    number: "05",
    title: "Connectors",
    content: "Pull from Notion, Slack, Google Drive, S3, Gmail, and custom sources. Data stays in sync automatically. No manual imports, no stale context."
  }
];

const Whatwedo = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="max-w-6xl mx-auto border border-zinc-300 bg-zinc-50 border-t-0 pb-20">
      
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-wider">
        <div>THE CONTEXT STACK</div>
        <div>[2/8]</div>
      </div>

      {/* Main Title Section */}
      <div className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-zinc-900 tracking-tight mb-6">
          Five layers. Complete context.
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Most memory solutions give you one layer. We give you all five, working
          together. So instead of using five services, you just use Supermemory.
          Saving cost, effort, and getting better context to your agent.
        </p>
      </div>

      {/* Split Content Area */}
      <div className="flex flex-col lg:flex-row border-t border-zinc-300">
        
        {/* Left Side: Interactive 3D Stack Illustration */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-20 bg-zinc-50 relative overflow-hidden lg:border-r lg:border-zinc-300 min-h-[400px]">
          <div className="relative w-full max-w-[300px] aspect-square flex flex-col items-center justify-center -mt-10">
            {/* We map the array backwards so the bottom layer renders first (z-index naturally stacks up) */}
            {[...stackData].reverse().map((item) => {
              const isActive = activeItem === item.id;
              // Calculate positioning to create a vertical 3D stack
              const yOffset = (item.id - 2) * -45; 
              
              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    y: yOffset,
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute w-48 h-48 border-[3px] shadow-xl"
                  style={{
                    // CSS Isometric Projection
                    transform: "rotateX(60deg) rotateZ(-45deg)",
                    backgroundColor: isActive ? "#18181b" : "#e4e4e7", // zinc-900 vs zinc-200
                    borderColor: isActive ? "#27272a" : "#d4d4d8",     // zinc-800 vs zinc-300
                    zIndex: 10 - item.id,
                  }}
                >
                  {/* Small internal detail for the active layer */}
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 border border-white/10 m-2 flex items-center justify-center text-white/50 font-dmmono text-xs"
                    >
                      {item.title.toUpperCase()}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col">
          {stackData.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <div 
                key={item.id}
                className={`border-b border-zinc-200 last:border-b-0 overflow-hidden transition-colors duration-300 ${isActive ? 'bg-zinc-50' : 'bg-white'}`}
              >
                {/* Accordion Header (Clickable) */}
                <button
                  onClick={() => setActiveItem(index)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none group relative"
                >
                  {/* Active Left Border Highlight */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-border"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-900"
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-dmmono text-zinc-400 font-medium">
                      {item.number}
                    </span>
                    
                    {/* Circle Indicator */}
                    <div className="relative flex items-center justify-center w-5 h-5">
                      <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-zinc-900' : 'bg-zinc-300'}`} />
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-zinc-900/20 animate-ping" />
                      )}
                    </div>
                    
                    <span className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-zinc-900'}`}>
                      {item.title}
                    </span>
                  </div>

                  {/* Chevron Icon */}
                  <motion.svg
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-5 h-5 ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {/* Accordion Content (Animated) */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pl-[4.5rem] text-zinc-500 leading-relaxed pr-12">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Whatwedo;