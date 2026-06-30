import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img 
              src="/logo.png" 
              alt="PEJMED Ultracare Specialist Hospital Limited" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-heading font-semibold text-hospital-darkGrey">
            <Link to="/" className="hover:text-hospital-teal transition-colors">Home</Link>
            <Link to="/about" className="hover:text-hospital-teal transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-hospital-teal transition-colors">Services</Link>
            <Link to="/careers" className="hover:text-hospital-teal transition-colors">Careers</Link>
          </div>

          {/* Right Side - Emergency + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:0702761696" className="flex flex-col items-end group">
              <span className="text-[10px] font-heading font-black uppercase tracking-widest text-red-600">Emergency</span>
              <span className="text-base font-heading font-bold text-hospital-headingGrey group-hover:text-hospital-teal transition-colors">
                0702 761 696
              </span>
            </a>

            {/* Navigates cleanly to the Contact page */}
            <Link 
              to="/contact" 
              className="bg-hospital-teal hover:bg-hospital-teal/95 text-white px-6 py-3 rounded-2xl text-sm font-heading font-bold shadow-sm transition-transform active:scale-98"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-hospital-headingGrey p-2"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-6 bg-white">
            <div className="flex flex-col gap-4 text-center text-base font-heading font-bold text-hospital-darkGrey">
              <Link to="/" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/careers" className="hover:text-hospital-teal py-2" onClick={() => setIsMenuOpen(false)}>Careers</Link>
              
              {/* Mobile menu action goes directly to Contact page */}
              <Link 
                to="/contact" 
                className="bg-hospital-teal text-white py-4 rounded-2xl mt-4 mx-4 shadow-md text-sm uppercase tracking-wider text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}