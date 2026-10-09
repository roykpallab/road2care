import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  Info,
  Sparkles,
  UserCheck,
  Users,
  Home,
  Car,
  GraduationCap,
  BedDouble,
  Compass,
  Briefcase,
  X,
} from 'lucide-react';
import { siteConfig, type ServiceItem } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ServicesPage: React.FC = () => {
  useDocumentTitle(
    'NDIS Services & Support Options | Road2Care Melbourne',
    'Explore flexible NDIS support services offered by Road2Care including personal care, community participation, daily living skills, transport, and respite.'
  );

  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Handle anchor link scrolling (e.g. #personal-care-daily-living)
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash]);

  // Filter enabled services
  const enabledServices = siteConfig.services.filter((s) => s.enabled);
  const filteredServices =
    selectedCategory === 'all'
      ? enabledServices
      : enabledServices.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck size={26} aria-hidden="true" />;
      case 'Users':
        return <Users size={26} aria-hidden="true" />;
      case 'Home':
        return <Home size={26} aria-hidden="true" />;
      case 'Sparkles':
        return <Sparkles size={26} aria-hidden="true" />;
      case 'Car':
        return <Car size={26} aria-hidden="true" />;
      case 'GraduationCap':
        return <GraduationCap size={26} aria-hidden="true" />;
      case 'BedDouble':
        return <BedDouble size={26} aria-hidden="true" />;
      case 'Compass':
        return <Compass size={26} aria-hidden="true" />;
      case 'Briefcase':
        return <Briefcase size={26} aria-hidden="true" />;
      default:
        return <Sparkles size={26} aria-hidden="true" />;
    }
  };

  return (
    <main id="main-content" className="services-page">
      {/* Services Header Banner */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="eyebrow light">Flexible & Person-Centred</span>
            <h1>Our Disability Support Services</h1>
            <p className="lead">
              At Road2Care, we listen to your goals and tailor support that encourages independence, choice, and
              community inclusion. Explore our service options below.
            </p>

            {/* Availability Notice */}
            <div className="service-availability-alert" role="note">
              <Info size={20} className="alert-icon" aria-hidden="true" />
              <div>
                <strong>Local Availability Notice:</strong>
                <span>
                  {' '}Service categories are customizable and subject to individual plan matching and team capacity in your area. Contact Road2Care to confirm availability.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="service-filter-section">
        <div className="container">
          <div className="filter-bar">
            <span className="filter-title">
              <Filter size={16} aria-hidden="true" /> Filter by Category:
            </span>
            <div className="filter-buttons" role="tablist">
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
                role="tab"
                aria-selected={selectedCategory === 'all'}
              >
                All Services ({enabledServices.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'core' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('core')}
                role="tab"
                aria-selected={selectedCategory === 'core'}
              >
                Core & Daily Living
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'capacity' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('capacity')}
                role="tab"
                aria-selected={selectedCategory === 'capacity'}
              >
                Capacity Building
              </button>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === 'coordination' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('coordination')}
                role="tab"
                aria-selected={selectedCategory === 'coordination'}
              >
                Coordination
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid List */}
      <section className="section services-list-section">
        <div className="container">
          <div className="services-container-grid">
            {filteredServices.map((service) => (
              <article key={service.id} id={service.id} className="card service-full-card">
                <div className="service-card-top">
                  <div className="service-icon-box">{getServiceIcon(service.iconName)}</div>
                  <div className="service-meta">
                    <span className="service-ndis-code">{service.ndisSupportCategory}</span>
                    <h2>{service.title}</h2>
                  </div>
                </div>

                <p className="service-desc-text">{service.fullDescription}</p>

                {/* Who It Suits */}
                <div className="service-detail-block">
                  <h4>Who this support may suit:</h4>
                  <ul className="service-checklist">
                    {service.whoItSuits.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples of Support Activities */}
                <div className="service-detail-block">
                  <h4>Example support activities:</h4>
                  <ul className="activity-pills">
                    {service.sampleActivities.map((act, idx) => (
                      <li key={idx} className="activity-pill">
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-bottom-actions">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-accent btn-sm"
                  >
                    <span>Enquire for This Service</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>

                  <button
                    type="button"
                    className="quick-view-btn"
                    onClick={() => setActiveModalService(service)}
                  >
                    <span>Quick Summary</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Custom Care Notice */}
          <div className="custom-care-banner">
            <div className="custom-care-content">
              <h3>Need a tailored combination of supports?</h3>
              <p>
                Many participants require a flexible mix of personal care, community access, and skill-building.
                We design personalized support schedules that fit seamlessly with your daily life.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Plan With Us
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL / QUICK SUMMARY DIALOG */}
      {activeModalService && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div className="modal-card">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModalService(null)}
              aria-label="Close dialog"
            >
              <X size={22} />
            </button>

            <span className="eyebrow">{activeModalService.ndisSupportCategory}</span>
            <h2 id="modal-service-title">{activeModalService.title}</h2>
            <p className="modal-desc">{activeModalService.fullDescription}</p>

            <div className="modal-section">
              <h4>Suitability:</h4>
              <ul className="service-checklist">
                {activeModalService.whoItSuits.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="check-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <Link
                to={`/contact?service=${encodeURIComponent(activeModalService.title)}`}
                className="btn btn-accent"
                onClick={() => setActiveModalService(null)}
              >
                <span>Enquire Now</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveModalService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE STYLES */}
      <style>{`
        .services-hero {
          background: linear-gradient(135deg, #072336 0%, #0B3954 100%);
          color: #FFFFFF;
          padding: 64px 0 72px;
        }
        .services-hero-content {
          max-width: 800px;
        }
        .services-hero h1 {
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .services-hero p.lead {
          color: #CBD5E1;
          font-size: 1.15rem;
          margin-bottom: 24px;
        }
        .service-availability-alert {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(245, 166, 35, 0.4);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.875rem;
          color: #E2E8F0;
        }
        .service-availability-alert .alert-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-filter-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          padding: 16px 0;
          position: sticky;
          top: 80px;
          z-index: 100;
        }
        .filter-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .filter-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .filter-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          color: var(--color-text-main);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: var(--transition);
        }
        .filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .filter-btn.active {
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }

        .services-list-section {
          background-color: var(--color-bg-subtle);
        }
        .services-container-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .service-full-card {
          display: flex;
          flex-direction: column;
          padding: 32px;
          background-color: #FFFFFF;
        }
        .service-card-top {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 16px;
        }
        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .service-ndis-code {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 4px;
        }
        .service-meta h2 {
          font-size: 1.35rem;
          color: var(--color-primary);
        }
        .service-desc-text {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .service-detail-block {
          margin-bottom: 20px;
        }
        .service-detail-block h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .service-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .service-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }
        .check-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .activity-pills {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .activity-pill {
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          color: var(--color-text-muted);
        }
        .service-card-bottom-actions {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid var(--color-border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .quick-view-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }

        .custom-care-banner {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 36px 40px;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          box-shadow: var(--shadow-sm);
        }
        .custom-care-content h3 {
          font-size: 1.4rem;
          margin-bottom: 6px;
        }
        .custom-care-content p {
          color: var(--color-text-muted);
          max-width: 650px;
          margin-bottom: 0;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(11, 57, 84, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }
        .modal-card {
          background-color: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 36px;
          max-width: 600px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          box-shadow: var(--shadow-xl);
        }
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-muted);
          padding: 6px;
          border-radius: var(--radius-sm);
        }
        .modal-close-btn:hover {
          background-color: var(--color-bg-subtle);
        }
        .modal-desc {
          color: var(--color-text-muted);
          margin-top: 12px;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .modal-actions {
          margin-top: 28px;
          display: flex;
          gap: 12px;
        }

        @media (max-width: 900px) {
          .services-container-grid {
            grid-template-columns: 1fr;
          }
          .custom-care-banner {
            padding: 28px 24px;
          }
        }
      `}</style>
    </main>
  );
};
