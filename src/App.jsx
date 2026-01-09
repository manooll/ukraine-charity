import { useState, useEffect } from 'react'
import logo from './assets/img/global-aid-blue.svg'
import logoWhite from './assets/img/global-aid.svg'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'The Problem', href: '#problem' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'Impact', href: '#impact' },
    { label: 'Partner With Us', href: '#partner' },
  ]

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Header */}
      <header className="header" role="banner">
        <div className="container header-inner">
          <a href="/" className="logo" aria-label="Global Aid Foundation - Home">
            <img src={logo} alt="" aria-hidden="true" />
          </a>
          
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile overlay backdrop */}
          <div 
            className={`nav-overlay ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <nav 
            id="main-nav"
            className={`nav ${menuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#partner" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Get Involved
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main">
      {/* Hero Section */}
      <section className="hero" id="about" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">Global Aid Foundation</h1>
            <p className="hero-tagline">Nourishing Health. Transforming Lives.</p>
            <p className="hero-text">
              Nutrition and food are not a luxury—they are essential to health. Yet millions of 
              Americans living with chronic conditions like diabetes, heart disease, and kidney 
              disease lack access to both the expert guidance and the foods their bodies need to 
              heal. This gap between clinical care and the kitchen table is where health outcomes 
              are lost and healthcare costs spiral.
            </p>
            <p className="hero-mission">
              <strong>Global Aid Foundation exists to close that gap.</strong>
            </p>
            <p className="hero-text">
              We partner with healthcare systems, community organizations, and government programs 
              to deliver evidence-based nutrition interventions to those who need them most. Our 
              approach combines clinical expertise with practical support: registered dietitians 
              who create personalized care plans, and medically tailored meals that make following 
              those plans possible—even when resources are scarce.
            </p>
            <a href="#solution" className="btn btn-primary btn-large">
              Learn How We Help
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section section-alt" id="problem">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Problem</h2>
            <div className="accent-bar"></div>
          </div>
          <div className="problem-content">
            <div className="stat-highlight">
              <span className="stat-number">44M+</span>
              <span className="stat-label">Americans face food insecurity</span>
            </div>
            <p className="section-text">
              For individuals managing chronic disease, poor nutrition doesn't just mean hunger—it 
              leads to preventable hospitalizations, uncontrolled conditions, and shortened lives. 
              Traditional healthcare rarely addresses what happens after the prescription is written 
              and the patient goes home without the knowledge, support, or resources to eat for 
              their health.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section" id="solution">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Solution</h2>
            <div className="accent-bar"></div>
            <p className="section-intro">
              Through our clinical partner LifeChef Health, we deliver an integrated, clinically 
              aligned care model that treats nutrition as the foundation of health:
            </p>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="solution-title">Registered Dietitian Services</h3>
              <p className="solution-text">
                Licensed RDs conduct comprehensive assessments, develop individualized Medical 
                Nutrition Therapy plans, and provide ongoing counseling. They coordinate directly 
                with physicians and care teams to ensure nutrition is woven into every aspect of treatment.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="solution-title">Medically Tailored Meals</h3>
              <p className="solution-text">
                Designed by dietitians for specific diagnoses, our meals remove the barriers between 
                knowing what to eat and actually eating it. For patients lacking time, ability, or 
                access, we deliver chef-prepared meals that align precisely with their care plans.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="solution-title">Nutrition Education</h3>
              <p className="solution-text">
                We empower patients and caregivers with practical, condition-specific knowledge that 
                supports long-term behavior change and sustainable health beyond clinical intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section section-alt" id="impact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Impact</h2>
            <div className="accent-bar"></div>
          </div>
          <p className="section-text impact-text">
            Every interaction—whether a counseling session or a delivered meal—reduces emergency 
            room visits, improves medication adherence, and restores hope. We measure success not 
            just in services provided, but in A1C levels lowered, hospital readmissions prevented, 
            and lives extended.
          </p>
          <div className="impact-metrics" role="list" aria-label="Key impact areas">
            <div className="metric" role="listitem">
              <span className="metric-icon" aria-hidden="true">📉</span>
              <span className="metric-label">A1C Levels Lowered</span>
            </div>
            <div className="metric" role="listitem">
              <span className="metric-icon" aria-hidden="true">🏥</span>
              <span className="metric-label">Hospital Readmissions Prevented</span>
            </div>
            <div className="metric" role="listitem">
              <span className="metric-icon" aria-hidden="true">❤️</span>
              <span className="metric-label">Lives Extended</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta" id="partner">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Health Equity Starts at the Table</h2>
            <p className="cta-text">
              Zip code and income should never determine health destiny. Together, we can ensure 
              that every person managing chronic disease has access to the nutrition expertise and 
              nourishing food their body needs to heal.
            </p>
            <p className="cta-highlight">
              Partner with us to close the gap between healthcare and the kitchen table.
            </p>
            <a href="mailto:info@globalaidfoundation.org" className="btn btn-white btn-large">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoWhite} alt="Global Aid Foundation" className="footer-logo" />
            <p>Nourishing Health. Transforming Lives.</p>
          </div>
          <div className="footer-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Global Aid Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
