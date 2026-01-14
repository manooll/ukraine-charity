import { useState, useEffect } from 'react'
import logo from './assets/img/global-aid-blue.svg'
import logoWhite from './assets/img/global-aid.svg'
import './App.css'

function Home2() {
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

  // Update SEO meta tags for full site
  useEffect(() => {
    const pageTitle = 'Global Aid Foundation | Advancing Health Equity Through Nutrition'
    const pageDescription = 'Global Aid Foundation advances health equity by addressing food insecurity, nutrition education, and pathways to care for individuals with or at risk for diet-related chronic diseases.'
    const shortDescription = 'We advance health equity by addressing food insecurity, nutrition education, and pathways to care for underserved communities.'

    document.title = pageTitle

    // Primary meta tags
    const metaTitle = document.querySelector('meta[name="title"]')
    if (metaTitle) metaTitle.setAttribute('content', pageTitle)

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', pageDescription)

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', pageTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', shortDescription)

    // Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle)

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) twitterDescription.setAttribute('content', shortDescription)
  }, [])

  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Approach', href: '#approach' },
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
      <section className="hero" id="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">Global Aid Foundation</h1>
            <p className="hero-tagline">Nourishing Health. Transforming Lives.</p>
            <a href="#mission" className="btn btn-primary btn-large">
              Learn About Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section" id="mission" aria-labelledby="mission-title">
        <div className="container">
          <article itemScope itemType="https://schema.org/Article">
            <header className="section-header">
              <h2 id="mission-title" className="section-title" itemProp="headline">Our Mission</h2>
              <div className="accent-bar" aria-hidden="true"></div>
            </header>
            <div className="mission-content" itemProp="articleBody">
              <p className="section-text">
                Our mission is to advance health equity by addressing the social determinants of health
                that most profoundly shape people's lives—food insecurity, access to nutrition education,
                and pathways to care. We believe that lasting improvements in health outcomes begin beyond
                the clinical setting, in the everyday conditions where individuals and families live, work,
                and grow.
              </p>
              <p className="section-text">
                Our mission is centered on benefiting individuals living with, or at risk for, conditions
                that can be prevented, managed, or even reversed through proper diet and targeted education.
                By equipping people with the knowledge and ongoing support they need, we empower them to
                take an active role in improving their health and long-term well-being.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section className="section section-alt" id="objectives" aria-labelledby="objectives-title">
        <div className="container">
          <article itemScope itemType="https://schema.org/Article">
            <header className="section-header">
              <h2 id="objectives-title" className="section-title" itemProp="headline">Our Objectives</h2>
              <div className="accent-bar" aria-hidden="true"></div>
              <p className="section-intro">We are committed to:</p>
            </header>
            <ul className="objectives-list" role="list" itemProp="articleBody">
              <li role="listitem">Reducing food insecurity and improving access to nutritious, culturally appropriate meals.</li>
              <li role="listitem">Expanding nutrition education to empower individuals and families to make informed, sustainable choices.</li>
              <li role="listitem">Supporting preventive care and nutrition-based interventions for individuals living with, or at risk for, diet-related chronic diseases such as diabetes, cardiovascular disease, and obesity.</li>
              <li role="listitem">Serving those who can significantly benefit from improved nutrition, particularly individuals whose conditions can be prevented, managed, or improved through proper diet and targeted education.</li>
              <li role="listitem">Advancing health equity by removing barriers to care for underserved and vulnerable populations.</li>
              <li role="listitem">Strengthening value-based care efforts by helping improve outcomes while reducing avoidable healthcare costs.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <article itemScope itemType="https://schema.org/Article">
            <header className="section-header">
              <h2 id="approach-title" className="section-title" itemProp="headline">Our Approach</h2>
              <div className="accent-bar" aria-hidden="true"></div>
            </header>
            <div className="approach-content" itemProp="articleBody">
              <p className="section-text">
                We achieve our mission through community-centered programs and strategic partnerships with
                clinical providers and other mission-aligned organizations across healthcare, public health,
                and social services.
              </p>
              <p className="section-text">
                By integrating nutrition interventions, preventive care, and sustained lifestyle support,
                we extend our impact into both community and clinical settings. Our work is grounded in
                evidence-based practices and designed to complement value-based care models that prioritize
                outcomes, accountability, and patient-centered care.
              </p>
              <p className="section-text">
                Through collaboration, innovation, and a shared commitment to equity, we help build healthier
                communities—ensuring that access to nutritious food, education, and care is not a privilege
                but a fundamental foundation for well-being.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta" id="partner">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Partner With Us</h2>
            <p className="cta-text">
              Through collaboration, innovation, and a shared commitment to equity, we can build
              healthier communities together. Join us in ensuring that access to nutritious food,
              education, and care is not a privilege but a fundamental foundation for well-being.
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

export default Home2
