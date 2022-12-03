import React from "react";
import profilePic from "../Assets/profilePic.jpg";
import "../styling/AboutMe.css";

function AboutMe() {
  return (
    <div className="about">
      <div>
        <img className="profile" src={profilePic} alt="" />
      </div>
      <h2> Hello World! </h2>
      <div className="prompt">
        <p>
          My name is Jessie and I am a MERN stack developer. As of November
          2022, I have completed University of Pennsylvania's full stack
          bootcamp. I chose to become a web developer because I believe the
          internet is the most important tool that humanity has today. I want to
          play a part in this instrumental tool that is shaping our societie's
          future.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
