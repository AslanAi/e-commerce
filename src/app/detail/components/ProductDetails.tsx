'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import p1 from '../../../../public/product/p1.png';
import Image from 'next/image';
import CartModal from './CartModal';



  interface RelatedProduct {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  const ProductDetailsPage: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSize, setSelectedSize] = useState<string>('10 ML');
    
    const relatedProducts: RelatedProduct[] = [
      {
        id: 1,
        name: 'The Retinol',
        price: 'LKR 5000',
        image: '/api/placeholder/200/200'
      },
      {
        id: 2,
        name: 'The Vitamin C22',
        price: 'LKR 3500',
        image: '/api/placeholder/200/200'
      },
      {
        id: 3,
        name: 'Sun Cream',
        price: 'LKR 2500',
        image: '/api/placeholder/200/200'
      },
      {
        id: 4,
        name: 'Cosrx',
        price: 'LKR 2500',
        image: '/api/placeholder/200/200'
      }
    ];
  
    const handleAddToCart = () => {
      setIsCartOpen(true);
    };
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <ol className="flex items-center space-x-2">
          <li><a href="#" className="text-gray-500">Products</a></li>
          <li><span className="text-gray-400 mx-2">/</span></li>
          <li><a href="#" className="text-gray-500">Skin care</a></li>
          <li><span className="text-gray-400 mx-2">/</span></li>
          <li className="text-gray-900">The Retinol</li>
        </ol>
      </nav>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        {/* <div className="bg-white p-8 rounded-lg shadow-xl"> */}
        <Image
           src={p1}
            alt="The Retinol 0.5"
            className="w-full h-auto"
          />
        {/* </div> */}

        {/* Product Info */}
        <div>
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            New!
          </span>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            The Retinol 0.5[oil]
          </h1>

          <p className="text-gray-600 mb-4">
            Super Vitamin E+ Squalene
          </p>

          <p className="text-2xl font-bold text-gray-900 mb-6">
            Rs. 5000.00
          </p>

          <p className="text-gray-600 mb-8">
            A powerful anti-aging formula that combines 0.5% pure retinol with nourishing Vitamin E and hydrating squalane. Designed to reduce fine lines, improve skin texture, and boost overall radiance while locking in moisture for a smoother, youthful glow.
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-2">Quantity</p>
            <div className="flex gap-2">
              {['10 ML', '15ML', '20ML'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded border ${
                    selectedSize === size
                      ? 'border-blue-500 bg-blue-50 text-blue-500'
                      : 'border-gray-200 text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8 text-black">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
            >
              -
            </button>
            <span className="w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="gap-4">
          

            <button 
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Add to Cart
        </button>
    

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
            <button className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800">
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 gap-4 text-black">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between border-b border-gray-200 py-2">
                <span className="text-sm font-medium">How to Use</span>
                <span className="text-gray-500">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between border-b border-gray-200 py-2">
                <span className="text-sm font-medium">Skin Type Suitability</span>
                <span className="text-gray-500">+</span>
              </summary>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between border-b border-gray-200 py-2">
                <span className="text-sm font-medium">Formula</span>
                <span className="text-gray-500">+</span>
              </summary>
            </details>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Related products</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-xl ">
         <Image
           src={p1}
                alt={product.name}
                className="w-full h-auto mb-4"
              />
              <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;