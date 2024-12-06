'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import p1 from '../../../../public/product/p1.png';
import { useRouter } from 'next/navigation';





interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'The Retinol',
      price: 1250,
      image: '/product/p1.png',
      quantity: 1
    },
    {
      id: 2,
      name: 'Salicylic Acid',
      price: 2500,
      image: '/product/p1.png',
      quantity: 1
    },
    {
      id: 3,
      name: 'Pimple Master',
      price: 3500,
      image: '/product/p1.png',
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState<string>('');
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout');
  };
  const updateQuantity = (id: number, change: number): void => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 1500;
  const deliveryFee = 500;
  const total = subtotal - discount + deliveryFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white md:bg-black/50 flex items-start md:items-center justify-center md:p-2 z-50">
      <div className="bg-white w-full h-full md:h-auto md:rounded-2xl md:max-w-4xl md:w-full">
        <div className="p-6">
          {/* Breadcrumb and Header */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center text-sm text-black gap-2">
              <span>Products</span>
              <span>/</span>
              <span>Cart</span>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black">Your cart</h2>
              <button onClick={onClose} className="text-black hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1 space-y-6 text-black bg-white p-8 rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4 pb-6 border-b ">
                  <div className="w-20 h-20 relative bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={p1}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg mb-1">{item.name}</h3>
                    <p className="text-lg font-semibold">LKR {item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-sm"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button className="text-red-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 bg-whiterounded-xl text-black">
              <div className="space-y-4  p-8 rounded-lg shadow-md ">
                <h3 className="text-lg font-semibold">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>LKR {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount (-20%)</span>
                    <span className="text-red-500">LKR {discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>LKR {deliveryFee}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-3 border-t">
                    <span>Total</span>
                    <span>LKR {total}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm"
                    />
                    <button className="px-4 py-2 bg-navy-900 text-white rounded-lg text-sm">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
      className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
      onClick={handleCheckout}
    >
      Go to Checkout
      <span className="text-xl">→</span>
    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;