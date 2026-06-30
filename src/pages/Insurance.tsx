import React from 'react';

export default function Insurance() {
  const partners = [
    { name: "SHA / NHIF", logo: "/logos/sha.png", type: "National Cover" },
    { name: "Jubilee Insurance", logo: "/logos/jubilee.png", type: "Private Provider" },
    { name: "CIC Insurance", logo: "/logos/cic.png", type: "Private Provider" },
    { name: "Britam", logo: "/logos/britam.png", type: "Private Provider" },
    { name: "Old Mutual", logo: "/logos/old-mutual.png", type: "Private Provider" },
    { name: "APA Insurance", logo: "/logos/apa.png", type: "Private Provider" },
    { name: "Madison Insurance", logo: "/logos/madison.png", type: "Private Provider" },
    { name: "GA Insurance", logo: "/logos/ga.png", type: "Private Provider" },
  ];

  const steps = [
    { num: "01", title: "Present Your Cover Identity", desc: "Visit our dedicated corporate insurance paneled desk with your active digital/physical member card and ID." },
    { num: "02", title: "Biometric & SHA Verification", desc: "Our staff triggers instant fingerprint identification or capitation structure status checks via official channels." },
    { num: "03", title: "Pre-Authorization Clearance", desc: "We handle all complex administrative pre-auth workflows internally while you go see your specialist doctor." }
  ];

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased min-h-screen">
      
      {/* LANDING HERO HEADER ELEMENT */}
      <section className="bg-white pt-16 pb-20 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="font-heading text-xs font-bold text-hospital-teal tracking-widest uppercase bg-hospital-teal/10 px-3 py-1 rounded-full">
              FINANCIAL COMPLIANCE & ACCESS
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-hospital-headingGrey leading-none">
              Insurance Schemes & <br />
              <span className="text-hospital-blue">Corporate Panel Desk.</span>
            </h1>
            <p className="pt-2 text-lg md:text-xl text-hospital-darkGrey leading-relaxed">
              We make specialized clinical access smooth. Ultracare partners directly with major national, 
              private, and corporate health insurance schemes across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE ALERT: INTEGRATED SHA / NHIF MATRIX */}
      <section className="max-w-6xl mx-auto px-6 pt-12">
        <div className="bg-linear-to-r from-hospital-blue to-hospital-teal p-8 rounded-3xl text-white shadow-md flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-md w-fit">
              <span>🇰🇪</span> National Health Framework
            </div>
            <h3 className="text-2xl font-heading font-black tracking-tight">Social Health Authority (SHA) Active Integration</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Ultracare is fully compliant and networked into the current Social Health Authority system. Both emergency admissions and specialized outpatient procedures are validated immediately at our desk.
            </p>
          </div>
          <div className="bg-neutral-950/20 p-4 rounded-2xl border border-white/10 text-center shrink-0 w-full md:w-auto">
            <span className="block text-xs font-bold uppercase text-white/70">Desk Check-In Status</span>
            <span className="text-xl font-heading font-black block text-emerald-400 mt-1">● Live & Online</span>
          </div>
        </div>
      </section>

      {/* CORE LOGO GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-hospital-headingGrey tracking-tight uppercase">
            Recognized Corporate Insurance Covers
          </h2>
          <p className="text-sm text-hospital-darkGrey mt-1">If your current private cover or employer scheme isn't shown below, get in touch with our billing helpline.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group bg-white border border-neutral-200/70 hover:border-hospital-teal p-6 rounded-2xl flex flex-col items-center justify-center min-h-36 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute top-2.5 right-3 text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                {partner.type}
              </span>
              
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'block';
                }}
              />
              
              <span className="hidden font-heading font-bold text-sm text-hospital-headingGrey text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ADMISSIONS PRE-AUTH STEPS */}
      <section className="bg-neutral-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-heading font-black tracking-widest text-hospital-teal uppercase">
              DESK GUIDELINES
            </span>
            <h2 className="text-3xl font-heading font-black tracking-tight mt-2">
              The Insurance Clearance Flow
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-3 group border-l border-white/10 pl-6 hover:border-hospital-teal transition-colors">
                <div className="font-heading font-black text-4xl text-white/20 group-hover:text-hospital-teal transition-colors">
                  {step.num}
                </div>
                <h4 className="text-lg font-heading font-bold text-white">{step.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP LINE FOOTER CALLOUT */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-2xl font-heading font-bold text-hospital-headingGrey mb-2">Have questions about co-payment options?</h3>
        <p className="text-sm text-hospital-darkGrey max-w-md mx-auto mb-6">Our dedicated credit control desk is happy to check pre-authorization caps for corporate staff programs.</p>
        <a href="tel:0702761696" className="inline-flex items-center gap-2 bg-white border border-neutral-300 text-hospital-headingGrey font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-neutral-50 transition-colors">
          📞 Call Billing Desk: 0702 761 696
        </a>
      </section>

    </div>
  );
}