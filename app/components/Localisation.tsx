"use client";

import React from "react";
import {
  TaskExtractionCard,
  AutoDraftingCard,
  SecureLeadCard,
  SendRepliesCard,
} from "./MicroComponents/FeatureCards";

export default function Localisation() {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-950 font-gilroy w-full py-20 text-zinc-900 dark:text-zinc-50 border border-y-0 border-zinc-300 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl max-w-xl mx-auto font-bold font-gilroy tracking-tight mb-6">
            Never Miss A Task With Silent Chat Tracking
          </h2>
          <p className="max-w-sm mx-auto text-[17px] text-zinc-500 dark:text-zinc-400 leading-snug tracking-tight font-medium">
            Shram continuously monitors conversations, extracts hidden tasks,
            and drafts instant replies so your team never drops an important
            lead.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          {/* Top Left Card */}
          <TaskExtractionCard />

          {/* Top Right Card */}
          <AutoDraftingCard />

          {/* Bottom Left Card */}
          <SecureLeadCard />

          {/* Bottom Right Card */}
          <SendRepliesCard />
        </div>
      </div>
    </div>
  );
}
