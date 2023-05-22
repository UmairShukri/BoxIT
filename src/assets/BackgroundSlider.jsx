import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgImage1 from '../images/bg.jpg';
import bgImage2 from '../images/silderOne.png';


const BackgroundSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img src={bgImage2} alt="Image 1" className="" />
        </div>
        <div>
          <img src={bgImage1} alt="Image 2" className="" />
        </div>
        
      </Slider>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        shghj
      </div>
    </div>
  );
};

export default BackgroundSlider;
