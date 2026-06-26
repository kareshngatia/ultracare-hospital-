import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    { title: "Maternity & Neonatal", desc: "Comprehensive maternity services and baby-friendly neonatal unit.", icon: "👶" },
    { title: "Diagnostics & Imaging", desc: "Digital X-ray, Ultrasound, ECG, ECHO, EEG and Laboratory services.", icon: "📡" },
    { title: "Emergency & Critical Care", desc: "24/7 Emergency department with HDU support.", icon: "🚑" },
    { title: "Specialist Clinics", desc: "ENT, OBS/GYN, Physician, Paediatrics, Neurosurgery & more.", icon: "👨‍⚕️" },
  ];

  const insurances = [
    { name: "SHA Insurance", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=SHA" },
    { name: "Mwalimu Cover", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=Mwalimu" },
    { name: "AAR Insurance", img: "https://placehold.co/180x80/f8f7f4/334155?text=AAR" },
    { name: "CIC Group", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=CIC" },
    { name: "Britam", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=Britam" },
    { name: "Madison Insurance", img: "https://placehold.co/180x80/f8f7f4/334155?text=Madison" },
    { name: "Minet Kenya", img: "https://placehold.co/180x80/f8f7f4/0096D6?text=Minet" },
    { name: "KCB Insurance", img: "https://placehold.co/180x80/f8f7f4/008F7A?text=KCB" },
  ];

  const carouselItems = [...insurances, ...insurances];

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your appointment request has been received.`);
  };

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased overflow-x-hidden">
      

      {/* HERO */}
      <section className="relative min-h-[80dvh] flex items-center justify-center pt-16 overflow-hidden" id="home">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-hospital-teal/85 to-hospital-blue/80" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-sm mb-8 border border-white/20">
            Established May 2024 • Nyahururu, Kenya
          </div>

          <h1 className="text-display font-black tracking-tighter leading-none mb-6 drop-shadow-2xl">
            Hearts that<br />
            <span className="italic font-light text-white/95">Care.</span>
          </h1>

          <p className="max-w-xl mx-auto text-xl text-white/90 mb-12">
            Premium specialist healthcare delivered with compassion, advanced technology, 
            and unwavering patient-centered excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#appointment" className="btn-primary px-10 py-4 rounded-2xl text-lg font-bold">
              Book Appointment
            </a>
            <a href="#services" className="border-2 border-white/80 hover:bg-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div className="section-header">
              <div className="uppercase tracking-[3px] text-hospital-blue text-sm font-semibold mb-3">01 — OUR STORY</div>
              <h2 className="text-5xl font-black tracking-tighter text-hospital-headingGrey">Compassionate Specialist Care</h2>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 text-lg leading-relaxed text-hospital-darkGrey">
            <p>Established in May 2024, Ultracare Specialist Hospital is dedicated to providing comprehensive specialized healthcare services through dedicated specialists who deliver high quality compassionate care.</p>
            <p>Our mission is to be the leading center for specialized healthcare in the region, known for commitment to excellence, innovation and patient-centered care.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-hospital-steel">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-widest text-sm text-hospital-blue font-semibold mb-3">02 — CLINICAL EXCELLENCE</div>
            <h2 className="text-5xl font-black tracking-tighter text-hospital-headingGrey">Our Specialist Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((service, i) => (
              <div key={i} className="card-hover bg-white border border-neutral-100 p-8 rounded-3xl group">
                <div className="text-5xl mb-6 opacity-80 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight text-hospital-headingGrey">{service.title}</h3>
                <p className="text-hospital-darkGrey">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE CAROUSEL */}
      <section id="insurance" className="py-20 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <div className="uppercase tracking-widest text-sm text-hospital-blue font-semibold">03 — PARTNERS</div>
          <h2 className="text-4xl font-bold mt-3">Trusted Insurance Providers</h2>
        </div>

        <div className="flex gap-12 animate-infinite-scroll">
          {carouselItems.map((ins, index) => (
            <div key={index} className="flex-shrink-0 w-56 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-colors">
              <img src={ins.img} alt={ins.name} className="h-14 w-auto mx-auto brightness-0 invert" />
              <p className="text-center text-xs text-white/70 mt-4 tracking-widest">{ins.name}</p>
            </div>
          ))}
        </div>
      </section>

           {/* APPOINTMENT SECTION - Steel Background */}
      <section id="appointment" className="py-20 bg-hospital-steel">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <div className="section-header">
              <div className="uppercase tracking-widest text-sm mb-3 text-hospital-teal">04 — START HERE</div>
              <h2 className="text-5xl font-black tracking-tighter leading-none text-hospital-headingGrey">
                Book Your Appointment
              </h2>
            </div>
            <div className="mt-10">
              <div className="text-hospital-darkGrey text-sm">EMERGENCY LINE</div>
              <a href="tel:0702761696" className="block text-4xl font-bold mt-2 text-hospital-teal">
                0702 761 696
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleBooking} className="glass border border-neutral-200 rounded-3xl p-10 bg-white/80 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest mb-2 text-hospital-darkGrey">FULL NAME</label>
                  <input 
                    type="text" required 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-neutral-300 focus:border-hospital-teal rounded-2xl px-6 py-4 text-hospital-headingGrey placeholder:text-neutral-400" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest mb-2 text-hospital-darkGrey">PHONE NUMBER</label>
                  <input 
                    type="tel" required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border border-neutral-300 focus:border-hospital-teal rounded-2xl px-6 py-4 text-hospital-headingGrey placeholder:text-neutral-400" 
                    placeholder="0712 345 678" 
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-xs tracking-widest mb-2 text-hospital-darkGrey">PREFERRED DATE</label>
                <input 
                  type="date" required 
                  value={formData.date} 
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-white border border-neutral-300 focus:border-hospital-teal rounded-2xl px-6 py-4 text-hospital-headingGrey" 
                />
              </div>

              <div className="mt-6">
                <label className="block text-xs tracking-widest mb-2 text-hospital-darkGrey">REASON FOR VISIT</label>
                <textarea 
                  rows={4} required 
                  value={formData.reason} 
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full bg-white border border-neutral-300 focus:border-hospital-teal rounded-3xl px-6 py-4 text-hospital-headingGrey placeholder:text-neutral-400 resize-none" 
                  placeholder="Brief description of your symptoms or required service..." 
                />
              </div>

              <button type="submit" className="btn-primary mt-10 w-full py-5 rounded-2xl text-lg">
                REQUEST APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </section>
    
    </div>
  );
}