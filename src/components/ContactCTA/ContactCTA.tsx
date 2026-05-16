'use client';

import React from 'react';
import './ContactCTA.css';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const ContactCTA: React.FC = () => {
  const { t } = useLanguage();

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
            {t.cta.heading}{' '}
            <span className="highlight">{t.cta.headingHighlight}</span>
            {' '}{t.cta.headingEnd}
          </h2>
          <p>{t.cta.subheading}</p>
          <div className="cta-btns">
            <a
              href="https://wa.me/201555855857"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-light">{t.cta.bookConsultation}</button>
            </a>
            <a
              href="https://wa.me/201555855857"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-ghost">{t.cta.connectWhatsApp}</button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
