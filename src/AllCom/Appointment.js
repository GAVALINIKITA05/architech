import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Appointment.css"; // import the CSS file

export default function Appointment() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    projectType: "",
    budget: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Background image URL for header
  const headerBgImage = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  useEffect(() => {
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'projectType'];
    const filledRequired = requiredFields.filter(field => formData[field]?.trim()).length;
    const progress = (filledRequired / requiredFields.length) * 100;
    setFormProgress(progress);
  }, [formData]);

  // Validation functions (unchanged - keep as is)
  const validateName = (name) => { /* ... same as original ... */ };
  const validateEmail = (email) => { /* ... same as original ... */ };
  const validatePhone = (phone) => { /* ... same as original ... */ };
  const validateDate = (date) => { /* ... same as original ... */ };
  const validateTime = (time) => { /* ... same as original ... */ };
  const validateProjectType = (projectType) => { /* ... same as original ... */ };
  const validateBudget = (budget) => { /* ... same as original ... */ };
  const validateMessage = (message) => { /* ... same as original ... */ };
  const validateField = (name, value) => { /* ... same as original ... */ };
  const validateForm = () => { /* ... same as original ... */ };

  // Handlers (unchanged)
  const handleChange = (e) => { /* ... same as original ... */ };
  const handleBlur = (e) => { /* ... same as original ... */ };
  const handleSubmit = async (e) => { /* ... same as original ... */ };

  const timeSlots = [ /* ... same as original ... */ ];
  const getAvailableTimeSlots = () => { /* ... same as original ... */ };
  const availableTimeSlots = getAvailableTimeSlots();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const getEmailSuggestion = (email) => { /* ... same as original ... */ };
  const formatIndianCurrency = (amount) => { /* ... same as original ... */ };

  const features = [ /* ... same as original ... */ ];
  const footerLinks = { /* ... same as original ... */ };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* FIXED HEADER WITH NAVIGATION */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => handleNavigation('/')}>
            ARCTITECH
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <button 
              className={`nav-link ${window.location.pathname === '/' ? 'nav-link-active' : ''}`} 
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${window.location.pathname === '/about' ? 'nav-link-active' : ''}`} 
              onClick={() => handleNavigation('/about')}
            >
              About
            </button>
            <button 
              className={`nav-link ${window.location.pathname === '/contact' ? 'nav-link-active' : ''}`} 
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </button>
            <button 
              className={`nav-link ${window.location.pathname === '/services' ? 'nav-link-active' : ''}`} 
              onClick={() => handleNavigation('/services')}
            >
              Services
            </button>
            <button 
              className={`nav-link ${window.location.pathname === '/project' ? 'nav-link-active' : ''}`} 
              onClick={() => handleNavigation('/project')}
            >
              Projects
            </button>
            <button 
              className={`nav-link ${window.location.pathname === '/appointment' ? 'nav-link-active' : ''}`} 
              onClick={() => handleNavigation('/appointment')}
            >
              Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <button 
            className={`mobile-nav-link ${window.location.pathname === '/' ? 'mobile-nav-link-active' : ''}`} 
            onClick={() => handleNavigation('/')}
          >
            Home
          </button>
          <button 
            className={`mobile-nav-link ${window.location.pathname === '/about' ? 'mobile-nav-link-active' : ''}`} 
            onClick={() => handleNavigation('/about')}
          >
            About
          </button>
          <button 
            className={`mobile-nav-link ${window.location.pathname === '/contact' ? 'mobile-nav-link-active' : ''}`} 
            onClick={() => handleNavigation('/contact')}
          >
            Contact
          </button>
          <button 
            className={`mobile-nav-link ${window.location.pathname === '/services' ? 'mobile-nav-link-active' : ''}`} 
            onClick={() => handleNavigation('/services')}
          >
            Services
          </button>
          <button 
            className={`mobile-nav-link ${window.location.pathname === '/project' ? 'mobile-nav-link-active' : ''}`} 
            onClick={() => handleNavigation('/project')}
          >
            Projects
          </button>
          <button 
            className={`mobile-nav-link ${window.location.pathname === '/appointment' ? 'mobile-nav-link-active' : ''}`} 
            onClick={() => handleNavigation('/appointment')}
          >
            Appointment
          </button>
        </div>
      </header>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url(${headerBgImage})`
        }}
      >
        <div className="hero-content">
          <span className="hero-badge">Book Your Consultation</span>
          <h1 className="hero-title">
            Book Your <span className="hero-highlight">Architectural</span> Consultation
          </h1>
          <p className="hero-subtitle">
            Let's discuss your vision and bring your ideas to life. 
            Choose a time that works best for you.
          </p>
        </div>
      </section>

      <main className="main-container">
        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-title">Form Completion</span>
            <span className="progress-percentage">{Math.round(formProgress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${formProgress}%` }} />
          </div>
        </div>

        <div className="main-grid">
          <aside className="sidebar">
            <h2 className="sidebar-title">Let's Create Something Amazing</h2>
            <p className="sidebar-text">
              Schedule a personalized consultation with our expert architectural team.
            </p>

            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <div className="info-label">Visit Our Studio</div>
                  <div className="info-value">Pune, Maharashtra 411001</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <div className="info-label">Call Us Directly</div>
                  <div className="info-value">+91 98765 43210</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <div className="info-label">Email Us</div>
                  <div className="info-value">consult@arctitech.com</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
                Working Hours
              </h3>
              <div className="hours-item">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item" style={{ borderBottom: 'none' }}>
                <span>Sunday</span>
                <span style={{ color: '#ef4444' }}>Closed</span>
              </div>
            </div>
          </aside>

          <div className="form-section">
            <h2 className="form-title">Book Your Appointment</h2>
            <p className="form-subtitle">
              Fill in your details below and we'll confirm your appointment within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="full-width">
                  <label className="label">
                    <span>👤</span> Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name (e.g., John Doe)"
                    className={`input ${touched.name && errors.name ? 'input-error' : ''}`}
                  />
                  {touched.name && errors.name && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.name}
                    </div>
                  )}
                  {formData.name && !errors.name && (
                    <div className="hint-text">
                      <span>✓</span> Valid name
                    </div>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span>📧</span> Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@gmail.com"
                    className={`input ${touched.email && errors.email ? 'input-error' : ''}`}
                  />
                  
                  {/* Email Suggestions for .com domains */}
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
                              setTouched({...touched, email: true});
                              setErrors({...errors, email: ""});
                            }}
                          >
                            {suggestion.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {touched.email && errors.email && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.email}
                    </div>
                  )}
                  
                  {formData.email && !errors.email && (
                    <div className="hint-text">
                      <span>✓</span> Valid .com email
                    </div>
                  )}
                  
                  {/* Show hint about .com requirement */}
                  {formData.email && formData.email.includes('@') && !formData.email.toLowerCase().endsWith('.com') && (
                    <div className="hint-text" style={{ color: '#ef4444' }}>
                      <span>ℹ️</span> Only .com email addresses are accepted (e.g., name@gmail.com)
                    </div>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span>📱</span> Mobile Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="9876543210"
                    maxLength="10"
                    className={`input ${touched.phone && errors.phone ? 'input-error' : ''}`}
                  />
                  {touched.phone && errors.phone && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.phone}
                    </div>
                  )}
                  {formData.phone && !errors.phone && (
                    <div className="hint-text">
                      <span>✓</span> Valid Indian mobile number
                    </div>
                  )}
                  {formData.phone && formData.phone.length > 0 && (
                    <div className="hint-text">
                      {formData.phone.length}/10 digits
                    </div>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span>📅</span> Preferred Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    min={new Date().toISOString().split('T')[0]}
                    className={`input ${touched.date && errors.date ? 'input-error' : ''}`}
                  />
                  {touched.date && errors.date && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.date}
                    </div>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span>🏗️</span> Project Type <span className="required">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`select ${touched.projectType && errors.projectType ? 'input-error' : ''}`}
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">🏠 Residential</option>
                    <option value="commercial">🏢 Commercial</option>
                    <option value="interior">🪑 Interior</option>
                    <option value="renovation">🔨 Renovation</option>
                    <option value="landscape">🌳 Landscape</option>
                  </select>
                  {touched.projectType && errors.projectType && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.projectType}
                    </div>
                  )}
                </div>

                <div>
                  <label className="label">
                    <span>💰</span> Budget Range (₹)
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="500000"
                    maxLength="9"
                    className={`input ${touched.budget && errors.budget ? 'input-error' : ''}`}
                  />
                  {formData.budget && !errors.budget && (
                    <div className="budget-preview">
                      Estimated: {formatIndianCurrency(formData.budget)}
                    </div>
                  )}
                  {touched.budget && errors.budget && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.budget}
                    </div>
                  )}
                  {formData.budget && formData.budget.length > 0 && (
                    <div className="hint-text">
                      Min: ₹1,00,000 | Max: ₹10,00,00,000
                    </div>
                  )}
                </div>

                <div className="full-width">
                  <label className="label">
                    <span>⏰</span> Preferred Time <span className="required">*</span>
                  </label>
                  <div className="time-slot-grid">
                    {timeSlots.map((time) => {
                      const isAvailable = availableTimeSlots.includes(time);
                      const isSelected = formData.time === time;
                      
                      return (
                        <div
                          key={time}
                          className={`time-slot ${isSelected ? 'selected' : ''} ${!isAvailable ? 'disabled' : ''}`}
                          onClick={() => {
                            if (isAvailable) {
                              setFormData({...formData, time});
                              setTouched({...touched, time: true});
                              setErrors({...errors, time: ""});
                            }
                          }}
                        >
                          {time}
                        </div>
                      );
                    })}
                  </div>
                  {touched.time && errors.time && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.time}
                    </div>
                  )}
                </div>

                <div className="full-width">
                  <label className="label">
                    <span>📝</span> Project Details
                    {formData.message && (
                      <span style={{ marginLeft: '8px', fontSize: '12px', color: '#6b7280' }}>
                        ({formData.message.length}/500)
                      </span>
                    )}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project, requirements, and any specific questions you have..."
                    className={`textarea ${touched.message && errors.message ? 'input-error' : ''}`}
                    maxLength={500}
                  />
                  {touched.message && errors.message && (
                    <div className="error-text">
                      <span>⚠️</span> {errors.message}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Processing Request...</>
                ) : (
                  <>
                    <span>📅</span>
                    Book Appointment
                    <span>→</span>
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <div className="success-content">
                  <div className="success-title">
                    Appointment Request Submitted!
                  </div>
                  <div className="success-text">
                    We've sent a confirmation to {formData.email}. Our team will confirm your slot within 24 hours.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="features-section">
          <div className="features-container">
            <h2 className="section-title">Why Choose Our Consultation</h2>
            <p className="section-subtitle">
              Experience a professional consultation tailored to your specific architectural needs
            </p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Logo & Description */}
            <div className="footer-section">
              <div className="footer-logo">ARCTITECH</div>
              <p className="footer-text">
                Creating timeless architecture that inspires and transforms.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/services" className="footer-link">Services</Link>
                <Link to="/project" className="footer-link">Projects</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/appointment" className="footer-link">Appointment</Link>
              </div>
            </div>

            {/* Column 3: Legal */}
            <div className="footer-section">
              <h4 className="footer-title">Legal</h4>
              <div className="footer-links">
                <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
                <Link to="/TermsCondition" className="footer-link">Terms of Service</Link>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <p className="footer-text">contact@arctitech.com</p>
              <p className="footer-text">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} ARCTITECH. All rights reserved.</span>
            <div className="footer-bottom-links">
              <Link to="/PrivacyPolicy" className="footer-bottom-link">Privacy</Link>
              <Link to="/TermsCondition" className="footer-bottom-link">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}