import React from "react";
import "../styling/resume.css";
import DownloadIcon from "../Assets/downloadIcon.png";

function Resume() {
  return (
    <section>
      <div className="contain">
        <h1 className="item">My Resume</h1>
        <div className="tool">
          <a
          href={require("../Assets/myResume.docx")} 
          download="Jessie-Rainey-Resume.docx"
          >
            <img className="downloadIcon" align="middle"src={DownloadIcon} alt="downloadIcon" />
          <span className="tooltext">Download</span>
          </a>
        </div>
      </div>
      <div className="containin">
        <iframe
          title="resume"
          className="responsive"
          src="https://docs.google.com/document/d/e/2PACX-1vTJJB5qzHeg9-uPJLDV19LCAG8eNNKJesaOSnzTvbBVEEVgxcNzeEWsEHUQAsbG4XxTjRI54jeJ9zVX/pub?embedded=true"
        ></iframe>
      </div>
    </section>
  );
}

export default Resume;
