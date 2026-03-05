import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css"; // import the CSS file

const Contact = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    projectType: "",
    subject: "",
    message: "",
    otherSubject: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showOtherSubject, setShowOtherSubject] = useState(false);

  // Background image URL for header
  const headerBgImage = "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Navigation items
  const tabItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "services", label: "Services", path: "/services" },
    { id: "projects", label: "Projects", path: "/project" },
    { id: "appointment", label: "Appointment", path: "/appointment" },
  ];

  // Project Type Options
  const projectTypeOptions = [
    { value: "", label: "Select Project Type", disabled: true },
    { value: "residential", label: "Residential Design" },
    { value: "commercial", label: "Commercial Space" },
    { value: "interior", label: "Interior Design" },
    { value: "sustainable", label: "Sustainable Design" },
    { value: "urban", label: "Urban Planning" },
    { value: "heritage", label: "Heritage Conservation" },
    { value: "landscape", label: "Landscape Architecture" },
    { value: "renovation", label: "Renovation / Restoration" },
    { value: "consultation", label: "Consultation Only" },
    { value: "other", label: "Other Project Type" }
  ];

  // Subject Options
  const subjectOptions = [
    { value: "", label: "Select a subject", disabled: true },
    { value: "project-inquiry", label: "Project Inquiry" },
    { value: "consultation", label: "Book a Consultation" },
    { value: "quotation", label: "Request a Quotation" },
    { value: "existing-project", label: "Existing Project Update" },
    { value: "collaboration", label: "Business Collaboration" },
    { value: "career", label: "Career Opportunities" },
    { value: "feedback", label: "Feedback / Suggestion" },
    { value: "complaint", label: "Complaint / Issue" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "media", label: "Media / Press Inquiry" },
    { value: "other", label: "Other Subject" }
  ];

  // Validation functions (unchanged)
  const validateName = (name) => { /* ... same as original ... */ };
  const validateEmail = (email) => { /* ... same as original ... */ };
  const validatePhone = (phone) => { /* ... same as original ... */ };
  const validateBudget = (budget) => { /* ... same as original ... */ };
  const validateProjectType = (projectType) => { /* ... same as original ... */ };
  const validateSubject = (subject, otherSubject) => { /* ... same as original ... */ };
  const validateMessage = (message) => { /* ... same as original ... */ };
  const formatEmail = (email) => email.toLowerCase().replace(/\s/g, '');
  const getEmailSuggestion = (email) => { /* ... same as original ... */ };
  const getWordCount = (text) => { /* ... same as original ... */ };
  const formatIndianCurrency = (amount) => { /* ... same as original ... */ };

  // Handlers (unchanged)
  const handleChange = (e) => { /* ... same as original ... */ };
  const handleEmailBlur = () => { /* ... same as original ... */ };
  const validateForm = () => { /* ... same as original ... */ };
  const handleSubmit = (e) => { /* ... same as original ... */ };

  const faqs = [ /* ... same as original ... */ ];

  return (
    <div>
      {/* FIXED HEADER WITH NAVIGATION */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={() => navigate("/")}>
          ARCTITECH
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {tabItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`tab-item ${window.location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.6) 100%), url(${headerBgImage})`
        }}
      >
        <div className="hero-content">
          <span className="hero-badge">Get In Touch</span>
          <h1 className="hero-title">
            Let's <span className="hero-title-highlight">Connect</span>
            <br />& Create Together
          </h1>
          <p className="hero-subtitle">
            Have a project in mind? We'd love to hear about it. 
            Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          {/* CONTACT INFO */}
          <div className="info-wrapper">
            <span className="info-badge">Contact Information</span>
            <h2 className="info-title">We're Here to Help</h2>
            <p className="info-text">
              Whether you have a question about our services, need a consultation, 
              or want to discuss a potential project, our team is ready to assist you.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <div className="contact-label">Visit Us</div>
                  <div className="contact-value">Pune, Maharashtra, India</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">+91 98765 43210</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">info@arctitech.com</div>
                </div>
              </div>
            </div>

            <div className="social-section">
              <div className="social-title">Follow Us</div>
              <div className="social-links">
                {["📘", "📷", "🔗"].map((icon, index) => (
                  <div key={index} className="social-link">{icon}</div>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="form-wrapper">
            <div className="form-box">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="input-group">
                  <label className="label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`input ${errors.name ? 'input-error' : ''}`}
                    onBlur={() => {
                      const nameError = validateName(formData.name);
                      if (nameError) setErrors({...errors, name: nameError});
                    }}
                  />
                  {errors.name && (
                    <div className="error-message"><span>⚠️</span> {errors.name}</div>
                  )}
                  {!errors.name && formData.name && validateName(formData.name) === "" && (
                    <div className="success-indicator">✓ Valid name</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="input-group">
                  <label className="label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    placeholder="name@gmail.com"
                    className={`input ${errors.email ? 'input-error' : ''}`}
                  />
                  {formData.email && !formData.email.includes('@') && formData.email.length > 2 && (
                    <div className="email-hint">
                      <span style={{width: '100%', marginBottom: '4px'}}>Suggested .com emails:</span>
                      <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                        {getEmailSuggestion(formData.email)?.map((suggestion, idx) => (
                          <span
                            key={idx}
                            className="email-suggestion"
                            onClick={() => {
                              setFormData({...formData, email: suggestion.full});
                              setErrors({...errors, email: ""});
                            }}
                          >
                            {suggestion.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {errors.email && (
                    <div className="error-message"><span>⚠️</span> {errors.email}</div>
                  )}
                  {!errors.email && formData.email && validateEmail(formData.email).isValid && (
                    <div className="success-indicator">✓ Valid .com email address</div>
                  )}
                  {formData.email && formData.email.includes('@') && !formData.email.toLowerCase().endsWith('.com') && (
                    <div className="budget-preview" style={{color: "#ef4444"}}>
                      ℹ️ Only .com email addresses are accepted (e.g., name@gmail.com)
                    </div>
                  )}
                </div>

                {/* Phone Field */}
                <div className="input-group">
                  <label className="label">
                    Mobile Number <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    maxLength="10"
                    className={`input ${errors.phone ? 'input-error' : ''}`}
                    onBlur={() => {
                      const phoneError = validatePhone(formData.phone);
                      if (phoneError) setErrors({...errors, phone: phoneError});
                    }}
                  />
                  {errors.phone && (
                    <div className="error-message"><span>⚠️</span> {errors.phone}</div>
                  )}
                  {!errors.phone && formData.phone && formData.phone.length === 10 && (
                    <div className="success-indicator">✓ Valid Indian mobile number</div>
                  )}
                  {formData.phone && formData.phone.length > 0 && (
                    <div className="char-count">{formData.phone.length}/10 digits</div>
                  )}
                </div>

                {/* Budget Field */}
                <div className="input-group">
                  <label className="label">
                    Project Budget (₹) <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="500000"
                    maxLength="9"
                    className={`input ${errors.budget ? 'input-error' : ''}`}
                    onBlur={() => {
                      const budgetError = validateBudget(formData.budget);
                      if (budgetError) setErrors({...errors, budget: budgetError});
                    }}
                  />
                  {formData.budget && !errors.budget && (
                    <div className="budget-preview">
                      Estimated: {formatIndianCurrency(formData.budget)}
                    </div>
                  )}
                  {errors.budget && (
                    <div className="error-message"><span>⚠️</span> {errors.budget}</div>
                  )}
                  {formData.budget && formData.budget.length > 0 && (
                    <div className="char-count">Max: ₹10,00,00,000</div>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div className="input-group">
                  <label className="label">
                    Project Type <span className="required-star">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`select ${errors.projectType ? 'input-error' : ''}`}
                  >
                    {projectTypeOptions.map((option) => (
                      <option 
                        key={option.value} 
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <div className="error-message"><span>⚠️</span> {errors.projectType}</div>
                  )}
                  {!errors.projectType && formData.projectType && formData.projectType !== "" && (
                    <div className="success-indicator">✓ Project type selected</div>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div className="input-group">
                  <label className="label">
                    Subject <span className="required-star">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`select ${errors.subject ? 'input-error' : ''}`}
                  >
                    {subjectOptions.map((option) => (
                      <option 
                        key={option.value} 
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {showOtherSubject && (
                    <div className="other-input">
                      <input
                        type="text"
                        name="otherSubject"
                        value={formData.otherSubject}
                        onChange={handleChange}
                        placeholder="Please specify your subject"
                        className={`input ${errors.otherSubject ? 'input-error' : ''}`}
                      />
                      {errors.otherSubject && (
                        <div className="error-message"><span>⚠️</span> {errors.otherSubject}</div>
                      )}
                    </div>
                  )}
                  {errors.subject && !showOtherSubject && (
                    <div className="error-message"><span>⚠️</span> {errors.subject}</div>
                  )}
                  {!errors.subject && formData.subject && formData.subject !== "" && !showOtherSubject && (
                    <div className="success-indicator">✓ Subject selected</div>
                  )}
                </div>

                {/* Message Field */}
                <div className="input-group">
                  <label className="label">
                    Your Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project in detail..."
                    className={`textarea ${errors.message ? 'input-error' : ''}`}
                    onBlur={() => {
                      const messageError = validateMessage(formData.message);
                      if (messageError) setErrors({...errors, message: messageError});
                    }}
                  />
                  {errors.message && (
                    <div className="error-message"><span>⚠️</span> {errors.message}</div>
                  )}
                  {formData.message && (
                    <div className="char-count">
                      {formData.message.length}/1000 characters | {getWordCount(formData.message)} words
                    </div>
                  )}
                  {!errors.message && formData.message && formData.message.length >= 20 && (
                    <div className="success-indicator">✓ Message length sufficient</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <span style={{ fontSize: "20px" }}>→</span>
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="success-message">
                    ✓ Thank you! Your message has been sent successfully. We'll contact you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>📍</div>
              <div style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
                Arctitech Studio
              </div>
              <div>Pune, Maharashtra, India - 411001</div>
              <div style={{ marginTop: "16px", color: "#64748b" }}>
                Interactive Map Integration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Quick answers to common questions about our services and process
        </p>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <h4 className="faq-question">{faq.question}</h4>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Start Your Project?</h2>
        <p style={{ fontSize: "18px", opacity: 0.95, marginBottom: "20px" }}>
          Schedule a free consultation with our team today.
        </p>
        <button className="cta-btn" onClick={() => navigate("/appointment")}>
          Book a Consultation
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <div className="footer-logo">ARCTITECH</div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
              Creating timeless architecture that inspires and transforms.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "24px" }}>Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/project" className="footer-link">Projects</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/appointment" className="footer-link">Appointment</Link>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "24px" }}>Legal</h4>
            <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
            <Link to="/TearmsCondition" className="footer-link">Terms of Service</Link>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "24px" }}>Contact</h4>
            <p className="footer-link">Pune, Maharashtra</p>
            <p className="footer-link">+91 98765 43210</p>
            <p className="footer-link">info@arctitech.com</p>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} ARCTITECH. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;