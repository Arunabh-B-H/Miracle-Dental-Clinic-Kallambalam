import React from 'react';
import { motion } from 'framer-motion';
import ownerImg from '../assets/Owner.png';
import './Founder.css';

const Founder = () => {
  return (
    <section id="founder" className="section founder-section">
      <div className="container">
        <div className="founder-grid">
          <motion.div
            className="founder-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-decoration"></div>
            <img src={ownerImg} alt="Founder of Miracle Dental" className="founder-image" />
          </motion.div>

          <motion.div
            className="founder-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Meet Our <span>Founder</span>
            </h2>
            <h3 className="founder-name">Dr. Dhanush Shaji</h3>
            <p className="founder-title">Lead Cosmetic Dentist & Founder</p>

            <div className="founder-bio">
              <p>
                Miracle Dental & Cosmetic Clinic is led by Dr. Dhanush Shaji, a highly experienced dental surgeon with more than 11 years of clinical expertise in advanced dental care, Dental Implantology & cosmetic dentistry, . Known for his patient friendly approach and attention to detail, Dr. Dhanush Shaji is committed to creating healthy, confident, and natural looking smiles using the latest dental technologies and modern treatment techniques.
              </p>
              <p>
                Dr. Dhanush Shaji extensive experience in smile designing, dental veneers, teeth whitening, full mouth rehabilitation,  root canal treatments, and advanced dental implant procedures. He has successfully treated patients from across India as well as international visitors seeking high quality and affordable dental care in Kerala.

              </p>
              <p>
                "A smile is your greatest personal asset. Our goal is not just to treat teeth,
                but to restore confidence, health, and well-being in an environment where you
                feel truly cared for."
              </p>
            </div>

            <div className="founder-credentials">
              <div className="credential">
                <span className="number">11+</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="credential">
                <span className="number">8k+</span>
                <span className="label">Happy Patients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
