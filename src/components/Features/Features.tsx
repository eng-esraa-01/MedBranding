'use client';

import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="features" id="graphic-design">
      <div className="features-container">
        <div className="features-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why choose <span className="highlight">MedBranding</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We don&apos;t just design shapes, we design experiences that enhance your
            medical standing.
          </motion.p>

          <ul className="features-list">
            {[
              'Deep understanding of medical sector needs',
              'Modern designs that align with your personal identity',
              'Continuous technical support and regular updates',
              'Marketing strategies to increase patient numbers',
            ].map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle size={24} color="#88C1AB" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="features-visual">
          <div className="feature-box primary-box">
            <h3>+50</h3>
            <p>Doctors Trust Us</p>
          </div>
          <div className="feature-box secondary-box">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="feature-box accent-box">
            <h3>+200</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
