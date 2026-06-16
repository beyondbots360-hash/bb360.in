"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    serviceInterestedIn: "",
    projectDescription: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    if (!formData.name || !formData.email || !formData.projectDescription) {
      setStatus("error");
      setMessage("Please fill out all required fields (*).");
      return;
    }

    try {
      console.log("Submitting lead to Supabase:", formData);
      
      const { error } = await supabase
        .from("leads")
        .insert({
          name: formData.name,
          business_name: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service_interested_in: formData.serviceInterestedIn,
          project_description: formData.projectDescription,
        });

      if (error) {
        throw error;
      }

      setStatus("success");
      setMessage("Your strategy session request has been received. Our team will contact you within 24 hours.");
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        serviceInterestedIn: "",
        projectDescription: "",
      });
    } catch (err: any) {
      console.error("Error submitting lead:", err.message || err);
      setStatus("error");
      setMessage("There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-brand-white border-b border-brand-neutral section-spacing relative">
      <div className="site-container flex flex-col items-center">
        
        {/* Centered Heading Area */}
        <div className="text-center max-w-2xl mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
            GET IN TOUCH
          </span>
          <h2 className="text-brand-black mt-2 mb-4 leading-tight">
            Ready to Build Your Digital Workforce?
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-sans font-medium">
            Let’s discuss your goals and explore how web development, AI automation, and digital marketing can help your business scale faster.
          </p>
        </div>

        {/* Contact Form Container (Max 700px) */}
        <div className="w-full max-w-[700px] bg-brand-white border border-black/[0.08] p-8 lg:p-10 rounded-[20px] shadow-sm">
          
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100">
            <h3 className="text-brand-black text-lg font-bold uppercase tracking-tight">
              Book Your Free Strategy Session
            </h3>
            <span className="text-brand-gray text-[10px] font-sans font-semibold">
              <span className="text-brand-orange font-bold">*</span> REQUIRED FIELDS
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name & Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange transition-colors duration-200 rounded-[12px] placeholder:text-zinc-300"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="businessName" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="BB Corp"
                  className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange transition-colors duration-200 rounded-[12px] placeholder:text-zinc-300"
                />
              </div>
            </div>

            {/* Email Address & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                  Email Address <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@company.com"
                  className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange transition-colors duration-200 rounded-[12px] placeholder:text-zinc-300"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange transition-colors duration-200 rounded-[12px] placeholder:text-zinc-300"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                Service Interested In
              </label>
              <select
                id="service"
                value={formData.serviceInterestedIn}
                onChange={(e) => setFormData({ ...formData, serviceInterestedIn: e.target.value })}
                className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange transition-colors duration-200 rounded-[12px] cursor-pointer"
              >
                <option value="" disabled className="text-zinc-300">Select a service area</option>
                <option value="web-development">Web Development</option>
                <option value="ai-solutions">AI Agentic Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="bb360-ecosystem">Full BB360 Integrated System</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="description" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                Project Details <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Describe your goals, existing workflows, or features needed..."
                className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange transition-colors duration-200 rounded-[12px] placeholder:text-zinc-300 resize-none"
              ></textarea>
            </div>

            {/* Submission Status Alert */}
            {status !== "idle" && (
              <div 
                className={`p-4 text-[10px] font-bold uppercase tracking-wider rounded-[12px] border-l-4 ${
                  status === "success" 
                    ? "bg-emerald-50 text-emerald-700 border-emerald-500" 
                    : status === "error" 
                    ? "bg-rose-50 text-rose-700 border-rose-500" 
                    : "bg-zinc-100 text-zinc-600 border-zinc-400 animate-pulse"
                }`}
              >
                {status === "submitting" ? "Transmitting session request..." : message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-orange text-brand-white text-xs font-semibold uppercase tracking-widest py-4 px-6 rounded-[12px] hover:-translate-y-0.5 disabled:bg-zinc-200 disabled:text-zinc-400 transition-all duration-300 cursor-pointer shadow-md shadow-brand-orange/15"
            >
              {status === "submitting" ? "Submitting Request..." : "Schedule Consultation"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
