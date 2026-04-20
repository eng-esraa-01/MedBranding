'use client';

import React from 'react';
import './ContactCTA.css';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <h2>
            Ready to start your <span className="highlight">Digital Journey</span>?
          </h2>
          <p>
            Contact us today to start designing your medical website or professional brand.
          </p>
          <div className="cta-btns">
            <a href="https://wa.me/201555855857" target="_blank" rel="noopener noreferrer"><button className="btn-light">Book Free Consultation</button></a>
            <a href="https://wa.me/201555855857" target="_blank" rel="noopener noreferrer"><button className="btn-ghost">Connect via WhatsApp</button></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
