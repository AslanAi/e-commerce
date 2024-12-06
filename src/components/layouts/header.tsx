import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="w-full bg-blue-900 text-white py-2 px-4 flex justify-between items-center">
        <div className="text-sm">
          Summer Sale For All Medicine And Free Express Delivery - OFF 50%!
        </div>
        <div className="flex items-center gap-2">
          <Link href="/shop" className="text-sm font-medium hover:underline">
            ShopNow
          </Link>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm">+94 77 8755 4321</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="w-full bg-white py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-navy-900 flex items-center">
              <div className="w-8 h-8 text-blue-900 ">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-blue-900 ml-2">VASHANTHY</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-navy-900 font-medium">
              Home
            </Link>
            <Link href="/category" className="text-gray-700 hover:text-navy-900 font-medium">
              Categories
            </Link>
            <Link href="/detail" className="text-gray-700 hover:text-navy-900 font-medium">
              Offers
            </Link>
            <Link href="/recently-added" className="text-gray-700 hover:text-navy-900 font-medium">
              Recently added
            </Link>
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for Products"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-navy-900"
              />
              <Search className="absolute right-4 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right section - User & Cart */}
          <div className="flex items-center gap-6">
            <Link href="/account" className="text-gray-700 hover:text-navy-900">
              <User className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-navy-900 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-navy-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
