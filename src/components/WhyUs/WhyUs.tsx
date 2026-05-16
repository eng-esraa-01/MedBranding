'use client';

import React from 'react';
import './WhyUs.css';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Palette,
  TrendingUp,
  FileVideo,
  Globe,
  Star,
  Layers,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { whyUsTranslations } from '@/lib/translations.whyus';

const icons = [Stethoscope, Palette, TrendingUp, FileVideo, Globe, Star, Layers];

const WhyUs: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const t = whyUsTranslations[lang];

  return (
    <section className="whyus">
      {/* Background shapes */}
      <div className="whyus-bg-shape whyus-bg-shape--tl" />
      <div className="whyus-bg-shape whyus-bg-shape--br" />
      <div className="whyus-bg-shape whyus-bg-shape--dots" />

      <div className="whyus-container">
        {/* Header */}
        <motion.div
          className="whyus-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            {t.heading}{' '}
            <span className="highlight">{t.headingHighlight}</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="whyus-grid">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="whyus-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="whyus-card-icon">
                  <Icon size={24} />
                </div>
                <div className="whyus-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          className="whyus-closing"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>{t.closing}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
