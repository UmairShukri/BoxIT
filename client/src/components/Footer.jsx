import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import Icon from '../images/boxitLogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black h-auto m-6 rounded-lg"> 
      <div className="flex flex-row justify-between text-center pt-2 text-black-400 text-sm pb-8 flex space-x-5 space-y-5 m-9  ml-10">
        <div className="flex flex-col font-bold font-serif flex-1">
          <div>About</div>
          <div>Contact</div>
          <div>Calculator</div>
        </div>
        <div className="font-bold font-mono flex-1">  
          <div>FAQs</div>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>

        <div className="flex flex-col items-end flex-1 px-9">
          <img src={Icon} alt="logo" className="h-8 mr-1 md:h-8 md:mr-0 md:ml-2" />
          © 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
