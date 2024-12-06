import React, { useState } from 'react';
import { Search, ChevronDown ,Heart, Share2} from 'lucide-react';
import p1 from '../../../../public/h.png';
import Image from 'next/image';
import p2 from '../../../../public/product/p1.png';

export default function ProductListing() {
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedCategory, setSelectedCategory] = useState('');

  const brands = [
    'CeraVe',
    'Redwin',
    'The Ordinary',
    'Acnes',
    'Aknircare',
    'Bioderma',
    'Genova',
    'Olaplex',
    'Thymuskin'
  ];
  const products = [
    {
      id: 1,
      name: "Salicylic Acid 2%",
      price: "LAK 2150",
      rating: 4.5,
      reviews: 235,
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Lactic Acid 5%",
      price: "LAK 2050",
      rating: 4.3,
      reviews: 141,
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Niacinamide 10%",
      price: "LAK 2450",
      rating: 4.8,
      reviews: 195,
      image: "/api/placeholder/200/200"
    },
    {
        id: 4,
        name: 'Pimple master',
        price: 'LKR 3500',
        rating: 4,
        reviews: 245,
        image: "/api/placeholder/200/200"
      },
      {
        id: 5,
        name: 'Sun screen',
        price: 'LKR 1500',
        rating: 4,
        reviews: 243,
        image: "/api/placeholder/200/200"
      },
      {
        id: 6,
        name: 'Salicylic Acid',
        price: 'LKR 2500',
        rating: 4,
        reviews: 213,
        image: "/api/placeholder/200/200"
      }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-black">
      {/* Promo Banner */}
    

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0 space-y-6">
      <div>
        <h3 className="font-medium mb-3">Price, LKR</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Stock Status</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
            <span className="ml-2 text-sm">On sale</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
            <span className="ml-2 text-sm">In stock</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="relative">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm appearance-none bg-white"
          >
            <option value="">Select a category</option>
            <option value="skincare">Skincare</option>
            <option value="medication">Medication</option>
            <option value="supplements">Supplements</option>
          </select>
          <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Filter by Brands</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
              <span className="ml-2 text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-6">
   
       

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="bg-white border rounded-lg relative p-4">
          <div className="absolute right-2 top-2 space-y-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50">
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="flex justify-center mb-4">
          <Image 
            src={p2}
              alt={product.name}
              className="w-40 h-40 object-contain"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-base">{product.name}</h3>
            <div className="text-lg font-bold">{product.price}</div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}