import React, { useState, useEffect } from "react";

const Box2 = ({ phead, mainHead, p1, p2, p3, image }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure effect runs only once on mount

  // Check viewport width to determine whether to render part2 div
  const shouldRenderPart2 = viewportWidth > 699;

  return (
    <div className="BoxContainers">
      <div className="BoxContainerspart1">
        <p>{phead}</p>
        <h1>{mainHead}</h1>
        <div className="BoxContainerspart1-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745feec9b8bce42aba90eb_check.svg"
            alt=""
          />
          <p>{p1}</p>
        </div>
        <div className="BoxContainerspart1-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745feec9b8bce42aba90eb_check.svg"
            alt=""
          />
          <p>{p2}</p>
        </div>
        <div className="BoxContainerspart1-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745feec9b8bce42aba90eb_check.svg"
            alt=""
          />
          <p>{p3}</p>
        </div>
      </div>
      {shouldRenderPart2 && (
        <div
          className="BoxContainerspart2"
          style={{
            borderRadius: "1rem 0rem 0rem 1rem",
            backgroundImage: `url(${image})`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Box2;
