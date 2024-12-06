"use client";
import Image from 'next/image';
import img1 from '../../../../public/dbimg.png';
import img2 from '../../../../public/dblogo.png';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Left Section */}
      <div className="w-1/2 p-28">
        <div className="mb-8">
          <Image 
            src={img2}
            alt="Norton Secured" 
            width={150} 
            height={40}
          />
        </div>
        
        <div className="max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            LOREM IPSUM
          </h1>
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Trust Family
          </h2>
          <p className="text-gray-600">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          
          <div className="mt-12">
        
              <Image 
              src={img1}
              alt="logo" 
              width={160}
              height={160}
            />
            
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;