import React from "react";
import Navigation from "./Navigation";
import Greeting from "./Greeting";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";


function App(){
    return (
        <div id="start">
            <Navigation />
            <Greeting />
            <Portfolio />
            <About />
            <Contact />
        </div>
    );
}

export default App;