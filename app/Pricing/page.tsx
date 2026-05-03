import React from 'react';
import { Navbar } from '../components/Navbar'; // Adjust path if needed
import Image from 'next/image';

// --- Data ---
const pricingPlans = [
  {
    name: 'FREE',
    price: '$0',
    description: 'Get started with basic memory features',
    features: [
      '1M tokens/month',
      '10K search queries/month',
      'Unlimited storage & users',
      'Free multi-modal extraction',
      'Email support',
      'Codex plugin (free)',
    ],
    buttonText: 'Get Shram.ai',
    primary: false,
  },
  {
    name: 'PRO',
    price: '$19',
    period: '/mo.',
    description: 'For developers building with AI memory',
    features: [
      '3M tokens/month',
      '100K search queries/month',
      'Unlimited storage & users',
      'Free multi-modal extraction',
      'Priority support',
      'All plugins (Claude Code, Cursor, OpenCode, OpenClaw, Codex)',
    ],
    buttonText: 'Get Shram.ai Pro',
    primary: true,
  },
  {
    name: 'SCALE',
    price: '$399',
    period: '/mo.',
    description: 'For teams and production workloads',
    features: [
      '80M tokens/month',
      '20M search queries/month',
      'Unlimited storage & users',
      'Free multi-modal extraction',
      'Dedicated support',
      'Gmail, S3, Web Crawler connectors',
    ],
    buttonText: 'Get Shram.ai Scale',
    primary: false,
  },
];

const faqs = [
  "What counts as a token?",
  "What counts as a search query?",
  "Can I switch plans at any time?",
  "What happens if I exceed my plan limits?",
  "Is there a commitment or contract?",
  "What plugins are included with Pro?",
];

const footerLinks = {
  Product: ['API', 'Plugins', 'Pricing', 'Changelog'],
  Resources: ['Documentation', 'Blog', 'Benchmarks'],
  Company: ['About', 'Careers', 'Privacy', 'Terms'],
};

// --- Icons ---
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto mt-10 border-x border-t border-zinc-300">
        
        {/* --- Hero Section --- */}
        <section className="py-24 px-6 text-center">
          <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-6 uppercase">Pricing</div>
          <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tight mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10">
            One pricing structure covers everything — plugins, enterprise features, and API access. No separate bills, no per-product charges.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-700">
            <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-emerald-600" /> Unlimited storage</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-emerald-600" /> Unlimited users</div>
            <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-emerald-600" /> Free multi-modal extraction</div>
            <div className="text-zinc-400">— in every plan</div>
          </div>
        </section>

        {/* --- Pricing Grid --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-300">
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className={`flex flex-col p-8 ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-zinc-300' : ''}`}>
              <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-4 uppercase">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-heading font-medium tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-zinc-500 font-medium">{plan.period}</span>}
              </div>
              <p className="text-sm text-zinc-600 mb-8 min-h-[40px]">{plan.description}</p>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                    <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-zinc-900" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className={`w-full py-2.5 px-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                  plan.primary 
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm' 
                    : 'border border-zinc-300 bg-white/50 text-zinc-800 hover:bg-zinc-100'
                }`}>
                  {plan.buttonText}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
                <div className="text-center mt-3 text-xs text-zinc-400 hover:text-zinc-600 cursor-pointer transition-colors">
                  Or get the personal app →
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* --- Enterprise & Overage --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-zinc-300">
          {/* Enterprise Left */}
          <div className="p-8 lg:border-r border-zinc-300 border-b lg:border-b-0 flex flex-col">
            <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-4 uppercase">ENTERPRISE</div>
            <h2 className="text-4xl font-heading font-medium tracking-tight mb-4">Custom</h2>
            <p className="text-sm text-zinc-600 mb-8">Custom deployments with dedicated engineering</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Unlimited tokens', 'Unlimited search queries', 'Forward-deployed engineer', 'Custom integrations & SSO'].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-zinc-900" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-2.5 px-4 border border-zinc-300 bg-white/50 text-zinc-800 hover:bg-zinc-100 transition-colors font-medium rounded-sm flex items-center justify-center gap-2">
              Talk to Founder
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>

          {/* Overage Right */}
          <div className="p-8 flex flex-col justify-between bg-zinc-50/50">
            <div>
              <div className="text-xs font-dmmono tracking-widest text-zinc-500 font-medium mb-6 uppercase">OVERAGE • PRO & SCALE</div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-zinc-300 p-4 bg-white">
                  <div className="text-2xl font-medium tracking-tight">$0.01</div>
                  <div className="text-xs text-zinc-500 mt-1">per 1,000 tokens</div>
                </div>
                <div className="border border-zinc-300 p-4 bg-white">
                  <div className="text-2xl font-medium tracking-tight">$0.10</div>
                  <div className="text-xs text-zinc-500 mt-1">per 1,000 queries</div>
                </div>
              </div>
              <p className="text-xs text-zinc-500">Only charged when you exceed your plan limits. No surprises.</p>
            </div>

            {/* Startup Banner */}
            <div className="mt-8 border border-zinc-300 bg-zinc-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-medium text-zinc-900">Startup Program</div>
                <div className="text-xs text-zinc-500 mt-1">$1,000 in credits · Dedicated support · 6 months to build</div>
              </div>
              <button className="bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 shrink-0 rounded-sm">
                Apply now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </section>

        {/* --- FAQs --- */}
        <section className="py-24 px-6 border-t border-zinc-300 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium tracking-tight mb-3">Frequently asked questions</h2>
            <p className="text-zinc-500">Everything you need to know about our pricing.</p>
          </div>

          <div className="max-w-3xl mx-auto border-t border-zinc-200">
            {faqs.map((faq, index) => (
              <div key={index} className="flex justify-between items-center py-5 border-b border-zinc-200 cursor-pointer group">
                <span className="text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">{faq}</span>
                <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <PlusIcon />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Bottom CTA --- */}
        <section className="py-24 px-6 text-center border-t border-zinc-300 bg-zinc-50">
          <h2 className="text-3xl font-heading font-medium tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-zinc-500 mb-8">Start free with 1M tokens. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm">
              Start Building
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
            <button className="border border-zinc-300 bg-white px-6 py-2.5 rounded-sm text-zinc-800 font-medium hover:bg-zinc-100 transition-colors shadow-sm">
              Talk to Sales
            </button>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="pt-16 pb-8 px-8 border-t border-zinc-300 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 font-bold mb-4 uppercase">{title}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Social Icons Col */}
            <div>
              <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 font-bold mb-4 uppercase">CONNECT</h4>
              <div className="flex items-center gap-4 text-zinc-400">
                {/* Placeholder simple SVGs for socials */}
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">𝕏</div>
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">GH</div>
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">IN</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-heading font-medium">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
              Shram.ai
            </div>
            <div className="text-xs text-zinc-500">
              © 2026 Shram.ai Inc. All rights reserved.
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Pricing;