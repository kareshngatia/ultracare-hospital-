import React, { useState, FormEvent, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    clinic: 'General Outpatient',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clinics = [
    "General Outpatient",
    "Surgical & Orthopedic Panel",
    "Maternity & OBS/GYN",
    "Endoscopy & Diagnostics",
    "ENT Specialty Clinic",
    "Pediatrics",
    "Physiotherapy & Rehabilitation"
  ];

  const contactCards = [
    { icon: "📞", title: "Emergency Line (24/7)", detail: "0702 761 696", action: "tel:0702761696", label: "Call Now" },
    { icon: "✉️", title: "Email Inquiries", detail: "info@ultracarehospital.co.ke", action: "mailto:info@ultracarehospital.co.ke", label: "Send Email" },
    { icon: "📍", title: "Physical Location", detail: "Nyahururu, Kenya", action: "#map-directions", label: "View Map" }
  ];

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your booking request for the ${formData.clinic} department has been logged.`);
  };

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased min-h-screen">
      
      {/* HEADER HERO SPLASH */}
      <section className="bg-white pt-20 pb-16 border-b border-neutral-200/60">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <span className="font-heading text-xs font-bold text-hospital-blue tracking-widest uppercase bg-hospital-steel px-3 py-1 rounded-full">
            CONNECT WITH US
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-hospital-headingGrey">
            Appointments & <span className="text-hospital-teal">Support Desk</span>
          </h1>
          <p className="text-base text-hospital-darkGrey max-w-xl mx-auto leading-relaxed">
            Reach our 24-hour triage team or set up an authorized outpatient consultation frame seamlessly.
          </p>
        </div>
      </section>

      {/* THREE-COLUMN DIRECT COMMUNICATIONS BAR */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {contactCards.map((card, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex items-start gap-4">
            <span className="text-3xl p-3 bg-hospital-steel rounded-2xl shrink-0">
              {card.icon}
            </span>
            <div className="space-y-1 min-w-0">
              <h3 className="font-heading font-bold text-sm text-hospital-darkGrey uppercase tracking-wider">{card.title}</h3>
              <p className="text-base font-bold text-hospital-headingGrey truncate">{card.detail}</p>
              <a href={card.action} className="inline-block text-xs font-bold text-hospital-teal hover:text-hospital-blue transition-colors pt-1">
                {card.label} →
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* SPLIT PRIMARY ACTIONS: FORM & CLINIC HOURS */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Dynamic Schedule Info Panel */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-black tracking-tight text-hospital-headingGrey">
              Clinical Operating Standards
            </h2>
            <p className="text-sm text-hospital-darkGrey leading-relaxed">
              Our emergency room, clinical pharmacy line, critical care HDU panel, and diagnostic lab structures are completely open 24 hours a day, 7 days a week.
            </p>
          </div>

          {/* Opening Blocks */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 divide-y divide-neutral-100">
            <div className="py-3 flex justify-between items-center text-sm">
              <span className="font-medium text-hospital-headingGrey">Accident & Emergency</span>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs">24 Hours / 7 Days</span>
            </div>
            <div className="py-3 flex justify-between items-center text-sm">
              <span className="font-medium text-hospital-headingGrey">Laboratory & Diagnostics</span>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs">24 Hours / 7 Days</span>
            </div>
            <div className="py-3 flex justify-between items-center text-sm">
              <span className="font-medium text-hospital-headingGrey">Specialist Consultant Panels</span>
              <span className="font-semibold text-hospital-darkGrey">Mon - Sat (By Booking)</span>
            </div>
            <div className="py-3 flex justify-between items-center text-sm">
              <span className="font-medium text-hospital-headingGrey">Physiotherapy Unit</span>
              <span className="font-semibold text-hospital-darkGrey">08:00 AM — 05:00 PM</span>
            </div>
          </div>

          <div className="bg-linear-to-tr from-hospital-blue to-hospital-teal text-white rounded-3xl p-6 shadow-xs">
            <h4 className="font-heading font-bold text-base mb-1">💡 Insurance Pre-Authorization</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Bringing your SHA card or corporate insurance panel documents? Mention this to our customer care attendants on arrival for rapid computerized check-ins.
            </p>
          </div>
        </div>

        {/* Right Side: High-tier Structured Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmission} className="bg-white border border-neutral-200/60 rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
            <h3 className="text-xl font-heading font-black text-hospital-headingGrey tracking-tight">
              Clinical Session Intake Form
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Full Name</label>
                <input 
                  type="text" required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all text-sm" 
                  placeholder="Jane Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Phone Number</label>
                <input 
                  type="tel" required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all text-sm" 
                  placeholder="0712 345 678" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Email Address (Optional)</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all text-sm" 
                  placeholder="jane@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Target Clinic / Specialty</label>
                <select 
                  value={formData.clinic}
                  onChange={(e) => setFormData({...formData, clinic: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 outline-none transition-all text-sm appearance-none"
                >
                  {clinics.map((clinic, i) => (
                    <option key={i} value={clinic}>{clinic}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Preferred Appointment Date</label>
              <input 
                type="date" required 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 outline-none transition-all text-sm" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Brief Case History or Message</label>
              <textarea 
                rows={4} required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-3xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 resize-none outline-none transition-all text-sm" 
                placeholder="Describe symptoms or medical requests..." 
              />
            </div>

            <button type="submit" className="w-full bg-hospital-teal hover:bg-hospital-teal/95 text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-98">
              Confirm Appointment Booking Request
            </button>
          </form>
        </div>

      </section>

    </div>
  );
}