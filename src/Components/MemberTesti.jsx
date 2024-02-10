import React from "react";

const MemberTesti = ({ p, image }) => {
  return (
    <div className="MemberTesti">
      <div className="MemberTestipart2">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753ba716580f05b3e042cf_5-stars.svg"
          alt=""
        />
      </div>
      <div className="MemberTestipart3">
        <p>{p}</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MemberTesti;
