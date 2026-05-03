import React from 'react';

const Hero = () => {
  return (
    <div className="mt-10 border border-b-0 border-zinc-300 max-w-6xl mx-auto bg-zinc-50 pb-16 overflow-hidden">
      
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
      <div className='flex flex-col gap-16 items-center justify-center mt-24'>
        <div className="px-6 flex flex-col justify-between items-center gap-7">
        
        <h1 className='text-5xl text-center font-space font-medium max-w-xl'>AI customer support for tech companies</h1>
        <p className='text-sm font-dmsans text-zinc-600 font-normal max-w-xl text-center'>Parahelp is a team of AI agents that builds and evolves itself to resolve your most complex support tickets end-to-end.</p>
        <div className='flex items-center gap-2'>
          <button className='bg-zinc-900 text-zinc-50 hover:bg-zinc-700 text-sm font-medium py-1.5 px-3 rounded-md transition-colors'>
          Get Access
        </button>
        <button className=''>contact us</button>
        </div>
      </div>
      <div className='w-4xl h-[500px] bg-zinc-800 rounded-md'></div>
      </div>

    </div>
  );
};

export default Hero;