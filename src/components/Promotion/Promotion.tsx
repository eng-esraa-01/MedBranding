'use client';

import React, { useState } from 'react';
import './Promotion.css';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Instagram, Youtube, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

const platformIcons = [
  <Instagram size={30} key="ig" />,
  <Youtube size={30} key="yt" />,
  <PlayCircle size={30} key="tk" />,
];

const Promotion: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [videoOpen, setVideoOpen] = useState(false);

  const imageInitialX = isRTL ? 50 : -50;

  return (
    <section className="promotion" id="video-production">
      <div className={`promotion-container${isRTL ? ' promotion-container--rtl' : ''}`}>

        {/* Text block */}
        <div className="promotion-text">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.promotion.heading}{' '}
            <span className="highlight">{t.promotion.headingHighlight}</span>{' '}
            {t.promotion.headingEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t.promotion.description}
          </motion.p>

          <div className="platform-icons">
            {t.promotion.platforms.map((label, i) => (
              <div className="icon-box" key={i}>
                {platformIcons[i]}
                <span>{label}</span>
              </div>
            ))}
          </div>

          <motion.button
            className="btn-main"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.promotion.viewWork}
          </motion.button>
        </div>

        {/* Image block — click opens video modal */}
        <motion.div
          className="promotion-image"
          initial={{ opacity: 0, x: imageInitialX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="video-card" onClick={() => setVideoOpen(true)}>
            <Image
              src="/images/reel.webp"
              alt="Video Production"
              width={600}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="play-overlay">
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PlayCircle size={80} color="white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="video-modal-content"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-modal-close"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              <video
                src="/images/video.mov"
                controls
                autoPlay
                loop
                className="video-modal-player"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Promotion;
