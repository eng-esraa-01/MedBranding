'use client';

import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { Palette, Video, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const serviceItems = [
    {
      id: 'web-design',
      icon: <Globe size={40} />,
      title: 'Medical Website Design',
      description:
        'We design an electronic website that matches your identity as a doctor, making it easy for patients to communicate with you and book appointments smoothly.',
      features: ['Mobile Responsive', 'Appointment Booking System', 'SEO Optimized'],
    },
    {
      id: 'graphic-design',
      icon: <Palette size={40} />,
      title: 'Visual Identity Development',
      description:
        "Designing logos and visual schemes that reflect your professionalism and excellence in the medical field, to enhance patients' trust in you.",
      features: ['Logo Design', 'Social Media Posts', 'Medical Printables'],
    },
    {
      id: 'video-production',
      icon: <Video size={40} />,
      title: 'Video and Reels Production',
      description:
        'Professional promotional videos and reels that highlight your services and build a bridge of effective communication with your audience on social platforms.',
      features: ['Professional Filming', 'Creative Editing', 'Marketing Scenarios'],
    },
  ];

  return (
    <section className="services" id="web-design">
      <div className="services-container">
        <div className="services-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Integrated <span className="highlight">Marketing Services</span> for Doctors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide innovative solutions aimed at transforming your medical practice
            into a powerful and trusted brand.
          </motion.p>
        </div>

        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <motion.div
              className="service-card"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="service-features">
                {item.features.map((f, i) => (
                  <li key={i}>
                    <Globe size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
