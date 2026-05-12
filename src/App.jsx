import React from 'react';
import useSEO from './hooks/useSEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Achievements from './components/Achievements';
import Crew from './components/Crew';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import './App.css';

function App() {
  useSEO(
    'Miracle Dental & Cosmetic Clinic | Kallambalam, Kerala',
    'Miracle Dental & Cosmetic Clinic in Kallambalam, Kerala — 11+ years of trusted dental care. Cosmetic dentistry, implants, smile makeovers & painless root canals. Book your appointment today.'
  );
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Achievements />
        <Services />
        <Crew />
        <WhyChooseUs />
        <Reviews />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
