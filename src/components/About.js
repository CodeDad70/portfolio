import React, { Component } from 'react';
import { Transition, config, animated } from 'react-spring'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import About_Pic from '../images/About_Pic.jpg'
import Email from '../images/Email.png'
import LinkedIn from '../images/LinkedIn.png'
import GitHub from '../images/GitHub.png'

const Contact = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#fff` }}>
    <div className="about-container">
    
    <img className="about-image" src={About_Pic}/>
    <div className="icon-container">  
    <a href = "google.com" target = "blank" > <img className = "email" src={Email} /> </a>
    <a href = "google.com" target = "blank" ><img  className="github" src={GitHub} /></a>
    <a href = "google.com" target = "blank" ><img className="linkedin" src={LinkedIn} /></a>
    </div>
    <p className="about-text">Eric Strickler is a full stack web developer and graphic designer with a passion for bringing ideas from conception to reality. Creativity has been the driving force throughout my career in graphic design and working with brands like Williams-Sonoma, Timex, Yoga Journal, and Tovolo, as well as in my personal life, whether I’m playing guitar or making a painting. I first grew interested in web development when, as a graphic designer, I wanted to learn what was under the hood of the websites I was helping to design. I bring strong skills in problem solving and a keen eye for design and detail that’s an ideal hybrid for helping companies achieve their vision for original, vibrant web apps. My lifelong passion for creativity has informed every project I undertake, and I’m intrinsically motivated to learn new concepts and techniques to utilize that passion.</p>
    
    

    </div>
    <Route
      render={({ location }) => (
        <div>
          <Transition
            native
            config={config.slow}
            keys={location.pathname}
            from={{ transform: 'translateY(500px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(500px)', opacity: 0 }}>
            
          </Transition>
        </div>
      )}
    />
  </animated.div>
)


export default Contact;
