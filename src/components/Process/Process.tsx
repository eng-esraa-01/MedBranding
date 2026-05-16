'use client';

import React from 'react';
import './Process.css';
import { motion } from 'framer-motion';
import { Search, Palette, Rocket, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { processTranslations } from '@/lib/translations.process';

const icons = [Search, Palette, Rocket, TrendingUp];

const Process: React.FC = () => {
  const { lang } = useLanguage();
  const t = processTranslations[lang];

  return (
    <section className="process">
      {/* Background shapes */}
      <motion.div className="process-shape process-shape--ring"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div className="process-shape process-shape--circle"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="process-shape process-shape--dots"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="process-shape process-shape--square"
        animate={{ rotate: [10, 35, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="process-container">
        {/* Header */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            {t.heading}{' '}
            <span className="highlight">{t.headingHighlight}</span>
          </h2>
          <p>{t.subheading}</p>
        </motion.div>

        {/* Steps */}
        <div className="process-steps">
          {t.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Connector line */}
                {i < t.steps.length - 1 && (
                  <div className="process-connector" />
                )}

                {/* Number badge */}
                <div className="process-step-number">{step.number}</div>

                {/* Icon circle */}
                <motion.div
                  className="process-step-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={30} />
                </motion.div>

                {/* Content */}
                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
