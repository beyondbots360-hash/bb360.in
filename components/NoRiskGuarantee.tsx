import Link from "next/link";

export default function NoRiskGuarantee() {
  const guarantees = [
    {
      title: "1. We Scope & Blueprint First",
      desc: "Before a single line of code is written, we align on exact deliverables, timelines, and technical requirements. You receive a clear, binding blueprint."
    },
    {
      title: "2. We Build & Staging Launch",
      desc: "Our engineering team builds your project on a secure staging server. You can click around, test forms, and see the exact mobile responsiveness live."
    },
    {
      title: "3. Pay Only Upon Approval",
      desc: "You pay only after you review and approve the live build. No upfront deposits or risky retainers for new clients. If you are not satisfied, you don't pay."
    }
  ];

  return (
    <section className="bg-brand-black text-brand-white section-spacing border-b border-zinc-900">
      <div className="site-container">
        
        {/* Header Block */}
        <div className="border-b border-zinc-800 pb-10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-[4px]">
              ZERO-RISK CLIENT ENGAGEMENT
            </span>
            <h2 className="text-brand-white mt-4 leading-tight text-3xl sm:text-4xl font-extrabold">
              Work First, Pay Later. <br />
              <span className="text-zinc-500 font-bold text-2xl sm:text-3xl">Eliminating the offshore trust barrier.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-medium">
              We know working with agencies based globally (USA, UK, and India) requires trust. That is why we removed the risk. We do the work, launch the staging version, and you pay only after you approve the results.
            </p>
          </div>
        </div>

        {/* Guarantee Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {guarantees.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-950 border border-zinc-800/60 p-8 rounded-[20px] shadow-sm hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <h3 className="text-brand-white mb-4 text-lg font-bold tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  {step.desc}
                </p>
              </div>
              <div className="w-full h-1 bg-zinc-900 mt-6 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-orange" 
                  style={{ width: `${((idx + 1) / 3) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Agency vs Freelancer Trust Callout */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900 to-black border border-zinc-850 p-8 rounded-[24px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-brand-white text-base font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange inline-block"></span>
              Why We Are Not Freelancers
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Freelancers often juggle too many projects and vanish mid-development. We operate as an established agency team with coordinated developers, growth strategists, and dedicated SLA support. You get full source code ownership on Git and daily milestone updates.
            </p>
          </div>
          <Link 
            href="/#contact"
            className="bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 border-none shrink-0"
          >
            Start Your Staging Build
          </Link>
        </div>

      </div>
    </section>
  );
}
