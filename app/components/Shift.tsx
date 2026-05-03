"use client";

import React from "react";

const WhatWeDo = () => {
  return (
    <div className="border border-t-0 border-b-0 border-zinc-300 font-sans max-w-6xl mx-auto py-10">
      {/* Main Title Section */}
      <div className="text-center px-6 py-10 max-w-4xl mx-auto mb-6">
        <h2 className="text-4xl md:text-[40px] font-medium text-zinc-900 tracking-tight mb-4 leading-tight">
          Meet the AI customer support team that <br className="hidden md:block" /> evolves with your company
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-6">
        
        {/* Left Card: Customer Agent */}
        <div className="flex-1 bg-[#FAFAFA] border border-zinc-100 rounded-3xl p-8 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-medium text-zinc-900">Customer agent</h3>
            <button className="bg-zinc-100 p-2 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </button>
          </div>
          <p className="text-zinc-500 mb-8 text-sm">
            Resolves your most complex support tickets end-to-end, 24/7.
          </p>
          
          {/* Inner Mock UI */}
          <div className="bg-[#F4F4F5] rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px]">
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-10">
               <span>Viewing</span>
               <span className="bg-zinc-800 text-white rounded-sm px-1 text-[10px] font-bold">Z</span>
               <span>Billing group</span>
            </div>
            
            <div className="space-y-6 max-w-sm mx-auto w-full">
              {/* User message */}
              <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-zinc-100">
                <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <span className="text-sm text-zinc-800 font-medium">Can I get a refund?</span>
              </div>
              
              {/* Status items */}
              <div className="pl-3 space-y-4">
                 <div className="flex items-center gap-3 text-xs text-zinc-600 font-medium">
                   <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <span>Read memory</span>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-zinc-500 font-medium">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin text-zinc-400"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                   <span className="flex items-center gap-1">
                     Retrieve customer details 
                     <span className="w-3.5 h-3.5 bg-indigo-500 text-white rounded-sm flex items-center justify-center text-[8px] font-bold">S</span>
                   </span>
                 </div>
              </div>
            </div>

            {/* Bottom Tabs */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-sm">
              <button className="text-zinc-900 border-b-2 border-zinc-900 pb-1 font-medium">Simulation</button>
              <button className="text-zinc-400 pb-1 hover:text-zinc-600 transition-colors">Use cases</button>
            </div>
          </div>
        </div>

        {/* Right Card: Internal Agent */}
        <div className="flex-1 bg-[#FAFAFA] border border-zinc-100 rounded-3xl p-8 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-medium text-zinc-900">Internal agent</h3>
            <button className="bg-zinc-100 p-2 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </button>
          </div>
          <p className="text-zinc-500 mb-8 text-sm">
            Builds and evolves your customer agent.
          </p>

          {/* Inner Mock UI */}
          <div className="bg-[#F4F4F5] rounded-2xl p-6 flex-1 flex flex-col relative min-h-[350px]">
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-8">
               <span>Viewing</span>
               <span className="text-[#E01E5A] font-bold text-sm">#</span>
               <span>#customer-support-ops</span>
            </div>

            <div className="max-w-sm mx-auto w-full mb-12 relative">
               
               {/* Vertical connecting line */}
               <div className="absolute left-4 top-8 bottom-12 w-px bg-zinc-200"></div>

               <div className="space-y-4">
                 {/* GitHub message */}
                 <div className="bg-white rounded-xl p-3.5 shadow-sm border border-zinc-100 w-full relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-zinc-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      Trigger: PR merged
                    </div>
                    <p className="text-sm text-zinc-700">Review the PR and, if relevant, update agent instructions.</p>
                 </div>

                 {/* Parahelp message */}
                 <div className="bg-white rounded-xl p-4 shadow-sm border border-zinc-100 w-full relative z-10">
                   <div className="flex items-center gap-2.5 mb-3">
                     <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-[10px]">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                     </div>
                     <div>
                       <div className="text-sm font-semibold text-zinc-900 leading-none mb-1">Parahelp</div>
                       <div className="text-[11px] text-zinc-500 font-medium flex items-center gap-1">
                         <span className="opacity-70">📄</span> Action approval request
                       </div>
                     </div>
                   </div>
                   <p className="text-[13px] text-zinc-800 mb-4 leading-relaxed">
                     <strong className="font-semibold">Action summary:</strong> I've updated 2 sections in the troubleshooting instruction file that were outdated following the new changes to the Workspace editor.
                   </p>
                   <div className="flex gap-2">
                     <button className="flex items-center gap-1.5 text-xs border border-zinc-200 px-3 py-1.5 rounded font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                       <span className="text-green-500 bg-green-100 rounded-sm px-0.5">✓</span> Approve action
                     </button>
                     <button className="text-xs border border-zinc-200 px-3 py-1.5 rounded font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                       View in interface
                     </button>
                   </div>
                 </div>
               </div>
            </div>

            {/* Bottom Tabs */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-sm">
              <button className="text-zinc-900 border-b-2 border-zinc-900 pb-1 font-medium">Simulation</button>
              <button className="text-zinc-400 pb-1 hover:text-zinc-600 transition-colors">Use cases</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;