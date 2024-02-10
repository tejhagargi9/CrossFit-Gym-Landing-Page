import React, { useState } from "react";
import Menubar from "./Menubar";

const Navbar2 = () => {

  const [menubarVisible, setMenubarVisible] = useState(false);

  const toggleMenubar = () => {
    setMenubarVisible(!menubarVisible);
  };

  return (
    <div className="navbar2">
      {menubarVisible &&  <Menubar toggleMenubar={toggleMenubar} />}
      <div className="menuimg" onClick={toggleMenubar}>
        <img src="/dots-menu.png" alt="" />
      </div>

      <div className="logo">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
          alt=""
        />
      </div>
      <div className="navbarpart2">
        <a href="">Gym Benefits</a>
        <a href="">Membership</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Start 7 day free trial</a>
      </div>
      
    </div>
  );
};

export default Navbar2;
