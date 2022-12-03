import React from "react";
import "../styling/footer.css";
import GitHubIcon from "../Assets/GitHub.png";
import LinkedInIcon from "../Assets/LinkedIn.png";

function Footer() {
  return (
    <div className="shoe">
      <div className="footer">
        <a 
        href="https://github.com/JessieDesiree369">
          <img className=" ghIcon" src={GitHubIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/jessie-rainey-42524223b/"
          >
          <img src={LinkedInIcon} alt="" />
        </a>
      </div>
      <p> &copy; 2022 JessieDesiree369</p>
    </div>
  );
}

export default Footer;
