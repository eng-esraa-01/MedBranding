'use client';

import React from 'react';
import './Promotion.css';
import { motion } from 'framer-motion';
import { PlayCircle, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const Promotion: React.FC = () => {
  return (
    <section className="promotion" id="video-production">
      <div className="promotion-container">
        <motion.div
          className="promotion-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="video-card">
            <Image
              src="/images/reel.webp"
              alt="Video Production"
              width={600}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="play-overlay">
              <PlayCircle size={80} color="white" />
            </div>
          </div>
        </motion.div>

        <div className="promotion-text">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Creating <span className="highlight">Visual Content</span> that Captivates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            In the fast-paced era, video is king. We produce short videos (Reels) and
            promotional clips that showcase your scientific skills and human connection
            with patients.
          </motion.p>

          <div className="platform-icons">
            <div className="icon-box">
              <Instagram size={30} />
              <span>Instagram Reels</span>
            </div>
            <div className="icon-box">
              <Youtube size={30} />
              <span>YouTube Shorts</span>
            </div>
            <div className="icon-box">
              <PlayCircle size={30} />
              <span>TikTok Ads</span>
            </div>
          </div>

          <motion.button
            className="btn-main"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/201555855857', '_blank')}
          >
            View Our Work
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
