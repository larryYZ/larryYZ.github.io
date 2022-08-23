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
      modalHeading: "Stock Trading Game",
      modalBody: "A game to practice technical analysis. built with React and tradingview API"
    }, 
    {
      photo: fullStack,
      modalHeading: "Reminder Website",
      modalBody: "Full stack development utilizing Express, node.js, mangoDB"
    },
    {
      photo: web3,
      modalHeading: "Web3",
      modalBody: "Web3 app with Motoko"
    },
    {
      photo: ecomm,
      modalHeading: "e-commerce platform",
      modalBody: "Built front end online platform for a store that is going online with JavaFX"
    },
    {
      photo: android,
      modalHeading: "BMI calculator",
      modalBody: "Android app built with cutting edge android technology"
    },
    {
      photo: ml,
      modalHeading: "using ML to analyse wine quality from concentration of chemicals",
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