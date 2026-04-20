'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Web Design', href: '#web-design' },
    { title: 'Graphic Branding', href: '#graphic-design' },
    { title: 'Videos', href: '#video-production' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Image src="/images/logoblue.png" alt="MedBranding Logo" width={220} height={50} style={{ objectFit: 'contain' }} />
        </div>

        <ul className="nav-menu">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button className="btn-primary" onClick={() => window.open('https://wa.me/201555855857', '_blank')}>Get Started</button>
        </div>

        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul>
              {navLinks.map((link, index) => (
                <li key={index} onClick={() => setIsMobileMenuOpen(false)}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
              <li>
                <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }} onClick={() => window.open('https://wa.me/201555855857', '_blank')}>Get Started</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
