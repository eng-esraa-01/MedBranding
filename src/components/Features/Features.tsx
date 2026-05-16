'use client';

import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';
import { Eye, TrendingUp, FileVideo } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const pillarIcons = [Eye, TrendingUp, FileVideo];

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="features" id="graphic-design">

      {/* Animated background shapes */}
      <motion.div
        className="feat-shape feat-shape--circle-lg"
        animate={{ y: [0, -24, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="feat-shape feat-shape--square"
        animate={{ rotate: [12, 40, 12], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="feat-shape feat-shape--circle-sm"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="feat-shape feat-shape--ring"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="feat-shape feat-shape--dots"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="feat-shape feat-shape--blob"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="features-container">
        <div className="features-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.features.heading}{' '}
            <span className="highlight">{t.features.headingHighlight}</span>
            {t.features.headingEnd}
          </motion.h2>

          <motion.p
            className="features-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t.features.subheading}
          </motion.p>

          <motion.ul
            className="features-pillars"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.features.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <li key={i}>
                  <span className="pillar-icon"><Icon size={18} /></span>
                  <span>{pillar}</span>
                </li>
              );
            })}
          </motion.ul>

          <motion.p
            className="features-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t.features.body}
          </motion.p>

          <motion.p
            className="features-closing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t.features.closing}
          </motion.p>
        </div>

        <div className="features-visual">
          {t.features.stats.map((stat, i) => (
            <div
              key={i}
              className={`feature-box ${
                i === 0 ? 'primary-box' : i === 1 ? 'secondary-box' : 'accent-box'
              }`}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
