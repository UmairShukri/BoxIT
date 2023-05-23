import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-black-400 text-sm pb-8"
      >
        <span>© 2023. All rights reserved.</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;