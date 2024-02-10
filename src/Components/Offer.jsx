import React from "react";
import Box from "./Box";

const Offer = () => {
  return (
    <div className="offer">
      <div className="head">
        <h2>We offer something for everybody</h2>
      </div>
      <div className="BoxContainer">
        <Box
          desc="CrossFit Group Classes"
          url="https://images.unsplash.com/photo-1576913105965-1d0b6a19a482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxneW18ZW58MHx8MHx8fDA%3D"
        />
        <Box
          desc="Strength Training"
          url="https://images.unsplash.com/photo-1625151936268-e1ffba534f20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxneW18ZW58MHx8MHx8fDA%3D"
        />
        <Box
          desc="Personal Training"
          url="https://images.unsplash.com/photo-1587938745570-681161dcfe17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Box
          desc="Memeber Only Events"
          url="https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Offer;
