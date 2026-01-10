import UnderConstruction from './UnderConstruction'
import Home2 from './Home2'

function App() {
  // Simple path-based routing without react-router
  const path = window.location.pathname
  
  if (path === '/home2') {
    return <Home2 />
  }
  
  return <UnderConstruction />
}

export default App
