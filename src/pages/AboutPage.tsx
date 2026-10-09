import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Shield,
  Users,
  Compass,
  Award,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  BookOpen,
  User,
  AlertCircle,
} from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const AboutPage: React.FC = () => {
  useDocumentTitle(
    'About Road2Care | Mission, Values & Person-Centred NDIS Support',
    'Learn about Road2Care: our mission, values, commitment to participant choice and dignity, and our qualified, worker-screened support team in Melbourne.'
  );

  const values = [
    {
      title: 'Person-Centred Respect',
      desc: 'We see the person first, honoring your personal goals, cultural background, and unique preferences in everything we do.',
      icon: Heart,
    },
    {
      title: 'Choice and Control',
      desc: 'You are in the driver’s seat of your life. We support you to make your own decisions, exercise autonomy, and direct your care.',
      icon: Compass,
    },
    {
      title: 'Dignity of Risk',
      desc: 'We support participants to explore new opportunities, learn new skills, and make informed choices with appropriate safety guidance.',
      icon: Shield,
    },
    {
      title: 'Reliability & Consistency',
      desc: 'We show up when promised. Consistency in familiar support faces helps build genuine, lasting trust and peace of mind.',
      icon: Users,
    },
    {
      title: 'Cultural Inclusion & Safety',
      desc: 'We celebrate Melbourne’s rich diversity, welcoming individuals and families from all backgrounds, cultures, and identities.',
      icon: Award,
    },
  ];

  return (
    <main id="main-content" className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="eyebrow light">About Road2Care</span>
            <h1>Compassionate Support. Genuine Community.</h1>
            <p className="lead">
              Road2Care was founded on a simple yet profound belief: that every individual with disability
              deserves respectful, reliable, and uplifting support that empowers them to lead an enriched,
              self-directed life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="section">
        <div className="container">
          <div className="about-split-layout">
            <div className="about-split-text">
              <span className="eyebrow">Our Purpose</span>
              <h2>Empowering Abilities. Enriching Lives.</h2>
              <p className="lead-paragraph">
                We believe that disability support should never be transactional. It is about human connection,
                mutual respect, and standing beside participants as they move forward toward their personal goals.
              </p>
              <p>
                Whether assisting with daily routines in the comfort of your home, exploring Melbourne’s vibrant
                community, or building skills for greater independence, Road2Care approaches every interaction
                with patience, warmth, and professional integrity.
              </p>
              <div className="purpose-quote">
                <em>"Your goals. Your choices. Your journey. Our support."</em>
              </div>
            </div>

            <div className="about-split-visual">
              <div className="visual-card">
                <img
                  src="./images/hero-community.jpg"
                  alt="Support worker and participant enjoying a conversation in community park"
                  className="rounded-visual-img"
                />
                <div className="visual-stat-card">
                  <strong>Participant-First</strong>
                  <span>Guided by your voice and your schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Guiding Principles</span>
            <h2>The Values That Drive Us</h2>
            <p className="lead">
              Our core values guide every interaction, from the first introductory conversation to daily support.
            </p>
          </div>

          <div className="grid-3 values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="card value-card">
                  <div className="value-icon-box">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Worker Standards & Quality Safeguards */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Trust & Safety</span>
            <h2>Our Standards of Care</h2>
            <p className="lead">
              Peace of mind matters. We adhere to rigorous screening and training protocols to ensure the highest
              level of safety and quality for participants and families.
            </p>
          </div>

          <div className="grid-2 standards-grid">
            <div className="card standard-card">
              <ShieldCheck size={32} className="standard-icon" aria-hidden="true" />
              <div>
                <h3>NDIS Worker Screening Check</h3>
                <p>
                  Every support worker must clear the official Australian NDIS Worker Screening Check, verifying
                  their clearance to work with people with disability.
                </p>
              </div>
            </div>

            <div className="card standard-card">
              <FileCheck size={32} className="standard-icon" aria-hidden="true" />
              <div>
                <h3>Police & Working With Children Checks</h3>
                <p>
                  Current National Police Records Checks and Working with Children Checks (WWCC) are mandatory
                  prerequisites for all Road2Care personnel.
                </p>
              </div>
            </div>

            <div className="card standard-card">
              <Award size={32} className="standard-icon" aria-hidden="true" />
              <div>
                <h3>First Aid & CPR Certified</h3>
                <p>
                  All active workers maintain accredited, up-to-date Australian First Aid (HLTAID011) and CPR
                  (HLTAID009) certifications.
                </p>
              </div>
            </div>

            <div className="card standard-card">
              <BookOpen size={32} className="standard-icon" aria-hidden="true" />
              <div>
                <h3>NDIS Code of Conduct</h3>
                <p>
                  We strictly operate in accordance with the NDIS Quality and Safeguards Commission Code of
                  Conduct, respecting privacy, dignity, and participant choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Leadership Placeholders (Honest & Transparent) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Leadership & Team</span>
            <h2>Dedicated Support Professionals</h2>
            <p className="lead">
              Road2Care is built by passionate disability support specialists committed to making a tangible
              difference in our community.
            </p>
          </div>

          <div className="team-placeholder-notice" role="note">
            <AlertCircle size={20} className="notice-icon" aria-hidden="true" />
            <div>
              <strong>Verified Information Commitment:</strong>
              <p>
                In accordance with our honest communication policy, genuine staff profiles, qualifications, and
                leadership biographies will be uploaded prior to public launch. Road2Care never fabricates staff
                identities or credentials.
              </p>
            </div>
          </div>

          <div className="grid-3 team-grid">
            <div className="card team-card">
              <div className="team-avatar-placeholder">
                <User size={48} aria-hidden="true" />
              </div>
              <div className="team-badge-tag">Management</div>
              <h3>Care Director / Founder</h3>
              <p className="team-title-desc">
                Oversees service delivery, participant onboarding, and adherence to quality and safety standards.
              </p>
              <span className="badge-placeholder">Profile & Qualifications Pending</span>
            </div>

            <div className="card team-card">
              <div className="team-avatar-placeholder">
                <User size={48} aria-hidden="true" />
              </div>
              <div className="team-badge-tag">Coordination</div>
              <h3>Participant Services Lead</h3>
              <p className="team-title-desc">
                Works closely with participants and families to coordinate tailored rosters and service agreements.
              </p>
              <span className="badge-placeholder">Profile & Qualifications Pending</span>
            </div>

            <div className="card team-card">
              <div className="team-avatar-placeholder">
                <User size={48} aria-hidden="true" />
              </div>
              <div className="team-badge-tag">Frontline Support</div>
              <h3>Dedicated Support Worker Team</h3>
              <p className="team-title-desc">
                Experienced disability support workers providing compassionate, 1-on-1 care across Melbourne.
              </p>
              <span className="badge-placeholder">Worker Screened & Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section section-primary">
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Want to Learn More About Working With Us?</h2>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0 auto 32px' }}>
            We invite participants, families, and support coordinators to reach out for an informal chat about your
            support requirements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent btn-lg">
              <span>Contact Road2Care</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/areas" className="btn btn-outline-white btn-lg">
              Check Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #072336 0%, #0B3954 100%);
          color: #FFFFFF;
          padding: 64px 0 72px;
        }
        .about-hero-content {
          max-width: 800px;
        }
        .about-hero h1 {
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .about-hero p.lead {
          color: #CBD5E1;
          font-size: 1.15rem;
        }

        .about-split-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }
        .about-split-text h2 {
          margin-bottom: 18px;
        }
        .lead-paragraph {
          font-size: 1.15rem;
          color: var(--color-primary);
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .purpose-quote {
          margin-top: 24px;
          padding: 14px 20px;
          border-left: 3px solid var(--color-accent);
          background-color: var(--color-accent-light);
          border-radius: 4px;
          font-size: 1rem;
          color: var(--color-text-main);
          font-weight: 600;
        }

        .visual-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .rounded-visual-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .visual-stat-card {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 12px 20px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }
        .visual-stat-card strong {
          display: block;
          color: var(--color-primary);
          font-family: var(--font-heading);
        }
        .visual-stat-card span {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .value-card {
          padding: 32px 24px;
        }
        .value-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .value-card h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
        .value-card p {
          color: var(--color-text-muted);
          font-size: 0.925rem;
          line-height: 1.6;
        }

        .standard-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 28px;
        }
        .standard-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .standard-card h3 {
          font-size: 1.2rem;
          margin-bottom: 6px;
        }
        .standard-card p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .team-placeholder-notice {
          background-color: #FEF3C7;
          border: 1px solid #F59E0B;
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 36px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 0.875rem;
          color: #92400E;
        }
        .notice-icon {
          color: #B45309;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .team-placeholder-notice p {
          margin-bottom: 0;
          margin-top: 4px;
        }

        .team-card {
          text-align: center;
          padding: 36px 24px;
        }
        .team-avatar-placeholder {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          background-color: var(--color-bg-subtle);
          border: 2px dashed var(--color-border);
          color: #94A3B8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .team-badge-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-primary);
          background-color: var(--color-primary-light);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 10px;
        }
        .team-card h3 {
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .team-title-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-bottom: 18px;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .about-split-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .standards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};
