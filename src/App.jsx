import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnderConstruction from './UnderConstruction'
import Home2 from './Home2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
