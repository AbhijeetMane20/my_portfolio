import React from "react";
import "./Services.css";
import HeartImoji from "./../../img/heartemoji.png";
import Glasses from "./../../img/glasses.png";
import Humble from "./../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Abhijeet Resume.pdf";
function Services() {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          As a seasoned Full Stack Developer with a strong background in modern
          web and mobile technologies, I have almost 2 years of experience
          contributing to the success of Evalbee Company.
        </span>
        <a href={Resume} download style={{ textDecoration: "none" }}>
          <button className="button s-button">Download cv</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartImoji}
            heading={"Frontend"}
            detail={"React js, Javascript, Html, Css"}
          />
        </div>
        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"Java, Spring Boot, Hibernate, Postgress"}
          />
        </div>
        <div style={{ left: "14rem", top: "23rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma, Tailwind, Antd, Bootstrap"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
