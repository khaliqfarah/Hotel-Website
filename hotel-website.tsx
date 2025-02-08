import React from 'react';
import { useState } from 'react';
import { Calendar, Search, Phone, Mail, MapPin, Star, ChevronRight } from 'lucide-react';

const HotelWebsite = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const rooms = [
    {
      title: 'Deluxe Ocean Suite',
      price: '$299',
      description: 'Luxurious suite with panoramic ocean views',
      amenities: ['King bed', 'Ocean view', 'Private balcony', 'Mini bar']
    },
    {
      title: 'Garden Villa',
      price: '$459',
      description: 'Spacious villa surrounded by tropical gardens',
      amenities: ['2 bedrooms', 'Private pool', 'Garden view', 'Kitchen']
    },
    {
      title: 'Executive Room',
      price: '$199',
      description: 'Modern comfort for business travelers',
      amenities: ['Queen bed', 'Work desk', 'City view', 'Coffee maker']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-800">Ocean Vista Resort</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Rooms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Dining</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Spa</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="/api/placeholder/1920/600"
          alt="Luxury hotel exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Experience Luxury</h1>
          <p className="text-xl mb-8">Where comfort meets elegance</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto -mt-16 relative z-10 bg-white rounded-lg shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-in</label>
            <div className="mt-1 relative">
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
              <Calendar className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Check-out</label>
            <div className="mt-1 relative">
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
              <Calendar className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Guests</label>
            <select
              className="mt-1 w-full p-2 border rounded"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={`/api/placeholder/400/300`}
                alt={room.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{room.title}</h3>
                  <span className="text-lg font-semibold text-blue-600">
                    {room.price}<span className="text-sm text-gray-500">/night</span>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="space-y-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {amenity}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ocean Vista Resort</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Coastal Drive, Paradise Bay</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@oceanvista.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for special offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 rounded-l text-gray-800"
                />
                <button className="bg-blue-600 px-4 rounded-r hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HotelWebsite;
