import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const PrivacyPage: React.FC = () => {
  useDocumentTitle(
    'Privacy Policy | Road2Care Disability Support Services',
    'Review the Privacy Policy template for Road2Care, outlining how enquiry information and personal records are handled under the Australian Privacy Principles.'
  );

  return (
    <main id="main-content" className="privacy-page">
      {/* Header Banner */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <span className="eyebrow light">Legal & Compliance</span>
            <h1>Privacy Policy Template</h1>
            <p className="lead">
              At Road2Care, we respect the privacy of participants, carers, family members, and service partners.
              This document outlines how personal and enquiry data is handled.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="privacy-card card">
            {/* Owner Review Alert Banner */}
            <div className="owner-review-alert" role="alert">
              <AlertTriangle size={24} className="alert-triangle" aria-hidden="true" />
              <div>
                <strong>Important Notice for Business Owner:</strong>
                <p>
                  This privacy policy is a draft template prepared for Road2Care based on the Australian Privacy
                  Principles (APPs) under the <em>Privacy Act 1988 (Cth)</em> and NDIS Quality and Safeguards
                  Commission guidance. Prior to public commercial operation, the business owner must review,
                  verify, and finalise all operational details, registered business names, and internal data handling
                  procedures.
                </p>
              </div>
            </div>

            <article className="policy-body">
              <h2>1. Commitment to Privacy</h2>
              <p>
                Road2Care (referred to as "we", "us", or "our") recognises the vital importance of protecting the
                privacy and dignity of our clients, participants, families, support coordinators, and website
                visitors. We handle personal information in general alignment with the Australian Privacy Principles
                (APPs) contained in the <em>Privacy Act 1988 (Cth)</em> and relevant state health privacy legislation.
              </p>

              <h2>2. What Personal Information We Collect</h2>
              <p>The types of personal information we may collect depend on the nature of your interaction with us:</p>
              <ul>
                <li>
                  <strong>General Enquiry Information:</strong> Your full name, preferred contact method, email address,
                  telephone number, suburb/region, and any general non-sensitive comments submitted via our online form.
                </li>
                <li>
                  <strong>Referral & Intake Information (Offline / Upon Agreement):</strong> Where a formal intake or
                  service agreement progresses, we may collect NDIS participant number, NDIS plan dates and management
                  type (self-managed or plan-managed), contact details for plan managers or support coordinators, and
                  necessary emergency contacts.
                </li>
                <li>
                  <strong>Website Usage Data:</strong> Standard server logs, page request timestamps, and anonymous
                  technical metrics necessary for website security and performance.
                </li>
              </ul>

              <h2>3. How We Collect Personal Information</h2>
              <p>We collect personal information directly from you when you:</p>
              <ul>
                <li>Submit an online enquiry or contact request through our website ({siteConfig.business.officialDomain}).</li>
                <li>Contact our team via phone or direct email.</li>
                <li>Authorise a Support Coordinator, Plan Manager, or family representative to make a referral on your behalf.</li>
              </ul>
              <p>
                We do not solicit sensitive health or diagnosis details through unencrypted public website forms.
                Comprehensive participant support plans are collected through secure, direct onboarding procedures.
              </p>

              <h2>4. Purpose of Collection and Use</h2>
              <p>We collect and use your personal information solely for legitimate business purposes, including:</p>
              <ul>
                <li>Responding promptly to your enquiries and questions about our services.</li>
                <li>Assessing service capacity and matching suitable support workers in your geographic area.</li>
                <li>Drafting NDIS service agreements and scheduled support rosters.</li>
                <li>Communicating with your designated Plan Manager or Support Coordinator for invoicing and plan reviews.</li>
                <li>Complying with Australian legal, taxation, and statutory record-keeping requirements.</li>
              </ul>

              <h2>5. Disclosure of Personal Information</h2>
              <p>
                We will not sell, rent, or trade your personal information to third parties or marketing agencies.
                Personal information is only disclosed:
              </p>
              <ul>
                <li>To authorized support workers directly assigned to deliver your agreed care.</li>
                <li>To your nominated Plan Manager for payment processing of delivered services.</li>
                <li>Where required or authorised by Australian law, court order, or child protection mandatory reporting duties.</li>
                <li>To avert a serious and imminent threat to someone’s life, health, or safety.</li>
              </ul>

              <h2>6. Data Storage and Security</h2>
              <p>
                We take reasonable administrative, technical, and physical precautions to protect personal information
                from loss, unauthorized access, modification, or disclosure. All digital records are stored on secure,
                password-protected systems with restricted access controls.
              </p>

              <h2>7. Access and Correction</h2>
              <p>
                Under the Australian Privacy Principles, you have the right to request access to the personal information
                we hold about you and request corrections if you believe any detail is inaccurate, outdated, or incomplete.
                To request access or update your information, please contact our Privacy Officer using the details below.
              </p>

              <h2>8. Complaints and Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to make a complaint about how your personal
                information has been handled, please contact Road2Care:
              </p>
              <div className="contact-box">
                <p><strong>Road2Care Privacy Officer</strong></p>
                <p>Email: <a href={`mailto:${siteConfig.business.email}`}>{siteConfig.business.email}</a></p>
                <p>Phone: {siteConfig.business.phoneDisplay}</p>
                <p>Website: <a href="https://road2care.com">https://road2care.com</a></p>
              </div>

              <p>
                If you are not satisfied with our response, you may contact the Office of the Australian Information
                Commissioner (OAIC):
              </p>
              <ul>
                <li>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a></li>
                <li>Phone: 1300 363 992</li>
              </ul>

              <div className="policy-footer-note">
                <p><em>Template Date: October 2026 | Road2Care Australia</em></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .privacy-hero {
          background: linear-gradient(135deg, #072336 0%, #0B3954 100%);
          color: #FFFFFF;
          padding: 60px 0 68px;
        }
        .privacy-hero-content {
          max-width: 800px;
        }
        .privacy-hero h1 {
          color: #FFFFFF;
          margin-bottom: 14px;
        }
        .privacy-hero p.lead {
          color: #CBD5E1;
          font-size: 1.15rem;
        }

        .privacy-card {
          padding: 48px;
          max-width: 900px;
          margin: 0 auto;
          background-color: #FFFFFF;
        }

        .owner-review-alert {
          background-color: #FEF3C7;
          border: 1.5px solid #F59E0B;
          border-radius: var(--radius-md);
          padding: 20px 24px;
          margin-bottom: 36px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: 0.9rem;
          color: #92400E;
          line-height: 1.6;
        }
        .alert-triangle {
          color: #B45309;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .owner-review-alert strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 6px;
        }
        .owner-review-alert p {
          margin-bottom: 0;
        }

        .policy-body h2 {
          font-size: 1.35rem;
          color: var(--color-primary);
          margin-top: 32px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          padding-bottom: 6px;
        }
        .policy-body p {
          color: var(--color-text-main);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .policy-body ul {
          margin-bottom: 20px;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .policy-body li {
          color: var(--color-text-main);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .contact-box {
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 18px 24px;
          margin: 16px 0 24px;
        }
        .contact-box p {
          margin-bottom: 6px;
        }
        .policy-footer-note {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .privacy-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </main>
  );
};
