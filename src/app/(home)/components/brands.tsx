import React, { useEffect, useState } from 'react';
import logo1 from '../../../../public/product/image.png';
import logo2 from '../../../../public/product/image.png';
import logo3 from '../../../../public/product/image.png';
import logo4 from '../../../../public/product/image.png';
import logo5 from '../../../../public/product/image.png';
import p1 from '../../../../public/product/image.png';
import Image from 'next/image';
const LogoCarousel = () => {
  const [position, setPosition] = useState(0);

  // Logo data
  const logos = [
    { id: 1, name: 'Logo 1', image: logo1 },
    { id: 2, name: 'Logo 2', image: logo2 },
    { id: 3, name: 'Logo 3', image: logo3 },
    { id: 4, name: 'Logo 4', image: logo4 },
    { id: 5, name: 'Logo 5', image: logo5 },
  ];

  // Duplicate logos to create seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setPosition((prev) => {
        // Reset position when reaching end of first set of logos
        if (prev <= -200 * logos.length) { // Adjust -200 for logo width
          return 0;
        }
        return prev - 1; // Adjust speed by changing this value
      });
    }, 20);

    return () => clearInterval(slideTimer);
  }, [logos.length]);

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Sliding container */}
        <div
          className="flex items-center gap-12 transition-transform duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex-shrink-0">
              <Image
               src={p1}
                alt={logo.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
