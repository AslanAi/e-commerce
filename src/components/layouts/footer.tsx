import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-sky-50 pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-[#00142D] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 translate-x-16 translate-y-16" />
          <h2 className="text-white text-3xl font-semibold mb-8">
            Subscribe to our newsletter for exclusive offers.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-900 flex items-center justify-center text-white rounded">
                <span className="text-xl">+</span>
              </div>
              <span className="text-blue-900 font-bold text-xl">VASHANTHY</span>
            </div>
            <p className="text-gray-600 mb-6">
              Providing the essentials for a healthier life. We deliver trust, quality, and care to every doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-300 transition-colors">
                <span className="sr-only text-blue-900">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-700 flex items-center   justify-center hover:bg-blue-300 transition-colors">
                <span className="sr-only text-blue-900">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-300 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-300 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-900">VASHANTHY</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-gray-900">Our team</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-gray-900">Career</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-900">HELP</h3>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-gray-600 hover:text-gray-900">Customer Support</Link></li>
              <li><Link href="/delivery" className="text-gray-600 hover:text-gray-900">Delivery Details</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-900">PHARMACY</h3>
            <ul className="space-y-3">
              <li><Link href="/promotions" className="text-gray-600 hover:text-gray-900">Promotions</Link></li>
              <li><Link href="/recently-added" className="text-gray-600 hover:text-gray-900">Recently added</Link></li>
              <li><Link href="/best-seller" className="text-gray-600 hover:text-gray-900">Best seller</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 VASHANTHY. Designed for your wellness.
            </p>
            {/* <div className="flex gap-2">
              <img src="/api/placeholder/48/32" alt="Mastercard" className="h-8" />
              <img src="/api/placeholder/48/32" alt="Visa" className="h-8" />
              <img src="/api/placeholder/48/32" alt="PayPal" className="h-8" />
              <img src="/api/placeholder/48/32" alt="Maestro" className="h-8" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;