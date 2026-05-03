import React from 'react';
import { Navbar } from '../components/Navbar'; // Adjust path if needed
import Image from 'next/image';

const About = () => {
  // Value card data
  const valueCards = [
    {
      id: 1,
      title: "Exhibit Integrity",
      imageDesc: "An image of elephants walking in a vast savanna.",
      link: "https://framerusercontent.com/images/4rYzVqlX9MDEz8uImoowLG2R7A.png?scale-down-to=512&width=1024&height=642"
    },
    {
      id: 2,
      title: "Embrace Empathy",
      imageDesc: "An image of a snow-capped mountain peak.",
      link: "https://framerusercontent.com/images/NN3chsWdsz7I3lOtyCrzqZZx2k.png?width=789&height=1024"
    },
    {
      id: 3,
      title: "Pursue Perfection",
      imageDesc: "An image of a calm ocean or sea.",
      link: "https://framerusercontent.com/images/NN3chsWdsz7I3lOtyCrzqZZx2k.png?width=789&height=1024" // Note: This is a duplicate URL from the prompt, change if you have a different one!
    },
  ];

  // Primary Zinc button style
  const zincButtonStyle = "bg-zinc-900 text-white px-5 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-zinc-800 transition-colors font-medium rounded-sm shadow-sm";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />

      {/* Notice the mt-8 added here, pushing it down */}
<main className="max-w-6xl mx-auto mt-10 border border-zinc-300 bg-white">
        
        {/* --- Main Headline Section --- */}
        <section className="mt-16 px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
          <h1 className="text-5xl md:text-5xl font-heading font-medium text-zinc-900 leading-tight tracking-tight max-w-xl">
            Building a future where <br className="hidden md:block" /> work manages itself
          </h1>
          
          {/* Main Logo / Illustration Placeholder */}
          <div className="shrink-0 flex items-center justify-center w-full md:w-auto mt-6 md:mt-0 pr-0 md:pr-10">
            <div className="p-8 bg-amber-50 rounded-xl flex items-center justify-center text-zinc-400 text-sm text-center">
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
            </div>
          </div>
        </section>

        {/* --- Mission Section --- */}
        <section className="px-6 md:px-12 py-16 border-t border-zinc-200">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-zinc-900 font-sans mb-8">Mission.</h2>
            
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>In Sanskrit, the word &quot;Shram&quot; means to work hard.</p>
              
              <p>
                While there is little we share in common with most people across the globe, 
                it is our aspiration to have more than what we have now that unites us.
              </p>
              
              <p>
                It&#x27;s not that we are greedy or clueless, we just want to be around 
                things that mean something to us - our family, an adventure or just 
                about anything!
              </p>
              
              <p>
                While we celebrate impact, we overlook the intent with which we act. We believe 
                that it is perhaps the only thing we have the privilege to control.
              </p>
            </div>
          </div>
        </section>

        {/* --- Values Section --- */}
        <section className="px-6 md:px-12 py-16 border-t border-zinc-200 bg-zinc-50/50">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-zinc-600 italic text-xl font-dmmono">
              &quot;Meaningful Intent&quot;
            </p>
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 font-sans mb-8">Values.</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We are engineers, designers and marketeers who look upto ideals and pride 
              ourselves for aligning with them in everything we do.
            </p>
          </div>
          
          {/* Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div key={card.id} className="group relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 shadow-sm cursor-pointer">
                
                {/* Background Image using Next.js Image */}
                <Image 
                  src={card.link}
                  alt={card.imageDesc}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 w-full h-full bg-zinc-900/40 flex items-center justify-center p-6 text-center transition-colors duration-500 group-hover:bg-zinc-900/60">
                  <h3 className="text-2xl font-bold font-heading text-white tracking-tight drop-shadow-md">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Culture Section --- */}
        <section className="px-6 md:px-12 py-16 border-t border-zinc-200">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 font-sans mb-8">Culture.</h2>
            
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>We converted the terrace of an independent home into the loveliest workspace ever.</p>
              <p>We like hosting events with bright minds and have merged work with play.</p>
            </div>
          </div>
          
          {/* Culture Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
              <Image 
                src="https://framerusercontent.com/images/ebpp2Sd3AT8w0iyXubogns4JYg.png?scale-down-to=512&width=1024&height=768"
                alt="Indoor-Outdoor Terrace Workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
              <Image 
                src="https://framerusercontent.com/images/o21BftwNn8eFplBcf1Kot0iEsA.png?scale-down-to=512&width=1024&height=768"
                alt="Team Group Photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-24 px-6 md:px-12 text-center border-t border-zinc-200">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-heading font-medium tracking-tight text-zinc-900 mb-6">
              Find your flow with Shram.
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-lg mx-auto">
              If you are busy, high agency and value your time, Shram is for you.
            </p>
            
            <div className="flex justify-center">
              <button className={zincButtonStyle}>
                Request access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-20 border-t border-zinc-300 max-w-sm mx-auto"></div>
        </section>

      </main>
    </div>
  );
};

export default About;