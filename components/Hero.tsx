import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-black text-brand-white py-16 md:py-20 lg:py-24 geometric-grid-dark overflow-hidden">
      
      {/* Subtle background element */}
      <div className="absolute top-10 right-10 hidden lg:block text-right opacity-25">
        <span className="text-[10px] tracking-[0.3em] font-black uppercase text-brand-white">
          SYS_ALPHA // BB360
        </span>
      </div>

      <div className="site-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Description, Buttons */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            
            {/* Small Pill Indicator */}
            <div className="inline-flex items-center space-x-2 border border-brand-orange/40 px-4 py-1.5 bg-zinc-950 rounded-[12px]">
              <span className="h-2 w-2 bg-brand-orange rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange">
                Enterprise Digital Infrastructure
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-brand-white">
              AI Automation, Web Development & <span className="text-brand-orange">Digital Growth Solutions</span> for Modern Businesses
            </h1>

            {/* Hero Description */}
            <p className="text-brand-gray text-[16px] lg:text-[18px] leading-[1.7] max-w-2xl font-normal">
              Beyond Bots helps businesses transform operations through intelligent automation, high-performance websites, and growth-focused digital marketing strategies. We build digital systems that reduce manual effort, improve efficiency, and accelerate business growth.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex justify-center items-center bg-brand-orange text-brand-white text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-[12px] border-2 border-brand-orange hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-orange/15 cursor-pointer"
              >
                Book Consultation
              </Link>

              <Link
                href="#services"
                className="inline-flex justify-center items-center bg-transparent text-brand-orange text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-[12px] border-2 border-brand-orange hover:bg-brand-orange hover:text-brand-white transition-all duration-300 cursor-pointer"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Statement */}
            <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-[11px] font-bold uppercase tracking-widest text-brand-gray font-sans">
              <span className="text-brand-orange font-black">Trust Statement:</span>
              <span>Serving startups, small businesses, and enterprises across India and globally.</span>
            </div>

          </div>

          {/* Right Column: Custom Animated SVG Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative border border-zinc-800 p-8 lg:p-10 w-full max-w-[450px] bg-zinc-950/60 aspect-square flex flex-col justify-center items-center rounded-[20px]">
              
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Background dashed boundary grid */}
                <rect x="20" y="20" width="460" height="460" rx="16" stroke="#1c1c1f" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Radial connection matrix lines */}
                <circle cx="250" cy="250" r="160" stroke="#131316" strokeWidth="2" />
                <path d="M90 250 H410" stroke="#131316" strokeWidth="1.5" />
                <path d="M250 90 V410" stroke="#131316" strokeWidth="1.5" />
                <path d="M137 137 L363 363" stroke="#131316" strokeWidth="1.5" />
                <path d="M137 363 L363 137" stroke="#131316" strokeWidth="1.5" />

                {/* Central active automation core node */}
                <circle cx="250" cy="250" r="38" fill="#000000" stroke="#F65E1E" strokeWidth="2" />
                <circle cx="250" cy="250" r="28" fill="none" stroke="#F65E1E" strokeWidth="1" strokeDasharray="4 4" className="animate-spin" style={{ transformOrigin: "250px 250px", animationDuration: "12s" }} />
                <circle cx="250" cy="250" r="8" fill="#F65E1E" />

                {/* Satellite Nodes */}
                {/* Node 1: Website (Top Center) */}
                <g className="animate-pulse">
                  <circle cx="250" cy="90" r="14" fill="#000000" stroke="#F65E1E" strokeWidth="2" />
                  <circle cx="250" cy="90" r="5" fill="#FFFFFF" />
                </g>
                
                {/* Node 2: CRM (Right Top) */}
                <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <circle cx="363" cy="137" r="14" fill="#000000" stroke="#2a2a30" strokeWidth="2" />
                  <circle cx="363" cy="137" r="5" fill="#7A7A7A" />
                </g>
                
                {/* Node 3: AI Agents (Right Center) */}
                <g className="animate-pulse" style={{ animationDelay: "1s" }}>
                  <circle cx="410" cy="250" r="14" fill="#000000" stroke="#F65E1E" strokeWidth="2" />
                  <circle cx="410" cy="250" r="5" fill="#FFFFFF" />
                </g>
                
                {/* Node 4: Marketing (Right Bottom) */}
                <g className="animate-pulse" style={{ animationDelay: "1.5s" }}>
                  <circle cx="363" cy="363" r="14" fill="#000000" stroke="#2a2a30" strokeWidth="2" />
                  <circle cx="363" cy="363" r="5" fill="#7A7A7A" />
                </g>
                
                {/* Node 5: Analytics (Bottom Center) */}
                <g className="animate-pulse" style={{ animationDelay: "2s" }}>
                  <circle cx="250" cy="410" r="14" fill="#000000" stroke="#F65E1E" strokeWidth="2" />
                  <circle cx="250" cy="410" r="5" fill="#FFFFFF" />
                </g>
                
                {/* Node 6: Infrastructure (Left Bottom) */}
                <g className="animate-pulse" style={{ animationDelay: "2.5s" }}>
                  <circle cx="137" cy="363" r="14" fill="#000000" stroke="#2a2a30" strokeWidth="2" />
                  <circle cx="137" cy="363" r="5" fill="#7A7A7A" />
                </g>

                {/* Animated dash trails connecting circles */}
                <path d="M250 90 A160 160 0 0 1 410 250" stroke="#F65E1E" strokeWidth="2" strokeDasharray="30 180" strokeLinecap="round" className="animate-dash" />
                <path d="M410 250 A160 160 0 0 1 250 410" stroke="#F65E1E" strokeWidth="2" strokeDasharray="30 180" strokeLinecap="round" className="animate-dash" style={{ animationDelay: "1.5s" }} />
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
