import React, { useState } from "react";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import Main from "./Components/Main";
import Offer from "./Components/Offer";
import Box from "./Components/Box";
import Box2 from "./Components/Box2";
import Box2reverse from "./Components/Box2reverse";
import MembershipBox from "./Components/MembershipBox";
import Membership from "./Components/Membership";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Menubar from "./Components/Menubar";

const App = () => {


  const brleft = {
    borderRaidus: "0rem 1rem 1rem 0rem",
  };
  const brright = {
    borderRaidus: "1rem 0rem 0rem 1rem",
  };



  // const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

  // const toggleSlideMenu = () => {
  //   setIsSlideMenuOpen(!isSlideMenuOpen);
  // };

  // const closeSlideMenu = () => {
  //   setIsSlideMenuOpen(false);
  // };



  return (
    <>
      <div className="Container">
        <div className="background">
          <Navbar1 />
          <Navbar2/>
          <Main />
        </div>
        <Offer />
        <Box2
          phead="Group CrossFit Classes"
          mainHead="Get fit while having fun with our group CrossFit classes"
          p1="Just 30 minutes long"
          p2="Warm up & workout included"
          p3="Fun is guaranteed"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde47f24274e42933c0_group%20crossfit%20class.png"
        />
        <Box2reverse
          phead="Strength Training"
          mainHead="Crush any strength program with our suite of strength equipment"
          p1="Fully fitted powerlifting and strongman section"
          p2="Olympic lifting platforms, weights, and bars"
          p3="Dumbells ranging 5lbs-250lbs"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde8be7db0299512de0_empty%20gym%20with%20strength%20equipment.png"
        />
        <Box2
          phead="Personal Training"
          mainHead="Be guided every step of the way with one of our world class coaches"
          p1="Weightloss"
          p2="Competitive CrossFit"
          p3="Powerlifting"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde25697910438012db_personal%20trainer%20training%20woman.png"
        />
        <Box2reverse
          phead="Member Only Events"
          mainHead="Make new friends and get competitive with fun member events"
          p1="Friendly competitions"
          p2="Monthly challenges"
          p3="Summer potlucks and games"
          image="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde11a53ce362d37ecc_athlete%20jumping%20over%20bar.png "
        />
        <Membership />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default App;
