import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'
import Photos from './pages/Photos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="photos" element={<Photos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
