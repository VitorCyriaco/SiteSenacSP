'use client';

import { useRef } from 'react';

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollTo({
        left: direction === 'left'
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex items-center justify-between my-24 mx-auto w-[80%] relative z-0 gap-1">
      <button
        onClick={() => scroll('left')}
        className="bg-black/30 h-[466px] w-[98px] absolute left-0 backdrop-blur-sm hover:bg-black/10 z-10"
      ></button>

      <div
        ref={carouselRef}
        className="w-full mx-auto overflow-x-auto mt-12 pb-12 carrosel scroll-smooth"
      >
        <div className="flex gap-10 w-max">
          {['carroselImg1.png', 'carroselImg2.png', 'carroselImg3.png', 'carroselImg4.png', 'carroselImg5.png'].map(
            (img, index) => (
              <img
                key={index}
                className="h-[466px] w-[300px] object-cover rounded-lg flex-shrink-0"
                src={`img/${img}`}
                alt={`Slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>

      <button
        onClick={() => scroll('right')}
        className="bg-black/30 h-[466px] w-[98px] absolute right-0 backdrop-blur-sm hover:bg-black/10 z-10"
      ></button>
    </div>
  );
}