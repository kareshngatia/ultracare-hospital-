import React from 'react';

export default function Services() {
  const clinicalSpecialties = [
    { title: "Surgical Services", desc: "Advanced operating theatre equipped for minor, major, and specialized surgical procedures.", icon: "🩺", size: "md:col-span-2" },
    { title: "Orthopedic & Trauma Care", desc: "Expert management of bone fractures, joint problems, and acute physical trauma cases.", icon: "🦴", size: "md:col-span-1" },
    { title: "Maternity & Antenatal/Postnatal Clinics", desc: "Comprehensive, safe mother-and-baby packages with fully equipped Neonatal Units (NBU).", icon: "👶", size: "md:col-span-1" },
    { title: "Endoscopy & Colonoscopy Procedures", desc: "Advanced internal diagnostic imaging using high-definition video scopes for precise therapeutic actions.", icon: "🔬", size: "md:col-span-2" },
  ];

  const diagnosticsAndLabs = [
    { title: "Digital Radiology & Imaging", detail: "Digital X-Ray & Ultrasound configurations for immediate inner mapping.", short: "X-Ray / Scan" },
    { title: "Cardiopulmonary Diagnostics", detail: "Precision screening including ECG, ECHO, and EEG reporting.", short: "ECG / ECHO / EEG" },
    { title: "Comprehensive Laboratory & Biopsy", detail: "24/7 internal lab pathology, testing panels, and specialized bone marrow aspirates.", short: "Lab & Pathology" },
  ];

  const supportiveCare = [
    { name: "Specialist ENT", desc: "Advanced Ear, Nose, and Throat clinical consults.", icon: "👂" },
    { name: "Pediatrics & Vaccines", desc: "Baby-friendly immunization clinics and development milestones tracking.", icon: "🍼" },
    { name: "Obs/Gyn Clinic", desc: "Dedicated specialized feminine wellness care.", icon: "🤰" },
    { name: "Neurosurgery", desc: "Specialized neurological clinical reviews and pathways.", icon: "🧠" },
    { name: "Physiotherapy & Rehab", desc: "Post-trauma and elective motor rehabilitation sessions.", icon: "🏃‍♂️" },
    { name: "24/7 Inpatient & HDU", desc: "High Dependency Units with constant oxygenation and monitoring support.", icon: "🏥" },
  ];

  // Structured Weekly Schedule Array
  const weeklySchedule = [
    { day: "Monday", clinics: ["Surgery (SOPC)", "Physician (MOPC)", "Nutritionist Clinic"], color: "border-l-hospital-teal" },
    { day: "Tuesday", clinics: ["Orthopedics Clinic", "Paediatric (POPC)", "Physician (MOPC)"], color: "border-l-hospital-blue" },
    { day: "Wednesday", clinics: ["Orthopedic Clinic", "Neurosurgeon's Clinic", "Surgery (SOPC)"], color: "border-l-hospital-teal" },
    { day: "Thursday", clinics: ["Physician (MOPC)", "Paediatrics (POPC)", "OBS/GYN Clinic"], color: "border-l-hospital-blue" },
    { day: "Friday", clinics: ["Surgery (SOPC)", "ENT Clinic"], color: "border-l-hospital-teal" },
  ];

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased overflow-x-hidden">
      
      {/* NEW IMPROVED SPLIT HERO SECTION */}
      <section className="relative bg-white border-b border-neutral-200/80 pt-20 pb-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-hospital-teal/5 to-transparent pointer-events-none hidden lg:block" />
        
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-hospital-teal/10 border border-hospital-teal/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-hospital-teal animate-pulse" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-hospital-teal">
                Clinical Operational Excellence
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-hospital-headingGrey leading-none">
              Specialized Care, <br />
              <span className="bg-linear-to-r from-hospital-teal to-hospital-blue bg-clip-text text-transparent">
                Without Compromise.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-hospital-darkGrey leading-relaxed max-w-2xl">
              Ultracare Specialist Hospital delivers an integrated ecosystem of diagnostic, 
              surgical, and therapeutic services under one roof—combining modern infrastructure 
              with dedicated clinical specialist divisions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="#core-units" 
                className="bg-hospital-headingGrey hover:bg-neutral-800 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition-all shadow-md"
              >
                Explore Specialties ↓
              </a>
              <a 
                href="/contact" 
                className="border-2 border-neutral-200 hover:border-hospital-teal text-hospital-headingGrey hover:text-hospital-teal font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition-all"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-hospital-steel/60 border border-neutral-200/50 p-6 rounded-2xl">
              <span className="block text-3xl font-heading font-black text-hospital-headingGrey mb-1">24/7</span>
              <span className="text-sm font-semibold text-hospital-darkGrey">Emergency & Theater Intake</span>
            </div>
            <div className="bg-hospital-steel/60 border border-neutral-200/50 p-6 rounded-2xl">
              <span className="block text-3xl font-heading font-black text-hospital-teal mb-1">100%</span>
              <span className="text-sm font-semibold text-hospital-darkGrey">Digital Radiology Sync</span>
            </div>
            <div className="bg-white border-2 border-hospital-blue/20 shadow-xs p-6 rounded-2xl col-span-2 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-hospital-blue uppercase tracking-wider">Mother & Child Care</span>
                <span className="text-base font-heading font-bold text-hospital-headingGrey mt-0.5 block">Neonatal Unit Packages Available</span>
              </div>
              <span className="text-2xl">👶</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE BENTO GRID (Primary Core Specialties) */}
      <section id="core-units" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-heading font-black text-hospital-headingGrey tracking-tight uppercase">
            ⚡ Core Specialized Units
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicalSpecialties.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white border border-neutral-200/60 p-8 rounded-3xl flex flex-col justify-between card-hover min-h-65 ${item.size}`}
            >
              <div className="text-4xl bg-hospital-steel w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-hospital-headingGrey tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-hospital-darkGrey text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: MODERN MINI-PORTAL (Diagnostics & Imaging) */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="font-heading uppercase tracking-widest text-xs text-hospital-teal font-black">
                24/7 OPERATIONAL ACCESS
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight leading-tight">
                Advanced Diagnostics & Laboratory
              </h2>
              <p className="text-base text-neutral-400 leading-relaxed">
                Accurate clinical treatment pathways rely on precise data. Our internal infrastructure ensures laboratory and imaging results are quickly processed to aid decision-making.
              </p>
              <div className="pt-4">
                <a href="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-wider text-hospital-teal hover:text-white transition-colors">
                  ➔ Schedule a Diagnostic Scan
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              {diagnosticsAndLabs.map((diag, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between min-h-45">
                  <span className="text-xs font-heading font-black uppercase text-hospital-teal tracking-wider bg-white/5 px-2.5 py-1.5 rounded-md self-start">
                    {diag.short}
                  </span>
                  <div className="mt-4">
                    <h4 className="text-lg font-heading font-bold text-white mb-2">{diag.title}</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">{diag.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPECIALIST CLINICS & OUTPATIENT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading text-xs font-bold text-hospital-blue tracking-widest uppercase">
              COMPREHENSIVE DEPARTMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-hospital-headingGrey mt-2">
              Outpatient & Specialized Clinics
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportiveCare.map((clinic, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-hospital-steel/40 border border-neutral-100 rounded-2xl items-start">
                <div className="text-3xl p-3 bg-white border border-neutral-200/50 rounded-xl shrink-0 shadow-2xs">
                  {clinic.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-hospital-headingGrey text-lg mb-1.5">
                    {clinic.name}
                  </h4>
                  <p className="text-hospital-darkGrey text-sm leading-relaxed">
                    {clinic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSERTED NEW SECTION: CLINICS WEEKLY SCHEDULE */}
      <section className="py-24 bg-hospital-steel/40 border-t border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-12 space-y-2">
            <span className="font-heading text-xs font-bold text-hospital-teal tracking-widest uppercase bg-white px-3 py-1 rounded-full shadow-2xs border border-neutral-100">
              TIMELINES & AVAILABILITY
            </span>
            <h2 className="text-3xl font-heading font-black text-hospital-headingGrey tracking-tight uppercase">
              🗓️ Weekly Specialist Schedule
            </h2>
            <p className="text-sm text-hospital-darkGrey max-w-xl">
              Review our weekly consultation calendar. Please note our Accident & Emergency, Laboratory, and Pharmacy departments operate 24/7 regardless of outpatient clinic timelines.
            </p>
          </div>

          {/* Table Container with modern look and mobile scroll protection */}
          <div className="bg-white border border-neutral-200/70 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-950 text-white font-heading text-xs uppercase tracking-wider">
                    <th className="py-5 px-8 font-black w-1/4">Operating Day</th>
                    <th className="py-5 px-8 font-black w-3/4">Active Consulting Clinics & Specialist Panels</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/70">
                  {weeklySchedule.map((row, idx) => (
                    <tr key={idx} className="hover:bg-hospital-steel/30 transition-colors group">
                      {/* Day Column */}
                      <td className={`py-6 px-8 font-heading font-extrabold text-base text-hospital-headingGrey border-l-4 ${row.color} transition-all`}>
                        {row.day}
                      </td>
                      {/* Clinics Items Column */}
                      <td className="py-6 px-8">
                        <div className="flex flex-wrap gap-2.5">
                          {row.clinics.map((clinic, cIdx) => (
                            <span 
                              key={cIdx} 
                              className="bg-hospital-steel text-hospital-headingGrey text-xs font-bold px-3.5 py-2 rounded-xl border border-neutral-200/60 shadow-2xs group-hover:bg-white transition-colors"
                            >
                              {clinic}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Alert Context */}
            <div className="bg-neutral-50 px-8 py-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hospital-darkGrey font-medium">
              <span className="flex items-center gap-2">
                💡 <em>SOPC: Surgical Outpatient Clinic • MOPC: Medical Outpatient Clinic • POPC: Pediatric Outpatient Clinic</em>
              </span>
              <span className="font-bold text-hospital-teal">
                Weekend panels are open strictly via advanced bookings.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK CONNECT FOOTER BANNER */}
      <section className="bg-linear-to-r from-hospital-teal to-hospital-blue py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
            Need to Consult One of Our Medical Experts?
          </h3>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8">
            Book your slot online today. Our automated clinic management desk will route your information directly to the on-duty specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-neutral-950 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-neutral-900 shadow-lg transition-transform active:scale-98">
              Book Appointment Slot
            </a>
            <a href="tel:0702761696" className="text-base font-heading font-bold underline hover:text-neutral-950 transition-colors">
              Call Emergency Desk: 0702 761 696
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}