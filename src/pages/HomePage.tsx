import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Users,
  Compass,
  Home,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Brain,
  Activity,
  UserCheck,
  Sun,
  HandHeart,
  Award,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const HomePage: React.FC = () => {
  useDocumentTitle(
    'Road2Care | Support That Helps You Move Forward | NDIS Disability Services',
    'Road2Care delivers compassionate, person-centred NDIS disability support services across Melbourne. Empowering abilities, building independence, and enriching lives.'
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whoWeSupportList = [
    {
      title: 'Autism Spectrum',
      desc: 'Personalised, empowering support shaped around individual sensory, communication, and social preferences.',
      icon: Brain,
      color: '#3B82F6',
    },
    {
      title: 'Intellectual Disability',
      desc: 'Building everyday confidence, life skills, communication, and decision-making at your own pace.',
      icon: Sparkles,
      color: '#F59E0B',
    },
    {
      title: 'Aged Care & Dementia',
      desc: 'Dignified, gentle, and compassionate support tailored to every stage of life and changing care needs.',
      icon: HandHeart,
      color: '#EC4899',
    },
    {
      title: 'Supported Independent Living',
      desc: 'Safe, nurturing, and structured support environments designed to help you thrive in home living.',
      icon: Home,
      color: '#10B981',
    },
    {
      title: 'Psychosocial Disability',
      desc: 'Recovery-oriented, compassionate care that nurtures emotional wellbeing, stability, and routine.',
      icon: Sun,
      color: '#8B5CF6',
    },
    {
      title: 'Physical Disability',
      desc: 'Empowering physical mobility, personal care, safe transfers, assistive equipment use, and community access.',
      icon: Activity,
      color: '#06B6D4',
    },
  ];

  const faqs = [
    {
      q: 'What types of NDIS funding can use Road2Care services?',
      a: 'Road2Care currently welcomes both Self-Managed and Plan-Managed NDIS participants. If you or your family manage your funding, or if you use a registered Plan Manager, you have full freedom to select Road2Care as your support provider. If your plan is NDIA-managed, please contact us to discuss available arrangements.',
    },
    {
      q: 'How does Road2Care match support workers with participants?',
      a: 'We understand that great support starts with the right relationship. We take time during our initial consultation to learn about your personality, hobbies, cultural preferences, and language needs, matching you with trained support workers who share your interests and respect your routine.',
    },
    {
      q: 'Do you charge according to the NDIS Pricing Arrangements?',
      a: 'Yes, all our services adhere strictly to the price limits set out in the official NDIS Pricing Arrangements and Price Limits guide. We ensure complete transparency with no hidden fees or unexpected charges.',
    },
    {
      q: 'Can support workers assist me outside regular business hours?',
      a: 'Yes. Depending on your NDIS plan and individual goals, our team can provide scheduled support across mornings, afternoons, evenings, weekends, and public holidays by prior arrangement.',
    },
    {
      q: 'How quickly can support commence after we contact you?',
      a: 'Following your enquiry, we aim to contact you within 1 business day for an initial conversation. Once we complete your person-centred support schedule and mutual service agreement, support can often commence within a few days depending on worker availability in your area.',
    },
  ];

  return (
    <main id="main-content">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="eyebrow light">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>Person-Centred NDIS Support</span>
            </div>
            <h1 className="hero-title">
              Support That Helps You <span className="highlight-text">Move Forward.</span>
            </h1>
            <p className="hero-subtitle">
              At Road2Care, we believe everyone deserves respectful, personalised support to pursue their goals,
              build confidence, and participate actively in their community.
            </p>
            <div className="hero-quote-badge">
              <em>"Your goals. Your choices. Your journey. Our support."</em>
            </div>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-accent btn-lg">
                <span>Start Your Care Journey</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">
                Explore Our Services
              </Link>
            </div>

            <div className="hero-proof-bar">
              <div className="proof-item">
                <strong>7 – 65+</strong>
                <span>Supporting Participants</span>
              </div>
              <div className="proof-divider" aria-hidden="true"></div>
              <div className="proof-item">
                <strong>1-on-1</strong>
                <span>Personalised Matching</span>
              </div>
              <div className="proof-divider" aria-hidden="true"></div>
              <div className="proof-item">
                <strong>100%</strong>
                <span>Worker Screened</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-card">
              <img
                src="./images/hero-community.jpg"
                alt="Smiling Australian participant in wheelchair chatting happily with a friendly support worker outdoors in sunny park"
                className="hero-main-img"
              />
              <div className="hero-floating-badge">
                <Heart size={20} className="badge-heart-icon" aria-hidden="true" />
                <div>
                  <strong>Compassionate Care</strong>
                  <span>Every single day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE SUPPORT SECTION */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Tailored & Inclusive Care</span>
            <h2>Who We Support</h2>
            <p className="lead">
              We are proudly committed to supporting every individual to live with greater choice, independence,
              and genuine human connection. Supporting participants aged 7 to 65+.
            </p>
          </div>

          <div className="grid-3">
            {whoWeSupportList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="card support-card">
                  <div className="support-icon-wrap" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                    <IconComp size={28} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="participant-age-strip">
            <div className="age-pill">
              <UserCheck size={18} aria-hidden="true" />
              <span>Supporting NDIS participants aged 7 to 65+ across Melbourne</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR THREE PILLARS (DIRECT FROM BRAND FLYER) */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Foundation</span>
            <h2>Your Journey. Our Commitment.</h2>
            <p className="lead">
              Empowering people with disability to live with greater choice, independence, confidence, and
              connection — every single day.
            </p>
          </div>

          <div className="grid-3 pillars-grid">
            <div className="card pillar-card">
              <div className="pillar-header">
                <div className="pillar-number">01</div>
                <div className="pillar-icon-badge">
                  <Compass size={24} aria-hidden="true" />
                </div>
              </div>
              <h3>Our Purpose</h3>
              <p>
                We exist to empower participants through high quality disability support that promotes
                independence, dignity, and confidence while helping them lead fulfilling lives every day.
              </p>
            </div>

            <div className="card pillar-card highlight-card">
              <div className="pillar-header">
                <div className="pillar-number">02</div>
                <div className="pillar-icon-badge">
                  <Users size={24} aria-hidden="true" />
                </div>
              </div>
              <h3>Our People</h3>
              <p>
                Our experienced and dedicated team is committed to delivering reliable, compassionate, and
                personalised support tailored to each participant’s unique goals and everyday needs.
              </p>
            </div>

            <div className="card pillar-card">
              <div className="pillar-header">
                <div className="pillar-number">03</div>
                <div className="pillar-icon-badge">
                  <Award size={24} aria-hidden="true" />
                </div>
              </div>
              <h3>Our Promise</h3>
              <p>
                We believe every participant deserves to feel valued, supported, and connected. We build
                meaningful relationships and create opportunities for independence and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SHOWCASE OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Flexible NDIS Supports</span>
            <h2>Support for Everyday Life</h2>
            <p className="lead">
              Discover our range of flexible, person-centred disability support services designed to help you
              reach your goals and thrive in the community.
            </p>
          </div>

          <div className="grid-3 services-grid">
            {siteConfig.services.slice(0, 6).map((service) => (
              <div key={service.id} className="card card-interactive service-preview-card">
                <div className="service-badge-cat">
                  <span>{service.ndisSupportCategory.split('-')[0].trim()}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-preview-desc">{service.shortDescription}</p>
                <div className="service-card-footer">
                  <Link to={`/services#${service.id}`} className="service-learn-more">
                    <span>Learn more & activities</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-action-center">
            <Link to="/services" className="btn btn-primary btn-lg">
              <span>View All 9 Support Services</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AUTHENTIC LIVING & IN-HOME EXPERIENCE STRIP */}
      <section className="section section-subtle authentic-strip">
        <div className="container">
          <div className="two-column-layout">
            <div className="image-frame">
              <img
                src="./images/daily-living-support.jpg"
                alt="Support worker guiding young adult in kitchen preparing healthy meal"
                className="authentic-photo"
              />
              <div className="photo-caption-tag">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Life Skills & Everyday Independence</span>
              </div>
            </div>

            <div className="content-col">
              <span className="eyebrow">Person-Centred Care</span>
              <h2>Care That Fits Naturally Into Your Routine</h2>
              <p className="lead">
                Every person is unique. That’s why we take the time to listen, learn what matters to you, and
                shape your support plan around your chosen lifestyle.
              </p>

              <ul className="tick-feature-list">
                <li>
                  <CheckCircle2 size={20} className="tick-icon" aria-hidden="true" />
                  <div>
                    <strong>Choice and Control Always</strong>
                    <p>You decide how, when, and where you receive your support.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} className="tick-icon" aria-hidden="true" />
                  <div>
                    <strong>Consistent, Screened Support Staff</strong>
                    <p>Trained workers who hold Australian NDIS Worker Screening and Police checks.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} className="tick-icon" aria-hidden="true" />
                  <div>
                    <strong>Culturally Respectful & Inclusive</strong>
                    <p>Empathy, dignity, and cultural safety embedded in every interaction.</p>
                  </div>
                </li>
              </ul>

              <div className="strip-cta-wrap">
                <Link to="/about" className="btn btn-outline">
                  Read Our Philosophy
                </Link>
                <Link to="/contact" className="btn btn-accent">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW THE ENQUIRY & SUPPORT PROCESS WORKS */}
      <section className="section section-primary how-it-works-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow light">Simple & Transparent Pathway</span>
            <h2>Your Journey. Three Clear Steps.</h2>
            <p className="lead" style={{ color: '#CBD5E1' }}>
              We keep each step clear, collaborative, and easy to understand from your first enquiry.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3>Tell Us About You</h3>
              <p>
                We have an obligation-free conversation to listen to your goals, current NDIS funding, routines,
                and what great support looks like for you.
              </p>
            </div>

            <div className="step-connector" aria-hidden="true"></div>

            <div className="step-card">
              <div className="step-num">02</div>
              <h3>Shape Your Support</h3>
              <p>
                Together with you, your family, or support coordinator, we craft a personalised service
                agreement and match the best-suited support team.
              </p>
            </div>

            <div className="step-connector" aria-hidden="true"></div>

            <div className="step-card">
              <div className="step-num">03</div>
              <h3>Begin With Confidence</h3>
              <p>
                Your support begins with regular check-ins and open communication, adapting smoothly as your
                goals and needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUPPORT FOR COORDINATORS & PLAN MANAGERS */}
      <section className="section">
        <div className="container">
          <div className="coordinators-box">
            <div className="coordinators-text">
              <span className="eyebrow">For Support Coordinators & Plan Managers</span>
              <h2>A Reliable Partner for Your Participants</h2>
              <p>
                We value your time and dedication. Road2Care works cooperatively with Support Coordinators,
                Local Area Coordinators (LACs), and Plan Managers to provide rapid intakes, accurate NDIS
                itemised reporting, and dependable service delivery.
              </p>
              <div className="coordinators-points">
                <div className="point-item">
                  <CheckCircle2 size={18} className="point-icon" aria-hidden="true" />
                  <span>Prompt 24–48 hour enquiry response times</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 size={18} className="point-icon" aria-hidden="true" />
                  <span>Transparent NDIS line-item invoicing compliant with pricing guide</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 size={18} className="point-icon" aria-hidden="true" />
                  <span>Comprehensive progress notes for upcoming plan reviews</span>
                </div>
              </div>
            </div>
            <div className="coordinators-action">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Make a Referral
              </Link>
              <a href={`tel:${siteConfig.business.phone}`} className="phone-referral-link">
                Or call {siteConfig.business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Common NDIS Questions</h2>
            <p className="lead">
              Clear answers to help participants, carers, and families make informed decisions.
            </p>
          </div>

          <div className="faq-accordion-wrap">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-more-help">
            <p>
              Have a question about your specific plan or circumstance?{' '}
              <Link to="/contact">Reach out to our friendly team today.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* STYLES FOR HOMEPAGE */}
      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #072336 0%, #0B3954 60%, #09476C 100%);
          color: #FFFFFF;
          padding: 80px 0 96px;
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }
        .hero-title {
          color: #FFFFFF;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .highlight-text {
          color: var(--color-accent);
          display: inline;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: #E2E8F0;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 580px;
        }
        .hero-quote-badge {
          background: rgba(255, 255, 255, 0.08);
          border-left: 3px solid var(--color-accent);
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 32px;
          color: #F8FAFC;
          font-size: 0.95rem;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-proof-bar {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .proof-item strong {
          display: block;
          font-size: 1.4rem;
          font-family: var(--font-heading);
          color: var(--color-accent);
          line-height: 1;
        }
        .proof-item span {
          font-size: 0.8rem;
          color: #CBD5E1;
        }
        .proof-divider {
          width: 1px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.2);
        }
        .hero-image-wrap {
          position: relative;
        }
        .hero-image-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 4px solid rgba(255, 255, 255, 0.1);
        }
        .hero-main-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 10;
        }
        .hero-floating-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: var(--color-primary);
          padding: 12px 18px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-xl);
        }
        .badge-heart-icon {
          color: #E11D48;
          fill: #E11D48;
        }
        .hero-floating-badge strong {
          display: block;
          font-size: 0.95rem;
          font-family: var(--font-heading);
        }
        .hero-floating-badge span {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .support-card {
          text-align: left;
          padding: 32px 24px;
        }
        .support-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .support-card h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
        .support-card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .participant-age-strip {
          margin-top: 40px;
          text-align: center;
        }
        .age-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          padding: 10px 24px;
          border-radius: var(--radius-full);
          font-weight: 600;
          color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }

        .pillars-grid {
          margin-top: 24px;
        }
        .pillar-card {
          padding: 36px 28px;
          position: relative;
        }
        .pillar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .pillar-number {
          font-size: 2rem;
          font-family: var(--font-heading);
          font-weight: 800;
          color: #CBD5E1;
        }
        .pillar-icon-badge {
          width: 48px;
          height: 48px;
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .highlight-card {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
          background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF7 100%);
        }
        .highlight-card .pillar-icon-badge {
          background-color: var(--color-accent-light);
          color: var(--color-accent-hover);
        }

        .service-preview-card {
          display: flex;
          flex-direction: column;
          padding: 28px;
        }
        .service-badge-cat {
          margin-bottom: 12px;
        }
        .service-badge-cat span {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--color-secondary);
          background-color: var(--color-secondary-light);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }
        .service-preview-card h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }
        .service-preview-desc {
          color: var(--color-text-muted);
          font-size: 0.925rem;
          line-height: 1.55;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        .service-card-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .service-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-primary);
        }
        .service-learn-more:hover {
          color: var(--color-accent-hover);
          gap: 10px;
        }
        .services-action-center {
          text-align: center;
          margin-top: 48px;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 56px;
          align-items: center;
        }
        .image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .authentic-photo {
          width: 100%;
          height: auto;
          display: block;
        }
        .photo-caption-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(11, 57, 84, 0.92);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .tick-feature-list {
          list-style: none;
          margin: 28px 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .tick-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .tick-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .tick-feature-list strong {
          display: block;
          font-size: 1.05rem;
          color: var(--color-primary);
        }
        .tick-feature-list p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-top: 2px;
        }
        .strip-cta-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 20px;
          align-items: center;
          margin-top: 24px;
        }
        .step-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          text-align: left;
        }
        .step-num {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--color-accent);
          margin-bottom: 12px;
        }
        .step-card h3 {
          color: #FFFFFF;
          font-size: 1.3rem;
          margin-bottom: 12px;
        }
        .step-card p {
          color: #CBD5E1;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .step-connector {
          width: 32px;
          height: 2px;
          background-color: var(--color-accent);
          opacity: 0.6;
        }

        .coordinators-box {
          background: linear-gradient(135deg, var(--color-bg-subtle) 0%, #FFFFFF 100%);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 48px;
          display: grid;
          grid-template-columns: 1.4fr 0.8fr;
          gap: 40px;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }
        .coordinators-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }
        .point-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 500;
        }
        .point-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .coordinators-action {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }
        .phone-referral-link {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          text-decoration: underline;
        }

        .faq-accordion-wrap {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .faq-item {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-item.open {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }
        .faq-question-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 20px 24px;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
        .faq-answer-panel {
          padding: 0 24px 20px;
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 16px;
        }
        .faq-more-help {
          text-align: center;
          margin-top: 36px;
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }
        .faq-more-help a {
          color: var(--color-primary);
          font-weight: 600;
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .two-column-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .coordinators-box {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .step-connector {
            display: none;
          }
        }
      `}</style>
    </main>
  );
};
