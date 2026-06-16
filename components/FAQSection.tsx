"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is an AI Agent?",
      answer: "An AI agent is an intelligent software system that can perform tasks, make decisions, and automate workflows with minimal human intervention."
    },
    {
      question: "How can AI automation help my business?",
      answer: "AI automation reduces repetitive tasks, improves productivity, enhances customer experiences, and allows teams to focus on high-value activities."
    },
    {
      question: "How long does website development take?",
      answer: "Project timelines vary depending on complexity, but most business websites are completed within 2–6 weeks."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes. We offer SEO strategies designed to improve search visibility, increase organic traffic, and generate qualified leads."
    },
    {
      question: "Can Beyond Bots automate existing workflows?",
      answer: "Absolutely. We can analyze current processes and implement AI-driven automation solutions that integrate with your existing systems."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with startups, small businesses, professional services firms, e-commerce brands, and enterprise organizations across multiple industries."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured Data Schema for Search Engines (FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="bg-brand-neutral border-b border-brand-neutral section-spacing relative">
      
      {/* Inject FAQ Page Schema for Advanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
            COMMON INQUIRIES
          </span>
          <h2 className="text-brand-black mt-2 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="border-t border-brand-black divide-y divide-zinc-200">
          {faqs.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="py-5 font-sans"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center text-left py-2 font-sans font-bold text-base sm:text-lg text-brand-black focus:outline-none focus:text-brand-orange group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="group-hover:text-brand-orange transition-colors duration-200 uppercase tracking-tight">
                    {item.question}
                  </span>
                  <span className="font-sans font-extrabold text-xl text-brand-orange pl-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content Drawer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
