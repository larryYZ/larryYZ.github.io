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
      modalBody: "A REST API that provides essential data on fruit trees, filling the void of a underserved area. It was built with MongoDB Atlas, NodeJS and Express, and is hosted live on Heroku"

    }, 
    {
      photo: fullStack,
      siteLink: "https://apple-planting-planner.herokuapp.com/",
      githubLink: "https://github.com/larryYZ/apple-planting-planner",
      modalHeading: "Apple Planting Planner",
      modalBody: "Full stack development utilizing Express, node.js, mangoDB"
    },
    {
      photo: web3,
      siteLink: "",
      githubLink: "",
      modalHeading: "Web3 project with Motoko",
      modalBody: "In progress, coming soon"
    },
    {
      photo: ecomm,
      siteLink: "",
      githubLink: "https://github.com/larryYZ/store-management-system",
      modalHeading: "E-commerce platform",
      modalBody: "Built front end online platform for a store that is going online with JavaFX"
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
      modalBody: "tensorflow and jupytor notebook"
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