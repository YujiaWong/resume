import React from "react";
import Introduce from "../../components/introduce/introduce.jsx";
import Project from "../../components/project/project.jsx";
import Header from "../../components/header/index.jsx";
import Bar from "../../components/bar/index.jsx";

export default function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <Introduce />
      <Bar />
      <Project />
    </div>
  );
}
