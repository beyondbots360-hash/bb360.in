export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "Custom Web Solutions",
      description: "We design and develop modern websites, web applications, and digital platforms tailored to your business goals.",
      // Code Icon
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Agentic AI Automation",
      description: "From AI assistants to workflow automation, we create intelligent systems that streamline operations and reduce repetitive work.",
      // CPU/Chip Icon
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Digital Growth Strategies",
      description: "Our marketing solutions help businesses improve visibility, generate leads, and increase revenue.",
      // Chart Icon
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Scalable Infrastructure",
      description: "Every solution is built with scalability, security, and future growth in mind.",
      // Server Icon
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-brand-white border-b border-brand-neutral section-spacing">
      <div className="site-container">
        
        {/* Title Area */}
        <div className="border-b border-zinc-200 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
              THE VALUE PILLARS
            </span>
            <h2 className="text-brand-black mt-2 leading-tight">
              Why Businesses Choose Beyond Bots
            </h2>
          </div>
          <p className="text-brand-gray text-sm max-w-sm leading-relaxed font-sans font-medium">
            We bridge the gap between traditional operations and intelligent digital systems to help companies eliminate manual friction.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-brand-white border border-black/[0.08] p-8 rounded-[20px] shadow-sm hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  {pillar.icon}
                  <span className="font-sans font-extrabold text-sm text-brand-gray/40">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="text-brand-black mb-3 text-lg font-bold">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
