import Link from "next/link";

export default function ServicesList() {
  const services = [
    {
      title: "Custom Web Development Services",
      description: "We create high-performance websites and web applications designed to attract customers and support business growth.",
      items: [
        "Corporate Websites",
        "Business Websites",
        "E-Commerce Development",
        "Landing Pages",
        "Progressive Web Apps",
        "Custom Web Applications",
        "Website Maintenance"
      ],
      ctaText: "Build Your Website",
      // Code Icon SVG
      icon: (
        <svg className="h-6 w-6 text-brand-orange mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "AI-Powered Business Automation",
      description: "Transform operations with intelligent AI systems that automate workflows and improve productivity.",
      items: [
        "AI Assistants",
        "Customer Support Agents",
        "Workflow Automation",
        "Lead Qualification Agents",
        "Internal Knowledge Assistants",
        "Business Intelligence Solutions",
        "Custom AI Agent Development"
      ],
      ctaText: "Deploy AI Solutions",
      // Brain/Nodes Icon SVG
      icon: (
        <svg className="h-6 w-6 text-brand-orange mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Data-Driven Digital Marketing",
      description: "Increase visibility, attract qualified leads, and accelerate growth through strategic digital marketing campaigns.",
      items: [
        "Search Engine Optimization (SEO)",
        "Local SEO",
        "Content Marketing",
        "Social Media Marketing",
        "Lead Generation",
        "Performance Marketing",
        "Conversion Optimization"
      ],
      ctaText: "Drive Business Growth",
      // Target/Growth Icon SVG
      icon: (
        <svg className="h-6 w-6 text-brand-orange mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="bg-brand-neutral border-b border-brand-neutral section-spacing">
      <div className="site-container">
        
        {/* Title Area */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
            OUR CORE OFFERINGS
          </span>
          <h2 className="text-brand-black mt-2 mb-6">
            Intelligent Solutions For Growing Businesses
          </h2>
          <p className="text-brand-gray text-base leading-relaxed font-medium">
            We don't offer generic templates or basic designs. We plan, build, and deploy integrated structures combining performance code, custom AI agents, and content optimization to drive measurable scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-brand-white border border-black/[0.08] p-8 rounded-[20px] shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div>
                  {service.icon}
                  <h3 className="text-brand-black min-h-[56px] flex items-end font-bold text-lg leading-tight uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
                
                {/* Divider */}
                <div className="h-px bg-zinc-200" />
                
                {/* List items */}
                <ul className="space-y-3 pb-8">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-3 text-xs font-semibold uppercase tracking-wider text-brand-black font-sans">
                      <span className="text-brand-orange font-bold font-display mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA Link */}
              <Link
                href="#contact"
                className="w-full inline-flex justify-center items-center bg-transparent border-2 border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-[12px] hover:bg-brand-orange hover:text-brand-white transition-all duration-300 text-center"
              >
                {service.ctaText}
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
