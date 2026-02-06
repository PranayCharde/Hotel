import { motion } from 'framer-motion'

const rooms = [
  {
    id: 1,
    name: "Presidential Suite",
    price: "$1,200",
    size: "1200 sq ft",
    guests: "4 Adults",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    description: "The epitome of luxury living with panoramic city views, private butler service, and an expansive living area."
  },
  {
    id: 2,
    name: "Deluxe Ocean View",
    price: "$650",
    size: "550 sq ft",
    guests: "2 Adults, 1 Child",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    description: "Wake up to the sound of waves in this stunning room featuring a private balcony and premium amenities."
  },
  {
    id: 3,
    name: "Executive King",
    price: "$450",
    size: "450 sq ft",
    guests: "2 Adults",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
    description: "Designed for business and leisure travelers alike, offering a dedicated workspace and supreme comfort."
  },
  {
    id: 4,
    name: "Family Suite",
    price: "$800",
    size: "900 sq ft",
    guests: "2 Adults, 2 Children",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    description: "Spacious accommodation with interconnecting rooms, perfect for families seeking togetherness and privacy."
  }
]

export default function RoomList() {
    return (
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-dark-900 mb-4 font-bold">Our Collection</h2>
             <p className="text-gray-500">Choose the perfect sanctuary for your stay</p>
         </div>
        <div className="grid grid-cols-1 gap-20">
            {rooms.map((room, index) => (
                <motion.div 
                    key={room.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl group">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                            src={room.image} 
                            alt={room.name} 
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex justify-between items-start border-b border-gold-200 pb-4">
                            <div>
                                <h3 className="text-3xl font-serif text-dark-900 mb-2">{room.name}</h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 uppercase tracking-wide">
                                    <span>{room.size}</span>
                                    <span>•</span>
                                    <span>{room.guests}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-serif text-gold-600 font-bold">{room.price}</p>
                                <p className="text-xs text-gray-400">/ Night</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {room.description}
                        </p>

                        <div className="pt-4">
                            <button className="bg-dark-900 text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-gold-600 transition duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    )
}
