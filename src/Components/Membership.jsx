import React from "react";
import MembershipBox from "./MembershipBox";
import MemberTesti from "./MemberTesti";

const Membership = () => {
  return (
    <div className="Membership">
      <div className="MembershipHead">
        <p>Membership</p>
        <h1>Crushing your health and fitness goals starts here...</h1>
      </div>
      <div className="MembershipPart2">
        <MembershipBox
          mainhead="Month to Month"
          price="$165"
          p1="All classes"
          p2="All member events"
          p3="Full gym access"
          p4="Charges every month unless you cancel"
        />
        <MembershipBox
          mainhead="6 Month
          Membership"
          price="$145"
          p1="All classes"
          p2="All member events"
          p3="Full gym access"
          p4="Charges every month unless you cancel"
        />
        <MembershipBox
          mainhead="1 Year Membership"
          price="$125"
          p1="All classes"
          p2="All member events"
          p3="Full gym access"
          p4="Charges every month unless you cancel"
        />
      </div>
      <div className="Membershippart3">
        <MemberTesti
          p="“6 months after joining I lost 15lbs and I’m getting stronger.”"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/625f3d9abce1fa5c807ad37c_Male.png"
        />
        <MemberTesti
          p="“I've gotten so much stronger after joining it's insane. My deadlift increased by 65lbs.”"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753e3b11a53c5e65da2299_woman-potrait-smiling.png"
        />
        <MemberTesti
          p="“While I am passionate about health and fitness this gym is more like a community to me than anything!”"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753e3b9f62bc34c1f9e865_man-potrait-smiling.png"
        />
      </div>
    </div>
  );
};

export default Membership;
