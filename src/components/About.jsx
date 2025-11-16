import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import floorSeat from '../images/about/floorseat.jpeg';
import courses from '../images/about/courses.png';


function About() {
  return (
   <section className="about-section" id="about">
    <div class="container">
    <h2 class="section-heading text-center text-uppercase about-heading">About</h2>
    <hr />

    <div class="row">
    <div class="col-lg-12">
    <Carousel className="about-section">
      <Carousel.Item interval={3000}>
        <img
          className="about-img d-block w-100 rounded mx-auto"
          src={courses}
          alt="courses taken"
        />
        <Carousel.Caption>
          <h3>I worked as a software engineer for a Toronto-based software company and recently had the opportunity to relocate to New York City.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="about-img d-block w-100 rounded mx-auto"
          src={floorSeat}
          alt="past career"
        />
        <Carousel.Caption>
          <h3>I started my career in finance, but witnessing the growing impact of technology on the industry inspired me to pivot and build a second career in software engineering.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
    </div>
    </div>
    </div>
  </section> 
  );
}

export default About;

