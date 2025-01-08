import React from "react";
import "./index.scss";
export default function Project() {
  return (
    <div className="projectContainer">
      <div className="left">
        <h3>project name</h3>
        <div>describtion</div>
        <button>to code</button>
      </div>
      <div className="right">
        <img src="/pics/portrait.png" width={"200px"} />
      </div>
    </div>
  );
}
