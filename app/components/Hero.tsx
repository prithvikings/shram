import React from 'react';

const Hero = () => {
  return (
    <div className="mt-10 border border-zinc-300 max-w-6xl mx-auto bg-zinc-50 pb-16 overflow-hidden">
      
      {/* Dashed Section */}
      <div className="w-full border-y border-dashed border-zinc-300 mt-16 px-6 flex items-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center text-sm bg-zinc-200/60 border border-y-0 border-zinc-300 transition-colors hover:bg-zinc-200 cursor-pointer">
          {/* Left Side: Research */}
          <div className="flex items-center gap-2 px-3 py-1.5 border-r border-zinc-300 text-zinc-700 font-medium">
            <div className="p-1 bg-zinc-800 flex items-center justify-center">
                <div className='w-1 h-1 bg-zinc-50'></div>
            </div>
            Research
          </div>
          {/* Right Side: Text & Arrow */}
          <div className="flex items-center gap-2 px-3 py-1.5 text-zinc-800">
            <span>#1 on MemoryBench: best in latency, quality, and cost</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="px-6 mt-16 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Column: Text & CTAs */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-zinc-900 leading-tighter tracking-tight">
            Superintelligence <br className="hidden md:block" /> requires Supermemory
          </h1>
          
          <p className="mt-6 text-lg text-zinc-600 leading-snug max-w-lg">
            Memory, context, and understanding — the missing layer for AI that scales. User profiles, memory graph, retrieval, and connectors for agents that get smarter with every interaction.
          </p>
          
          {/* Button Row */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
            
            {/* Primary Button - Solid Zinc */}
            <div className="bg-zinc-900 text-white px-5 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-zinc-800 transition-colors font-medium shadow-sm">
              Start Building
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            {/* Secondary Button - Outline */}
            <div className="border border-zinc-300 text-zinc-800 px-5 py-2.5 cursor-pointer hover:bg-zinc-200/50 transition-colors bg-white/50 shadow-sm">
              Talk to Founder
            </div>

            {/* Tertiary Button - Text Link */}
            <div className="text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer flex items-center gap-1 ml-2">
              Get a personal supermemory
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>

          {/* Command Line Snippet */}
          <div className="mt-8 inline-flex items-center gap-3 border border-zinc-300 bg-white px-4 py-2.5 rounded-full text-sm font-dmmono shadow-sm">
            <span className="text-zinc-400 font-light">$</span>
            <span className="text-zinc-700">npx supermemory setup</span>
            <button className="text-zinc-400 hover:text-zinc-700 transition-colors ml-4 focus:outline-none" aria-label="Copy command">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Image Placeholder */}
        <div className="hidden lg:flex flex-1 justify-end pr-10">
          {/* Drop your <img> tag here. I've added a temporary dashed placeholder box for layout context. */}
          <div className="w-80 h-80 border-2 border-dashed border-zinc-300 rounded-xl flex items-center justify-center text-zinc-400 text-sm">
            Illustration Area
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;