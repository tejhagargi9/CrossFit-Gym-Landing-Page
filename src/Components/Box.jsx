import React, { useState } from "react";

const Box = ({ desc, url }) => {
  const [isHowered, setisHowered] = useState(false);

  const boxstyle = {
    backgroundImage: `url(${url})`,
    opacity: isHowered ? "10" : "0.6",
    transition: "opacity .4s",
  };

  return (
    <div
      className="Box"
      style={boxstyle}
      onMouseEnter={() => setisHowered(true)}
      onMouseLeave={() => setisHowered(false)}
    >
      <h3>{desc}</h3> 
    </div>
  );
};

export default Box;
