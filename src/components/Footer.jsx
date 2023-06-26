import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black h-auto   "> 
     
      <div
        className="flex flex-row  text-center pt-2 text-black-400 text-sm pb-8 flex space-x-5 "
      >
        <div className="flex flex-col ">
          <div>About</div>
          <div>Contact</div>
          <div>Calculator</div>

        </div>
        <div className="flex justify-end">© 2023. All rights reserved.</div>
        
      </div>
    </footer>
  );
};

export default Footer;