  import React from "react";

const About = () => {
  return (
    <div className="About">
      <div className="Aboutpart1">
        <a href="">About CrossFit Gym</a>
      </div>
      <div className="Aboutpart2">
        <h1>Hi! We’re a local CrossFit gym in Denver, Colorado.</h1>
        <p>
          CrossFit Gym was started by Alex and Sparky in 2012. It’s our mission
          to help people in Denver get fit, stay healthy, and live life on their
          terms without fitness being an obstacle.
        </p>
      </div>
      <div className="Aboutpart3">
        <div className="Aboutpart3-part1">
          <form>
            <h2>Claim your 7 day free trial</h2>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <input type="number" placeholder="Phone number" required />
            <input type="text" placeholder="Member interest..." required />
            <input type="submit" onClick={(e) => e.preventDefault()} />
          </form>
        </div>
        <div className="Aboutpart3-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753464528a3644b1eb3c80_two%20trainers-p-500.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
