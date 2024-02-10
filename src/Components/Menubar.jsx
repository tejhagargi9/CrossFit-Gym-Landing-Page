import React, { useEffect, useState } from "react";

const Menubar = ({ toggleMenubar }) => {
  const handleBackButtonClick = () => {
    toggleMenubar();
  };

  return (
    <div className="Menubar" style={{ top: "0vh" }}>
      <div className="Menubarpart1">
        <a href="">Gym benefits</a>
        <a href="">Membership</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <button>Start 7 day free trial</button>
        <button onClick={handleBackButtonClick}>Back</button>
      </div>
    </div>
  );
};

export default Menubar;
