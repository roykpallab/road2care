import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Send,
  Lock,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ContactPage: React.FC = () => {
  useDocumentTitle(
    'Contact Road2Care | Make an NDIS Enquiry or Referral',
    'Get in touch with Road2Care. Friendly, person-centred disability support services across Melbourne. Call, email, or send an enquiry online.'
  );

  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    enquiryType: 'participant',
    suburb: '',
    servicesInterested: [] as string[],
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Auto-populate from URL query params
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const suburbParam = searchParams.get('suburb');
    const regionParam = searchParams.get('region');

    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        servicesInterested: [serviceParam],
      }));
    }
    if (suburbParam) {
      setFormData((prev) => ({
        ...prev,
        suburb: suburbParam,
      }));
    } else if (regionParam) {
      setFormData((prev) => ({
        ...prev,
        suburb: regionParam,
      }));
    }
  }, [searchParams]);

  const handleCheckboxChange = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.servicesInterested.includes(serviceTitle);
      return {
        ...prev,
        servicesInterested: exists
          ? prev.servicesInterested.filter((s) => s !== serviceTitle)
          : [...prev.servicesInterested, serviceTitle],
      };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (formData.preferredContact === 'email' || formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (formData.preferredContact === 'phone' || formData.preferredContact === 'sms') {
      if (!formData.phone.trim() || formData.phone.length < 8) {
        newErrors.phone = 'Please provide a valid phone number.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or description of your enquiry.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Please confirm that you have read and accepted our privacy notice.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form validated.
      setSubmittedData({ ...formData });
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // Generate mailto link as reliable static fallback
  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Road2Care Enquiry: ${formData.fullName} (${formData.enquiryType})`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}
Role: ${formData.enquiryType}
Preferred Contact: ${formData.preferredContact}
Email: ${formData.email}
Phone: ${formData.phone}
Suburb/Location: ${formData.suburb || 'Not specified'}
Services Interested: ${formData.servicesInterested.join(', ') || 'General Enquiry'}

Message:
${formData.message}`
    );
    return `mailto:${siteConfig.business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main id="main-content" className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="eyebrow light">We Are Here For You</span>
            <h1>Get in Touch With Road2Care</h1>
            <p className="lead">
              Whether you are an NDIS participant, family member, carer, or support coordinator, we would love
              to hear from you. Reach out today for an obligation-free conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout: Contact Details & Form */}
      <section className="section section-subtle">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Information & Placeholders */}
            <aside className="contact-info-col">
              <div className="card contact-details-card">
                <h2>Contact Information</h2>
                <p className="contact-intro">
                  Speak directly with our team or send us a message. We strive to respond to all enquiries within
                  1 business day.
                </p>

                <ul className="info-list">
                  <li>
                    <div className="info-icon-wrap">
                      <Phone size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="info-label">Phone Enquiries</span>
                      <a href={`tel:${siteConfig.business.phone}`} className="info-val phone-highlight">
                        {siteConfig.business.phoneDisplay}
                      </a>
                      <span className="info-sub">Mon–Fri: 8:30 AM – 5:30 PM</span>
                    </div>
                  </li>

                  <li>
                    <div className="info-icon-wrap">
                      <Mail size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="info-label">Email Address</span>
                      <a href={`mailto:${siteConfig.business.email}`} className="info-val">
                        {siteConfig.business.email}
                      </a>
                      <span className="info-sub">Direct inbox monitored daily</span>
                    </div>
                  </li>

                  <li>
                    <div className="info-icon-wrap">
                      <MapPin size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="info-label">Service Area</span>
                      <span className="info-val">{siteConfig.business.serviceAreaSummary}</span>
                      <span className="info-sub">In-home & community visits</span>
                    </div>
                  </li>

                  <li>
                    <div className="info-icon-wrap">
                      <Clock size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="info-label">Operating Hours</span>
                      <span className="info-val">Support delivered 7 days</span>
                      <span className="info-sub">Scheduled by participant agreement</span>
                    </div>
                  </li>
                </ul>

                <div className="worker-screened-banner">
                  <ShieldCheck size={22} className="shield-icon" aria-hidden="true" />
                  <div>
                    <strong>Worker Screened & Verified</strong>
                    <p>All staff hold NDIS Worker Screening, Police Checks, and First Aid.</p>
                  </div>
                </div>

                <div className="emergency-notice">
                  <AlertCircle size={18} aria-hidden="true" />
                  <p>
                    <strong>Emergency Notice:</strong> If you or someone you support is in immediate danger or
                    requires urgent medical assistance, please dial <strong>000</strong> immediately.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right: Enquiry Form */}
            <div className="contact-form-col">
              <div className="card form-card">
                <h2>Send an Enquiry or Referral</h2>
                <p className="form-lead">
                  Please complete the form below. We will be in touch promptly to discuss your support options.
                </p>

                {/* Privacy Warning Banner */}
                <div className="privacy-warning-box" role="note">
                  <Lock size={18} className="lock-icon" aria-hidden="true" />
                  <div>
                    <strong>Privacy Notice:</strong>
                    <p>
                      Please do not provide sensitive medical records, detailed diagnosis reports, or NDIS plan
                      numbers via this general online form. Those can be safely discussed after initial contact.
                    </p>
                  </div>
                </div>

                {submittedData ? (
                  /* Honest Submission State with Mailto Confirmation */
                  <div className="submission-success-card" role="alert">
                    <div className="success-header">
                      <CheckCircle2 size={36} className="success-icon" aria-hidden="true" />
                      <div>
                        <h3>Enquiry Prepared Successfully!</h3>
                        <p>Thank you, {submittedData.fullName}. Your details have been validated.</p>
                      </div>
                    </div>

                    <div className="prepared-summary">
                      <h4>Enquiry Summary:</h4>
                      <ul>
                        <li><strong>Contact:</strong> {submittedData.fullName} ({submittedData.preferredContact})</li>
                        <li><strong>Email / Phone:</strong> {submittedData.email || 'N/A'} / {submittedData.phone || 'N/A'}</li>
                        <li><strong>Role:</strong> {submittedData.enquiryType}</li>
                        <li><strong>Location:</strong> {submittedData.suburb || 'Not specified'}</li>
                        <li>
                          <strong>Services:</strong>{' '}
                          {submittedData.servicesInterested.join(', ') || 'General Enquiry'}
                        </li>
                      </ul>
                    </div>

                    <div className="honest-dispatch-box">
                      <p>
                        To ensure your enquiry reaches us immediately via your email client, click the button
                        below to send it directly to <strong>{siteConfig.business.email}</strong>:
                      </p>
                      <a
                        href={getMailtoLink()}
                        className="btn btn-accent btn-lg"
                        style={{ width: '100%' }}
                      >
                        <Send size={18} aria-hidden="true" />
                        <span>Open in Email & Send Now</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      className="reset-form-link"
                      onClick={() => {
                        setSubmittedData(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          preferredContact: 'phone',
                          enquiryType: 'participant',
                          suburb: '',
                          servicesInterested: [],
                          message: '',
                          privacyConsent: false,
                        });
                      }}
                    >
                      Fill in another enquiry
                    </button>
                  </div>
                ) : (
                  /* Active Form */
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Your Full Name <span className="required" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        placeholder="e.g. Sarah Jenkins"
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className="form-error" role="alert">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Enquiry Type / Role */}
                    <div className="form-group">
                      <label htmlFor="enquiryType" className="form-label">
                        I am enquiring as a:
                      </label>
                      <select
                        id="enquiryType"
                        className="form-control"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      >
                        <option value="participant">NDIS Participant</option>
                        <option value="family_carer">Family Member or Primary Carer</option>
                        <option value="support_coordinator">Support Coordinator</option>
                        <option value="plan_manager">Plan Manager</option>
                        <option value="allied_health">Allied Health Professional</option>
                        <option value="other">Other Community Representative</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="form-group">
                      <label className="form-label">Preferred Contact Method</label>
                      <div className="contact-method-options">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          />
                          <span>Phone Call</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          />
                          <span>Email</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="sms"
                            checked={formData.preferredContact === 'sms'}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          />
                          <span>SMS / Text</span>
                        </label>
                      </div>
                    </div>

                    {/* Phone & Email Inputs in Grid */}
                    <div className="grid-2">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone Number{' '}
                          {formData.preferredContact !== 'email' && (
                            <span className="required" aria-hidden="true">*</span>
                          )}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 0412 345 678"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <span id="phone-error" className="form-error" role="alert">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email Address{' '}
                          {formData.preferredContact === 'email' && (
                            <span className="required" aria-hidden="true">*</span>
                          )}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sarah@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <span id="email-error" className="form-error" role="alert">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Suburb / Location */}
                    <div className="form-group">
                      <label htmlFor="suburb" className="form-label">
                        Your Suburb / Location
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        className="form-control"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        placeholder="e.g. Footscray, Werribee, Sunshine..."
                      />
                      <span className="form-help">Helps us check support worker availability in your area.</span>
                    </div>

                    {/* Services of Interest */}
                    <div className="form-group">
                      <label className="form-label">Services You May Be Interested In</label>
                      <div className="services-checkbox-grid">
                        {siteConfig.services.map((service) => (
                          <label key={service.id} className="checkbox-item">
                            <input
                              type="checkbox"
                              checked={formData.servicesInterested.includes(service.title)}
                              onChange={() => handleCheckboxChange(service.title)}
                            />
                            <span>{service.title}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* General Message */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        How can we help you? <span className="required" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share any preferred support days, goals, or questions. (Please avoid including sensitive medical records)."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <span id="message-error" className="form-error" role="alert">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Privacy Notice Checkbox */}
                    <div className="form-group">
                      <label className="checkbox-label-consent">
                        <input
                          type="checkbox"
                          checked={formData.privacyConsent}
                          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                          aria-required="true"
                        />
                        <span>
                          I agree to Road2Care storing my contact details solely to respond to this enquiry in
                          accordance with the <a href="#/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                          <span className="required" aria-hidden="true">*</span>
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <span className="form-error" role="alert">
                          {errors.privacyConsent}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="form-submit-wrap">
                      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                        <span>Submit Enquiry</span>
                        <Send size={18} aria-hidden="true" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, #072336 0%, #0B3954 100%);
          color: #FFFFFF;
          padding: 64px 0 72px;
        }
        .contact-hero-content {
          max-width: 800px;
        }
        .contact-hero h1 {
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .contact-hero p.lead {
          color: #CBD5E1;
          font-size: 1.15rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: flex-start;
        }
        .contact-details-card {
          padding: 36px 30px;
          background-color: #FFFFFF;
        }
        .contact-details-card h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .contact-intro {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }
        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .info-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-text-light);
          letter-spacing: 0.05em;
        }
        .info-val {
          display: block;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        .phone-highlight {
          color: var(--color-accent-hover);
        }
        .info-sub {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .worker-screened-banner {
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 20px;
        }
        .shield-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .worker-screened-banner strong {
          display: block;
          font-size: 0.9rem;
          color: var(--color-primary);
        }
        .worker-screened-banner p {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 0;
          margin-top: 2px;
        }

        .emergency-notice {
          background-color: #FFF5F5;
          border: 1px solid #FECACA;
          border-radius: var(--radius-md);
          padding: 14px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #991B1B;
          font-size: 0.825rem;
        }
        .emergency-notice p {
          margin-bottom: 0;
        }

        .form-card {
          padding: 40px;
          background-color: #FFFFFF;
        }
        .form-card h2 {
          font-size: 1.6rem;
          margin-bottom: 8px;
        }
        .form-lead {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .privacy-warning-box {
          background-color: #FEF3C7;
          border: 1px solid #F59E0B;
          border-radius: var(--radius-md);
          padding: 14px 18px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 24px;
          font-size: 0.85rem;
          color: #92400E;
        }
        .lock-icon {
          color: #B45309;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .privacy-warning-box p {
          margin-bottom: 0;
          margin-top: 2px;
        }

        .contact-method-options {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.925rem;
          cursor: pointer;
        }

        .services-checkbox-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 8px;
        }
        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          cursor: pointer;
          color: var(--color-text-main);
        }
        .checkbox-label-consent {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          cursor: pointer;
        }
        .checkbox-label-consent input {
          margin-top: 3px;
        }

        .submission-success-card {
          background-color: #F0FDF4;
          border: 1.5px solid #86EFAC;
          border-radius: var(--radius-lg);
          padding: 32px 24px;
        }
        .success-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .success-icon {
          color: #16A34A;
          flex-shrink: 0;
        }
        .prepared-summary {
          background-color: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 18px;
          margin-bottom: 24px;
        }
        .prepared-summary h4 {
          font-size: 0.9rem;
          color: var(--color-primary);
          margin-bottom: 10px;
        }
        .prepared-summary ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.875rem;
          color: var(--color-text-main);
        }
        .honest-dispatch-box {
          margin-bottom: 20px;
          text-align: center;
        }
        .honest-dispatch-box p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 14px;
        }
        .reset-form-link {
          display: block;
          margin: 12px auto 0;
          background: none;
          border: none;
          color: var(--color-primary);
          font-size: 0.85rem;
          text-decoration: underline;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .services-checkbox-grid {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </main>
  );
};
