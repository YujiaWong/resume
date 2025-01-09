import React from "react";
import "./index.scss";
export default function Project() {
  const proj = [
    {
      title: "DAuth",
      text: `The project helps users ensure they are getting the lowest price when
          shopping on platforms like Target and Amazon. By comparing the prices
          of the same product across different sites, it enables users to take
          advantage of price-match policies, ensuring they receive a refund if
          the price drops after purchase.`,
      image: "/pics/dauth.png",
    },
    {
      title: "Aictopus(Under construction...)",
      text: `Aictopus enables users to quickly generate frontend pages by simply describing the layout and elements in a chat interface. The tool leverages natural language processing to understand user input and automatically generates clean, responsive HTML and CSS code, significantly accelerating the web development process.`,
      image: "/pics/aictopus.jpg",
    },
  ];
  return (
    <div>
      {proj.map((p) => (
        <div className="projectContainer">
          <div className="left">
            <h3>{p.title}</h3>
            <div className="text">{p.text}</div>
          </div>
          <div className="right">
            <img
              src={p.image}
              width={"550px"}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
