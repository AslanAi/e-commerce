import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';
import p1 from '../../../../public/product/image.png';
import Image from 'next/image';


interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  rating?: number;
  reviews?: number;
  showAddToCart?: boolean;
}

const ProductGrid: React.FC<{ 
  title: string; 
  products: Product[]; 
  compact?: boolean;
}> = ({ title, products, compact = false }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-black font-bold">{title}</h2>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-full border hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4 text-black" />
          </button>
          <button className="p-1.5 rounded-full border hover:bg-gray-50">
            <ChevronRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {products.map((product) => (
    <div 
      key={product.id} 
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
    >
      <div className="relative group">
        <Image
          src={p1}
          alt={product.name}
          className="w-full aspect-square object-contain p-4 bg-gray-50"
        />
        {!compact && (
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50">
              <Heart className="w-3.5 h-3.5 text-black" />
            </button>
            <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50">
              <Eye className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium mb-1 truncate text-black">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-black">LKR {product.price}</span>
          {product.rating && product.reviews && (
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => {
                  const rating = product.rating || 0; // Provide default value
                  return (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  );
                })}
              </div>
              <span className="text-xs text-black">({product.reviews})</span>
            </div>
          )}
        </div>
        {product.showAddToCart && (
          <button className="w-full mt-3 bg-black text-white py-1.5 text-sm rounded hover:bg-navy-800 transition-colors">
            Add To Cart
          </button>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

const ProductShowcase: React.FC = () => {
  const recentlyAdded: Product[] = [
    {
      id: '1',
      name: 'The Retinol',
      price: '4000',
      image: '/api/placeholder/200/200',
    },
    {
      id: '2',
      name: 'The Vitamin C23',
      price: '5450',
      image: '/api/placeholder/200/200',
    },
    {
      id: '3',
      name: 'Snail Cream',
      price: '850',
      image: '/api/placeholder/200/200',
    },
    {
      id: '4',
      name: "Cosrx's",
      price: '200',
      image: '/api/placeholder/200/200',
    },
    {
      id: '5',
      name: 'Salicylic Acid',
      price: '2100',
      image: '/api/placeholder/200/200',
    },
    {
      id: '6',
      name: 'Multi-Power Essence',
      price: '3499',
      image: '/api/placeholder/200/200',
    },
    {
      id: '7',
      name: 'Cleanser',
      price: '2000',
      image: '/api/placeholder/200/200',
    },
    {
      id: '8',
      name: 'Invisible Sunscreen',
      price: '3450',
      image: '/api/placeholder/200/200',
    }
  ];

  const skinCare: Product[] = [
    {
      id: '1',
      name: 'Perfectil - SKIN CARE',
      price: '1999',
      image: '/api/placeholder/200/200',
      rating: 4.5,
      reviews: 96,
      showAddToCart: true
    },
    {
      id: '2',
      name: 'U SOFT - 10',
      price: '850',
      image: '/api/placeholder/200/200',
      rating: 4,
      reviews: 75,
      showAddToCart: true
    },
    {
      id: '3',
      name: 'OCTOSCRUB - PEELING SERUM',
      price: '5500',
      image: '/api/placeholder/200/200',
      rating: 4.5,
      reviews: 89,
      showAddToCart: true
    },
    {
      id: '4',
      name: 'VELD GEL',
      price: '1500',
      image: '/api/placeholder/200/200',
      rating: 4.5,
      reviews: 92,
      showAddToCart: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProductGrid title="Recently Added" products={recentlyAdded} compact />
      <ProductGrid title="Skin Care" products={skinCare} />
    </div>
  );
};

export default ProductShowcase;