"use client";

import React from "react";

// Reusable X (Twitter) Logo SVG
const XIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-400 dark:text-zinc-500 shrink-0 transition-colors duration-300"
  >
    <path d="M4 4l16 16" />
    <path d="M4 20L20 4" />
  </svg>
);

// Reusable Testimonial Card Component
const TestimonialCard = ({
  avatar,
  name,
  handle,
  text,
  date,
  image,
  annotation,
}: any) => {
  return (
    <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col text-sm break-inside-avoid mb-6 rounded-md shadow-sm transition-colors duration-300">
      {/* Card Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex-shrink-0 transition-colors duration-300">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800 transition-colors duration-300" />
            )}
          </div>
          <div className="min-w-0">
            <div className="font-medium text-zinc-900 dark:text-zinc-100 leading-tight truncate transition-colors duration-300">
              {name}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate transition-colors duration-300">
              {handle}
            </div>
          </div>
        </div>
        <XIcon />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow max-md:p-4">
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap text-[13px] break-words transition-colors duration-300">
          {text}
        </p>

        {image && (
          <div className="mt-4 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-900 aspect-video relative transition-colors duration-300">
            {/* Mock Image Representation */}
            {image === "mobile-mock" && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white/50 text-xs p-4">
                <div className="w-full max-w-[200px] h-12 bg-zinc-800 rounded-full flex items-center px-4 gap-3 border border-zinc-700">
                  <div className="w-6 h-6 rounded-full bg-orange-500 shrink-0"></div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="text-white font-medium text-[10px] truncate">
                      Solomon
                    </div>
                    <div className="text-zinc-400 text-[9px] truncate">
                      Shram app is tracking your chats ✅
                    </div>
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
                  <div className="text-white font-bold text-3xl max-md:text-2xl">
                    40%
                  </div>
                  <div className="text-zinc-400 text-[10px]">fewer clicks</div>
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

        <div className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-5 max-md:mt-4 transition-colors duration-300">
          {date}
        </div>
      </div>

      {/* Optional Blue Annotation */}
      {annotation && (
        <div className="border-t border-dotted border-blue-200 dark:border-blue-900/50 bg-[#F4F8FF] dark:bg-blue-950/20 p-4 text-xs italic text-blue-500 dark:text-blue-400 font-medium rounded-b-md transition-colors duration-300">
          {annotation}
        </div>
      )}
    </div>
  );
};

const Testimonials = () => {
  // Testimonial Data
  const column1 = [
    {
      name: "Harshil Mathur",
      handle: "@harshilmathur",
      text: "@levelsio I tried every single task app out here - manual pipeline boards, tags etc. the only thing that works reliably is @shram.ai . Not facing any dropped leads after setting it up.",
      date: "Feb 16, 2026",
      annotation: "^ CEO of a million dollar agency!!!!",
    },
    {
      name: "Ry",
      handle: "@heyhaigh",
      text: "My daily task tracking just got supercharged ⚡️ with @shram.ai.\n\nShram.ai is an amazing tracking app that has provided much more reliable auto drafting for my personal client threads and for team inboxes alike.\n\nHere's a full breakdown of how I've leveraged it. Hats off to https://t.co/Dh2m37Zrrs",
      date: "Dec 30, 2025",
    },
    {
      name: "Zimm",
      handle: "@Dan_Zmann",
      text: "@DeRonin_ Running an actual autopilot  with read / draft access, custom syncs, live app and w search, 4 unique Google workspace auth, shram memory.\n\nSub 2s drafting time, sub 1s sync call\n\nWill film a demo soon\n\nUsing @slack app and @shram.ai are cheat codes",
      date: "Mar 17, 2026",
    },
  ];

  const column2 = [
    {
      name: "Micky",
      handle: "@Rasmic",
      text: "Let's see if @shram.ai drafts\nhttps://t.co/nybko6Uwy9",
      image: "mobile-mock",
      date: "Feb 18, 2026",
      annotation: "^ Broker at our favorite company!!!!",
    },
    {
      name: "Dewaldt Huysamen",
      handle: "@GodsBoy7777",
      text: "@shram.ai I just migrated my entire WhatsApp history into Shram app  using their sync, parsed 1,797 conversations, extracted the tasks, and automatically drafted them into the right chat boxes.",
      date: "Mar 14, 2026",
    },
    {
      name: "Alex",
      handle: "@alex_dev",
      text: "Been in love with @shram.ai lately such a cool thing to add to your stacks\n\nAlso shoutout to their founder who sat down and helped me with my shram app integrations",
      date: "Mar 9, 2026",
    },
  ];

  const column3 = [
    {
      name: "Armin Daryabegi",
      handle: "@saasjesus",
      text: "This is crazy... We just ditched CRM completely and went tracker only through @shram.ai.\n\nReduced avg drafting time from 40s -> 12s\nDoing about 40-50% fewer clicks\n\nJust memory & near realtime app-syncing even for volatile information which shouldn't read a 5 days old, cached https://t.co/5jmiY9cOq9",
      image: "chart-mock",
      date: "Feb 19, 2026",
      annotation:
        "^ Switched to the workspaces plan after using it for a day. what an epic customer",
    },
    {
      name: "zan",
      handle: "@zanbuilds",
      text: "fast typing feels good but have you vibed with @shram.ai yet\n\nintegrated it today in my freelance project & took 120 seconds https://t.co/48wk4fCcQc",
      image: "dark-ui-mock",
      date: "Mar 18, 2026",
    },
    {
      name: "Nicolas codet",
      handle: "@NicolasCodet",
      text: "@shram.ai one of the best products ive used in a long time props to the team behind this",
      date: "Mar 9, 2026",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto border border-t-0 border-b-0 border-zinc-200 dark:border-zinc-800 bg-[#FAFAFA] dark:bg-zinc-950/40 font-sans flex flex-col max-md:border-x-0 transition-colors duration-300">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-t-0 border-zinc-300 dark:border-zinc-800 text-xs font-dmmono text-zinc-500 dark:text-zinc-400 tracking-wider sticky top-[64px] z-10 bg-[#FAFAFA] dark:bg-zinc-900/50 backdrop-blur-md max-md:px-4 max-md:py-3 transition-colors duration-300">
        <div>WALL OF LOVE</div>
        <div>
          [<span className="text-blue-500 dark:text-blue-400">4</span>/4]
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 pt-16 pb-10 max-w-3xl mx-auto max-md:pt-12 max-md:pb-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-zinc-50 tracking-tight mb-4 max-sm:text-3xl transition-colors duration-300">
          Builders love us.
        </h2>
        <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto max-sm:text-sm transition-colors duration-300">
          And they never stop talking about the time saved.
        </p>
      </div>

      {/* Masonry Grid Area */}
      <div className="px-6 md:px-12 max-md:px-4">
        <div className="grid grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-0">
          {/* Column 1 */}
          <div className="flex flex-col">
            {column1.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            {column2.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            {column3.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* View All Button Area */}
      <div className="flex justify-center py-10 border-t border-zinc-200 dark:border-zinc-800 max-md:py-8 transition-colors duration-300">
        <a
          href="#"
          className="text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
        >
          Read all 24 user reviews
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
