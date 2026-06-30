import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  // Automatically scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { badge: "ALWAYS OPEN", title: "24/7 Medical Infrastructure", desc: "Our emergency triage desk, primary clinical laboratory, and hospital pharmacy operate continuously, ensuring immediate care anytime." },
    { badge: "FULLY COMPLIANT", title: "Smooth SHA & Insurance Processing", desc: "We are fully integrated with the Social Health Authority (SHA) and major corporate insurance covers to protect you from unexpected out-of-pocket overheads." },
    { badge: "EXPERT TEAMS", title: "Comprehensive Specialist Panel", desc: "Get direct local access to seasoned consultants across surgery (SOPC), internal medicine (MOPC), pediatrics, neurosurgery, and ENT panels." },
    { badge: "MODERN EQUIPMENT", title: "Advanced Surgical & Diagnostic Care", desc: "Equipped with an advanced operating theater, High Dependency Units (HDU), digital radiology, and video endoscopy scopes." },
  ];

  const coreValues = [
    { icon: "👤", title: "Patient-Centered Care", desc: "We prioritize the needs, comfort, and dignity of every individual, tailoring solutions to unique health conditions." },
    { icon: "🛡️", title: "Integrity & Safety", desc: "Upholding honesty, accountability, and ethical practices through a strict policy of utmost good faith." },
    { icon: "💖", title: "Compassion", desc: "We treat every patient and family member with profound empathy, kindness, and deep clinical respect." },
    { icon: "⭐", title: "Clinical Excellence", desc: "Striving for the highest standards in healthcare delivery, precision diagnostics, and safe therapeutic outcomes." },
    { icon: "🤝", title: "Collaboration", desc: "Working seamlessly across multidisciplinary specialist panels to secure the best clinical results." },
    { icon: "💡", title: "Continuous Innovation", desc: "Embracing modern medical ideas and specialized technologies to constantly elevate local patient care." },
  ];

  const specialists = [
    "Consultant Physicians",
    "Obstetricians & Gynecologists",
    "ENT Specialists",
    "Pediatricians",
    "Surgeons",
    "Laboratory Specialists",
    "Radiology Experts"
  ];

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased min-h-screen">
      
      {/* HERO BANNER SECTION */}
      <section className="relative bg-white pt-20 pb-24 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="md:col-span-7 space-y-6">
            <span className="font-heading text-xs font-bold text-hospital-blue tracking-widest uppercase bg-hospital-steel px-3 py-1 rounded-full">
              REGISTERED LEVEL 4 SPECIALIST HOSPITAL
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-hospital-headingGrey leading-none">
              Hearts that Care.<br />
              <span className="text-hospital-teal">Clinical Excellence.</span>
            </h1>
            <p className="text-lg text-hospital-darkGrey leading-relaxed max-w-xl">
              Established in 2023 within Nyahururu, PEJMED Ultracare Specialist Hospital Limited
              is a premier privately owned Level 4 facility dedicated to expanding access to high-tier clinical medicine 
              across Laikipia County and neighboring regions.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-block bg-hospital-teal hover:bg-hospital-teal/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-hospital-teal/20"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
          
          {/* Right Hero Column: Vision & Mission Matrix */}
          <div className="md:col-span-5 bg-linear-to-br from-hospital-blue to-hospital-teal rounded-3xl p-8 text-white space-y-6 shadow-xs">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-200 block">Our Vision</span>
              <p className="text-sm font-medium leading-relaxed opacity-95">
                “To be the leading centre for specialized healthcare in the region, known for our commitment to excellence, innovation, and patient-centered care.”
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-200 block">Our Mission</span>
              <p className="text-sm font-medium leading-relaxed opacity-95">
                “To provide comprehensive specialized healthcare services to our patients through specialists dedicated to delivering high-quality, compassionate care.”
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-2xl font-black font-heading text-teal-200">Level 4</span>
                <span className="text-xs text-white/80">Facility Status</span>
              </div>
              <div>
                <span className="block text-2xl font-black font-heading text-teal-200">24/7</span>
                <span className="text-xs text-white/80">Specialist Coverage</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES & PHILOSOPHY GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading font-black tracking-widest text-hospital-teal uppercase">
            OUR FOUNDATION
          </span>
          <h2 className="text-3xl font-heading font-black tracking-tight text-hospital-headingGrey sm:text-4xl">
            Core Values Guided by Utmost Good Faith
          </h2>
          <p className="text-base text-hospital-darkGrey max-w-2xl mx-auto leading-relaxed">
            At PEJMED Ultracare Specialist Hospital Limited, our core values guide everything we do. We conduct ourselves with a strict policy of professional integrity, determined to provide patients with the best solutions for various health conditions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-white border border-neutral-200/60 p-8 rounded-3xl space-y-4 hover:shadow-xs transition-shadow">
              <span className="text-3xl flex w-12 h-12 bg-hospital-steel rounded-xl items-center justify-center">
                {value.icon}
              </span>
              <h3 className="text-lg font-heading font-bold text-hospital-headingGrey">{value.title}</h3>
              <p className="text-sm text-hospital-darkGrey leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEDICAL TEAM EXPERTISE PANEL */}
      <section className="bg-white border-t border-b border-neutral-200/50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-hospital-blue/10 border border-hospital-blue/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-hospital-blue animate-pulse" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-hospital-blue">
                Our Medical Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-hospital-headingGrey">
              The Expertise Driving <br/>Our Clinical Standards
            </h2>
            <p className="text-base text-hospital-darkGrey leading-relaxed">
              At PEJMED Ultracare Specialist Hospital Limited, our strength lies in our multi-disciplinary team of highly qualified consultant specialists, skilled nurses, and experienced healthcare professionals committed to delivering safe, effective, and compassionate treatment.
            </p>
            <p className="text-base text-hospital-darkGrey leading-relaxed">
              Our clinical panel integrates expertise across multiple fields of medicine to address both routine clinical consultations and complex interventions, guaranteeing an accurate diagnosis, clear pathways, and personalized care for every patient.
            </p>
          </div>

          <div className="lg:col-span-6 bg-hospital-steel/40 border border-neutral-200/60 p-8 rounded-3xl">
            <span className="block text-xs font-bold uppercase tracking-widest text-hospital-darkGrey/70 mb-4">
              Our Multi-Disciplinary Team Includes:
            </span>
            <div className="grid sm:grid-cols-2 gap-3">
              {specialists.map((specialty, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-neutral-200/50 px-4 py-3.5 rounded-xl flex items-center gap-3 shadow-2xs hover:border-hospital-teal/40 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-hospital-teal" />
                  <span className="font-heading text-sm font-bold text-hospital-headingGrey">
                    {specialty}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHY PATIENTS TRUST ULTRACARE */}
      <section className="bg-neutral-950 text-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-heading font-black tracking-widest text-hospital-teal uppercase">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl font-heading font-black tracking-tight mt-2">
              Why Patients Trust Ultracare
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Designed around community priorities to reflect our complete medical readiness and elite standard of service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, idx) => (
              <div key={idx} className="space-y-3 group border-l border-white/10 pl-6 hover:border-hospital-teal transition-colors">
                <div className="font-heading font-black text-[10px] tracking-wider text-hospital-teal bg-white/5 px-2.5 py-1 rounded-md w-fit uppercase">
                  {feature.badge}
                </div>
                <h4 className="text-lg font-heading font-bold text-white group-hover:text-teal-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL INTERSECTIONAL ACTION BAR */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center space-y-6">
        <h3 className="text-2xl font-heading font-bold text-hospital-headingGrey">
          Ready to experience specialized healthcare with genuine human warmth?
        </h3>
        <p className="text-sm text-hospital-darkGrey max-w-md mx-auto">
          Book an appointment session with our consultant specialist panel or confirm your corporate cover parameters instantly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-hospital-teal hover:bg-hospital-teal/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all text-center shadow-md"
          >
            Schedule Consultation
          </Link>
          <Link 
            to="/services" 
            className="w-full sm:w-auto bg-white border border-neutral-300 text-hospital-headingGrey font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-neutral-50 transition-colors text-center"
          >
            Explore Services
          </Link>
        </div>
      </section>

    </div>
  );
}