import React, { useState, useEffect } from 'react';
import slideOne from '../images/silderOne.png';
import slideTwo from '../images/sliderTwo.jpg';
import slideThree from '../images/sliderThree.jpg';

const slides = [slideOne, slideTwo, slideThree];
const slideTexts = [''];

const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full  w-100 mx-4 sm:mx-8 lg:mx-16  ">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`rounded-[24px] absolute inset-0 h-full w-full  opacity-0 transition-opacity ${
            index === currentSlide ? 'opacity-100' : ''
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        {slideTexts[currentSlide]}
      </div>
    </div>
  );
};

export default BackgroundSlider;
