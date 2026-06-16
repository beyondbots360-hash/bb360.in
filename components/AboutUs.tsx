export default function AboutUs() {
  const coreValues = [
    "Innovation",
    "Transparency",
    "Reliability",
    "Scalability",
    "Continuous Improvement"
  ];

  return (
    <section id="about" className="bg-brand-neutral border-b border-brand-neutral section-spacing">
      <div className="site-container">
        
        {/* Upper Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
              ABOUT BEYOND BOTS
            </span>
            <h2 className="text-brand-black mt-2 leading-tight">
              Bridging the Gap Between Business and Intelligent Technology
            </h2>
          </div>

          {/* Right Copy Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg font-semibold text-brand-black leading-relaxed">
              Beyond Bots was founded to help businesses move beyond traditional processes and embrace intelligent digital systems.
            </p>
            <p className="font-sans text-sm sm:text-base text-brand-gray leading-relaxed">
              We combine modern web development, AI-powered automation, and strategic marketing to create solutions that drive measurable business outcomes.
            </p>
          </div>

        </div>

        {/* Lower Core Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-zinc-200">
          
          {/* Mission Card */}
          <div className="border border-black/[0.08] bg-brand-white p-8 rounded-[20px] shadow-sm hover:-translate-y-1 transition-transform duration-300 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
              OUR MISSION
            </span>
            <p className="font-sans text-sm font-semibold text-brand-black leading-relaxed">
              To help organizations automate smarter, operate faster, and grow sustainably through technology.
            </p>
          </div>

          {/* Vision Card */}
          <div className="border border-black/[0.08] bg-brand-white p-8 rounded-[20px] shadow-sm hover:-translate-y-1 transition-transform duration-300 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
              OUR VISION
            </span>
            <p className="font-sans text-sm font-semibold text-brand-black leading-relaxed">
              To become a trusted technology partner helping businesses build the future through intelligent digital transformation.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="border border-black/[0.08] bg-brand-white p-8 rounded-[20px] shadow-sm hover:-translate-y-1 transition-transform duration-300 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
              CORE VALUES
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {coreValues.map((val, idx) => (
                <span key={idx} className="bg-brand-neutral border border-zinc-200/50 text-brand-black text-[9px] font-bold uppercase tracking-wider px-2 py-1">
                  {val}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
