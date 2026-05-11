import React from 'react';
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
