import React, { useState, FormEvent, ChangeEvent } from 'react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string; // e.g., "Full-time", "Part-time", "Locum"
  location: string;
  requirements: string[];
}

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample medical and administrative openings common for a Level 4 facility
  const openPositions: JobOpening[] = [
    {
      id: "med-001",
      title: "Critical Care Nursing Officer",
      department: "Nursing & Emergency Services",
      type: "Full-time",
      location: "Nyahururu",
      requirements: [
        "Diploma or BSc in Nursing from a recognized institution.",
        "Valid registration and practicing license from the Nursing Council of Kenya.",
        "Minimum 2 years of experience in an intensive care or HDU setup.",
        "BLS and ACLS certification is highly desirable."
      ]
    },
    {
      id: "med-002",
      title: "Radiographer / Sonographer",
      department: "Diagnostics & Imaging",
      type: "Full-time",
      location: "Nyahururu",
      requirements: [
        "Diploma or Degree in Diagnostic Radiography.",
        "Valid registration with the Radiation Protection Board / relevant Kenyan regulatory bodies.",
        "Proficiency in digital X-ray processing, ultrasound imaging, and specialized scans.",
        "At least 1-2 years of clinical post-internship experience."
      ]
    },
    {
      id: "admin-001",
      title: "Medical Records Officer",
      department: "Administration & Health Records",
      type: "Full-time",
      location: "Nyahururu",
      requirements: [
        "Diploma in Health Records and Information Management.",
        "Strong familiarity with Hospital Management Information Systems (HMIS).",
        "Excellent data entry, categorization skills, and strict adherence to patient privacy rules.",
        "Experience working in a busy hospital reception or records department."
      ]
    }
  ];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  const handleApply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Initialize binary stream map for multipart backend upload
    const dataToSend = new FormData();
    dataToSend.append('fullName', formData.fullName);
    dataToSend.append('email', formData.email);
    dataToSend.append('phone', formData.phone);
    dataToSend.append('position', formData.position || 'General Application');
    dataToSend.append('coverLetter', formData.coverLetter);
    if (resume) {
      dataToSend.append('resume', resume);
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/careers/apply', {
        method: 'POST',
        body: dataToSend // Browser handles boundaries automatically
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`Success: ${data.message || 'Your application profile was processed flawlessly!'}`);
        // Reset state cleanly
        setFormData({ fullName: '', email: '', phone: '', position: '', coverLetter: '' });
        setResume(null);
      } else {
        alert(`Application Error: ${data.message || 'The server rejected this transmission.'}`);
      }
    } catch (err) {
      console.error('Network Error:', err);
      alert('Could not connect to the PEJMED processing server. Please ensure your backend architecture is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-hospital-steel text-neutral-900 font-sans antialiased overflow-x-hidden pt-24">
      
      {/* HEADER HERO */}
      <section className="bg-neutral-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=2070')` }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border border-white/15">
            💼 WORK WITH US
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
            Join Our Specialized Medical Team
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed">
            Build a rewarding clinical or administrative career at PEJMED Ultracare. We offer a highly professional workspace driven by excellence, teamwork, and compassionate care.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE PEJMED ULTRACARE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-hospital-headingGrey">
              Why Build Your Career Here?
            </h2>
            <p className="text-hospital-darkGrey text-sm mt-3">
              We look for passionate professionals committed to delivering advanced, ethical medical care with genuine human warmth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-hospital-steel/40 border border-neutral-50/50">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-heading font-bold text-hospital-headingGrey mb-2">Advanced Infrastructure</h3>
              <p className="text-hospital-darkGrey text-sm leading-relaxed">
                Work alongside skilled consultants utilizing a fully equipped modern operating theatre, advanced video endoscopy, high-end diagnostics, and critical care infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-hospital-steel/40 border border-neutral-50/50">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-heading font-bold text-hospital-headingGrey mb-2">Collaborative Culture</h3>
              <p className="text-hospital-darkGrey text-sm leading-relaxed">
                We foster an environment of continuous learning where cross-functional clinical alignment ensures optimal patient recovery and individual medical growth.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-hospital-steel/40 border border-neutral-50/50">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="text-lg font-heading font-bold text-hospital-headingGrey mb-2">Professional Integrity</h3>
              <p className="text-hospital-darkGrey text-sm leading-relaxed">
                We perform our healthcare services with the utmost good faith, maintaining strong ethical standards, professional discipline, and supreme dedication to patient privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS SECTION */}
      <section className="py-20 bg-hospital-steel/50" id="open-positions">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-hospital-headingGrey">
              Current Vacancies
            </h2>
            <p className="text-hospital-darkGrey text-sm mt-2">
              Explore our active vacancies. If your profile doesn't match a live listing, feel free to submit a general application using the portal below.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-white border border-neutral-200/60 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-hospital-teal px-2.5 py-1 bg-hospital-steel rounded-md inline-block mb-2">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-heading font-black text-hospital-headingGrey tracking-tight">
                      {job.title}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs font-bold text-neutral-500 block">📍 {job.location}, Kenya</span>
                    <span className="text-xs font-semibold text-hospital-blue bg-hospital-blue/5 px-2 py-0.5 rounded-full inline-block mt-1">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">Key Requirements:</h4>
                  <ul className="text-sm text-hospital-darkGrey space-y-1.5 pl-4 list-disc">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-50 flex justify-end">
                  <a 
                    href="#apply-form" 
                    onClick={() => setFormData(prev => ({ ...prev, position: job.title }))}
                    className="inline-flex items-center gap-1.5 bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-xs"
                  >
                    Apply For Position ➔
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PORTAL */}
      <section className="py-20 bg-white" id="apply-form">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-hospital-headingGrey">
              Submit Your Application
            </h2>
            <p className="text-hospital-darkGrey text-sm mt-3">
              Fill out the digital application framework below. Our human resources panel evaluates resumes continuously.
            </p>
          </div>

          <form onSubmit={handleApply} className="border border-neutral-200/60 rounded-3xl p-8 md:p-10 bg-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Full Name</label>
                <input 
                  type="text" required 
                  disabled={isSubmitting}
                  value={formData.fullName} 
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all disabled:opacity-50" 
                  placeholder="Jane Mwangi" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Email Address</label>
                <input 
                  type="email" required 
                  disabled={isSubmitting}
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all disabled:opacity-50" 
                  placeholder="jane.mwangi@example.com" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Phone Number</label>
                <input 
                  type="tel" required 
                  disabled={isSubmitting}
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 outline-none transition-all disabled:opacity-50" 
                  placeholder="0712 345 678" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Target Position</label>
                <input 
                  type="text" 
                  disabled={isSubmitting}
                  value={formData.position} 
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-2xl px-5 py-3.5 text-neutral-800 outline-none transition-all disabled:opacity-50" 
                  placeholder="e.g., Critical Care Nurse (or General Application)" 
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-xs font-bold tracking-wider mb-2 text-hospital-darkGrey uppercase">Brief Professional Summary / Cover Notes</label>
              <textarea 
                rows={5} required 
                disabled={isSubmitting}
                value={formData.coverLetter} 
                onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-hospital-teal focus:ring-2 focus:ring-hospital-teal/20 rounded-3xl px-5 py-3.5 text-neutral-800 placeholder:text-neutral-400 resize-none outline-none transition-all disabled:opacity-50" 
                placeholder="Briefly state why you'd love to join the PEJMED Ultracare medical panel..." 
              />
            </div>

            <div className="mt-6 p-6 border-2 border-dashed border-neutral-200 rounded-3xl bg-neutral-50 text-center">
              <label className="cursor-pointer block">
                <span className="text-2xl block mb-2">📁</span>
                <span className="text-sm font-bold text-hospital-teal block hover:underline">
                  {resume ? resume.name : "Click to Upload Curriculum Vitae (CV) / Resume"}
                </span>
                <span className="text-xs text-neutral-400 block mt-1">PDF or Word format accepted (Max 5MB)</span>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  required={!resume}
                  disabled={isSubmitting}
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full mt-8 bg-hospital-teal hover:bg-hospital-teal/95 text-white py-4 rounded-2xl text-base font-bold uppercase tracking-wider transition-all shadow-md shadow-hospital-teal/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Uploading Documents..." : "Submit Job Application"}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}