import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Navigation } from 'lucide-react';
import './ContactLocation.css';

const ContactLocation = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* Booking Section */}
          <motion.div 
            className="booking-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Book Your <span>Appointment</span>
            </h2>
            <p className="contact-subtitle">
              Ready for your transformation? Choose your preferred way to reach us. Our care coordinators are ready to assist you.
            </p>
            
            <div className="contact-cards">
              <a href="tel:+1234567890" className="contact-card call glass">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="card-content">
                  <h3>Call Us Directly</h3>
                  <p>Immediate assistance during office hours.</p>
                </div>
              </a>
              
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp glass">
                <div className="icon-wrapper">
                  <MessageCircle size={24} />
                </div>
                <div className="card-content">
                  <h3>WhatsApp Us</h3>
                  <p>Quick chat for queries and booking.</p>
                </div>
              </a>
            </div>
            
            <div className="office-hours">
              <h4>Office Hours</h4>
              <ul>
                <li><span>Mon - Fri:</span> 9:00 AM - 6:00 PM</li>
                <li><span>Saturday:</span> 10:00 AM - 3:00 PM</li>
                <li><span>Sunday:</span> Closed</li>
              </ul>
            </div>
          </motion.div>
          
          {/* Location / Map Section */}
          <motion.div 
            className="location-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="map-wrapper glass">
              <div className="map-header">
                <MapPin size={24} className="pin-icon" />
                <h3>Visit Our Clinic</h3>
              </div>
              
              <div className="map-visual">
                <iframe 
                  src="https://maps.google.com/maps?q=Miracle%20Dental%20Clinic,%20Police%20Station,%20opposite%20Kallambalam,%20Trivandrum,%20Karavaram,%20Kerala%20695605&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              
              <div className="map-footer">
                <p style={{ fontSize: '0.9rem' }}>Miracle Dental Clinic, Police Station, opposite Kallambalam,<br/>Trivandrum, Karavaram, Kerala 695605</p>
                <a 
                  href="https://maps.google.com/?q=Miracle+Dental+Clinic,+Police+Station,+opposite+Kallambalam,+Trivandrum,+Karavaram,+Kerala+695605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block map-btn"
                >
                  <Navigation size={18} style={{ marginRight: '8px' }} />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
