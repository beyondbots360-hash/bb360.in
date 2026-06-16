import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Beyond Bots | Zero-Risk Web Development & AI Automation Agency",
  description: "Discover how Beyond Bots delivers custom Next.js engineering, local SEO, and AI automation services to USA, UK, and India businesses with our work-first, pay-later trust guarantee.",
  alternates: {
    canonical: "https://www.bb360.in/about",
  },
  openGraph: {
    title: "About Beyond Bots | Zero-Risk Web Development & AI Automation",
    description: "Discover how Beyond Bots delivers custom Next.js engineering, local SEO, and AI automation services to USA, UK, and India businesses with our work-first, pay-later trust guarantee.",
    url: "https://www.bb360.in/about",
    siteName: "Beyond Bots",
    type: "website",
  }
};

export default function AboutPage() {
  // Structured JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Beyond Bots",
    "image": "https://www.bb360.in/assets/images/logo.jpg",
    "url": "https://www.bb360.in",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palo Alto",
      "addressRegion": "CA",
      "postalCode": "94301",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4419,
      "longitude": -122.143
    },
    "sameAs": [
      "https://github.com/beyond-bots"
    ],
    "description": "Custom Next.js engineering, Local SEO optimization, Google My Business management, and Agentic AI automation with a zero-risk work-first pay-later client model.",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "India" }
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-brand-white">
        
        {/* HERO SECTION */}
        <section className="bg-brand-black text-brand-white pt-32 pb-20 border-b border-zinc-900">
          <div className="site-container">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-[4px]">
              OUR MISSION & VALUES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-white mt-6 leading-tight max-w-4xl">
              About Beyond Bots: A New Trust Framework for Digital Growth
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-6 leading-relaxed font-sans font-medium">
              We are a dedicated agency team operating across the USA, UK, and India, delivering high-performance digital assets. We eliminated the traditional trust barriers of overseas development by letting you review the live code before you pay.
            </p>
          </div>
        </section>

        {/* IDENTITY SECTION */}
        <section className="bg-brand-white section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  WHO WE ARE
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  An Agency Team, <br />Not Freelancers.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="font-sans text-base font-semibold text-brand-black leading-relaxed">
                  When you work with a freelancer, you risk communication delays, unfinished projects, and zero accountability. Beyond Bots operates as an organized agency.
                </p>
                <p className="font-sans text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
                  We are a coordinated team of developers, copywriters, and SEO specialists. We use Git version control, stick to transparent daily sprint updates, and deliver absolute codebase ownership. We don't vanish—we maintain and support your digital infrastructure long after deployment.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* USP: WORK FIRST, PAY LATER */}
        <section className="bg-brand-neutral section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                THE ZERO-RISK GUARANTEE
              </span>
              <h2 className="text-brand-black mt-2 leading-tight text-3xl sm:text-4xl font-extrabold uppercase">
                Work First, Pay Later Blueprint
              </h2>
              <p className="text-brand-gray mt-4 text-sm sm:text-base font-sans font-medium">
                To build long-term relationships with our clients in the US and UK, we verify every milestone in a sandboxed staging area before asking for payment.
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Alignment & Scope", desc: "We map your requirements and sign a clear sprint agreement detailing all deliverables." },
                { step: "02", title: "Custom Coding", desc: "Our engineers build the solution using Next.js, structured schema data, and responsive styles." },
                { step: "03", title: "Staging Sandbox", desc: "We deploy the draft to a live testing domain (e.g. staging.yourname.com) for you to test and audit." },
                { step: "04", title: "Approval & Launch", desc: "You pay only after you are completely satisfied. Once approved, we launch to production and transfer code ownership." }
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-white border border-zinc-200 p-6 rounded-[20px] shadow-sm flex flex-col justify-between min-h-[220px]">
                  <div>
                    <span className="font-sans font-black text-xs text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-[4px]">
                      Step {item.step}
                    </span>
                    <h3 className="text-brand-black mt-4 text-base font-bold uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-brand-gray mt-3 text-xs sm:text-sm font-sans font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO LOYALTY & TECHNICAL STANDARDS */}
        <section className="bg-brand-white section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  ADVANCED TECHNICAL SEO
                </span>
                <h2 className="text-brand-black leading-tight text-3xl font-extrabold uppercase">
                  Our Uncompromising Loyalty to Performance SEO
                </h2>
                <p className="font-sans text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
                  We believe that ranking is earned through clean code and real value, not tricks. We refuse to build on slow, template-based platforms that fail Google's Core Web Vitals.
                </p>
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-brand-black font-semibold">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Perfect Google PageSpeed/Lighthouse scores (95+)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Semantic HTML5 and custom JSON-LD schema layouts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Hand-written, expert content that answers actual search intent
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Lightning-fast static page generation (SSG) in Next.js
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 bg-brand-neutral border border-zinc-200/60 p-8 rounded-[24px]">
                <h3 className="text-brand-black text-lg font-bold uppercase mb-4 pb-2 border-b border-zinc-200">
                  From GMB to Full-Stack Automation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-gray leading-relaxed font-medium">
                  Growth is not just about writing code. We manage the entire digital ecosystem for your local or international business:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="bg-brand-white p-4 rounded-[12px] border border-black/[0.04]">
                    <span className="text-[10px] font-bold text-brand-orange uppercase">Local Ecosystem</span>
                    <p className="text-brand-black text-xs font-semibold mt-1">Google My Business (GMB) setup and map listings optimization to capture local customer intent.</p>
                  </div>
                  <div className="bg-brand-white p-4 rounded-[12px] border border-black/[0.04]">
                    <span className="text-[10px] font-bold text-brand-orange uppercase">Web & Database</span>
                    <p className="text-brand-black text-xs font-semibold mt-1">Fully customized responsive websites built on Next.js integrated with secure Supabase databases.</p>
                  </div>
                  <div className="bg-brand-white p-4 rounded-[12px] border border-black/[0.04]">
                    <span className="text-[10px] font-bold text-brand-orange uppercase">Lead Automation</span>
                    <p className="text-brand-black text-xs font-semibold mt-1">Trigger systems that catch new form signups, store them as leads, and fire instant email or SMS replies.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-brand-black text-brand-white section-spacing">
          <div className="site-container text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
              Ready to Build With Zero Upfront Risk?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-sans font-medium leading-relaxed">
              We design and construct your website first, launch it in a sandbox for you to review, and only process your invoice when you are completely satisfied. Start your project today.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Staging Build
              </Link>
              <Link
                href="/"
                className="border border-zinc-800 text-brand-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-[12px] hover:bg-zinc-900 transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
