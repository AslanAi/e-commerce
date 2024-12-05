'use client';

import React from 'react';

import Header from '@components/layouts/header';
import Footer from '@components/layouts/footer';
import Hero from './components/hero';
import Product1 from './components/Products';
import Product2 from './components/categories';
import Brands from './components/brands';
import PromoSection from './components/PromoSection';


export default function HomePage() {
   

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <PromoSection />
            <Product1 />
            <Product2 />
            <Brands />
            <Footer />
        </div>
    );
}