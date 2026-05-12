import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Reviews.css';

/* Google "G" logo as inline SVG */
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

const reviews = [
  {
    id: 1,
    name: 'Riswan',
    initials: 'R',
    color: '#4285F4',
    service: 'Teeth Gap Treatment',
    text: 'Recently I had visited the clinic. Honestly, I went in just hoping the gap between my teeth would look a little better. Before the treatment, I was always aware of it whenever I smiled or spoke. The result exceeded my expectations — I feel so much more confident now.',
    rating: 5,
    timeAgo: '2 months ago',
  },
  {
    id: 2,
    name: 'Maidhily M. V.',
    initials: 'M',
    color: '#EA4335',
    service: 'General Dentistry',
    text: 'I had an excellent dental experience of my life at this clinic. Dr. Dhanush and Bismi listened patiently, explained everything clearly and made me feel comfortable throughout the visit. The doctors and staff are very friendly. I highly recommend Miracle Dental Clinic. Thank you all for making my dental experience positive and stress free.',
    rating: 5,
    timeAgo: '2 months ago',
  },
  {
    id: 3,
    name: 'Sreenath Sreekumar',
    initials: 'S',
    color: '#34A853',
    service: 'Dental Treatment',
    text: 'I visited Miracle Dental Clinic today. Very welcoming and friendly staff. I got a great experience and good treatment. I would suggest you can visit with confidence. Special thanks to Dr. Bismi.',
    rating: 5,
    timeAgo: '2 months ago',
  },
  {
    id: 4,
    name: 'Vishnu Vr',
    initials: 'V',
    color: '#FBBC05',
    service: 'Cosmetic Dentistry',
    text: 'I had a good experience at Miracle Dental Clinic. Dr. Dhanush Shaji and Dr. Bismi were friendly and professional. Staff also friendly and very clean clinic. The treatment was smooth and I am satisfied.',
    rating: 5,
    timeAgo: '2 months ago',
  },
  {
    id: 5,
    name: 'Seebu R S',
    initials: 'S',
    color: '#4285F4',
    service: 'Dental Cleaning',
    text: 'I had an excellent experience with my dental cleaning. The clinic was clean, staff were welcoming, and I felt comfortable. My teeth feel great — highly recommend.',
    rating: 5,
    timeAgo: '3 months ago',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="reviews-header"
        >
          <h2 className="section-title">
            Patient <span>Stories</span>
          </h2>
          <p className="reviews-subtitle">
            Real experiences from real patients — straight from Google Reviews.
          </p>

          {/* Google Reviews Badge */}
          <motion.a
            href="https://www.google.com/search?sca_esv=dbcb67f4d240fbb9&rlz=1C1ONGR_enIN1069IN1069&sxsrf=ANbL-n4MpehCdxPIhR96Iz_gy-kT81bM7g:1778555176723&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObEZiLmFL-f6CbqH-0OUCCYhVQPYrBQouCmT31JGOcBxb3IdhN_RT6AJbcFyI8_gRK-DunBz0KqEDmbHfFTaxCJfCjWjN9JmIzj4rB-dxZuqaMm9Lg%3D%3D&q=Miracle+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwjpmpas4rKUAxWK3jgGHcCAJgEQ0bkNegQILhAF&biw=1600&bih=886&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="google-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            aria-label="View all 65 reviews on Google"
          >
            <GoogleIcon />
            <div className="google-badge-info">
              <div className="google-badge-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" aria-hidden="true" />
                ))}
              </div>
              <span className="google-badge-text">
                <strong>5.0</strong> · 65 Google Reviews
              </span>
            </div>
            <span className="google-badge-cta">View all →</span>
          </motion.a>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              className="review-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Card Header: Avatar + Name + Google icon */}
              <div className="review-card-header">
                <div className="reviewer-avatar" style={{ backgroundColor: review.color }}>
                  {review.initials}
                </div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span className="review-time">{review.timeAgo}</span>
                </div>
                <GoogleIcon />
              </div>

              {/* Stars */}
              <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" aria-hidden="true" />
                ))}
              </div>

              {/* Review text */}
              <p className="review-text">"{review.text}"</p>

              {/* Service tag */}
              <div className="review-author">
                <span>{review.service}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
