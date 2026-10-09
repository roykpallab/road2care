import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Search,
  CheckCircle2,
  AlertCircle,
  Phone,
  ArrowRight,
  Compass,
  Car,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const AreasPage: React.FC = () => {
  useDocumentTitle(
    'Areas We Serve | Melbourne NDIS Disability Support | Road2Care',
    'Find out where Road2Care provides NDIS support services across Melbourne, Victoria. Check your suburb and confirm service availability with our team.'
  );

  const [searchQuery, setSearchQuery] = useState('');

  // Flatten suburbs for search
  const allSuburbs = siteConfig.areas.flatMap((area) =>
    area.suburbs.map((suburb) => ({
      suburb,
      region: area.region,
      status: area.status,
    }))
  );

  const matchedSuburbs = searchQuery.trim()
    ? allSuburbs.filter(
        (item) =>
          item.suburb.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
          item.region.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    : [];

  return (
    <main id="main-content" className="areas-page">
      {/* Hero Banner */}
      <section className="areas-hero">
        <div className="container">
          <div className="areas-hero-content">
            <span className="eyebrow light">Service Coverage</span>
            <h1>Areas We Serve Across Melbourne</h1>
            <p className="lead">
              Road2Care provides in-home and community disability support across various Melbourne regions.
              Because worker matching is personal, please check with us to confirm availability in your local area.
            </p>

            {/* Central Placeholder Disclaimer */}
            <div className="areas-official-notice" role="note">
              <AlertCircle size={22} className="notice-icon" aria-hidden="true" />
              <div>
                <strong>Service Availability Notice:</strong>
                <p>
                  Contact Road2Care to confirm service availability in your area. Service provision depends on
                  suitable support worker matching, schedule availability, and participant travel preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Suburb Search / Checker */}
      <section className="section section-subtle">
        <div className="container">
          <div className="suburb-checker-card card">
            <div className="checker-header">
              <Search size={22} className="search-icon" aria-hidden="true" />
              <div>
                <h2>Check Your Suburb or Region</h2>
                <p>Enter your Melbourne suburb or region to see potential coverage.</p>
              </div>
            </div>

            <div className="search-input-wrap">
              <input
                type="text"
                className="form-control search-input"
                placeholder="e.g. Sunshine, Footscray, Werribee, Craigieburn, Box Hill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search your suburb or region"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {searchQuery.trim() && (
              <div className="search-results-box" aria-live="polite">
                {matchedSuburbs.length > 0 ? (
                  <div>
                    <p className="results-count">
                      Found {matchedSuburbs.length} matching area(s) in our current service database:
                    </p>
                    <ul className="results-list">
                      {matchedSuburbs.map((item, idx) => (
                        <li key={idx} className="result-item">
                          <MapPin size={18} className="map-pin" aria-hidden="true" />
                          <div className="result-details">
                            <strong>{item.suburb}</strong>
                            <span>{item.region}</span>
                          </div>
                          <Link
                            to={`/contact?suburb=${encodeURIComponent(item.suburb)}`}
                            className="btn btn-sm btn-accent"
                          >
                            Enquire for {item.suburb}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="no-direct-match">
                    <p>
                      <strong>Suburb not listed in sample areas?</strong> We regularly expand our network across
                      Greater Melbourne. Contact us directly to check if a dedicated support worker can be
                      arranged for your location.
                    </p>
                    <Link
                      to={`/contact?suburb=${encodeURIComponent(searchQuery)}`}
                      className="btn btn-sm btn-primary"
                    >
                      Enquire for "{searchQuery}"
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Configurable Regions Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Regions Overview</span>
            <h2>Current Operating Regions</h2>
            <p className="lead">
              Our team operates across multiple key metropolitan hubs. Suburbs listed are indicative examples.
            </p>
          </div>

          <div className="grid-2 regions-grid">
            {siteConfig.areas.map((area, idx) => (
              <div key={idx} className="card region-card">
                <div className="region-card-header">
                  <div className="region-badge">
                    <Compass size={18} aria-hidden="true" />
                    <span>Region</span>
                  </div>
                  <h3>{area.region}</h3>
                </div>

                <p className="region-note">
                  Indicative suburbs (contact us to verify your specific street or neighbourhood):
                </p>

                <div className="suburbs-tag-cloud">
                  {area.suburbs.map((sub, sIdx) => (
                    <span key={sIdx} className="suburb-tag">
                      {sub}
                    </span>
                  ))}
                  <span className="suburb-tag more-tag">+ surrounding suburbs</span>
                </div>

                <div className="region-card-footer">
                  <Link
                    to={`/contact?region=${encodeURIComponent(area.region)}`}
                    className="btn btn-outline btn-sm"
                  >
                    <span>Enquire About {area.region}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Travel & Pricing Policy */}
          <div className="card travel-policy-card">
            <div className="travel-policy-header">
              <Car size={28} className="travel-icon" aria-hidden="true" />
              <div>
                <h3>NDIS Provider Travel Information</h3>
                <p>
                  Road2Care adheres transparently to the NDIS Pricing Arrangements and Price Limits regarding
                  provider travel. Where provider travel is claimed, it is mutually discussed and agreed in your
                  Service Agreement prior to commencing support.
                </p>
              </div>
            </div>
            <div className="travel-features-grid">
              <div className="travel-feature">
                <CheckCircle2 size={18} className="feat-check" aria-hidden="true" />
                <span>No surprise travel fees — transparent agreement upfront</span>
              </div>
              <div className="travel-feature">
                <CheckCircle2 size={18} className="feat-check" aria-hidden="true" />
                <span>Local support worker matching minimizes travel time</span>
              </div>
              <div className="travel-feature">
                <CheckCircle2 size={18} className="feat-check" aria-hidden="true" />
                <span>Community access transport in reliable, safe vehicles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section section-primary text-center">
        <div className="container">
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Not Sure If We Cover Your Area?</h2>
          <p style={{ color: '#CBD5E1', maxWidth: '600px', margin: '0 auto 28px' }}>
            Give us a call or send a quick message. We are always happy to check support worker schedules and
            see if we can help you move forward.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent btn-lg">
              Check Availability With Our Team
            </Link>
            <a href={`tel:${siteConfig.business.phone}`} className="btn btn-outline-white btn-lg">
              <Phone size={18} aria-hidden="true" />
              <span>Call {siteConfig.business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .areas-hero {
          background: linear-gradient(135deg, #072336 0%, #0B3954 100%);
          color: #FFFFFF;
          padding: 64px 0 72px;
        }
        .areas-hero-content {
          max-width: 800px;
        }
        .areas-hero h1 {
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .areas-hero p.lead {
          color: #CBD5E1;
          font-size: 1.15rem;
          margin-bottom: 24px;
        }
        .areas-official-notice {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(245, 166, 35, 0.5);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: #F8FAFC;
          font-size: 0.9rem;
        }
        .areas-official-notice .notice-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .areas-official-notice p {
          margin-bottom: 0;
          margin-top: 4px;
          color: #CBD5E1;
        }

        .suburb-checker-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 36px;
        }
        .checker-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .search-icon {
          color: var(--color-primary);
        }
        .checker-header h2 {
          font-size: 1.4rem;
          margin-bottom: 4px;
        }
        .checker-header p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .search-input-wrap {
          position: relative;
          margin-bottom: 20px;
        }
        .search-input {
          font-size: 1.05rem;
          padding: 14px 20px;
          border-radius: var(--radius-md);
        }
        .clear-search-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.1rem;
          color: #94A3B8;
          cursor: pointer;
        }

        .search-results-box {
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 20px;
        }
        .results-count {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }
        .results-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }
        .map-pin {
          color: var(--color-accent-hover);
          margin-right: 12px;
        }
        .result-details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .result-details strong {
          color: var(--color-primary);
        }
        .result-details span {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .no-direct-match {
          text-align: center;
          padding: 12px 0;
        }
        .no-direct-match p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .regions-grid {
          margin-bottom: 40px;
        }
        .region-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }
        .region-card-header {
          margin-bottom: 14px;
        }
        .region-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-secondary);
          background-color: var(--color-secondary-light);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }
        .region-card-header h3 {
          font-size: 1.4rem;
        }
        .region-note {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 14px;
        }
        .suburbs-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .suburb-tag {
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          color: var(--color-text-main);
        }
        .more-tag {
          font-style: italic;
          color: var(--color-text-light);
          border-style: dashed;
        }
        .region-card-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--color-border-subtle);
        }

        .travel-policy-card {
          background-color: #FFFFFF;
          padding: 32px;
        }
        .travel-policy-header {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 20px;
        }
        .travel-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .travel-policy-header h3 {
          font-size: 1.25rem;
          margin-bottom: 6px;
        }
        .travel-policy-header p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 0;
        }
        .travel-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .travel-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .feat-check {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .travel-features-grid {
            grid-template-columns: 1fr;
          }
          .suburb-checker-card {
            padding: 24px 18px;
          }
        }
      `}</style>
    </main>
  );
};
