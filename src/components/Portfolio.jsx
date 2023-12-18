import React from "react";
import api from '../images/portfolio/1.jpeg';
import fullStack from '../images/portfolio/2.jpeg';
import web3 from '../images/portfolio/3.jpeg';
import ecomm from '../images/portfolio/4.jpeg';
import android from '../images/portfolio/5.jpeg';
import ml from '../images/portfolio/6.jpeg';
import Project from "./Project";

function Portfolio (){

  const projectProperties = [
    {
      photo: api,
      siteLink: "https://fruit-trees-api.herokuapp.com/Appletrees",
      githubLink: "https://github.com/larryYZ/fruit-trees-api",
      modalHeading: "Fruit Tree API",
      modalBody: "This is a REST API that provides essential data on fruit trees, filling the void of a underserved area. It was built with MongoDB, NodeJS and Express"

    }, 
    {
      photo: fullStack,
      siteLink: "https://apple-planting-planner.herokuapp.com/",
      githubLink: "https://github.com/larryYZ/apple-planting-planner",
      modalHeading: "Apple Planting Planner",
      modalBody: "The Apple Planting Planner is a full stack development project utilizing React, Express, NodeJS. It uses the Fruit Tree API as its backend component."
    },
    {
      photo: web3,
      siteLink: "https://drive.google.com/file/d/1GH4mUeGQvXMWd93__8cafKEPIIpGieIJ/view?usp=drive_link",
      githubLink: "",
      modalHeading: "Blockchain Project",
      modalBody: "Building a ERC20 token - LarryCoin"
    },
    {
      photo: ecomm,
      siteLink: "",
      githubLink: "https://github.com/larryYZ/store-management-system",
      modalHeading: "E-commerce platform",
      modalBody: "It is a platform built with JavaFX. It can be used by a video store as its online shopping Interface as well as its inventory and staff management system."
    },
    {
      photo: android,
      siteLink: "",
      githubLink: "https://github.com/larryYZ/android-app-the-caps-game",
      modalHeading: "The Caps game",
      modalBody: "This Android app retrieves data from the countryAPI, and composes questions asking players to match capitals and their corresponding countries. The User Interface checks the answers and provides a score and a log"
    },
    {
      photo: ml,
      siteLink: "",
      githubLink: "https://github.com/larryYZ/wine-quality-prediciton-machine-learning",
      modalHeading: "Wine quality predictions using Machine Learning",
      modalBody: "This project analyzes large dataset using Jupyter Notebook and TensorFlow. It harnesses the power of Machine Learning to predict wine quality with data"
    },
  ];
  
  const projectLists = projectProperties.map((item) =>
  {  
    return <Project 
      key={item.modalHeading}
      photo={item.photo}
      modalHeading={item.modalHeading}
      modalBody={item.modalBody}
      siteLink={item.siteLink}
      githubLink={item.githubLink}
    />
  });

  return (
    <section class="portfolio-section portfolio" id="portfolio">
      <div class="container">
        <h2 class="section-heading text-center text-uppercase">Portfolio</h2>
        <hr />
        <div class="row justify-content-center">
          {projectLists}
        </div>
      </div>
    </section>);
}



export default Portfolio;
