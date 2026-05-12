import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, HeartPulse, ChevronLeft, ChevronRight } from 'lucide-react';
import ba1 from '../assets/Before and After1.png';
import ba2 from '../assets/Before and After2.png';
import ba3 from '../assets/Before and After3.png';
import ba4 from '../assets/Before and After4.png';
import cosmeticImg from '../assets/cosmetic_dentistry.png';
import restorativeImg from '../assets/restorative_care.png';
import preventativeImg from '../assets/preventative_health.png';
import dentalImplantsImg from '../assets/dental_implants.png';
import digitalSmileImg from '../assets/digital_smile.png';
import teethWhiteningImg from '../assets/teeth_whitening.png';
import rootCanalImg from '../assets/root_canal.png';
import pediatricImg from '../assets/pediatric_dentistry.png';
import laserImg from '../assets/laser_dentistry.png';
import './Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Cosmetic Dentistry & Smile Makeovers',
    description: 'Transform your smile with customized aesthetic treatments for a perfect, natural look.',
    icon: <Sparkles size={24} />,
    image: cosmeticImg
  },
  {
    id: 2,
    title: 'Dental Implants & Full Mouth Rehabilitation',
    description: 'Permanent, natural-looking tooth replacements to restore function and confidence.',
    icon: <Shield size={24} />,
    image: dentalImplantsImg
  },
  {
    id: 3,
    title: 'Digital Smile Designing',
    description: 'State-of-the-art digital planning to visualize and design your ideal smile.',
    icon: <Sparkles size={24} />,
    image: digitalSmileImg
  },
  {
    id: 4,
    title: 'Teeth Whitening & Veneers',
    description: 'Achieve a brighter, flawless smile with professional whitening and custom veneers.',
    icon: <Sparkles size={24} />,
    image: teethWhiteningImg
  },
  {
    id: 5,
    title: 'Painless Root Canal Treatment',
    description: 'Comfortable, efficient endodontic therapy to save and restore damaged teeth.',
    icon: <HeartPulse size={24} />,
    image: rootCanalImg
  },
  {
    id: 6,
    title: 'Crowns, Bridges & Ceramic Restorations',
    description: 'Durable and aesthetic ceramic restorations for damaged or missing teeth.',
    icon: <Shield size={24} />,
    image: restorativeImg
  },
  {
    id: 7,
    title: 'Gum Care & Preventive Dentistry',
    description: 'Comprehensive care to maintain healthy gums and prevent future dental issues.',
    icon: <HeartPulse size={24} />,
    image: preventativeImg
  },
  {
    id: 8,
    title: 'Pediatric & Family Dentistry',
    description: 'Gentle, specialized care for children and comprehensive treatments for the whole family.',
    icon: <HeartPulse size={24} />,
    image: pediatricImg
  },
  {
    id: 9,
    title: 'Laser Dentistry',
    description: 'Advanced, minimally invasive laser treatments for precise and painless procedures.',
    icon: <Sparkles size={24} />,
    image: laserImg
  }
];

const galleryImages = [ba1, ba2, ba3, ba4];

const Services = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Premium <span>Treatments</span>
          </h2>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before and After Gallery */}
        <motion.div 
          className="gallery-container mt-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="gallery-title">Real Patient Transformations</h3>
          
          <div className="gallery-slider">
            <button className="slider-btn prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="slider-image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={galleryImages[currentImage]}
                  alt={`Before and After ${currentImage + 1}`}
                  className="gallery-image"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="gallery-labels">
                <span className="label before">Before</span>
                <span className="label after">After</span>
              </div>
            </div>
            
            <button className="slider-btn next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="gallery-dots">
            {galleryImages.map((_, idx) => (
              <button 
                key={idx}
                className={`dot ${idx === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

