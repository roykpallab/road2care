import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Logo } from './Logo';
import { AccessibilityBar } from './AccessibilityBar';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <AccessibilityBar />

      {/* Top Notification / Contact Strip */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-pill">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>NDIS Support Services • Melbourne, VIC</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${siteConfig.business.phone}`} className="top-link" aria-label={`Call Road2Care on ${siteConfig.business.phoneDisplay}`}>
              <Phone size={14} aria-hidden="true" />
              <span>Call: {siteConfig.business.phoneDisplay}</span>
            </a>
            <span className="top-divider" aria-hidden="true">•</span>
            <a href={`mailto:${siteConfig.business.email}`} className="top-link" aria-label={`Email Road2Care at ${siteConfig.business.email}`}>
              <Mail size={14} aria-hidden="true" />
              <span>{siteConfig.business.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="main-header">
        <div className="container nav-container">
          <Link to="/" className="brand-link" onClick={closeMenu} aria-label="Road2Care Homepage">
            <Logo height={52} />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/areas" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Areas We Serve
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-accent btn-sm header-cta">
              <span>Make an Enquiry</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
            <div className="mobile-drawer-inner">
              <nav className="mobile-nav-links">
                <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
                <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Our Services
                </NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  About Road2Care
                </NavLink>
                <NavLink to="/areas" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Areas We Serve
                </NavLink>
                <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Contact Us
                </NavLink>
                <NavLink to="/privacy" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                  Privacy Policy
                </NavLink>
              </nav>

              <div className="mobile-drawer-footer">
                <a href={`tel:${siteConfig.business.phone}`} className="btn btn-outline btn-full">
                  <Phone size={18} aria-hidden="true" />
                  <span>Call {siteConfig.business.phoneDisplay}</span>
                </a>
                <Link to="/contact" onClick={closeMenu} className="btn btn-accent btn-full">
                  <span>Enquire Online</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .top-bar {
          background-color: var(--color-primary);
          color: #E2E8F0;
          font-size: 0.825rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .top-bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
        }
        .top-bar-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #F8FAFC;
          font-weight: 500;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .top-link {
          color: #E2E8F0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }
        .top-link:hover {
          color: var(--color-accent);
        }
        .top-divider {
          color: rgba(255, 255, 255, 0.3);
        }

        .main-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #FFFFFF;
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid var(--color-border);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-main);
          position: relative;
          padding: 6px 0;
        }
        .nav-link:hover {
          color: var(--color-accent-hover);
        }
        .nav-link.active {
          color: var(--color-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--color-accent);
          border-radius: 2px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: 6px;
          border-radius: var(--radius-sm);
        }
        .mobile-toggle-btn:hover {
          background-color: var(--color-primary-light);
        }

        .mobile-drawer {
          position: fixed;
          top: 110px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(11, 57, 84, 0.5);
          backdrop-filter: blur(4px);
          z-index: 999;
        }
        .mobile-drawer-inner {
          background-color: #FFFFFF;
          padding: 24px 20px 32px;
          box-shadow: var(--shadow-xl);
          border-bottom-left-radius: var(--radius-xl);
          border-bottom-right-radius: var(--radius-xl);
          max-height: 80vh;
          overflow-y: auto;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          color: var(--color-text-main);
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background-color: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }
        .btn-full {
          width: 100%;
        }

        @media (max-width: 900px) {
          .top-bar-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .desktop-nav {
            display: none;
          }
          .header-cta {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .nav-container {
            height: 70px;
          }
        }
      `}</style>
    </>
  );
};
