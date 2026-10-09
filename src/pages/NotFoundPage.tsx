import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('Page Not Found | Road2Care');

  return (
    <main id="main-content" className="not-found-page">
      <div className="container">
        <div className="not-found-card card">
          <div className="not-found-icon-wrap">
            <Compass size={48} aria-hidden="true" />
          </div>
          <h1>404 – Page Not Found</h1>
          <p className="not-found-desc">
            We couldn't find the page you were looking for. It may have moved or the link address might be
            incorrect. Don't worry, we are here to help you get back on track.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn-accent btn-lg">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              <Phone size={18} aria-hidden="true" />
              <span>Contact Road2Care</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .not-found-page {
          padding: 80px 0;
          background-color: var(--color-bg-subtle);
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        .not-found-card {
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
          padding: 56px 40px;
          background-color: #FFFFFF;
        }
        .not-found-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        .not-found-card h1 {
          font-size: 2rem;
          margin-bottom: 14px;
        }
        .not-found-desc {
          color: var(--color-text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 36px;
        }
        .not-found-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 320px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};
