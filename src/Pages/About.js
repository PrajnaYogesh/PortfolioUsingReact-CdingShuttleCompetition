import React from "react";
import "./About.css";
import myimg from "./myImage.jpg";

function About() {
  return (
    <div className="about-background">
      <div className="my-image">
        <img src={myimg} alt="my pic" />
      </div>
      <div className="about">
        <h2>Hello There!</h2>
        <p>
          I am Prajna Yogesh , a Software engineer based out in Auburn hills
          ,Michigan. I have an experience of 2.6 years in the IT Industry. I
          love combining the worlds of logic and creative design to make an
          eye-catching, accessible,and user friendly websites and applications{" "}
        </p>
        <p>
          After a rigorous training in MERN fullstack web development ,I am
          excited to make the leap and continue refining my skills with the
          right company
        </p>
        <p>
          My hobbies include painting,listening to music,running and I also
          enjoy cooking!
        </p>
        <p>
          Feel free to take a look at my portfolio and if you think I am the
          right candidate, please fill the contact form. Thank you!
        </p>
      </div>
    </div>
  );
}

export default About;
