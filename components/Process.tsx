export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "We analyze your business processes, goals, and challenges to identify opportunities for digital transformation."
    },
    {
      step: "02",
      title: "Build",
      desc: "Our team develops customized websites, AI solutions, and marketing systems tailored to your objectives."
    },
    {
      step: "03",
      title: "Automate",
      desc: "We integrate automation technologies that reduce manual work and improve operational efficiency."
    },
    {
      step: "04",
      title: "Scale",
      desc: "With intelligent systems in place, your business is positioned for sustainable growth and long-term success."
    }
  ];

  return (
    <section className="bg-brand-white border-b border-brand-neutral section-spacing">
      <div className="site-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
            OUR FRAMEWORK
          </span>
          <h2 className="text-brand-black mt-2 leading-tight">
            The Transformation Blueprint
          </h2>
        </div>

        {/* Process Roadmap */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="absolute top-[40px] left-[8%] right-[8%] h-[2px] bg-zinc-200 hidden lg:block pointer-events-none"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div 
                key={idx}
                className="bg-brand-white border border-black/[0.08] p-8 rounded-[20px] shadow-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between min-h-[240px]"
              >
                <div className="flex justify-between items-center mb-6">
                  {/* Step Number Circle */}
                  <span className="font-sans font-extrabold text-[10px] uppercase bg-brand-black text-brand-white px-3 py-1.5 rounded-[6px]">
                    STEP {item.step}
                  </span>
                  
                  {/* Connecting indicator icon */}
                  <span className="text-brand-orange text-lg font-bold font-sans">
                    {idx < steps.length - 1 ? "→" : "✓"}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-brand-black text-base font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
