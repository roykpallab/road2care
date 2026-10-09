import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* Pre-footer Call to Action Strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-content">
          <div>
            <h3>Ready to explore tailored NDIS support?</h3>
            <p>Our friendly team is here to listen and help you move forward with confidence.</p>
          </div>
          <div className="footer-cta-actions">
            <Link to="/contact" className="btn btn-accent btn-lg">
              Get in Touch Today
            </Link>
            <a href={`tel:${siteConfig.business.phone}`} className="btn btn-outline-white btn-lg">
              <Phone size={18} aria-hidden="true" />
              <span>Call {siteConfig.business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <Link to="/" aria-label="Road2Care Homepage">
              <Logo height={56} />
            </Link>
            <p className="footer-tagline">
              <strong>{siteConfig.business.tagline}</strong>
            </p>
            <p className="footer-bio">
              Compassionate, person-centred disability support services designed to promote independence,
              choice, dignity, and active community participation for NDIS participants across Melbourne.
            </p>
            <div className="footer-badge">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>NDIS Worker Screened & Qualified Team</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/about">About Road2Care</Link></li>
              <li><Link to="/areas">Areas We Serve</Link></li>
              <li><Link to="/contact">Contact & Referrals</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Support Services</h4>
            <ul className="footer-links">
              {siteConfig.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Road2Care</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={18} className="contact-icon" aria-hidden="true" />
                <div>
                  <span className="contact-label">Phone:</span>
                  <a href={`tel:${siteConfig.business.phone}`} className="contact-val">
                    {siteConfig.business.phoneDisplay}
                  </a>
                </div>
              </li>
              <li>
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <div>
                  <span className="contact-label">Email:</span>
                  <a href={`mailto:${siteConfig.business.email}`} className="contact-val">
                    {siteConfig.business.email}
                  </a>
                </div>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" aria-hidden="true" />
                <div>
                  <span className="contact-label">Location:</span>
                  <span className="contact-val">{siteConfig.business.serviceAreaSummary}</span>
                </div>
              </li>
              <li>
                <Clock size={18} className="contact-icon" aria-hidden="true" />
                <div>
                  <span className="contact-label">Hours:</span>
                  <span className="contact-val">{siteConfig.business.operatingHours}</span>
                </div>
              </li>
            </ul>

            <div className="abn-badge">
              <span>ABN: {siteConfig.business.abn}</span>
            </div>
          </div>
        </div>

        {/* NDIS & Compliance Disclaimer Notice */}
        <div className="compliance-disclaimer-box" role="note">
          <div className="disclaimer-header">
            <AlertCircle size={18} aria-hidden="true" />
            <strong>NDIS Compliance & Provider Status Notice</strong>
          </div>
          <p>
            {siteConfig.compliance.registrationNotice} Road2Care is not affiliated with the National Disability
            Insurance Agency (NDIA) or the NDIS Quality and Safeguards Commission. All supports are delivered in
            accordance with the NDIS Code of Conduct and Australian standards. In a life-threatening emergency, please dial 000.
          </p>
        </div>

        {/* Acknowledgement of Country */}
        <div className="country-acknowledgement">
          <p>{siteConfig.acknowledgementOfCountry}</p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved. Built for Australian disability services.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact">Make an Enquiry</Link>
            <span>•</span>
            <a href="https://road2care.com" target="_blank" rel="noopener noreferrer">
              road2care.com
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #072336;
          color: #E2E8F0;
          font-size: 0.925rem;
          margin-top: auto;
        }
        .footer-cta-strip {
          background-color: var(--color-primary);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 48px 0;
        }
        .footer-cta-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-cta-content h3 {
          color: #FFFFFF;
          font-size: 1.8rem;
          margin-bottom: 6px;
        }
        .footer-cta-content p {
          color: #CBD5E1;
          font-size: 1.05rem;
        }
        .footer-cta-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-main {
          padding-top: 64px;
          padding-bottom: 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.3fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        .brand-col .footer-tagline {
          color: var(--color-accent);
          font-size: 1rem;
          margin-top: 16px;
          margin-bottom: 8px;
        }
        .brand-col .footer-bio {
          color: #94A3B8;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #F8FAFC;
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: var(--radius-full);
        }
        .footer-heading {
          color: #FFFFFF;
          font-size: 1.1rem;
          margin-bottom: 18px;
          font-weight: 700;
          position: relative;
        }
        .footer-heading::after {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background-color: var(--color-accent);
          margin-top: 6px;
          border-radius: 2px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: #94A3B8;
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: var(--color-accent);
          padding-left: 4px;
        }
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .contact-icon {
          color: var(--color-accent);
          margin-top: 2px;
          flex-shrink: 0;
        }
        .contact-label {
          display: block;
          font-size: 0.75rem;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .contact-val {
          color: #E2E8F0;
          font-size: 0.875rem;
        }
        .contact-val:hover {
          color: var(--color-accent);
        }
        .abn-badge {
          margin-top: 14px;
          font-size: 0.75rem;
          color: #64748B;
        }
        .compliance-disclaimer-box {
          background-color: rgba(11, 57, 84, 0.4);
          border: 1px solid rgba(245, 166, 35, 0.3);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 32px;
          font-size: 0.825rem;
          color: #CBD5E1;
          line-height: 1.6;
        }
        .disclaimer-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent);
          margin-bottom: 6px;
          font-size: 0.875rem;
        }
        .country-acknowledgement {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px 0;
          font-size: 0.825rem;
          color: #94A3B8;
          font-style: italic;
          line-height: 1.6;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.825rem;
          color: #64748B;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-bottom-links a {
          color: #94A3B8;
        }
        .footer-bottom-links a:hover {
          color: var(--color-accent);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-cta-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
