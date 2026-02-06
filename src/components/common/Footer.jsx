export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Desc */}
          <div>
            <div className="text-2xl font-serif font-bold tracking-wider mb-6">ELITE HOTELS</div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience the pinnacle of luxury and hospitality. Your perfect getaway awaits.
            </p> 
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-gold-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Facilities</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Special Offers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest text-xs">Contact Us</h4>
             <ul className="space-y-4 text-gray-300">
              <li>123 Luxury Avenue, Paradise City</li>
              <li>+1 (555) 123-4567</li>
              <li>info@elitehotels.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to receive special offers and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-none text-white px-4 py-2 w-full rounded-l-md focus:ring-1 focus:ring-gold-500"
              />
              <button className="bg-gold-500 text-white px-4 py-2 rounded-r-md hover:bg-gold-600 transition">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          &copy; 2026 Elite Hotels. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
