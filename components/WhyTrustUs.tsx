export default function WhyTrustUs() {
  const trustPillars = [
    {
      num: "01",
      title: "Custom-built solutions",
      desc: "Every system and backend API is coded specifically to match your operational logic, eliminating bloated, generic software dependencies."
    },
    {
      num: "02",
      title: "No template-based development",
      desc: "We reject drag-and-drop builders and off-the-shelf themes to craft unique, lightning-fast interfaces designed for high conversion."
    },
    {
      num: "03",
      title: "AI-first workflows",
      desc: "Architectures engineered from the ground up to integrate, trigger, and sustain autonomous AI agents and automated operational workers."
    },
    {
      num: "04",
      title: "Scalable architecture",
      desc: "High-performance enterprise infrastructure capable of handling volume increases, traffic spikes, and secure database interactions."
    },
    {
      num: "05",
      title: "Performance-focused implementation",
      desc: "Hard-coded pages optimized for Core Web Vitals to ensure sub-second rendering speeds, directly improving SEO and user retention."
    }
  ];

  return (
    <section className="bg-brand-white border-b border-brand-neutral section-spacing">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
              BUILT FOR INTEGRITY
            </span>
            <h2 className="text-brand-black mt-2 leading-tight">
              Why Businesses Trust Beyond Bots
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed mt-4 font-sans font-medium">
              Unlike traditional agencies that repackage WordPress themes or basic AI wrappers, we engineer custom infrastructures tailored to deliver long-term commercial value.
            </p>
          </div>

          {/* Right Pillars List Column */}
          <div className="lg:col-span-8 border-t border-brand-black divide-y-2 divide-brand-neutral">
            {trustPillars.map((item, idx) => (
              <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 hover:bg-brand-neutral transition-colors duration-300 px-4 rounded-[12px]">
                <span className="font-sans font-extrabold text-xl text-brand-orange leading-none sm:pt-1">
                  {item.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-brand-black text-base font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-sans">
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
