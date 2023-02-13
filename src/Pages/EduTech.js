import React from "react";
import "./EduTech.css";
import html from "../Images/techStack/html.png"
import css from "../Images/techStack/css.jfif"
import js from "../Images/techStack/js.webp"
import react from "../Images/techStack/react.jfif"
import nodejs from "../Images/techStack/nodejs.png"
import mongoDb from "../Images/techStack/mongodb.jfif"
import mysql from "../Images/techStack/mysql.webp"
import java from "../Images/techStack/java.jfif"
import spring from "../Images/techStack/spring.jfif"


function EduTech() {
  return (
    <div className="edu-tech-container">
      <div className="education">
        <h2>Education</h2>

        <div className="edu-box">
          <div className="college-box">
            <p>Certificate : Full stack webdeveloper</p>
            <p>Coding shuttle</p>
            <p>Duration : Oct(2022) - Jan(2023) </p>
          </div>

          <div className="college-box">
            <p>Degree : Bachelors of Engineering</p>
            <p>Engineering : P.A College of Engineering</p>
            <p>Year : 2008-2012</p>
            <p>Percentage : 72.3%</p>
          </div>
        </div>
      </div>

      <div className="technology-skills">
        <div className="skills-box">
          <h2>Technology/skills</h2>
          <div className="tech-skill">
            <img className='skill-img' src={html} alt="html" />
            <img className='skill-img' src={css} alt="html" />
            <img className='skill-img' src={js} alt="html" />
            <img className='skill-img' src={react} alt="html" />
            <img className='skill-img' src={nodejs} alt="html" />
            <img className='skill-img' src={mongoDb} alt="html" />
            <img className='skill-img' src={mysql} alt="html" />
            <img className='skill-img' src={java} alt="html" />
            <img className='skill-img' src={spring} alt="html" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduTech;
