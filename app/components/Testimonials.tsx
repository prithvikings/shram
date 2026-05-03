"use client";

import React from "react";

// Reusable X (Twitter) Logo SVG
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
    <path d="M4 4l16 16" />
    <path d="M4 20L20 4" />
  </svg>
);

// Reusable Testimonial Card Component
const TestimonialCard = ({ avatar, name, handle, text, date, image, annotation }) => {
  return (
    <div className="bg-white border border-zinc-200 flex flex-col text-sm break-inside-avoid mb-6">
      {/* Card Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
            {avatar ? (
               <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full bg-gradient-to-br from-zinc-300 to-zinc-400" />
            )}
          </div>
          <div>
            <div className="font-medium text-zinc-900 leading-tight">{name}</div>
            <div className="text-xs text-zinc-500">{handle}</div>
          </div>
        </div>
        <XIcon />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-zinc-700 leading-relaxed whitespace-pre-wrap text-[13px]">
          {text}
        </p>

        {image && (
          <div className="mt-4 rounded-lg overflow-hidden border border-zinc-200 bg-zinc-900 aspect-video relative">
            {/* Mock Image Representation */}
            {image === "mobile-mock" && (
               <div className="absolute inset-0 flex flex-col justify-center items-center text-white/50 text-xs p-4">
                 <div className="w-full max-w-[200px] h-12 bg-zinc-800 rounded-full flex items-center px-4 gap-3 border border-zinc-700">
                   <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                   <div className="flex-1 text-left">
                     <div className="text-white font-medium text-[10px]">Solomon</div>
                     <div className="text-zinc-400 text-[9px]">Supermemory is active and ready! ✅</div>
                   </div>
                 </div>
               </div>
            )}
            {image === "chart-mock" && (
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <div className="flex items-end gap-2 h-2/3">
                  <div className="w-4 bg-zinc-700 h-1/3"></div>
                  <div className="w-4 bg-zinc-500 h-full"></div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-3xl">40%</div>
                  <div className="text-zinc-400 text-[10px]">fewer tokens</div>
                </div>
              </div>
            )}
             {image === "dark-ui-mock" && (
              <div className="absolute inset-0 flex flex-col p-3 gap-2">
                <div className="flex gap-2">
                  <div className="w-1/3 h-20 bg-zinc-800 rounded-md"></div>
                  <div className="w-2/3 h-20 bg-zinc-800 rounded-md border border-green-500/30"></div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="text-[11px] text-zinc-400 mt-5">{date}</div>
      </div>

      {/* Optional Blue Annotation */}
      {annotation && (
        <div className="border-t border-dotted border-blue-200 bg-[#F4F8FF] p-4 text-xs italic text-blue-500 font-medium">
          {annotation}
        </div>
      )}
    </div>
  );
};

const Testimonials = () => {
  // Testimonial Data mapped to 3 columns to easily render a masonry-style grid
  const column1 = [
    {
      name: "Harshil Mathur",
      handle: "@harshilmathur",
      text: "@levelsio Tried almost everything mentioned here - structured memory files, qmd etc. the only thing that works reliably is @supermemory . Not facing any memory issues after setting it up.",
      date: "Feb 16, 2026",
      annotation: "^ CEO of a billion dollar company!!!!"
    },
    {
      name: "Ry",
      handle: "@heyhaigh",
      text: "My AI agent memories just got supercharged ⚡️ with @supermemory.\n\nSupermemory is a fantastic RAG tool that has provided much more sophisticated memory for my personal voice agent and for user sessions alike.\n\nHere's a full breakdown of how I've leveraged it. Hats off to https://t.co/Dh2m37Zrrs",
      date: "Dec 30, 2025"
    },
    {
      name: "Zimm",
      handle: "@Dan_Zmann",
      text: "@DeRonin_ Running an actual J.A.R.V.I.S. with read / write access, custom tools, live web and x search, 4 unique Google workspace auth, supermemory.\n\nSub 2s response time, sub 1s tool call\n\nWill film a demo soon\n\nUsing @zocomputer and @supermemory is cheat code",
      date: "Mar 17, 2026"
    }
  ];

  const column2 = [
    {
      name: "Micky",
      handle: "@Rasmic",
      text: "Let's see if @supermemory cooks\nhttps://t.co/nybko6Uwy9",
      image: "mobile-mock",
      date: "Feb 18, 2026",
      annotation: "^ Devrel at our favorite company!!!!"
    },
    {
      name: "Dewaldt Huysamen",
      handle: "@GodsBoy7777",
      text: "@supermemory I just migrated my entire ChatGPT history into Supermemory using Claude Code, parsed 1,797 conversations, extracted the facts, and automatically routed them into the right containers.",
      date: "Mar 14, 2026"
    },
    {
      name: "Alex",
      handle: "@alex_dev",
      text: "Been in love with @supermemory lately such a cool thing to add to your agent\n\nAlso shoutout to their founder who sat down and helped me with my supermemory installation",
      date: "Mar 9, 2026"
    }
  ];

  const column3 = [
    {
      name: "Armin Daryabegi",
      handle: "@saasjesus",
      text: "This is crazy... We just ditched RAG completely and went memory only through @supermemory.\n\nReduced avg response time from 40s -> 12s\nUsing about 40-50% fewer tokens\n\nJust memory & near realtime web-search even for volatile information which shouldn't read a 5 days old, cached https://t.co/5jmiY9cOq9",
      image: "chart-mock",
      date: "Feb 19, 2026",
      annotation: "^ Switched to the enterprise plan after using it for a day. what an epic customer"
    },
    {
      name: "zan",
      handle: "@zanbuilds",
      text: "vibe coding feels good but have you vibed with @supermemory yet\n\nintegrated it today in my hackathon project & took 120 seconds https://t.co/48wk4fCcQc",
      image: "dark-ui-mock",
      date: "Mar 18, 2026"
    },
    {
      name: "Nicolas codet",
      handle: "@NicolasCodet",
      text: "@supermemory one of the best products ive used in a long time props to the team behind this",
      date: "Mar 9, 2026"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto border border-t-0 border-b-0 border-zinc-200 bg-[#FAFAFA] font-sans flex flex-col">
      
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-t-0 border-zinc-300 text-xs font-dmmono text-zinc-500 tracking-wider">
        <div>TESTIMONIALS</div>
        <div>[<span className="text-blue-500">4</span>/4]</div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 pt-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-4">
          Builders love us.
        </h2>
        <p className="text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
          And they can't stop telling the world about it.
        </p>
      </div>

      {/* Masonry Grid Area */}
      <div className="px-6 md:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            {column1.map((item, i) => <TestimonialCard key={i} {...item} />)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
             {column2.map((item, i) => <TestimonialCard key={i} {...item} />)}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
             {column3.map((item, i) => <TestimonialCard key={i} {...item} />)}
          </div>

        </div>
      </div>

      {/* View All Button Area */}
      <div className="flex justify-center py-10 border-t border-zinc-200">
        <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
          View all 24 testimonials 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
      </div>

    </div>
  );
};

export default Testimonials;