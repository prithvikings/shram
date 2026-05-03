"use client";

import React from 'react';

// Reusable SVG Cube Icon
const WireframeCube = ({ className }) => (
  <svg 
    width="120" 
    height="120" 
    viewBox="0 0 140 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`transition-colors duration-300 ${className}`}
  >
    {/* Top Face */}
    <path d="M70 5 L135 35 L70 65 L5 35 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    {/* Left Face */}
    <path d="M5 35 L70 65 L70 115 L5 85 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    {/* Right Face */}
    <path d="M70 65 L135 35 L135 85 L70 115 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>

    {/* Inner Top Face Detail */}
    <path d="M70 18 L115 35 L70 52 L25 35 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>

    {/* Vertical dashed lines for left face */}
    <path d="M25 45 L25 90" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4"/>
    <path d="M48 55 L48 100" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4"/>

    {/* Vertical dashed lines for right face */}
    <path d="M115 45 L115 90" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4"/>
    <path d="M92 55 L92 100" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4"/>
  </svg>
);

const featureData = [
  {
    overline: "PER TENANT",
    title: "One localization engine per customer.",
    description: "Provision a localization engine for every workspace or account via one API call. Each tenant gets their own glossary, brand voice, and model chain."
  },
  {
    overline: "PER SURFACE",
    title: "One localization engine per content surface.",
    description: "Marketing copy, product UI, legal boilerplate, help docs – each has different terminology. Run a separate localization engine per surface."
  },
  {
    overline: "AT SCALE",
    title: "As many localization engines as you need.",
    description: "Localization engines are first-class infrastructure primitives on Lingo.dev. Provision via API. Call like any service. Run one or thousands – the platform handles model routing, storage, and scoring."
  }
];

const Localisation = () => {
  return (
    <div className="bg-[#FAFAFA] font-sans max-w-6xl mx-auto flex justify-center py-24 border-b border-x border-zinc-300">
      {/* Outer Dashed Container */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 ">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-[11px] font-medium tracking-wide text-zinc-600 bg-white border border-zinc-200 rounded-full shadow-sm">
            Platforms
          </span>
          <h2 className="mb-5 font-semibold tracking-tight text-zinc-900 text-2xl leading-tight">
            A localization engine per tenant. Per product. Per team.
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed text-zinc-500">
            Lingo.dev hosts localization engines. Create as many as your architecture
            needs – each configured independently, provisioned via API, observable in
            isolation.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 px-2 pb-2 rounded-2xl transition-all duration-300 hover:border border-zinc-300 cursor-pointer"
            >
              {/* Icon Container with hover color change */}
              <div className="mb-10 text-zinc-300 group-hover:text-[#16a34a]">
                <WireframeCube className="w-24 h-24 md:w-28 md:h-28" />
              </div>
              
              {/* Overline */}
              <div className="text-[11px] font-medium tracking-[0.15em] text-zinc-400 uppercase mb-4">
                {feature.overline}
              </div>
              
              {/* Title */}
              <h3 className="mb-4 text-[17px] font-bold text-zinc-900 leading-snug">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[13px] leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Localisation;