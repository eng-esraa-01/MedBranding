'use client';

import React from 'react';
import './AboutServices.css';
import { motion } from 'framer-motion';
import { Layers, Megaphone, Globe, Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { aboutTranslations } from '@/lib/translations.about';

const icons = [Layers, Megaphone, Globe, Star];

const AboutServices: React.FC = () => {
  const { lang } = useLanguage();
  const t = aboutTranslations[lang];

  return (
    <section className="about-services">
      {/* Background decorative shapes */}
      <div className="about-bg-shape about-bg-shape--square" />
      <div className="about-bg-shape about-bg-shape--circle" />
      <div className="about-bg-shape about-bg-shape--dots" />
      <div className="about-bg-shape about-bg-shape--ring" />
      <div className="about-bg-shape about-bg-shape--blob" />

      <div className="about-services-container">
        <motion.div
          className="about-services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>{t.heading}</h2>
          <p>{t.subheading}</p>
        </motion.div>
      </div>

      <div className="about-cards-wrapper">
        <div className="about-cards">
          {t.cards.map((card, i) => {
            const Icon = icons[i];
            const isAccent = i === 2;
            return (
              <motion.div
                key={i}
                className={`about-card ${isAccent ? 'about-card--accent' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="about-card-icon">
                  <Icon size={28} />
                </div>
                <div className="about-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
