import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'Emily Thompson',
    service: 'Porcelain Veneers',
    text: 'The team at Miracle Dental completely transformed my smile. The attention to detail and level of care is unmatched. I finally have the confidence I always dreamed of.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    service: 'Invisalign & Whitening',
    text: 'From the moment you walk in, it feels more like a luxury spa than a dental clinic. Dr. Jenkins is an absolute artist. Smooth process, stunning results.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Williams',
    service: 'Full Mouth Restoration',
    text: 'I had severe dental anxiety before coming here. Their compassionate approach and state-of-the-art pain management completely changed my perspective.',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="reviews-header"
        >
          <h2 className="section-title">
            Patient <span>Stories</span>
          </h2>
          <p className="reviews-subtitle">Don't just take our word for it. Discover the Miracle Dental experience through our patients.</p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="review-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                ))}
              </div>
              
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-author">
                <h4>{review.name}</h4>
                <span>{review.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
