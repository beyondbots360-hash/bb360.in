import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white border-t-4 border-brand-orange w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-zinc-800 pb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-9 w-9 bg-zinc-800 flex items-center justify-center">
                <Image 
                  src="/assets/images/logo.jpg" 
                  alt="Beyond Bots Logo" 
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="font-display font-black text-lg tracking-tight">
                BEYOND BOTS
              </span>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans font-semibold">
              Beyond Bots builds intelligent digital systems through custom web development, AI-powered automation, and growth-focused digital marketing.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange">
              Quick Links
            </h4>
            <ul className="space-y-3 text-zinc-400 text-xs font-bold uppercase tracking-wider font-sans">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-brand-orange transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-brand-orange transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#bb360" className="hover:text-brand-orange transition-colors duration-200">
                  BB360
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-orange transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-brand-orange transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange">
              Services
            </h4>
            <ul className="space-y-3 text-zinc-400 text-xs font-bold uppercase tracking-wider font-sans">
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors duration-200">
                  AI Agentic Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors duration-200">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors duration-200">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-orange transition-colors duration-200">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-orange">
              Contact
            </h4>
            <ul className="space-y-3.5 text-zinc-400 text-xs font-sans font-semibold">
              <li>
                Website: <Link href="/" className="text-zinc-200 hover:text-brand-orange">www.bb360.in</Link>
              </li>
              <li>
                Email: <a href="mailto:info@bb360.in" className="text-zinc-200 hover:text-brand-orange">info@bb360.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Footer Text Block */}
        <div className="py-8 border-b border-zinc-800">
          <p className="text-[11px] text-zinc-500 leading-relaxed font-sans font-medium">
            Beyond Bots is an AI automation and web development company helping businesses leverage intelligent technology, digital transformation, custom websites, agentic AI solutions, workflow automation, and digital marketing services to achieve sustainable growth.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-zinc-500 space-y-4 sm:space-y-0 font-sans font-semibold">
          <p>© 2026 Beyond Bots. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-brand-orange transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-orange transition-colors duration-200">
              Terms of Service
            </Link>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400 uppercase tracking-widest font-black text-[9px]">BB360</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
