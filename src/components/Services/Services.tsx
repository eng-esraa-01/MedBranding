'use client';

import React, { useState, useEffect } from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { Palette, Video, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const currencies = [
  { code: 'EGP', label: 'EGP', symbol: 'ج.م' },
  { code: 'SAR', label: 'SAR', symbol: '⃁' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'KWD', label: 'KWD', symbol: 'د.ك' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
];

const BASE_PRICES_EGP = [9999, 4999, 7999];
const serviceIcons = [<Globe size={36} />, <Palette size={36} />, <Video size={36} />];
const serviceBadgeKeys = ['mostPopular', 'none', 'bestValue'] as const;

export default function Services() {
  const [activeCurrency, setActiveCurrency] = useState(0);
  const [rates, setRates] = useState<Record<string, number>>({
    EGP: 1,
    SAR: 0.082,
    USD: 0.021,
    KWD: 0.0064,
    TRY: 0.68,
  });
  const { t } = useLanguage();

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/EGP')
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates) {
          setRates({
            EGP: 1,
            SAR: data.rates.SAR,
            USD: data.rates.USD,
            KWD: data.rates.KWD,
            TRY: data.rates.TRY,
          });
        }
      })
      .catch(() => {});
  }, []);

  const convert = (egp: number) => {
    const cur = currencies[activeCurrency];
    const converted = egp * (rates[cur.code] ?? 1);
    return converted < 1
      ? converted.toFixed(3)
      : converted < 10
      ? converted.toFixed(2)
      : Math.round(converted).toLocaleString();
  };

  const getBadgeLabel = (key: (typeof serviceBadgeKeys)[number]) => {
    if (key === 'mostPopular') return t.services.mostPopular;
    if (key === 'bestValue') return t.services.bestValue;
    return null;
  };

  return (
    <section className="services" id="web-design">
      <div className="services-container">
        <div className="services-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.services.heading}{' '}
            <span className="highlight">{t.services.headingHighlight}</span>{' '}
            {t.services.headingEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t.services.subheading}
          </motion.p>
        </div>

        {/* <motion.div
          className="services-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="services-intro-label">{t.services.introLabel}</span>
          <p className="services-intro-text">{t.services.introText}</p>
        </motion.div> */}

        <div className="services-grid">
          {t.services.items.map((item, index) => {
            const badgeLabel = getBadgeLabel(serviceBadgeKeys[index]);
            const isFeatured = serviceBadgeKeys[index] === 'mostPopular';

            return (
              <motion.div
                className={`service-card ${isFeatured ? 'card-featured' : ''}`}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {badgeLabel && <span className="card-badge">{badgeLabel}</span>}
                <div className="service-icon">{serviceIcons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="price-block">
                  <div className="price-left">
                    <span className="price-currency">
                      {currencies[activeCurrency].symbol}
                    </span>
                    <span className="price-value">{convert(BASE_PRICES_EGP[index])}</span>
                  </div>
                  <div className="currency-switcher">
                    {currencies.map((c, i) => (
                      <button
                        key={c.code}
                        className={`currency-btn ${i === activeCurrency ? 'active' : ''}`}
                        onClick={() => setActiveCurrency(i)}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <ul className="service-features">
                  {item.features.map((f, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/201555855857"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`service-btn ${isFeatured ? 'service-btn-featured' : ''}`}
                  >
                    {t.services.getStarted}
                  </button>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
