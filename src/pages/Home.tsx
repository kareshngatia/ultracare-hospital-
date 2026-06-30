import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', 
    phone: '', 
    date: '', 
    reason: ''
  });

  const keyServices = [
    { title: "Surgical & Orthopedic", desc: "Advanced surgical theatre, trauma care, and orthopedic procedures.", icon: "🦴" },
    { title: "Endoscopy & Colonoscopy", desc: "State-of-the-art diagnostic and therapeutic endoscopic procedures.", icon: "🔬" },
    { title: "Maternity & Neonatal", desc: "Comprehensive maternity services, antenatal/postnatal clinics, and baby-friendly NBU/neonatal units.", icon: "👶" },
    { title: "Diagnostics & Imaging", desc: "Digital X-ray, Ultrasound, ECG, ECHO, EEG, Biopsy, and comprehensive Laboratory services.", icon: "📡" },
    { title: "Emergency & Critical Care", desc: "24/7 Emergency care department with dedicated HDU support.", icon: "🚑" },
    { title: "Specialist Clinics", desc: "ENT, OBS/GYN, Physician Consultation, Paediatrics, Neurosurgery, and Physiotherapy.", icon: "👨‍⚕️" },
  ];

  const coreValues = [
    { title: "Patient-Centered Care", desc: "We prioritize the needs, comfort, and dignity of every patient in all we do." },
    { title: "Excellence", desc: "We strive for the highest standards in healthcare delivery, education, and research." },
    { title: "Collaboration", desc: "We work together across disciplines to provide the best outcomes for our patients." },
    { title: "Compassion & Integrity", desc: "We treat every patient with empathy and uphold honesty and ethical practices." },
  ];

  const insurances = [
    { name: "SHA Insurance", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=SHA+Insurance" },
    { name: "SHA Civil Servants", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=SHA+Civil+Servants" },
    { name: "Mwalimu Cover", img: "https://placehold.co/180x80/f8f7f4/334155?text=Mwalimu+Cover" },
    { name: "Usalama Cover", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=Usalama+Cover" },
    { name: "CIC Group", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=CIC+Group" },
    { name: "Britam", img: "https://placehold.co/180x80/f8f7f4/334155?text=Britam" },
    { name: "Star Discover", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=Star+Discover" },
    { name: "Madison Insurance", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=Madison" },
    { name: "KCB Insurance", img: "https://placehold.co/180x80/f8f7f4/334155?text=KCB+Insurance" },
    { name: "Minet Kenya", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=Minet+Kenya" },
    { name: "Kenya Alliance", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=Kenya+Alliance" },
    { name: "AAR Insurance", img: "https://placehold.co/180x80/f8f7f4/334155?text=AAR+Insurance" },
  ];

  const corporatePartners = [
    "Cosmos Pharmaceuticals", 
    "GGFAN Ministries", 
    "Kingdom Seekers Fellowship Nyahururu"
  ];

  const carouselItems = [...insurances, ...insurances];

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your automated appointment request has been received.`);
  };

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85dvh] flex items-center justify-center pt-20 overflow-hidden" id="home">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070')` }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-neutral-950/90 via-hospital-teal/80 to-hospital-blue/90 mix-blend-multiply" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10 text-white py-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border border-white/20 shadow-sm">
            📍 REGISTERED LEVEL 4 HOSPITAL • NYAHURURU
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tight leading-tight mb-6">
            PEJMED Ultracare<br />
            <span className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-wide block mt-3 text-transparent bg-clip-text bg-linear-to-r from-teal-200 to-cyan-100">
              Hearts that Care. Clinical Excellence.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/90 mb-10 font-normal leading-relaxed">
            Welcome to PEJMED Ultracare Specialist Hospital Limited. Located in the heart of Nyahururu, 
            we bring together highly qualified consultant specialists, modern technology, and compassionate treatment 
            to serve families across Laikipia County and surrounding regions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="bg-hospital-teal hover:bg-hospital-teal/90 w-full sm:w-auto px-10 py-4 rounded-2xl text-base font-bold shadow-lg shadow-hospital-teal/20 transition-all text-center">
              Book Appointment
            </Link>
            <Link to="/services" className="w-full sm:w-auto border border-white/60 hover:border-white hover:bg-white/10 px-10 py-4 rounded-2xl font-bold text-base transition-all text-center">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT, COMMITMENT & CORE VALUES */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center mb-20">
            <div className="md:col-span-5">
              <div className="section-header">
                <div className="font-heading uppercase tracking-[3px] text-hospital-blue text-xs font-bold mb-3">01 — OUR FOUNDATION</div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-hospital-headingGrey">
                  Improving Access to Specialist Healthcare
                </h2>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-hospital-darkGrey">
              <p>
                Established in 2023, PEJMED Ultracare Specialist Hospital Limited was founded with the clear goal of improving access to specialized medical services for communities in Laikipia County and nearby regions. Our strength lies in our multi-disciplinary team of consultant specialists, skilled nurses, and dedicated healthcare professionals.
              </p>
              
              <div className="p-6 bg-hospital-steel/40 border border-neutral-100 rounded-2xl space-y-2">
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-hospital-blue">Our Commitment</h4>
                <p className="text-sm leading-relaxed text-hospital-darkGrey">
                  We are dedicated to delivering accessible, reliable, and advanced medical care, ensuring every patient receives personalized treatment from experienced healthcare professionals with a policy of utmost good faith.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-bold text-hospital-teal hover:text-hospital-blue uppercase tracking-wider transition-colors">
                  Read Our Vision, Mission & Milestones ➔
                </Link>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-neutral-100">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-hospital-steel/40 p-6 rounded-2xl border border-neutral-50/60">
                <h4 className="font-heading font-bold text-hospital-headingGrey mb-2 text-base">{value.title}</h4>
                <p className="text-hospital-darkGrey text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DISPLAY */}
      <section id="services" className="py-24 bg-hospital-steel/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-heading uppercase tracking-widest text-xs text-hospital-blue font-bold mb-3">02 — CLINICAL EXCELLENCE</div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-hospital-headingGrey">Our Specialist Services</h2>
            <p className="text-hospital-darkGrey max-w-xl mx-auto mt-4 text-sm">
              We provide a wide range of specialist medical services designed to address both routine healthcare needs and complex medical conditions under one roof.
            </p>
          </div>

          {/* Core Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {keyServices.map((service, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-8 rounded-3xl group shadow-sm hover:shadow-md hover:border-hospital-teal/30 transition-all">
                <div className="text-4xl mb-6 inline-block p-3 bg-hospital-steel rounded-2xl group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3 tracking-tight text-hospital-headingGrey">{service.title}</h3>
                <p className="text-hospital-darkGrey text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Context-Aware CTA Banner */}
          <div className="bg-white border border-neutral-200/60 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between shadow-xs">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-heading font-bold text-hospital-headingGrey text-xl">Looking for specific clinic hours or operating panels?</h4>
              <p className="text-sm text-hospital-darkGrey max-w-2xl">
                We maintain active specialty rotas for specialized ENT procedures, OB/GYN consulting schedules, physiotherapy sessions, and advanced critical care admissions.
              </p>
            </div>
            <Link 
              to="/services" 
              className="whitespace-nowrap inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-md active:scale-98 w-full md:w-auto justify-center"
            >
              Explore Full Clinical Scope ➔
            </Link>
          </div>

        </div>
      </section>

      {/* PARTNERS & INSURANCE SECTIONS */}
      <section id="partners" className="py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <div className="font-heading uppercase tracking-widest text-xs text-hospital-teal font-bold">03 — CREDIBILITY</div>
          <h2 className="text-3xl md:text-4xl font-heading font-black mt-3 tracking-tight">Trusted Insurance Providers</h2>
          <p className="text-neutral-400 text-base mt-2 max-w-xl mx-auto">We accept a wide range of corporate and national insurance schemes for smooth clinical processing.</p>
        </div>

        {/* Endless Moving Carousel Wrapper */}
        <div className="relative w-full flex items-center overflow-x-hidden mb-12">
          <div className="flex gap-6 animate-infinite-scroll min-w-full">
            {carouselItems.map((ins, index) => (
              <div key={index} className="shrink-0 w-44 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <img src={ins.img} alt={ins.name} className="h-10 w-auto mx-auto brightness-0 invert opacity-80" />
                <p className="text-[10px] text-white/50 mt-2 font-medium uppercase tracking-wider truncate">{ins.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action button routing to insurance landing portal */}
        <div className="text-center mb-16">
          <Link 
            to="/insurance" 
            className="inline-flex items-center gap-2 bg-hospital-teal hover:bg-hospital-teal/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-98"
          >
            Verify Your Insurance Card ➔
          </Link>
        </div>

        {/* Community & Strategic Partners */}
        <div className="max-w-4xl mx-auto px-6 pt-10 border-t border-white/10">
          <h4 className="text-center text-xs font-heading font-semibold text-neutral-400 uppercase tracking-widest mb-6">
            Strategic Corporate & Community Partners
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {corporatePartners.map((partner, idx) => (
              <div key={idx} className="bg-white/5 px-5 py-2.5 rounded-full border border-white/5 text-sm font-medium text-neutral-300">
                🤝 {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING */}
      <section id="appointment" className="py-24 bg-hospital-steel/50">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="section-header">
              <div className="font-heading uppercase tracking-widest text-xs mb-3 text-hospital-teal font-bold">04 — ACCESSIBILITY</div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight text-hospital-headingGrey">
                Request An Appointment
              </h2>
              <p className="text-hospital-darkGrey text-sm mt-4 leading-relaxed">
                Fill out our secure appointment submission form. Our team will verify parameters and notify you once confirmation details are ready.
              </p>
            </div>
            <div className="mt-10 p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm">
              <div className="text-hospital-darkGrey text-xs font-bold uppercase tracking-wider">EMERGENCY LINE 24/7</div>
              <a href="tel:0702761696" className="block text-3xl font-heading font-black mt-2 text-hospital-teal hover:text-hospital-blue transition-colors">
                0702 761 696
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleBooking} className="border border-neutral-100 rounded-3xl p-8 md:p-10 bg-white shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Full Name</label>
                  <input 
                    type="text" required 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Phone Number</label>
                  <input 
                    type="tel" required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all" 
                    placeholder="0712 345 678" 
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Preferred Appointment Date</label>
                <input 
                  type="date" required 
                  value={formData.date} 
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 outline-none transition-all" 
                />
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Reason for Visit</label>
                <textarea 
                  rows={4} required 
                  value={formData.reason} 
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-3xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 resize-none outline-none transition-all" 
                  placeholder="Briefly explain your symptoms or clinic required..." 
                />
              </div>

              <button type="submit" className="w-full bg-hospital-teal hover:bg-hospital-teal/95 text-white py-4 rounded-2xl text-base font-bold uppercase tracking-wider transition-transform shadow-md shadow-hospital-teal/10">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}