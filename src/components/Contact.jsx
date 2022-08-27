import React from "react";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';


function Contact(){
  return (<section className="contact-section mx-auto" id="contact">
  <div class="container">
    <h2 class="section-heading text-center text-uppercase">Contact</h2>
      <div class="row text-center contact-row">
        <div class="col-sm">
          <a href="mailto:larryz@my.yorku.ca">
            <AiOutlineMail size={50}/>   
          </a> 
        </div>
        <div class="col-sm">
          <a href="https://github.com/larryYZ">
            <AiFillGithub  size={50}/>
          </a>
        </div>
        <div class="col-sm">
          <a href="https://www.linkedin.com/in/larry-zhang-tech">
            <AiFillLinkedin  size={50}/>
          </a>
        </div>
      </div>
  </div>
  </section>
  );
}

export default Contact;