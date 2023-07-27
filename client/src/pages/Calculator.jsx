import React from 'react';
import CountryForm from './CountryForm';
import bgImage from '../images/bg.jpg';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Flags from "../components/FlagContainer"
import '../components/Price.css'
import Testimonials from "../components/Testimonials.jsx"

const Calculator = () => {
  return <>
  <div className='w-screen'> <Navbar/> </div>
   
    <div className=" relative flex flex-col ">
      
      <div className="relative text-lime-300 ">
      
      </div>
      <div className=" w-8/12 fixed top-0 left-0 z-50 boxit relative flex items-center justify-center m-10 ">
        <div className="ml-80 -mr-40 absolute inset-0 z-0">
          <BackgroundSlider />
        </div>
        <div className="relative z-10 p-10 ml-72">
          <h1 className="font-extrabold text-3xl pb-4 pt-10 text-white">
            All relationships begin with trust.
          </h1>
          <p className="text-white">
            All it takes is just a box to build a lifelong friendship.
          </p>
        </div>
      </div>

      <div className="justify-center m-5 text-center">
        <h2 className="text-2xl font-bold">Why BOXit</h2>
        
        <p2 className="text-l ">
          Competitive pricing options and transparent fee structure. <br />
          Simplify your shipping process with BOXit's user-friendly platform and seamless. <br />
          Experience top-notch customer service with BOXit, ensuring prompt assistance and efficient issue resolution. <br />
          “Not only did we reduce our transit time by 51% by utilizing Sifted’s distribution center modeling, but using their software, we reduced our parcel contract spend by 21%.”
        </p2>
      </div>

      <div className="tm-9 flex flex-col items-center justify-center p-8 space-y-8 sm:flex-row sm:space-x-20 sm:space-y-0">
    
        <div className=" ">
          <h1 className="text-2xl font-bold text-center mb-4 pt-8">GET A QUOTE</h1>
         
          <CountryForm />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold ">We will help you to shop around the world.</h3>
          <button
            type="button"
            className="bg-lime-300 text-black m-8 px-4 py-2 rounded-md hover:bg-blue-600 rounded-full font-bold"
            onClick={() => {
              // Redirect to the desired link when the button is clicked
              window.location.href = 'https://sixtysix.lk/boxit/tracking.php';
            }}
          >
            Request Quote
          </button>
          <button
            type="button"
            className="bg-lime-300 text-black m-8 px-4 py-2 rounded-md hover:bg-blue-600 rounded-full font-bold"
            onClick={() => {
              // Redirect to the desired link when the button is clicked
              window.location.href = 'https://sixtysix.lk/boxit/tracking.php';
            }}
          >
            Track Order
          </button>
          
        </div>
        
      </div>
      <div className='flex justify-center '> <Flags/></div>

      <div><Testimonials/></div>
    
      <div > <Footer/> </div>
      
    </div>
    </>

};

export default Calculator;
