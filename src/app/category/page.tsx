// src/app/(auth)/login/page.tsx
'use client';
import Header from '@components/layouts/header';
import Footer from '@components/layouts/footer';
import Head from './components/SearchHeader';
import Hero from './components/ProductListing';
import Brands from './components/brands';


export default function categoryPage() {


  return (
  
    <main className="min-h-screen bg-white">
     <Header />
     <Head />
      <Hero/>
      <Brands />
     <Footer />
    </main>
  );
}