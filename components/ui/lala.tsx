"use client";

import React from "react";

const What = () => {
  return (
    <div className="max-w-6xl mx-auto border-x border-t-0 border-b border-zinc-200 bg-white font-sans">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-t-0 border-zinc-200 text-xs font-mono text-zinc-500 tracking-widest uppercase">
        <div>WHAT WE DO</div>
        <div>[<span className="text-blue-500">1</span>/4]</div>
      </div>

      {/* Main Title Section */}
      <div className="text-center px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-zinc-900 tracking-tight mb-4 leading-tight">
          Bring your data.{" "}
            <span className="text-blue-600">
            We build understanding.
          </span>
          <br />
          Your agent just knows.
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Context infrastructure for AI agents. One API, every capability.
        </p>
      </div>

      {/* Split Content Area */}
      <div className="flex flex-col lg:flex-row border-t border-zinc-200">
        
        {/* Left Side: Developer & Teams */}
        <div className="w-full lg:w-1/2 flex flex-col p-10 px-6 bg-[#F8FAFC] hover:bg-blue-50 transition-all duration-300 lg:border-r border-zinc-200">
          <p className="text-xs font-mono text-blue-500 tracking-widest uppercase mb-6">
            For Developers & Teams
          </p>
          
          <h3 className="text-3xl font-medium text-zinc-900 mb-4 font-space">
            The Supermemory API
          </h3>
          
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            We have built the state of the art in retrieval and memory. Whether you need RAG, memory, or extraction, it's all built in. One API, every capability.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-2xl font-medium text-zinc-900 mb-1">{"<300ms"}</div>
              <div className="text-xs text-zinc-600">Always fast. Always.</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-zinc-900 mb-1">100B+</div>
              <div className="text-xs text-zinc-600">Tokens monthly. We scale.</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-zinc-900 mb-1">#1</div>
              <div className="text-xs text-zinc-600">Quality across metrics.</div>
            </div>
          </div>
          <p className="text-xs text-zinc-600 mb-6">
              Self-hostable • SOC 2 • TypeScript & Python SDKs
            </p>

          <div className="mt-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-4 rounded font-medium flex items-center justify-center gap-2 text-sm font-space">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Start building 
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Side: Consumer */}
        <div className="w-full lg:w-1/2 flex flex-col p-10 px-4 bg-[#FCF9F5] hover:bg-orange-50 transition-all duration-300">
          <p className="text-xs font-medium font-mono text-[#B85C38] tracking-widest uppercase mb-6">
            For Everyone
          </p>
          
          <h3 className="text-3xl font-medium text-zinc-900 mb-4 font-space">
            Personal Supermemory
          </h3>
          
          <p className="text-zinc-500 leading-relaxed mb-6 text-sm max-w-md">
            One single memory across everything you use. What you teach one AI, every AI remembers.
          </p>

          {/* Feature List */}
          <div className="flex flex-col border-t border-zinc-200 mb-10">
            <div className="flex items-center justify-between py-2.5 border-b border-zinc-200">
              <span className="font-medium text-zinc-900 font-space text-sm">Supermemory App</span>
              <span className="text-xs text-zinc-500">Control panel for all your context</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-zinc-200">
              <span className="font-medium text-zinc-900 font-space text-sm">Claude Code • Cursor • OpenClaw • OpenCode</span>
              <span className="text-xs text-zinc-500">AI plugins</span>
            </div>
            <div className="flex items-center justify-between py-2.5 border-b border-zinc-200">
              <span className="font-medium text-zinc-900 font-space text-sm">Chrome Extension</span>
              <span className="text-xs text-zinc-500">One-click save</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium text-zinc-900">10,000+</span>
              <span className="text-sm text-zinc-600">power users</span>
            </div>
            <button className="w-full bg-[#A04018] hover:bg-[#8A3614] transition-colors text-white py-4 rounded font-medium flex items-center justify-center gap-2 text-sm font-space">
              Get Personal Supermemory
              <span>→</span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default What;