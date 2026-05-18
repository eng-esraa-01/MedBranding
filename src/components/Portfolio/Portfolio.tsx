'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { portfolioTranslations } from '@/lib/translations.portfolio';
import './Portfolio.css';

const allImages = [
  // social
  { src: '/images/Medbranding/social/1.jpg', category: 'social' },
  { src: '/images/Medbranding/social/2.jpg', category: 'social' },
  { src: '/images/Medbranding/social/3.jpg', category: 'social' },
  { src: '/images/Medbranding/social/4.jpg', category: 'social' },
  { src: '/images/Medbranding/social/5.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST2.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST3.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST4.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST10.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST11.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST17.jpg', category: 'social' },
  { src: '/images/Medbranding/social/POST27.jpg', category: 'social' },
  // doctors
  { src: '/images/Medbranding/doctors/POST12.jpg', category: 'doctors' },
  { src: '/images/Medbranding/doctors/POST16.jpg', category: 'doctors' },
  { src: '/images/Medbranding/doctors/POST18.jpg', category: 'doctors' },
  { src: '/images/Medbranding/doctors/POST23.jpg', category: 'doctors' },
  { src: '/images/Medbranding/doctors/POST29.jpg', category: 'doctors' },
  { src: '/images/Medbranding/doctors/POST34.jpg', category: 'doctors' },
  // medical products
  { src: '/images/Medbranding/Medical products/adv--6.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--7.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--8.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--9.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--10.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--14.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--15.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--16.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--17.jpg', category: 'medical_products' },
  { src: '/images/Medbranding/Medical products/adv--18.jpg', category: 'medical_products' },
  // personal cards
  { src: '/images/Medbranding/personal_cards/2.jpg', category: 'personal_cards' },
  { src: '/images/Medbranding/personal_cards/card-b.jpg', category: 'personal_cards' },
  { src: '/images/Medbranding/personal_cards/Dr. Ahmed Saber.jpg', category: 'personal_cards' },
  // clinets
  { src: '/images/Medbranding/clinets/21.png', category: 'clinets' },
  { src: '/images/Medbranding/clinets/27.png', category: 'clinets' },
  { src: '/images/Medbranding/clinets/28.png', category: 'clinets' },
  { src: '/images/Medbranding/clinets/44.png', category: 'clinets' },
  { src: '/images/Medbranding/clinets/45.png', category: 'clinets' },
  { src: '/images/Medbranding/clinets/46.png', category: 'clinets' },
];

const categories = ['social', 'doctors', 'medical_products', 'personal_cards'] as const;
type Category = (typeof categories)[number];

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = portfolioTranslations[lang];

  const [activeCategory, setActiveCategory] = useState<Category>('social');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredImages = allImages.filter((img) => img.category === activeCategory);

  const currentIndex = lightboxImg ? filteredImages.findIndex(img => img.src === lightboxImg) : -1;

  const goNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1)
      setLightboxImg(filteredImages[currentIndex + 1].src);
  }, [currentIndex, filteredImages]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0)
      setLightboxImg(filteredImages[currentIndex - 1].src);
  }, [currentIndex, filteredImages]);

  useEffect(() => {
    if (!lightboxImg) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxImg, goNext, goPrev]);

  return (
    <section className="portfolio" id="portfolio">
      {/* Animated background shapes */}
      <motion.div className="portfolio-bg-shape portfolio-bg-shape--circle-tl"
        animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="portfolio-bg-shape portfolio-bg-shape--circle-br"
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="portfolio-bg-shape portfolio-bg-shape--square"
        animate={{ rotate: [15, 40, 15], scale: [1, 1.05, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="portfolio-bg-shape portfolio-bg-shape--ring"
        animate={{ rotate: [0, 360] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="portfolio-bg-shape portfolio-bg-shape--dots"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="portfolio-bg-shape portfolio-bg-shape--blob"
        animate={{ scale: [1, 1.3, 1], y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="portfolio-container">
        {/* Header */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {t.heading} <span className="highlight">{t.headingHighlight}</span>
          </h2>
          <p>{t.subheading}</p>
        </motion.div>

        {/* Category tabs */}
        <div className="portfolio-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {t.categories[cat]}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className={`portfolio-grid ${activeCategory === 'doctors' || activeCategory === 'medical_products' || activeCategory === 'personal_cards' || activeCategory === 'clinets' ? 'portfolio-grid--3col' : ''} ${activeCategory === 'personal_cards' || activeCategory === 'clinets' ? 'portfolio-grid--contain' : ''}`}>
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.src}
                className="portfolio-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setLightboxImg(img.src)}
              >
                <div className="portfolio-item-inner">
                  <Image
                    src={img.src}
                    alt="Portfolio"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="portfolio-item-overlay">
                    <div className="portfolio-item-overlay-icon">
                      <ZoomIn size={22} color="white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="portfolio-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            {/* Prev button */}
            {currentIndex > 0 && (
              <button className="portfolio-lightbox-nav portfolio-lightbox-nav--prev"
                onClick={e => { e.stopPropagation(); goPrev(); }}>
                <ChevronLeft size={28} />
              </button>
            )}

            <motion.div
              className="portfolio-lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="portfolio-lightbox-close" onClick={() => setLightboxImg(null)}>
                <X size={24} />
              </button>
              <img src={lightboxImg} alt="Preview" className="portfolio-lightbox-img" />
              <div className="portfolio-lightbox-counter">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>

            {/* Next button */}
            {currentIndex < filteredImages.length - 1 && (
              <button className="portfolio-lightbox-nav portfolio-lightbox-nav--next"
                onClick={e => { e.stopPropagation(); goNext(); }}>
                <ChevronRight size={28} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
