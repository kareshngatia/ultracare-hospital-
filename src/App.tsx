import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-hospital-lightBg text-hospital-charcoal font-sans antialiased">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}