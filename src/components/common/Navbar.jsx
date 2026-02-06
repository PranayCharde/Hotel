import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navigate = useNavigate()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white text-dark-900 shadow-md py-3' : 'bg-transparent text-white py-6'}`}
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate('/')}
        className="text-2xl font-serif font-bold tracking-wider cursor-pointer"
      >
        ELITE HOTELS
      </motion.div>
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
        <motion.button 
          onClick={() => navigate('/about')}
          className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
        >
            About
        </motion.button>
        <motion.button 
          onClick={() => navigate('/rooms')}
          className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
        >
            Rooms
        </motion.button>
        <motion.button
          onClick={() => navigate('/facilities')}
          className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
        >
            Facilities
        </motion.button>
         <motion.button 
          onClick={() => navigate('/offers')}
          className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
        >
            Offers
        </motion.button>
        <motion.button 
          onClick={() => navigate('/contact')}
          className={`hover:text-gold-400 transition bg-transparent border-none cursor-pointer uppercase ${isScrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
        >
            Contact
        </motion.button>
      </div>
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(197, 164, 126, 1)", borderColor: "rgba(197, 164, 126, 1)", color: "#ffffff" }}
        whileTap={{ scale: 0.95 }}
        className={`hidden md:block border px-6 py-2 uppercase text-sm tracking-widest transition ${isScrolled ? 'border-dark-900 text-dark-900 hover:border-gold-500' : 'border-white text-white'}`}
      >
        Book Now
      </motion.button>
    </motion.nav>
  )
}
