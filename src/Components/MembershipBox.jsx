import React from "react";

const MembershipBox = ({ mainhead, price, p1, p2, p3, p4 }) => {
  return (
    <div className="MembershipBox">
      <div className="MembershipBoxpart2">
        <h3>{mainhead}</h3>
      </div>
      <p>
        <span style={{ color: "#5F7252" }}>{price}</span>/mo
      </p>
      <div className="MembershipBoxpart3">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6275389ecf1678cf16fdd1c5_dark-green-check.svg"
          alt=""
        />
        <p>{p1}</p>
      </div>
      <div className="MembershipBoxpart4">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6275389ecf1678cf16fdd1c5_dark-green-check.svg"
          alt=""
        />
        <p>{p2}</p>
      </div>
      <div className="MembershipBoxpart5">
        <img
          src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6275389ecf1678cf16fdd1c5_dark-green-check.svg"
          alt=""
        />
        <p>{p3}</p>
      </div>
      <div className="MembershipBoxpart6">
        <p>{p4}</p>

        <a href="">Start 7 day free trial</a>
      </div>
    </div>
  );
};

export default MembershipBox;
