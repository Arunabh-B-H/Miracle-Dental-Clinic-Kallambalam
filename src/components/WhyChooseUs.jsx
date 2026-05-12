import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import treatmentFacilityImg from '../assets/treatment_facility.jpeg';
import './WhyChooseUs.css';

const reasons = [
  "More than 11 years of trusted clinical experience",
  "Advanced cosmetic and implant dental solutions",
  "International sterilization and hygiene protocols",
  "Modern digital dental technology",
  "Personalized smile makeover treatments",
  "Affordable dental care for international patients",
  "Friendly and compassionate patient care",
  "Convenient dental tourism support in Kerala"
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us-section">
      <div className="container">
        <div className="wcu-grid">
          <motion.div 
            className="wcu-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="wcu-image-container">
              <img 
                src={treatmentFacilityImg} 
                alt="Miracle Dental Clinic modern treatment facility in Kallambalam, Kerala" 
                className="wcu-image"
                loading="lazy"
                width="600"
                height="450"
              />
              <div className="wcu-image-overlay"></div>
            </div>
          </motion.div>

          <motion.div 
            className="wcu-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-left">
              Why Patients Choose <span>Miracle Dental & Cosmetic Clinic</span>
            </h2>
            <p className="wcu-subtitle">
              We combine advanced technology with a compassionate approach to provide you with the best possible dental care experience.
            </p>

            <ul className="wcu-list">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  className="wcu-list-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="wcu-check-icon" aria-hidden="true" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
