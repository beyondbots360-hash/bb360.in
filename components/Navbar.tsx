"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-black border-b border-zinc-900 w-full h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo Area (Left) */}
          <Link href="/" className="flex items-center space-x-3 focus:outline-2 focus:outline-brand-orange">
            <div className="relative h-10 w-10 overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Image 
                src="/assets/images/logo.jpg" 
                alt="Beyond Bots Logo" 
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-brand-white uppercase">
              BEYOND BOTS
            </span>
          </Link>

          {/* Desktop Navigation Links & CTA (Right) */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              <Link 
                href="/#about" 
                className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange transition-colors duration-200 focus:outline-2 focus:outline-brand-orange"
              >
                ABOUT
              </Link>
              <Link 
                href="/#services" 
                className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange transition-colors duration-200 focus:outline-2 focus:outline-brand-orange"
              >
                SERVICES
              </Link>
              <Link 
                href="/#bb360" 
                className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange transition-colors duration-200 focus:outline-2 focus:outline-brand-orange"
              >
                BB360
              </Link>
              <Link 
                href="/blog" 
                className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange transition-colors duration-200 focus:outline-2 focus:outline-brand-orange"
              >
                BLOG
              </Link>
              <Link 
                href="/#contact" 
                className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange transition-colors duration-200 focus:outline-2 focus:outline-brand-orange"
              >
                CONTACT
              </Link>
            </div>

            {/* CTA Button */}
            <Link 
              href="/#contact"
              className="bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 focus:outline-2 focus:outline-brand-orange shadow-md shadow-brand-orange/10"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-brand-white hover:text-brand-orange focus:outline-2 focus:outline-brand-orange"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-black border-b border-zinc-900 px-6 py-6 space-y-4 flex flex-col z-50 md:hidden animate-fade-in">
          <Link
            onClick={() => setIsOpen(false)}
            href="/#about"
            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange py-2 border-b border-zinc-900"
          >
            ABOUT
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#services"
            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange py-2 border-b border-zinc-900"
          >
            SERVICES
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#bb360"
            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange py-2 border-b border-zinc-900"
          >
            BB360
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/blog"
            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange py-2 border-b border-zinc-900"
          >
            BLOG
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#contact"
            className="text-xs font-bold tracking-widest text-zinc-400 hover:text-brand-orange py-2 border-b border-zinc-900"
          >
            CONTACT
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#contact"
            className="block text-center bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-4 w-full rounded-[12px] hover:bg-brand-orange/90 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
