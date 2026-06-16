import Image from "next/image";

export default function BB360Intro() {
  const benefits = [
    {
      title: "Centralized Operations",
      desc: "Connect your website, client records, and tools into a single, unified business dashboard."
    },
    {
      title: "Automated Workflows",
      desc: "Connect operations with intelligent background routines and custom AI agent handoffs."
    },
    {
      title: "Intelligent Insights",
      desc: "Gain visibility into acquisition channels, conversions, and operational metrics."
    },
    {
      title: "Enhanced Customer Experience",
      desc: "Provide instantaneous support and unified communications using intelligent routing."
    },
    {
      title: "Business Growth Enablement",
      desc: "Expand your marketing pipeline and operations without adding manual workload."
    }
  ];

  return (
    <section id="bb360" className="bg-brand-black text-brand-white border-b border-brand-black py-20 lg:py-28 relative overflow-hidden geometric-grid-dark">
      
      {/* Corner Label */}
      <div className="absolute top-10 left-10 text-left opacity-20">
        <span className="text-[10px] tracking-[0.4em] font-black uppercase text-brand-white">
          ECOSYSTEM_MODULE // 360
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Geometric 5-Node Schematic Diagram */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative border border-zinc-800 p-8 lg:p-12 w-full max-w-md bg-zinc-950/80 aspect-square flex flex-col justify-center items-center rounded-[20px]">
              
              {/* Central Core Hub */}
              <div className="relative h-20 w-20 border-2 border-brand-orange bg-zinc-900 flex flex-col items-center justify-center z-20">
                <span className="font-sans font-black text-base text-brand-white tracking-widest leading-none">BB</span>
                <span className="font-sans font-black text-xs text-brand-orange mt-0.5">360</span>
                
                {/* Connector lines (Radial Indicators) */}
                <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-0.5 h-8 bg-zinc-800"></div>
                <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-0.5 h-8 bg-zinc-800"></div>
                <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 h-0.5 w-8 bg-zinc-800"></div>
                <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 h-0.5 w-8 bg-zinc-800"></div>
              </div>

              {/* Node 1: Website (Top Center) */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase text-zinc-300">
                WEBSITE
              </div>
              
              {/* Node 2: AI Agents (Right Center) */}
              <div className="absolute right-2 top-[32%] -translate-y-1/2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase text-zinc-300">
                AI AGENTS
              </div>

              {/* Node 3: Automation (Bottom Right) */}
              <div className="absolute right-6 bottom-8 bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase text-zinc-300">
                AUTOMATION
              </div>

              {/* Node 4: Analytics (Bottom Left) */}
              <div className="absolute left-6 bottom-8 bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase text-zinc-300">
                ANALYTICS
              </div>

              {/* Node 5: Growth (Left Center) */}
              <div className="absolute left-4 top-[32%] -translate-y-1/2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase text-zinc-300">
                GROWTH
              </div>

              {/* Outer boundary lines */}
              <div className="absolute inset-4 border border-dashed border-zinc-800 pointer-events-none rounded-[12px]"></div>

            </div>
          </div>

          {/* Right Side: Copy & Explanations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-brand-orange border-b-2 border-brand-orange pb-1.5 inline-block">
                INTEGRATED BUSINESS PLATFORM
              </span>
              <h2 className="text-brand-white mt-2 leading-tight">
                Meet BB360 — Your Digital Business Ecosystem
              </h2>
            </div>
            
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-semibold">
              BB360 is our integrated ecosystem designed to connect websites, AI automation, marketing operations, customer engagement, and business intelligence into one streamlined digital environment.
            </p>
            <p className="font-sans text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
              Rather than managing disconnected tools, businesses can leverage a unified system that supports growth, efficiency, and smarter decision-making.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {benefits.map((item, idx) => (
                <div key={idx} className="border-l-2 border-brand-orange pl-4 space-y-1">
                  <h4 className="font-sans font-bold text-brand-white uppercase text-xs tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-brand-gray text-xs leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
