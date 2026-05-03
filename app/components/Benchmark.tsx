"use client";

import React from "react";

const Benchmark = () => {
  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-800">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const CrossIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const PartialText = () => (
    <span className="text-sm font-medium text-zinc-500">Partial</span>
  );

  const tableData = [
    { feature: "Memory Graph", sm: <CheckIcon />, mem0: <PartialText />, zep: <CrossIcon /> },
    { feature: "User Profiles", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <CheckIcon /> },
    { feature: "Document Retrieval", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <CheckIcon /> },
    { feature: "Connectors", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <PartialText /> },
    { feature: "Document Extractors", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <CrossIcon /> },
    { feature: "Sub-300ms Latency", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <CheckIcon /> },
    { feature: "Self-hostable", sm: <CheckIcon />, mem0: <CheckIcon />, zep: <CheckIcon /> },
    { feature: "Consumer Plugins", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <CrossIcon /> },
    { feature: "Open Eval Platform", sm: <CheckIcon />, mem0: <CrossIcon />, zep: <CrossIcon /> },
  ];

  return (
    <>
       <div className='max-w-6xl mx-auto border border-y-0 bg-neutral-100 border-zinc-300 flex flex-col items-center justify-center p-4 py-6 text-center'>

        <p className='text-md font-medium'>100B+ tokens processed monthly · Every query 300ms</p>

    </div>
    <div className="max-w-6xl mx-auto border-x border-zinc-300 bg-[#FAFAFA] font-sans">
      
      {/* Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-y border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-wider">
        <div>Benchmark</div>
        <div>[3/8]</div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 pt-14 pb-20 max-w-4xl mx-auto flex flex-col items-center gap-2">
        <h2 className="max-w-[700px] font-heading text-[44px] font-medium tracking-[-0.04em] leading-[120%] text-text text-center max-lg:text-[36px] max-md:text-[28px]">
          We don't think benchmarks tell the full story.
        </h2>
        <p className="text-md text-zinc-500 leading-relaxed max-w-xl mx-auto">
          But we lead every major one anyway. State-of-the-art on LongMemEval, 
          LoCoMo, and ConvoMem. We also built <span className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4">MemoryBench</span>, an open eval platform for 
          memory systems.
        </p>
      </div>

      {/* Video Placeholder */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="aspect-video bg-zinc-900 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent z-10" />
          <svg className="w-16 h-16 text-zinc-100 z-20 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-200 border-y border-zinc-200 font-space">
        
        {/* Row 1 */}
        <div className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA]">
          <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">LONGMEMEVAL</p>
          <p className="text-4xl font-space font-medium text-zinc-900 mb-2">85.2%</p>
          <p className="text-xs text-zinc-500 font-medium">Long-term memory evaluation</p>
        </div>
        
        <div className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA]">
          <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">LOCOMO</p>
          <p className="text-4xl font-medium text-zinc-900 mb-2">#1</p>
          <p className="text-xs text-zinc-500 font-medium">Long conversation memory</p>
        </div>
        
        <div className="flex flex-col items-center justify-center p-8 text-center bg-[#FAFAFA]">
          <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-3">CONVOMEM</p>
          <p className="text-4xl font-medium text-zinc-900 mb-2">#1</p>
          <p className="text-xs text-zinc-500 font-medium">Conversational memory</p>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA]">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-medium text-zinc-900">5</span>
            <span className="text-lg font-medium text-zinc-900">context layers</span>
          </div>
          <p className="text-xs font-medium text-zinc-500">Others offer 1-2</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA]">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-medium text-zinc-900">{"<300ms"}</span>
            <span className="text-lg font-medium text-zinc-900">p95 latency</span>
          </div>
          <p className="text-xs font-medium text-zinc-500">At any scale</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA]">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-medium text-zinc-900">100B+</span>
            <span className="text-lg font-medium text-zinc-900">tokens/month</span>
          </div>
          <p className="text-xs font-medium text-zinc-500">Production proven</p>
        </div>

      </div>

      {/* Comparison Table Section */}
      <div className="px-6 py-8 bg-white flex flex-col items-center">
        <div className="w-full max-w-5xl border border-zinc-200 rounded-xl overflow-hidden font-space">
          
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-white border-b border-zinc-200">
            <div className="p-5 text-sm font-medium text-zinc-600">Feature</div>
            <div className="p-5 text-sm font-semibold text-zinc-900 text-center bg-zinc-50 border-x border-zinc-200">Supermemory</div>
            <div className="p-5 text-sm font-medium text-zinc-600 text-center">Mem0</div>
            <div className="p-5 text-sm font-medium text-zinc-600 text-center">Zep</div>
          </div>

          {/* Table Body */}
          {tableData.map((row, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 items-center ${index !== tableData.length - 1 ? 'border-b border-zinc-100' : ''}`}
            >
              <div className="p-5 py-3.5 text-sm text-zinc-700 font-dmsans">{row.feature}</div>
              <div className="p-5 py-3.5 flex justify-center bg-zinc-50 border-x border-zinc-200 h-full items-center">
                {row.sm}
              </div>
              <div className="p-5 py-3.5 flex justify-center h-full items-center">
                {row.mem0}
              </div>
              <div className="p-5 py-3.5 flex justify-center h-full items-center">
                {row.zep}
              </div>
            </div>
          ))}

        </div>
      </div>
       
    </div>
     <div className="max-w-6xl mx-auto text-center py-6 border border-zinc-300 w-full flex items-center justify-center text-sm text-zinc-500">
            Read the full research paper <span className="ml-2 text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4">here</span>.
        </div>
    </>
  );
};

export default Benchmark;