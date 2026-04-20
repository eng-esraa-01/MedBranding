import React from 'react';
import Image from 'next/image';
import './Footer.css';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-logo">
              <Image src="/images/logowhite.png" alt="MedBranding Logo" width={220} height={50} style={{ objectFit: 'contain' }} />
            </div>
            <p>
              We are your partners in success, helping you build your identity as a
              distinguished and trusted digital doctor.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#web-design">Web Design</a></li>
              <li><a href="#graphic-design">Graphic Branding</a></li>
              <li><a href="#video-production">Video Production</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <Mail size={18} />
                <span>info@medbranding.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+20 123 456 7890</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>One of the services offered by{' '}
            <a href="https://dwam-tech.com/" target="_blank" rel="noopener noreferrer" className="dwam-link">
              <Image src="/images/02.webp" alt="Dwam Company" width={100} height={50} style={{ objectFit: 'contain', verticalAlign: 'middle' }} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
