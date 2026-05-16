'use client';

import React from 'react';
import './Clients.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

const logos = [
  '/images/Medbranding/clinets/21.png',
  '/images/Medbranding/clinets/27.png',
  '/images/Medbranding/clinets/28.png',
  '/images/Medbranding/clinets/44.png',
  '/images/Medbranding/clinets/45.png',
  '/images/Medbranding/clinets/46.png',
];

const translations = {
  en: {
    heading: 'Our',
    headingHighlight: 'Clients',
    subheading: 'We are proud to work with doctors, medical centers, and companies that strive to present themselves professionally and effectively.',
  },
  ar: {
    heading: 'عملاؤنا',
    headingHighlight: '',
    subheading: 'نفخر بالعمل مع أطباء ومراكز وشركات تسعى لتقديم نفسها بشكل احترافي ومؤثر.',
  },
};

const Clients: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="clients">
      {/* Background shapes */}
      <motion.div className="clients-shape clients-shape--ring"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div className="clients-shape clients-shape--dots"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="clients-shape clients-shape--blob"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="clients-container">
        {/* Header */}
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            {t.heading}{t.headingHighlight && <> <span className="highlight">{t.headingHighlight}</span></>}
          </h2>
          <p>{t.subheading}</p>
        </motion.div>

        {/* Logos grid */}
        <div className="clients-grid">
          {logos.map((src, i) => (
            <motion.div
              key={i}
              className="clients-logo-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(4,69,88,0.12)' }}
            >
              <div className="clients-logo-inner">
                <Image
                  src={src}
                  alt={`Client ${i + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="200px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
