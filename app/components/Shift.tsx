import ContextFinderCard from "./MicroComponents/ContextFinderCard";
import DraftingAgentCard from "./MicroComponents/DraftingAgentCard";

const WhatWeDo = () => {
  return (
    <div className="border border-t-0 border-b-0 border-zinc-300 font-sans max-w-6xl mx-auto py-10 max-md:py-6 max-md:border-x-0">
      {/* Main Title Section */}
      <div className="text-center px-6 py-10 max-w-4xl mx-auto mb-6 max-md:py-4 max-md:mb-2 max-sm:px-4">
        <h2 className="text-4xl md:text-[40px] font-medium text-zinc-900 tracking-tight mb-4 leading-tight max-sm:text-3xl max-sm:leading-snug">
          Meet your silent app memory layer that{" "}
          <br className="hidden md:block" /> catches every missed text
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-6 max-md:px-4 max-md:gap-4">
        <ContextFinderCard />
        <DraftingAgentCard />
      </div>
    </div>
  );
};

export default WhatWeDo;
