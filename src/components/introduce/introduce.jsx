import React from "react";
import "./index.scss";
import { FcInfo } from "react-icons/fc";

export default function Introduce() {
  return (
    <div className="introContainer">
      <div className="portrait">
        <img src="/pics/portrait.png" width={"400px"} />
      </div>
      <div className="desc">
        <div className="title">
          <FcInfo className="icon" />
          <div className="words">PERSONAL INFORMATION</div>
        </div>
        <h1>Hello! I'm Aaron</h1>
        <span>
          Driven developer with expertise in HTML, CSS, JavaScript, and
          frameworks like React and TypeScript. With a design background, I
          bridge the gap between development and UI/UX teams to ensure effective
          collaboration. Passionate about delivering high-quality, user-centered
          web solutions while leveraging both technical and design skills!
        </span>
      </div>
    </div>
  );
}
