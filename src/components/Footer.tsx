import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-hospital-headingGrey text-white/80 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        
        {/* Brand & About */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/logo.png" 
              alt="Ultracare Specialist Hospital" 
              className="h-12 w-auto brightness-0 invert" 
            />
           
          </div>
          
          <p className="text-white/70 leading-relaxed max-w-md">
            Dedicated to providing comprehensive specialized healthcare services with 
            compassion, excellence, and patient-centered care since May 2024.
          </p>

          <div className="mt-8 text-sm text-white/60">
            Nyahururu, Laikipia County, Kenya
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#insurance" className="hover:text-white transition-colors">Insurance</a></li>
            <li><a href="#appointment" className="hover:text-white transition-colors">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact & Values */}
        <div className="md:col-span-4">
          <h4 className="text-white font-semibold text-lg mb-6">Get In Touch</h4>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">EMERGENCY LINE</p>
              <a 
                href="tel:0702761696" 
                className="text-3xl font-bold text-white hover:text-hospital-teal transition-colors"
              >
                0702 761 696
              </a>
            </div>

            <div>
              <h5 className="text-white/90 font-medium mb-3">Core Values</h5>
              <ul className="text-sm space-y-1.5 text-white/70">
                <li>• Patient-Centered Care</li>
                <li>• Clinical Excellence</li>
                <li>• Compassion & Integrity</li>
                <li>• Innovation in Healthcare</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ultracare Specialist Hospital. All Rights Reserved.
      </div>
    </footer>
  );
}