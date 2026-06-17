import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Beyond Bots | Zero-Risk Web Development & AI Automation Agency",
  description: "Learn how Beyond Bots combines custom Next.js engineering, local SEO, and AI automation to grow businesses in the USA, UK, and India with our work-first, pay-later trust guarantee.",
  alternates: {
    canonical: "https://www.bb360.in/about",
  },
  openGraph: {
    title: "About Beyond Bots | Zero-Risk Web Development & AI Automation",
    description: "Learn how Beyond Bots combines custom Next.js engineering, local SEO, and AI automation to grow businesses in the USA, UK, and India with our work-first, pay-later trust guarantee.",
    url: "https://www.bb360.in/about",
    siteName: "Beyond Bots",
    type: "website",
  }
};

export default function AboutPage() {
  // Structured JSON-LD Schema including knowsAbout
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
    ],
    "knowsAbout": [
      "Next.js Development",
      "React Engineering",
      "Local SEO Optimization",
      "Google My Business",
      "Agentic AI Automation",
      "Supabase Database Engineering",
      "API Integrations"
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-brand-white text-brand-black font-sans leading-relaxed">
        
        {/* HERO HEADER */}
        <section className="bg-brand-black text-brand-white pt-32 pb-20 border-b border-zinc-900">
          <div className="site-container">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-[4px]">
              ENGINEERING FOR TRUST
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-white mt-6 leading-tight max-w-4xl">
              About Beyond Bots: A New Trust Framework for Digital Growth
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mt-6 leading-relaxed font-sans font-medium">
              We are a custom Next.js web development agency built to bridge the gap between business goals and modern technology. Operating across the USA, UK, and India, we eliminate the trust barriers of offshore development by building your system first and requesting payment only after you approve the staging preview.
            </p>
          </div>
        </section>

        {/* CHAPTER 1: THE TRUST CRISIS */}
        <section className="bg-brand-white section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 01
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  The Modern Agency Trust Crisis
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  Finding a reliable team to outsource web design in the USA, UK, or India is difficult. Founders are typically forced to choose between two options, both of which are fundamentally flawed.
                </p>
                <p>
                  On one hand, you can hire local agencies in London or New York. These agencies charge premium rates, often starting at $10,000 to $20,000 for standard websites. Much of this fee goes toward their office rent and overhead, not the code itself.
                </p>
                <p>
                  On the other hand, you can seek cheap freelancers on platforms like Upwork or Fiverr. While the price is lower, the risks are high. You risk dealing with communication gaps, poor code quality, missing deadlines, and developers who vanish mid-project.
                </p>
                <p>
                  Beyond Bots was created to offer a better alternative. We combine the cost advantages of global development with the communication and engineering standards of an elite onshore agency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 2: NOT FREELANCERS */}
        <section className="bg-brand-neutral section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 02
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  An Agency Team, Not Freelancers
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  We are not a collection of independent freelancers working in silos. Beyond Bots is an organized, multidisciplinary engineering and marketing agency. 
                </p>
                <p>
                  When you hire a freelancer, your project depends entirely on one person. If they get sick or lose interest, your project stops. Our structured agency model ensures that developers, copywriters, and SEO specialists collaborate under strict oversight.
                </p>
                <p>
                  We use Git version control, daily milestone tracking, and shared coding standards. We document our configurations and database structures clearly. This ensures that you retain complete code ownership, allowing any developer to inspect or update your systems in the future.
                </p>
                <p>
                  We maintain daily contact with our clients, providing visible proof of progress. Our goal is to serve as a reliable digital marketing agency in London, New York, and beyond, supporting your operations long after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 3: WORK FIRST, PAY LATER */}
        <section className="bg-brand-white section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 03
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  Our Zero-Risk Engagement Model
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  The biggest barrier to outsourcing web development is the financial risk. Most agencies demand a 50% deposit before writing any code. If the agency underperforms, your deposit is gone.
                </p>
                <p>
                  We solved this problem by establishing a **Work First, Pay Later** framework for all new clients. We do not ask for upfront deposits. 
                </p>
                <p>
                  Instead, we scope your project, agree on the milestones, and build the solution on our staging servers. You can review the design, click the links, test the contact forms, and inspect the performance on mobile devices.
                </p>
                <p>
                  You pay only after you review and approve the live staging build. If the build does not meet our agreed specifications, you do not pay. This makes Beyond Bots a completely no-risk website development agency.
                </p>
                
                {/* Visual Timeline Inside Chapter */}
                <div className="pt-6 space-y-4">
                  <h3 className="text-brand-black text-sm font-bold uppercase tracking-wider">The Sandbox Review Process</h3>
                  <div className="border-l-2 border-brand-orange pl-4 space-y-3">
                    <p className="text-xs font-sans font-bold text-brand-black">
                      1. We construct the layout and publish it to a sandbox URL (e.g. staging.yourname.com).
                    </p>
                    <p className="text-xs font-sans font-bold text-brand-black">
                      2. You audit the design, speed scores, and form responses.
                    </p>
                    <p className="text-xs font-sans font-bold text-brand-black">
                      3. Once you approve, we process the milestone invoice, transfer code ownership, and launch to your main domain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 4: THE NEXT.JS ENGINEERING CREED */}
        <section className="bg-brand-neutral section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 04
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  Our Engineering Creed: Next.js & React
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  We do not use page builders like WordPress, Elementor, Wix, or Squarespace. While these tools allow for fast layouts, they generate bloated code and slow loading times.
                </p>
                <p>
                  We build exclusively using React and Next.js. Writing custom code allows us to control the page weight and styling precisely. This engineering choice helps us deliver websites that load in under a second.
                </p>
                <p>
                  Fast load times are critical for both conversions and search rankings. Google's ranking algorithms penalize slow-loading sites. By building lightweight, static pages using Static Site Generation (SSG), we ensure your website scores 95+ on Google PageSpeed Insights.
                </p>
                <p>
                  Custom code also offers security benefits. Page builders depend on third-party plugins that require constant updates and are vulnerable to security exploits. Our custom codebases are secure, lightweight, and built to scale with your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 5: HOLISTIC GROWTH ECOSYSTEM */}
        <section className="bg-brand-white section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 05
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  The Complete Growth Ecosystem
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  A great website is useless if nobody can find it. Growth requires managing your entire digital footprint, not just publishing web pages.
                </p>
                <p>
                  We manage your digital ecosystem end-to-end. We provide affordable local seo services for small business clients to help them rank in local search results. This includes optimizing your Google My Business (GMB) listings, managing directory citations, and structuring schema markups to capture local search intent.
                </p>
                <p>
                  Once visitors land on your site, we guide them through a clear, responsive funnel. We integrate contact forms with secure backend databases like Supabase, and configure automated email triggers via platforms like Resend or SendGrid.
                </p>
                <p>
                  When a lead submits their details, your database is updated instantly, and a notification email is sent to your inbox. This automation ensures you can follow up with prospects immediately, improving your conversion rate.
                </p>

                {/* Growth Ecosystem Elements */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                  <div className="bg-brand-neutral border border-zinc-200/60 p-4 rounded-[12px]">
                    <h4 className="text-brand-black text-xs font-bold uppercase mb-2">1. Local Visibility</h4>
                    <p className="text-[11px] leading-relaxed text-zinc-600">Google My Business optimization, keyword strategy, and local citation building.</p>
                  </div>
                  <div className="bg-brand-neutral border border-zinc-200/60 p-4 rounded-[12px]">
                    <h4 className="text-brand-black text-xs font-bold uppercase mb-2">2. Core Web Dev</h4>
                    <p className="text-[11px] leading-relaxed text-zinc-600">Custom Next.js engineering, responsive interfaces, and optimized performance.</p>
                  </div>
                  <div className="bg-brand-neutral border border-zinc-200/60 p-4 rounded-[12px]">
                    <h4 className="text-brand-black text-xs font-bold uppercase mb-2">3. Automation</h4>
                    <p className="text-[11px] leading-relaxed text-zinc-600">Supabase databases, lead tracking, and automated email replies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 6: LOYALTY TO SEO */}
        <section className="bg-brand-neutral section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 06
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  Our Uncompromising Loyalty to SEO
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  We believe that ranking is earned through clean code and real value, not search engine manipulation tricks. Google's algorithms continue to prioritize high-quality, helpful content.
                </p>
                <p>
                  Our search engine optimization focuses on technical quality and human-first content:
                </p>
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-brand-black font-semibold">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Custom JSON-LD schema layouts so search engines understand your entity data.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Clean heading structures (H1, H2, H3) aligned with user search intent.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Image compression and modern web formats (WebP) to maintain page speeds.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                    Expert-level copywriting written for readers, not just index bots.
                  </li>
                </ul>
                <p className="mt-4">
                  We don't buy toxic backlinks or use automated spinner scripts. We write clean, structured code and high-quality content that ranks over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 7: GLOBAL TEAM VALUE */}
        <section className="bg-brand-white section-spacing border-b border-brand-neutral">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
                  CHAPTER 07
                </span>
                <h2 className="text-brand-black mt-2 leading-tight text-3xl font-extrabold uppercase">
                  A Global Team Operating in Your Time Zone
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-brand-gray text-sm sm:text-base font-medium">
                <p>
                  Our team operates from both India and the USA, allowing us to align our working hours with your business schedule in London, New York, or California.
                </p>
                <p>
                  This hybrid model offers several advantages. You receive the cost efficiencies of offshore development combined with the reliability and communication of a local agency.
                </p>
                <p>
                  Our working hours overlap with yours to ensure we are available for calls and updates during your workday. Because we work across time zones, we can resolve issues overnight, speeding up project delivery.
                </p>
                <p>
                  We prioritize clear, direct communication in English. You receive a dedicated Slack channel or direct email contact, and we reply to all inquiries within a business day.
                </p>
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
