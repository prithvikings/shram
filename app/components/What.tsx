"use client";

import React from "react";
// 1. Update this import
import { ArrowRight01Icon } from "hugeicons-react";

const What = () => {
  return (
    <div className="max-w-6xl mx-auto border-x border-t-0 border-b border-zinc-200 bg-white font-sans">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-t-0 border-zinc-200 text-xs font-mono text-zinc-500 tracking-widest uppercase">
        <div>WHAT WE DO</div>
        <div>[<span className="text-blue-500">1</span>/4]</div>
      </div>

      <div className="text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">
        {/* 2. Update this wrapper to flex for proper alignment */}
        <div className="flex items-center justify-center gap-1.5 text-sm text-zinc-500 leading-relaxed mb-4 group-hover:underline cursor-pointer w-max mx-auto">
          Explore internal agent <ArrowRight01Icon size={18} />
        </div>
        <h2 className="text-4xl font-medium text-zinc-900 tracking-tight mb-4 leading-tight">
          AI builds your customer agent in hours
        </h2>
      </div>

      {/* Split Content Area */}
      <div className="px-8 pb-24">
        <div className="bg-[#FAFAFA] rounded-2xl border border-zinc-100 flex flex-col md:flex-row overflow-hidden min-h-[500px]">
          
          {/* Left Side: Mock UI on Blue Background */}
          <div className="w-full md:w-[45%] p-6 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#80b1ff] to-[#d6e5ff]">
            {/* Optional subtle grid overlay to mimic the image texture */}
            <div 
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            ></div>

            {/* Mock UI Card */}
            <div className="bg-white rounded-xl shadow-sm w-full max-w-[340px] p-5 relative z-10 font-sans text-sm border border-white/50">
              <h3 className="font-medium text-zinc-900 mb-4">Connect</h3>
              
              <div className="space-y-4">
                {/* Knowledge Sources */}
                <div>
                  <p className="text-xs text-zinc-600 mb-2">Knowledge sources</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer text-xs">
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                        <span className="font-medium text-zinc-700">.replit-prod</span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-[14px] h-[14px] bg-[#03363D] text-white rounded-full flex items-center justify-center text-[8px] font-bold">z</div>
                        <span className="font-medium text-zinc-700">Zendesk tickets <span className="text-zinc-400 font-normal">6712 results (after filters)</span></span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><path d="M6 9l6 6 6-6"/></svg>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer text-xs">
                      <div className="flex items-center gap-2">
                         <div className="w-[14px] h-[14px] border border-zinc-300 rounded flex items-center justify-center text-zinc-500 text-[8px] font-bold bg-zinc-50">N</div>
                        <span className="font-medium text-zinc-700">Replit <span className="text-zinc-400 font-normal">12 pages</span></span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><path d="M6 9l6 6 6-6"/></svg>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer text-xs">
                      <div className="flex items-center gap-2">
                         <div className="w-[14px] h-[14px] flex flex-col justify-between items-center py-0.5">
                           <div className="w-1 h-1 bg-[#F26207] rounded-sm"></div>
                           <div className="flex gap-0.5"><div className="w-1 h-1 bg-[#F26207] rounded-sm"></div><div className="w-1 h-1 bg-[#F26207] rounded-sm"></div></div>
                         </div>
                        <span className="font-medium text-zinc-700">docs.replit.com <span className="text-zinc-400 font-normal">251 subpages</span></span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    
                    <button className="flex items-center gap-2 w-full p-2 rounded-lg border border-dashed border-zinc-300 text-zinc-500 hover:text-zinc-700 hover:border-zinc-400 transition-colors text-xs font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                      Add
                    </button>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-xs text-zinc-600 mb-2">Tools</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer text-xs">
                      <div className="flex items-center gap-2">
                         <div className="w-[14px] h-[14px] bg-[#03363D] text-white rounded-full flex items-center justify-center text-[8px] font-bold">z</div>
                        <span className="font-medium text-zinc-700">Zendesk</span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><path d="M6 9l6 6 6-6"/></svg>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors cursor-pointer text-xs">
                      <div className="flex items-center gap-2">
                         <div className="w-[14px] h-[14px] bg-[#635BFF] text-white rounded-full flex items-center justify-center text-[8px] font-bold italic">s</div>
                        <span className="font-medium text-zinc-700">Stripe</span>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    
                    <button className="flex items-center gap-2 w-full p-2 rounded-lg border border-dashed border-zinc-300 text-zinc-500 hover:text-zinc-700 hover:border-zinc-400 transition-colors text-xs font-medium">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                      Add
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="bg-[#18181A] text-white text-xs font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-zinc-800 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>
                  Build
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Text Steps */}
          <div className="w-full md:w-[55%] p-10 md:p-14 flex flex-col justify-center gap-8">
            
            {/* Step 1 (Active) */}
            <div className="border-b border-zinc-800 pb-8">
              <h3 className="text-xl md:text-2xl font-medium text-zinc-900 mb-3">
                Day 1: AI builds your customer agent
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                Connect your knowledge sources and tools, and AI builds your customer agent.
              </p>
            </div>

            {/* Step 2 (Inactive) */}
            <div className="border-b border-zinc-200 pb-8 opacity-60">
              <h3 className="text-xl md:text-2xl font-medium text-zinc-400 mb-3">
                Day 2: Review its configurations
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Review and refine your customer agent's configurations by chatting with AI.
              </p>
            </div>

            {/* Step 3 (Inactive) */}
            <div className="opacity-60">
              <h3 className="text-xl md:text-2xl font-medium text-zinc-400 mb-3">
                Day 3: Activate it
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Activate your customer agent across your channels.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default What;