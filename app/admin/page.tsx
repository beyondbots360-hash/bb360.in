"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Lead {
  id: string;
  name: string;
  business_name?: string;
  email: string;
  phone?: string;
  service_interested_in?: string;
  project_description: string;
  created_at: string;
}

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("All");

  // Check auth state from sessionStorage on load
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authorized");
    const savedPasscode = sessionStorage.getItem("admin_passcode");
    if (savedAuth === "true" && savedPasscode) {
      loadLeads(savedPasscode);
    }
  }, []);

  const loadLeads = async (code: string) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const { data, error } = await supabase.rpc("get_all_leads", {
        passcode: code,
      });

      if (error) {
        throw error;
      }

      setLeads(data || []);
      setIsAuthorized(true);
      sessionStorage.setItem("admin_authorized", "true");
      sessionStorage.setItem("admin_passcode", code);
    } catch (err: any) {
      console.error("Auth error:", err.message || err);
      setErrorMessage(err.message || "Invalid passcode or server error.");
      sessionStorage.removeItem("admin_authorized");
      sessionStorage.removeItem("admin_passcode");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) {
      setErrorMessage("Please enter the admin passcode.");
      return;
    }
    loadLeads(passcode);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authorized");
    sessionStorage.removeItem("admin_passcode");
    setPasscode("");
    setLeads([]);
    setIsAuthorized(false);
  };

  const handleDeleteLead = async (leadId: string) => {
    const code = sessionStorage.getItem("admin_passcode");
    if (!code) return;

    if (!confirm("Are you sure you want to delete this lead?")) {
      return;
    }

    try {
      const { error } = await supabase.rpc("delete_lead", {
        passcode: code,
        lead_id: leadId,
      });

      if (error) throw error;

      // Remove from UI state
      setLeads(leads.filter((lead) => lead.id !== leadId));
    } catch (err: any) {
      alert("Failed to delete lead: " + err.message);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filtered Leads list based on search and service selection
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.business_name && lead.business_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.project_description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesService =
      selectedService === "All" ||
      (lead.service_interested_in &&
        lead.service_interested_in.toLowerCase() === selectedService.toLowerCase());

    return matchesSearch && matchesService;
  });

  // Calculate quick stats
  const totalLeadsCount = leads.length;
  const webLeadsCount = leads.filter((l) => l.service_interested_in === "Web Development").length;
  const aiLeadsCount = leads.filter((l) => l.service_interested_in === "AI Agentic Solutions").length;
  const marketingLeadsCount = leads.filter((l) => l.service_interested_in === "Digital Marketing").length;

  // Render Passcode Gate Screen
  if (!isAuthorized) {
    return (
      <section className="min-h-[75vh] flex items-center justify-center bg-brand-white py-16 px-6">
        <div className="w-full max-w-[450px] bg-brand-white border border-black/[0.08] p-8 rounded-[20px] shadow-sm text-center">
          <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange mb-3 block">
            Security Gate
          </span>
          <h1 className="font-display font-extrabold text-2xl uppercase text-brand-black mb-6">
            Admin Command Center
          </h1>
          <p className="text-zinc-600 text-xs font-sans font-semibold leading-relaxed mb-6">
            Enter the authorized admin passcode to view the leads database and form submissions.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="flex flex-col space-y-2">
              <label htmlFor="passcode" className="text-[10px] font-bold uppercase tracking-wider text-brand-black">
                Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin passcode"
                className="bg-brand-white border border-black/[0.08] p-3.5 text-sm font-medium text-brand-black focus:outline-none focus:border-brand-orange rounded-[12px] placeholder:text-zinc-300 w-full"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-xs font-semibold">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-orange text-brand-white text-xs font-bold uppercase tracking-wider py-4 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-brand-orange/10 cursor-pointer text-center"
            >
              {isLoading ? "Authenticating..." : "Access Command Center"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Render Authorized Admin Dashboard
  return (
    <section className="bg-brand-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12 border-b border-zinc-100 pb-8">
          <div>
            <nav className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">
              Admin Portal
            </nav>
            <h1 className="font-display font-extrabold text-brand-black text-3xl uppercase">
              Leads Command Center
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="self-start sm:self-auto bg-zinc-950 text-brand-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-[12px] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Logout Portal
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-brand-white border border-black/[0.08] p-6 rounded-[20px] shadow-sm">
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Total Submissions</h4>
            <div className="font-display font-black text-3xl text-brand-black">{totalLeadsCount}</div>
          </div>
          
          <div className="bg-brand-white border border-black/[0.08] p-6 rounded-[20px] shadow-sm">
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">AI Agentic Leads</h4>
            <div className="font-display font-black text-3xl text-brand-orange">{aiLeadsCount}</div>
          </div>

          <div className="bg-brand-white border border-black/[0.08] p-6 rounded-[20px] shadow-sm">
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Web Dev Leads</h4>
            <div className="font-display font-black text-3xl text-zinc-800">{webLeadsCount}</div>
          </div>

          <div className="bg-brand-white border border-black/[0.08] p-6 rounded-[20px] shadow-sm">
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Marketing Leads</h4>
            <div className="font-display font-black text-3xl text-zinc-800">{marketingLeadsCount}</div>
          </div>

        </div>

        {/* Table Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Search bar */}
          <div className="flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search leads by name, email, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-brand-white border border-black/[0.08] p-3 text-xs font-semibold text-brand-black focus:outline-none focus:border-brand-orange rounded-[12px] placeholder:text-zinc-400 w-full"
            />
          </div>

          {/* Service Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Service:</span>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="bg-brand-white border border-black/[0.08] p-3 text-xs font-bold text-brand-black focus:outline-none focus:border-brand-orange rounded-[12px]"
            >
              <option value="All">All Services</option>
              <option value="Web Development">Web Development</option>
              <option value="AI Agentic Solutions">AI Agentic Solutions</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

        </div>

        {/* Lead Table Container */}
        <div className="w-full bg-brand-white border border-black/[0.08] rounded-[20px] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            {filteredLeads.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-zinc-500 font-sans font-bold text-xs">No customer leads found matching criteria.</p>
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100 text-[10px] font-black uppercase tracking-wider text-zinc-500">
                    <th className="py-4 px-6">Submitted</th>
                    <th className="py-4 px-6">Name / Company</th>
                    <th className="py-4 px-6">Contact Info</th>
                    <th className="py-4 px-6">Service</th>
                    <th className="py-4 px-6">Project Details</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-xs font-sans font-semibold text-zinc-800">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-zinc-50/50 transition-colors">
                      {/* Date */}
                      <td className="py-4 px-6 whitespace-nowrap text-zinc-500 font-bold">
                        {formatDate(lead.created_at)}
                      </td>
                      
                      {/* Name / Company */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-brand-black text-sm">{lead.name}</div>
                        {lead.business_name && (
                          <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-sans font-semibold">{lead.business_name}</div>
                        )}
                      </td>

                      {/* Contact Info */}
                      <td className="py-4 px-6">
                        <div><a href={`mailto:${lead.email}`} className="text-brand-orange hover:underline">{lead.email}</a></div>
                        {lead.phone && <div className="text-zinc-500 mt-1">{lead.phone}</div>}
                      </td>

                      {/* Service */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[6px] ${
                          lead.service_interested_in === "AI Agentic Solutions"
                            ? "bg-brand-orange/5 text-brand-orange border border-brand-orange/20"
                            : lead.service_interested_in === "Web Development"
                            ? "bg-zinc-100 text-zinc-800 border border-zinc-200"
                            : "bg-blue-50 text-blue-700 border border-blue-100"
                        }`}>
                          {lead.service_interested_in || "Not Specified"}
                        </span>
                      </td>

                      {/* Project Details */}
                      <td className="py-4 px-6 max-w-xs sm:max-w-md md:max-w-lg">
                        <p className="line-clamp-3 text-zinc-600 font-medium leading-relaxed">
                          {lead.project_description}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-colors py-2 px-4 rounded-[8px] text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
