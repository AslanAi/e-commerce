import React from 'react';
import { Search, Heart, ShoppingCart, Menu } from 'lucide-react';
import p1 from '../../../../public/h.png';
import Image from 'next/image';
export default function SearchHeader() {
  const categories = [
    'Best Sellers',
    'New Releases',
    'Books',
    'Computers',
    'Fashion',
    'Health',
    'Pharmacy',
    'Toys & Games'
  ];

  return (
    <div className="w-full text-black">
      {/* Banner */}
      <div className="bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
          <Image src={p1} alt="Medicine banner" />
          </div>
          {/* <div className="text-right">
            <div className="text-teal-600 text-5xl font-bold mb-1">20%<span className="text-2xl">OFF</span></div>
            <div className="text-teal-600 text-lg mb-1">On your Medicine Orders</div>
            <div className="bg-teal-800 text-white px-3 py-1 rounded inline-block mb-2">
              Coupon Code: <span className="text-orange-400 font-medium">PULSECB20</span>
            </div>
            <div className="flex gap-2 justify-end">
              <span className="bg-teal-300 text-white px-4 py-1 rounded">10% OFF</span>
              <span className="bg-orange-400 text-white px-4 py-1 rounded">+ 10% CASHBACK</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto py-4 px-4 flex items-center gap-8">
          <button className="flex items-center gap-2 text-sm">
            <Menu size={20} />
            Categories
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Salicylic acid"
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm">
              Orders
            </button>
            <button className="flex items-center gap-1 text-sm">
              <Heart size={20} />
              Favorites
            </button>
            <button className="flex items-center gap-1 text-sm">
              <ShoppingCart size={20} />
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex gap-6 text-sm">
            {categories.map(category => (
              <button key={category} className="hover:text-blue-600">
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>Found 47 results for <span className="text-blue-500">Salicylic acid</span></div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="border rounded px-2 py-1">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
          </select>
          <button className="ml-2 p-1 border rounded">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}