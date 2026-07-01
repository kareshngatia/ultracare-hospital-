import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import Insurance from './pages/Insurance';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-hospital-steel text-neutral-900 font-sans antialiased flex flex-col">
        {/* Global Navigation Layout */}
        <Navbar />
        
        {/* Router Viewport Injection */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insurance" element={<Insurance/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/careers" element={<Careers/>}/>
          </Routes>
        </main>
        
        {/* Global Footer Layout */}
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}