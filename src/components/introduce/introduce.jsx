import React from "react";
import "./index.scss";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

export default function Introduce() {
  const toLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/aaron-wong-a93347302/";
  };
  const toGithub = () => {
    window.location.href = "https://github.com/YujiaWong";
  };
  return (
    <div className="introContainer">
      <div className="desc">
        <div className="title">
          <div className="words">WELCOME TO MY WORLD</div>
        </div>
        <h1>
          Hello, I'm <span>Aaron</span>
        </h1>
        <span>
          Driven developer with expertise in HTML, CSS, JavaScript, and
          frameworks like React and TypeScript. With a design background, I
          bridge the gap between development and UI/UX teams to ensure effective
          collaboration. Passionate about delivering high-quality, user-centered
          web solutions while leveraging both technical and design skills!
        </span>
        <div className="code">LinkedIn & Github</div>
        <div className="btns">
          <button onClick={toLinkedin}>
            <SlSocialLinkedin />
          </button>
          <button onClick={toGithub}>
            <FiGithub />
          </button>
        </div>
      </div>
      <div className="portrait">
        <div className="bg"></div>
        <img src="/pics/portrait.png" width={"500px"} />
      </div>
    </div>
  );
}
