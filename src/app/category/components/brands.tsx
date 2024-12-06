import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo1 from '../../../../public/product/Screenshot 2024-12-05 134338.png';
import logo2 from '../../../../public/product/Screenshot 2024-12-05 134356.png';
import logo3 from '../../../../public/product/Screenshot 2024-12-05 134414.png';
import logo4 from '../../../../public/product/Screenshot 2024-12-05 134338.png';
import logo5 from '../../../../public/product/Screenshot 2024-12-05 134414.png';

const LogoCarousel: React.FC = () => {
  const logos = [
    { id: 1, name: 'Logo 1', image: logo1 },
    { id: 2, name: 'Logo 2', image: logo2 },
    { id: 3, name: 'Logo 3', image: logo3 },
    { id: 4, name: 'Logo 4', image: logo4 },
    { id: 5, name: 'Logo 5', image: logo5 },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return; // Ensure carousel is not null

    // Clone logos to create seamless loop
    const firstClone = carousel.cloneNode(true);
    carousel.appendChild(firstClone);

    // Start animation
    const animation = carousel.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-100%)` },
      ],
      {
        duration: 15000, // Adjust speed here (ms)
        iterations: Infinity,
        easing: 'linear',
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <div className="w-full bg-sky-50 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div
          className="flex items-center gap-12"
          ref={carouselRef}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="flex-shrink-0">
              <Image
                src={logo.image}
                alt={logo.name}
                className="h-full w-full object-contain"
                width={200} // Adjust width dynamically as needed
                height={100} // Adjust height dynamically as needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
