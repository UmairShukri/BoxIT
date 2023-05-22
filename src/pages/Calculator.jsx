import React from 'react';
import CountryForm from './Countryform';
import bgImage from '../images/bg.jpg';
import BackgroundSlider from '../assets/BackgroundSlider';
import Navbar from '../assets/Navbar';

const Calculator = () => {
  return (
    <div className="flex flex-col">
     

      <div className="boxit relative flex items-center justify-center m-8 ">
        <div className="absolute inset-0 z-0">
          <BackgroundSlider />
        </div>
        <div className="relative z-10 p-10">
          <h1 className="font-extrabold text-3xl pb-4 pt-10 text-white">
            All relationships begin with trust.
          </h1>
          <p className="text-white">
            All it takes is just a box to build a lifelong friendship.
          </p>
        </div>
      </div>
      <div   className=' justify-center m-8  '>
        <h2 className="">  Why BOXit</h2> 
                <p2>Competitive pricing options and transparent fee structure.
Simplify your shipping process with BOXit's user-friendly platform and seamless.
Experience top-notch customer service with BOXit, ensuring prompt assistance 
and  efficient issue resolution.
“Not only did we reduce our transit time by 51% by utilizing Sifted’s distribution center modeling, but using their software, we reduced our parcel contract spend by 21%.”
</p2>
      </div>

      <div className="flex items-center  m-8">
  <div className="w-80 p-4 border-2 border-gray-500 bg-white bg-cover bg-center w-683 h-819 left-305 top-1261 bg-gray-200 rounded-lg">
    <h1 className="text-xl font-bold">GET A QUOTE</h1>
    <CountryForm />
  </div>
</div>

    </div>
  );
};

export default Calculator;

