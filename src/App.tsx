import React, { useState } from 'react';
import { Search, Bell, MessageCircle, User, Upload, Link as LinkIcon } from 'lucide-react';

// Sample pin data with updated images
const pins = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=500&h=700",
    title: "Cute Anime Character"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1592513002316-e4fa19c75d73?w=500&h=800",
    title: "Minion Door Art"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&h=700",
    title: "Portrait Photography"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&h=500",
    title: "Nail Art Design"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=800",
    title: "Fashion Style"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1624454002053-21c23850d04c?w=500&h=700",
    title: "Monster Inc Art"
  }
];

const categories = ["All", "Following", "Anime", "Fashion", "Photography", "Nail Art", "Wallpapers", "DIY"];

function App() {
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 px-4 py-2 shadow-sm">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg viewBox="0 0 24 24" width="24" height="24" className="text-red-600">
                <path fill="currentColor" d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.64-.12-1.62.03-2.32.14-.64.92-4.09.92-4.09s-.23-.48-.23-1.18c0-1.1.64-1.92 1.44-1.92.68 0 1 .5 1 1.12 0 .68-.43 1.7-.66 2.64-.19.79.4 1.44 1.18 1.44 1.42 0 2.51-1.5 2.51-3.67 0-1.92-1.37-3.25-3.33-3.25-2.27 0-3.61 1.7-3.61 3.46 0 .68.26 1.41.59 1.81.06.08.07.15.05.23l-.22.92c-.03.13-.12.16-.27.1-1-.47-1.63-1.95-1.63-3.14 0-2.53 1.84-4.85 5.29-4.85 2.77 0 4.93 1.98 4.93 4.62 0 2.76-1.74 4.98-4.16 4.98-.81 0-1.57-.42-1.84-.92l-.5 1.9c-.18.7-.67 1.57-.99 2.1A12 12 0 1 0 12 0z"/>
              </svg>
            </button>
            <button className="font-semibold px-4 py-2 rounded-full bg-black text-white text-sm">
              Home
            </button>
            <button 
              onClick={() => setShowCreatePopup(true)}
              className="px-4 py-2 rounded-full hover:bg-gray-100 text-sm"
            >
              Create
            </button>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2.5 pl-12 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 mt-2 pb-2 px-2 overflow-x-auto scrollbar-hide max-w-screen-2xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap text-sm font-medium transition-colors
                ${index === 0 ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Create Popup */}
      {showCreatePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Create</h2>
              <button 
                onClick={() => setShowCreatePopup(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <button className="w-full flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Create a Pin</div>
                  <div className="text-sm text-gray-500">Share your image as a Pin</div>
                </div>
              </button>
              
              <button className="w-full flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <LinkIcon className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Save from URL</div>
                  <div className="text-sm text-gray-500">Save an image from a website</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Masonry Grid */}
      <div className="pt-28 px-4 max-w-screen-2xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="break-inside-avoid mb-4 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={pin.image}
                  alt={pin.title}
                  className="w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl">
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <button className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700">
                      Save
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;