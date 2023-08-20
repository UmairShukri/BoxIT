import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex overflow-x-scroll snap snap-x justify-start">
      <div className="snap-center p-2">
        <img
          src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=320&h=160&q=80"
          alt="Image 1"
          className="w-full h-40 md:w-60 md:h-32 lg:w-80 lg:h-40"
        />
      </div>
      <div className="snap-center p-2">
        <img
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?w=320&h=160&q=80"
          alt="Image 2"
          className="w-full h-40 md:w-60 md:h-32 lg:w-80 lg:h-40"
        />
      </div>
      <div className="snap-center p-2">
        <img
          src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?w=320&h=160&q=80"
          alt="Image 3"
          className="w-full h-40 md:w-60 md:h-32 lg:w-80 lg:h-40"
        />
      </div>
      <div className="snap-center p-2">
        <img
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=320&h=160&q=80"
          alt="Image 4"
          className="w-full h-40 md:w-60 md:h-32 lg:w-80 lg:h-40"
        />
      </div>
      <div className="snap-center p-2">
        <img
          src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?w=320&h=160&q=80"
          alt="Image 5"
          className="w-full h-40 md:w-60 md:h-32 lg:w-80 lg:h-40"
        />
      </div>
      <div className="snap-center p-2">
        <img
          src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?w=320&h=160&q=80"
          alt="Image 6"
          className="w-full h-40 md:w-60 md:h-32 lg:w-80 lg:h-40"
        />
      </div>
    </div>
  );
}
