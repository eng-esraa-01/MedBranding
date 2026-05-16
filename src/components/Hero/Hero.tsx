'use client';

import React, { useState, useEffect } from 'react';
import './Hero.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

const images = [
  '/images/doctor.webp',
  '/images/doctor2.webp',
  '/images/doctor3.webp',
  '/images/doctor4.webp',
  '/images/doctor5.webp',
  '/images/doctor7.webp',

];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-container${isRTL ? ' hero-container--rtl' : ''}`}>

        {/* Content always first in DOM; CSS order flips visually in RTL */}
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t.hero.title}{' '}
            <span className="highlight">{t.hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="btn-main"
              onClick={() =>
                document
                  .getElementById('web-design')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.hero.exploreServices}
            </button>
            <a
              href="https://wa.me/201555855857"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-outline">{t.hero.contactUs}</button>
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="image-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="slide-image"
              >
                <Image
                  src={images[current]}
                  alt="Doctor Branding"
                  width={800}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="blob-bg"></div>

            <div className="slide-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`slide-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="dot"
        />
      </div>
    </section>
  );
};

export default Hero;
