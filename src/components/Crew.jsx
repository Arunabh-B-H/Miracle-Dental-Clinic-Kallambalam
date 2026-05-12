import React from 'react';
import { motion } from 'framer-motion';
import crewImg from '../assets/Crew.png';
import './Crew.css';

const Crew = () => {
  return (
    <section id="crew" className="section crew-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Our Exceptional <span>Team</span>
          </h2>
          <p className="crew-intro">
            Behind every perfect smile is a team of dedicated professionals. 
            From our expert hygienists to our patient care coordinators, 
            we are committed to your comfort and well-being.
          </p>
        </motion.div>

        <motion.div 
          className="crew-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={crewImg} alt="The dedicated dental team at Miracle Dental & Cosmetic Clinic" className="crew-image" loading="lazy" width="1200" height="600" />
          <div className="crew-overlay">
            <div className="crew-overlay-content">
              <h3>United by Excellence</h3>
              <p>Continuous training and a passion for patient care.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Crew;
