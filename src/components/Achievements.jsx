import React from 'react';
import { motion } from 'framer-motion';
import achievement1 from '../assets/achievement_1.png';
import achievement2 from '../assets/achievement_2.png';
import achievement3 from '../assets/treatment_facility.jpeg';
import achievementNew from '../assets/achievement_new.jpeg';
import './Achievements.css';

const achievementsList = [
  {
    id: 1,
    title: 'Excellence in Dentistry',
    description: 'Recognized for our unwavering commitment to clinical excellence and compassionate patient care.',
    image: achievementNew,
  },
  {
    id: 2,
    title: '10,000+ Happy Smiles',
    description: 'We take pride in having transformed over 10,000 smiles, bringing confidence and joy to our patients.',
    image: achievement2,
  },
  {
    id: 3,
    title: 'Advanced Technology',
    description: 'Equipped with state-of-the-art dental technology to ensure precise, painless, and effective treatments.',
    image: achievement3,
  },

];

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Our <span>Achievements</span>
          </h2>
        </motion.div>

        <div className="achievements-grid">
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="achievement-image-container">
                <img src={achievement.image} alt={achievement.title} className="achievement-image" loading="lazy" width="400" height="240" />
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
