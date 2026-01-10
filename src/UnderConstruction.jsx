import logo from './assets/img/global-aid-blue.svg'
import './UnderConstruction.css'

function UnderConstruction() {
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
