'use client';

import React from 'react';
import Image from 'next/image';
import './Footer.css';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  MessageCircle,
  Printer,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-logo">
              <Image
                src="/images/logowhite.png"
                alt="MedBranding Logo"
                width={220}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p>{t.footer.description}</p>
            <div className="social-links">
              <a href="https://www.instagram.com/DwamITA" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/DwamITA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/DwamITA" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dwamita/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>{t.footer.quickLinks}</h3>
            <ul>
              <li>
                <a href="#">{t.footer.links.home}</a>
              </li>
              <li>
                <a href="#web-design">{t.footer.links.webDesign}</a>
              </li>
              <li>
                <a href="#graphic-design">{t.footer.links.graphicBranding}</a>
              </li>
              <li>
                <a href="#video-production">{t.footer.links.videoProduction}</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>{t.footer.contactInfo}</h3>
            <ul>
              <li>
                <Phone size={18} />
                <span className="contact-label">{t.footer.contactLabels.hotline}:</span>
                <span className="contact-value">{t.footer.contact.hotline}</span>
              </li>
              <li>
                <Phone size={18} />
                <span className="contact-label">{t.footer.contactLabels.support}:</span>
                <span className="contact-value">{t.footer.contact.support}</span>
              </li>
              <li>
                <Globe size={18} />
                <span className="contact-label">{t.footer.contactLabels.international}:</span>
                <span className="contact-value" style={{direction:'ltr',unicodeBidi:'embed'}}>{t.footer.contact.international}</span>
              </li>
              <li>
                <MessageCircle size={18} />
                <span className="contact-label">{t.footer.contactLabels.consulting}:</span>
                <span className="contact-value">{t.footer.contact.consulting}</span>
              </li>
              <li>
                <Printer size={18} />
                <span className="contact-label">{t.footer.contactLabels.fax}:</span>
                <span className="contact-value" style={{direction:'ltr',unicodeBidi:'embed'}}>{t.footer.contact.fax}</span>
              </li>
              <li>
                <Mail size={18} />
                <span className="contact-label">{t.footer.contactLabels.email}:</span>
                <span className="contact-value" style={{direction:'ltr',unicodeBidi:'embed'}}>{t.footer.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>{t.footer.poweredBy}</span>
            <a
              href="https://dwam-tech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="dwam-link"
            >
              <Image
                src="/images/02.webp"
                alt="Dwam Technical Services"
                width={110}
                height={50}
                style={{ objectFit: 'contain', verticalAlign: 'middle' }}
              />
            </a>
          </div>
          <div className="footer-legal-links">
            <a href="/privacy">{t.footer.privacy}</a>
            <span>|</span>
            <a href="/terms">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
