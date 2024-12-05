import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';
import p1 from '../../../../public/product/image.png';
import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image container */}
      <div className="relative group">
        <Image
           src={p1}
          alt={product.name}
          className="w-full h-48 object-contain bg-gray-50"
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
            <Heart className="w-4 h-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
            <Eye className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-1 truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-blue-900">LKR {product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">LKR {product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-800 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  const promotionalProducts: Product[] = [
    {
      name: "ACNES PURE WHITE CREAM 50G",
      price: "1550",
      originalPrice: "3100",
      discount: 50,
      rating: 4.5,
      reviews: 96,
      image: "/api/placeholder/200/200"
    },
    {
      name: "ADVANCED WEIGHT GAINER 500G",
      price: "4377",
      originalPrice: "5150",
      discount: 15,
      rating: 4,
      reviews: 75,
      image: "/api/placeholder/200/200"
    },
    {
      name: "BABY CHERAMY COLOGNE 100ML",
      price: "425",
      originalPrice: "500",
      discount: 15,
      rating: 4.5,
      reviews: 89,
      image: "/api/placeholder/200/200"
    },
    {
      name: "DETTOL ANTIBACTERIAL SURFACE",
      price: "573",
      originalPrice: "675",
      discount: 15,
      rating: 4.5,
      reviews: 89,
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Promotions Section */}
      <div className="flex items-center gap-3 py-12">
            <div className="w-5 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-lg"></span>
            </div>
            <h2 className="text-2xl text-black font-bold">Todays </h2>
          </div>
   
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
          
            <h2 className="text-2xl text-black font-bold"> Promotion</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5 text-black"  />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-50">
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black" >
          {promotionalProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            {/* <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-lg">★</span>
            </div> */}
            <h2 className="text-2xl font-bold text-black">Best sellers</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-50">
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
          {promotionalProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;