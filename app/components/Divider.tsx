import React from "react";

const Divider = ({ height }: { height?: number }) => {
  // Fixes the Tailwind dynamic class compilation bug
  const containerHeight = height ? `${height * 0.25}rem` : "6rem";

  return (
    <div
      // 1. OUTER CONTAINER: We layer a linear-gradient over the repeating lines.
      // The linear gradient goes from solid background -> transparent -> solid background.
      // This creates the "blurred/faded" aesthetic on the far left and right edges.
      className="w-full border-y border-dashed border-zinc-300 dark:border-zinc-800 transition-colors duration-300 
      bg-[image:linear-gradient(to_right,white_0%,transparent_15%,transparent_85%,white_100%),repeating-linear-gradient(45deg,#d4d4d8,#d4d4d8_1px,transparent_1px,transparent_10px)] 
      dark:bg-[image:linear-gradient(to_right,#09090b_0%,transparent_15%,transparent_85%,#09090b_100%),repeating-linear-gradient(45deg,#3f3f46,#3f3f46_1px,transparent_1px,transparent_10px)]"
      style={{ height: containerHeight }}
    >
      <div
        // 2. INNER CONTENT CONTAINER
        className="max-w-6xl mx-auto h-full border-x border-dashed border-zinc-300 dark:border-zinc-800 transition-colors duration-300 
        max-lg:mx-6 max-md:mx-0 max-md:border-x-0 
        bg-white dark:bg-zinc-950
        bg-[size:16px_16px] bg-[position:center] 
        bg-[image:radial-gradient(#d4d4d8_1px,transparent_1px)] 
        dark:bg-[image:radial-gradient(#3f3f46_1px,transparent_1px)]"
      ></div>
    </div>
  );
};

export default Divider;
