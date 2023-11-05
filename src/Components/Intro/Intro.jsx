import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkdin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumb from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassesImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Abhijeet Mane</span>
          <span>
            Full Stack Developer with high level of experience in web
            development, producting the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/AbhijeetMane20" target="__blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abhijeet-mane/" target="__blank">
            <img src={Linkdin} alt="" />
          </a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={GlassesImoji} alt="" />
        <div style={{ top: "-4%", left: "50%" }}>
          <FloatingDiv image={Crown} txt1={"Full-Stack"} txt2={"Developer"} />
        </div>
        <div style={{ top: "18rem", left: "0" }}>
          <FloatingDiv image={Thumb} txt1={"2yrs"} txt2={"Experience"} />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
