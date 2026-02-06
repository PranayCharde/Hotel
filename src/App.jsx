import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Hero from './components/pages/landing page/Hero'
import About from './components/pages/landing page/About'
import Facilities from './components/pages/landing page/Facilities'
import Offers from './components/pages/landing page/Offers'
import RoomsCarousel from './components/pages/landing page/carousel'
import Rooms from './components/pages/Rooms/Rooms'
import AboutPage from './components/pages/About/About'
import FacilitiesPage from './components/pages/Facilities/Facilities'
import Contact from './components/pages/Contact/Contact'
import OffersPage from './components/pages/Offers/Offers'
import Footer from './components/common/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Facilities />
              <RoomsCarousel />
              <Offers />
            </>
          } />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
