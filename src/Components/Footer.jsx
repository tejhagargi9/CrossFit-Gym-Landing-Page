import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footerpart1">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
          alt=""
        />
        <h3>NAVIGATION</h3>
      </div>
      <div className="Footerpart2">
        <a href="#">Home</a>
        <a href="">CrossFit Classes</a>
        <a href="">Strength Training</a>
      </div>
      <div className="Footerpart3">
        <a href="">Personal Training</a>
        <a href="">Member Events</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="Footerpart4">
        <p>Copyright 2022 | Fitr Media</p>
      </div>
    </div>
  );
};

export default Footer;
