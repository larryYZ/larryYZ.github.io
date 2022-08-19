import React from 'react'
import profilePhoto from '../images/profilePhoto.jpg';
import Typed from "react-typed";



let skills = [
  'HTML/CSS/JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'Android',
  'Java',
  'Python',
  'Tensorflow',
  'SQL',
  'C',
]
skills = skills.map((skill) => skill.concat('.'));

function Greeting() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img className="profile-photo" src={profilePhoto} alt={''} />
              <div className="intro">
                <span className="greeting-text">
                  Hi there.
                  <br />
                  I'm Larry Zhang.
                </span>
                <hr/>
                <span className="language">
                  I love coding in <Typed 
                    strings={skills}
                    typeSpeed={40}
                    loop  
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  
}

export default Greeting;
