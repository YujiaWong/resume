import React from "react";
import Introduce from "../../components/introduce/introduce.jsx";
import Project from "../../components/project/project.jsx";
import Header from "../../components/header/index.jsx";
import Bar from "../../components/bar/index.jsx";
import "./index.scss";

export default function Home() {
  const projects = [
    {
      name: "Kanbas Student Data Cneter",
      text: `Kanbas is a student management system that offers role-based access for administrators, staff, and students. It includes parts for assignments, courses, people, and modules, with admins and staff managing courses, assignments, and user data, while students can view courses,modules and check assignments for each courses. Built with React, Redux, and React Router for the front-end, and Express, RESTful APIs, and MongoDB for the back-end, Kanbas ensures efficient data management and secure role-based permissions to streamline educational processes. Username:iron_man, Password:stark123`,
      gitLink: "https://github.com/YujiaWong/kanbas-react-web-app",
      webLink: "https://a4yujia.netlify.app/#/Kanbas/Account/Signin",
      image: "/pics/kanbas.jpg",
    },
    {
      name: "WanderSphere",
      text: `Whether you're seeking breathtaking destinations or hidden gems, we make exploration easy and exciting. Share your adventures at the blog and turn every trip into a story worth telling —start your journey with us today!`,
      gitLink: "https://github.com/YujiaWong/WanderSphere",
      webLink: "https://wandersphere2024.netlify.app/#/home",
      image: "/pics/travel.jpg",
    },
    {
      name: "WeatherWhiz",
      text: `Developed a weather app where users can view real-time weather,
              temperature, and conditions by entering a city name. Built with
              JavaScript, HTML, and CSS, leveraging WeatherAPI for dynamic
              updates and featuring responsive design.`,
      gitLink: "https://github.com/YujiaWong/Weather",
      webLink: "https://weathepp.netlify.app/",
      image: "/pics/weather.png",
    },
  ];

  return (
    <div
      className="homeContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <Introduce />
      <div
        className="line"
        style={{
          width: "80vw",
          borderBottom: "1px solid rgb(212, 212, 212)",
          paddingTop: "50px",
          marginLeft: "10vw",
          marginRight: "10vw",
        }}
      ></div>
      <div
        className="welcome"
        style={{
          color: "rgb(246, 9, 81)",
          textAlign: "center",
          paddingTop: "120px",
          fontWeight: "700",
        }}
      >
        WELCOME TO MY PORTFOLIO
      </div>
      <div
        className="explore"
        style={{
          fontSize: "2rem",
          textAlign: "center",
          paddingTop: "10px",
          fontWeight: "700",
        }}
      >
        Explore My Work and Projects
      </div>

      {projects.map((p) => (
        <div className="projectContainer">
          <div className="left">
            <h3>{p.name}</h3>
            <div className="text">{p.text}</div>
            <a href={p.gitLink}>
              <button>SOURCE CODE</button>
            </a>
          </div>
          <div className="right">
            <a href={p.webLink} target="_blank">
              <img
                src={p.image}
                width={"550px"}
                style={{ borderRadius: "15px" }}
              />
            </a>
          </div>
        </div>
      ))}
      <Project />
      <div
        className="footer"
        style={{
          height: "100px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "20px",
          gap: "20px",
        }}
      >
        <div>TEL: +1(408)-382-9900</div>
        <div>Email: wyujia@umich.edu</div>
      </div>
    </div>
  );
}
