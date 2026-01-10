import { useEffect } from 'react'
import logo from './assets/img/global-aid-blue.svg'
import './UnderConstruction.css'

function UnderConstruction() {
  useEffect(() => {
    // Update page title
    document.title = 'Global Aid Foundation | Coming Soon'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Global Aid Foundation - Nourishing Health. Transforming Lives. Our new website is coming soon. We deliver evidence-based nutrition interventions for chronic disease management.')
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Global Aid Foundation | Coming Soon')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Our new website is coming soon. Global Aid Foundation delivers nutrition programs for chronic disease management.')
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Global Aid Foundation | Coming Soon')
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Our new website is coming soon. Global Aid Foundation delivers nutrition programs for chronic disease management.')
    }
  }, [])

  return (
    <div className="construction-page">
      <div className="construction-content">
        <img src={logo} alt="Global Aid Foundation" className="construction-logo" />
        <h1>Under Construction</h1>
        <p className="construction-tagline">Nourishing Health. Transforming Lives.</p>
        <div className="construction-divider"></div>
        <p className="construction-message">
          We're working on something new. Our full website will be available soon.
        </p>
        <p className="construction-contact">
          Questions? Contact us at{' '}
          <a href="mailto:info@globalaidfoundation.org">info@globalaidfoundation.org</a>
        </p>
      </div>
    </div>
  )
}

export default UnderConstruction
