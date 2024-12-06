import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import promo from '../../../../public/promo.png';
import promo2 from '../../../../public/promo2.png';

const PromoSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Promo Card */}
        <div className=" rounded-2xl overflow-hidden  h-[350px]">
          <div className="flex items-center bg-blue-300">
            <div className="p-8 flex-1 h-[350px]">
              <span className="text-lg font-semibold">Big Sale</span>
              <h2 className="text-4xl font-bold mt-2">
                Get an Extra{' '}
                <span className="text-blue-600">50% Off</span>
              </h2>
              <p className="text-gray-600 mt-2">In limited products</p>
            </div>
            <div className="flex-1">
           
           < Image 
             src={promo}
             alt="Pharmacist checking medication"
             className="w-full h-full object-cover"
           />
         </div>
          </div>
        
        </div>

        {/* Second Promo Card */}
        <div className="bg-cyan-500 rounded-2xl overflow-hidden relative h-[350px] flex flex-col justify-between">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src={promo2}
              alt="Medicine background"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-cyan-500/70" />
          </div>

          {/* Content */}
          <div className="p-8 relative z-10">
            <p className="text-lg text-white max-w-xs">
              Take the discount for the first shopping on our website
            </p>
            {/* Decorative Circles */}
            <div className="absolute top-10 right-10 flex gap-1">
              <div className="w-5 h-5  top-10 right-10 bg-white/30 rounded-full"></div>
              <div className="w-5 h-5 top-10 right-10 bg-white/30 rounded-full"></div>
              <div className="w-5 h-5  top-10 right-10 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-8 relative z-10 flex items-end justify-between">
            <span className="text-6xl font-bold text-white">30%</span>
            <Link 
              href="/shop"
              className="px-6 py-2 bg-white rounded-full font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;