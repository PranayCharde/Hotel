export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-transparent px-8 py-4 flex justify-between items-center text-white">
      <div className="text-2xl font-serif font-bold tracking-wider">ELITE HOTELS</div>
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
        <a href="" className="hover:text-gold-400 transition">About</a>
        <a href="#" className="hover:text-gold-400 transition">Rooms</a>
        <a href="https://sebastien-lempens.com/" className="hover:text-gold-400 transition">Facilities</a>
        <a href="#" className="hover:text-gold-400 transition">Blogs</a>
        <a href="#" className="hover:text-gold-400 transition">Contact</a>
      </div>
      <button className="hidden md:block border border-white px-6 py-2 uppercase text-sm tracking-widest hover:bg-gold-500 hover:border-gold-500 transition">
        Book Now
      </button>
    </nav>
  )
}
