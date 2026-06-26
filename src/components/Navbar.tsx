import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Ultracare Specialist Hospital" 
              className="h-10 w-auto" 
            />
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-hospital-teal transition-colors">Home</a>
            <a href="#about" className="hover:text-hospital-teal transition-colors">About</a>
            <a href="#services" className="hover:text-hospital-teal transition-colors">Services</a>
            <a href="#insurance" className="hover:text-hospital-teal transition-colors">Insurance</a>
          </div>

          {/* Right Side - Emergency + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:0702761696" className="flex flex-col items-end group">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Emergency</span>
              <span className="text-lg font-semibold text-hospital-headingGrey group-hover:text-hospital-teal transition-colors">
                0702 761 696
              </span>
            </a>

            <a 
              href="#appointment" 
              className="btn-primary px-6 py-3 rounded-2xl text-sm font-semibold shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl text-hospital-headingGrey p-2"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-8 bg-white">
            <div className="flex flex-col gap-6 text-center text-lg font-medium">
              <a href="#home" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#insurance" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>Insurance</a>
              
              <a 
                href="#appointment" 
                className="btn-primary py-4 rounded-2xl mt-4 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}