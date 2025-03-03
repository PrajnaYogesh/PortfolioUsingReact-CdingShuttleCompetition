import React from "react";
import "./Projects.css";
import keyboard from "../Images/keyboard1.jfif";
import weather from "../Images/weather.jfif";
import calculator from "../Images/Calculator.PNG";
import jokes from "../Images/laugh.jfif";
import moneyExchange from "../Images/exchange.jpg";
import crypto from "../Images/OIP.jfif";
import socialmedia from "../Images/social-media.jpg";
import eCommerce from "../Images/eCommerce.png"
import notes from "../Images/notes.png"

function Projects() {
  return (
    <div className="Projects">
      <h1 className="heading-center">Full Stack MERN Projects</h1>

      <div className="mini-projects">
        <h3 className="project-name">
          1. SocialMedia Application (Major Project 1)
        </h3>
        <div className="project-info">
          <a
            href="https://client-app-vjz6b.ondigitalocean.app/#/login"
            target="_blank"
          >
            {" "}
            <img
              className="mini-project-image"
              src={socialmedia}
              alt="socialmedia"
            />
          </a>
          <p className="mini-project-description">
            Developed a Social Media Application which have features like
            signup, login, create profile,update profile , create post,
            follow/unfollow an user, like/unlike post and delete user. To build
            the client side of the project I have used technologies like
            html,css,React,Router,React-Redux and to develop the server side I
            used Node.js,Express.I have used Mongodb(Atlas) to store the user
            information. To store the images I have used Cloudinary. I have
            deployed the project using Digital Ocean.Click the image to view the
            application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">
          2. E-Commerce Application (Major Project 2)
        </h3>
        <div className="project-info">
          <a
            href="https://e-commerce-client-5rway.ondigitalocean.app/"
            target="_blank"
          >
            {" "}
            <img
              className="mini-project-image"
              src={eCommerce}
              alt="eCommerceApp"
            />
          </a>
          <p className="mini-project-description">
            Developed a  eCommerce Application - Posterz. This application
            has wide range of posters related to Sports, Animation, TV-Shows.
            User can browse through posters,sort-by-price,view newest-first, shop by
            categories,top picks etc.User can place an order using
            this application .This appliaction is built using various
            technologies like html,css,javascript,React,Router,React-Redux in the front-end. To
            develop the backend I have used Strapi(CMS). I have also used Stripe as
            a payment gateway tool. Click the image to view the application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">3. KeyBoard</h3>
        <div className="project-info">
          <a
            href="https://superlative-brigadeiros-99d095.netlify.app"
            target="_blank"
          >
            {" "}
            <img className="mini-project-image" src={keyboard} alt="keyboard" />
          </a>
          <p className="mini-project-description">
            Developed a keyboard using html,css and Javascript. I have also
            incorporated the tunes as well as volume button to increase/decrease
            volume. Deployed the project on Netlify. Click the image to view the
            application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">4. Jokes Generator</h3>
        <div className="project-info">
          <a
            href="https://resonant-meerkat-8a218b.netlify.app/"
            target="_blank"
          >
            {" "}
            <img className="mini-project-image" src={jokes} alt="calculator" />
          </a>
          <p className="mini-project-description">
            Developed a jokes generator using an open source free API.A new joke
            is generated based on request.Click the image to view the
            application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">5.Money Exchange</h3>
        <div className="project-info">
          <a
            href="https://creative-macaron-2bfbf6.netlify.app/"
            target="_blank"
          >
            {" "}
            <img
              className="mini-project-image"
              src={moneyExchange}
              alt="moneyExchange"
            />
          </a>
          <p className="mini-project-description">
            This project is developed using React, html, css, javaScript. Here I
            have used an API to fetch the MoneyExchange details based on
            country.Click the image to view the application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">6.Crypto Convertor</h3>
        <div className="project-info">
          <a href="https://lambent-griffin-5cebe2.netlify.app/" target="_blank">
            {" "}
            <img className="mini-project-image" src={crypto} alt="crypto" />
          </a>
          <p className="mini-project-description">
            This project is developed using React, html, css, javaScript. This
            app can be used to get Crypto conversion rates. Click the image to
            view the application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">7. Weather Forecast Application </h3>
        <div className="project-info">
          <a href="https://chipper-faloodeh-38ccea.netlify.app" target="_blank">
            {" "}
            <img className="mini-project-image" src={weather} alt="weather" />
          </a>
          <p className="mini-project-description">
            Developed a Weather forecast application using html,css and
            Javascript. I have used an api to fetch the weather related
            information. Deployed the project on Netlify. Click the image to
            view the application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">8. Calculator</h3>
        <div className="project-info">
          <a href="https://dashing-flan-43a32f.netlify.app/" target="_blank">
            {" "}
            <img
              className="mini-project-image"
              src={calculator}
              alt="calculator"
            />
          </a>
          <p className="mini-project-description">
            Developed a Calculator using html,css and Javascript.Deployed the
            project on Netlify. Click the image to view the application.
          </p>
        </div>
      </div>

      <div className="mini-projects">
        <h3 className="project-name">9. Notes App using React</h3>
        <div className="project-info">
          <a href="https://mellow-quokka-0f7d96.netlify.app/" target="_blank">
            {" "}
            <img
              className="mini-project-image"
              src={notes}
              alt="notesApp"
            />
          </a>
          <p className="mini-project-description">
            This application allows user to create ,delete and search a note.It also has a toggle mode.Click the image to view the application.
          </p>
        </div>
      </div>

      {/* <p>Add news App, notes app, food recipe app / zomato app </p> */}
    </div>
  );
}

export default Projects;
