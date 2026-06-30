import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/80 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        
        {/* Brand & About */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6 shrink-0">
            <img 
              src="/logo.png" 
              alt="PEJMED Ultracare Specialist Hospital Limited" 
              className="h-12 w-auto brightness-0 invert" 
            />
          </div>
          
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            PEJMED Ultracare Specialist Hospital Limited is a privately owned Level 4 healthcare facility established in 2023, dedicated to delivering specialized, compassionate, and patient-centered medical care.
          </p>

          <div className="mt-8 font-heading text-xs font-semibold tracking-wider text-neutral-500 uppercase">
            📍 Nyahururu, Laikipia County, Kenya
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="md:col-span-2">
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-6">Explore</h4>
          <ul className="space-y-3.5 text-sm font-medium">
            <li><Link to="/" className="text-neutral-400 hover:text-hospital-teal transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-neutral-400 hover:text-hospital-teal transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="text-neutral-400 hover:text-hospital-teal transition-colors">Medical Services</Link></li>
            <li><Link to="/insurance" className="text-neutral-400 hover:text-hospital-teal transition-colors">Insurance Covers</Link></li>
            <li><Link to="/careers" className="text-neutral-400 hover:text-hospital-teal transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="text-neutral-400 hover:text-hospital-teal transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Specialist Clinics Column */}
        <div className="md:col-span-3">
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-6">Specialist Clinics</h4>
          <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
            <li>• Surgical & Orthopedics</li>
            <li>• OB/GYN & Maternity</li>
            <li>• Pediatrics & Neonatal (NBU)</li>
            <li>• ENT & Internal Medicine</li>
            <li>• Advanced Video Endoscopy</li>
            <li>• 24/7 Laboratory & Digital X-Ray</li>
          </ul>
        </div>

        {/* Contact & Emergency */}
        <div className="md:col-span-3">
          <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-6">Get In Touch</h4>
          
          <div className="space-y-6">
            <div>
              <p className="font-heading text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">EMERGENCY LINE 24/7</p>
              <a 
                href="tel:0702761696" 
                className="text-2xl font-heading font-black text-white hover:text-hospital-teal transition-colors tracking-tight"
              >
                0702 761 696
              </a>
            </div>

            <div>
              <h5 className="text-white/90 font-heading font-bold text-xs uppercase tracking-wider mb-2">Our Standards</h5>
              <ul className="text-xs space-y-1.5 text-neutral-400 font-medium">
                <li>✔ Registered Level 4 Facility</li>
                <li>✔ Multidisciplinary Specialists</li>
                <li>✔ Policy of Utmost Good Faith</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-neutral-600 font-medium">
        © {new Date().getFullYear()} PEJMED Ultracare Specialist Hospital Limited. All Rights Reserved.
      </div>
    </footer>
  );
}