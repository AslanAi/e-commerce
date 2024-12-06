'use client';

import React from 'react';
import Header from '@components/layouts/header';
import Footer from '@components/layouts/footer';
import Hero from './components/ProductDetails';

export default function Detail() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}


