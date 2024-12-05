import React from 'react';
import Image from 'next/image';
import hero from '../../../../public/hero.png';

const HeroSection = () => {
    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <div className="relative h-[600px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={hero}
                        alt="Hero background"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4">
                    <div className="flex flex-col justify-center h-full max-w-xl">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Order Online
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Order your medications without having to wait
                        </p>
                        <button className="bg-blue-900 text-white px-8 py-3 rounded-full w-fit hover:bg-navy-800 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12  text-black">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black">Free Shipping</h3>
                                <p className="text-sm text-black">Order Over LKR 1000</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12  text-black">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 10h18M7 15h1m4 0h1m4 0h1m-7 4h1m4 0h1m1-4v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h14a2 2 0 012 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black">Quick Payment</h3>
                                <p className="text-sm text-black">100% Secure</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12  text-black">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold  text-black">Big Cashback</h3>
                                <p className="text-sm  text-black">Over 50% Cashback</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12  text-black">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold  text-black">24/7 Support</h3>
                                <p className="text-sm  text-black">Ready for You</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
