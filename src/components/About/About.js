import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutSection">
        <h1 className="aboutTitle">About me</h1>
        <div className="aboutParagraph">My name is Anders Blom. I'm 26 years old, and I was born and raised in Kolding, Denmark. Today, I live in the US (currently Buffalo, New York) with my wife and our cat, Monkey.</div>
        <div className="aboutParagraph">I have nothing but &lt;3 for digital things. No matter if it's a website, a mobile app or something that shows on a watch, I can't help but explore and look at the nuts and bolts of the technology behind to see how it works. I'm that guy who inspects a website in Chrome Dev Tools before actually reading what's on there.</div>

        <div className="aboutHistoryContainer">
          <div className="aboutHistoryCol">
            <h2 className="aboutHistoryColHeader">Education</h2>
            <div className="aboutHistoryColEntry">
              <div className="year">2012 - 2014</div>
              <div className="title">Multimedia Designer</div>
              <div className="location">@ Nordic Multimedia Academy</div>
              <div className="description">As a part of the Multimedia Designer Programme you are taught various aspects of what you can do with design. 
                From advanced design principles, to programming, to the business and communication aspects of what it means to be a designer. 
                During this time I really got a taste for advanced Front-end web development with JavaScript.</div>
            </div>

            <div className="aboutHistoryColEntry">
              <div className="year">2008 - 2012</div>
              <div className="title">Media Graphics Designer</div>
              <div className="location">@ HANSENBERG, Kolding, Denmark</div>
              <div className="description">At the Media Graphics Designer programme at HANSENBERG i got introduced to the world of professional graphic design.
                Having spent ~4 years playing around in Photoshop and Dreamweaver at this point already, I learned about typography, colors, advanced design techniques, 
                and giving design products purpose rather than just looking fancy because that was cool.</div>
            </div>
          </div>
          <div className="aboutHistoryCol">
            <h2 className="aboutHistoryColHeader">Profession</h2>
            <div className="aboutHistoryColEntry">
              <div className="year">2014 - 2017</div>
              <div className="title">Multimedia Designer & Front-end developer</div>
              <div className="location">@ RED INK A/S, Odense, Denmark</div>
              <div className="description">Description.</div>
            </div>
            <div className="aboutHistoryColEntry">
              <div className="year">2013 - 2014</div>
              <div className="title">Graphic designer, Web developer</div>
              <div className="location">@ SecPro Security, Kolding, Denmark</div>
              <div className="description">Description.</div>
            </div>
            <div className="aboutHistoryColEntry">
              <div className="year">2010 - 2012</div>
              <div className="title">Graphic design apprentice</div>
              <div className="location">@ F. Engel K/S, Haderslev, Denmark</div>
              <div className="description">Description.</div>
            </div>
          </div>
        </div>

        <div className="aboutHistoryContainer">
          <div className="aboutHistoryCol">
            <h2 className="aboutHistoryColHeader">Skills</h2>
            <div className="aboutHistoryColEntry">
              <div className="title">Design</div>
              <div className="description">Wireframing, User stories, Sketch, Adobe Suite, Prototying (Invision), Mobile / Responsive</div>
              <div className="description">Intermediate - basic with: Principle, Facebook Origami.</div>
              <div className="description">I also have designer-mentoring experience.</div>
            </div>
            <div className="aboutHistoryColEntry">
              <div className="title">Code</div>
              <div className="description">HTML, (S)CSS, React, NodeJS/Express, jQuery, JavaScript ES6, REST API, Git (GitHub & Bitbucket), Webpack, Wordpress.</div>
              <div className="description">Intermediate - basic with: AngularJS, Unit testing, Socket.io, PHP, Ubuntu LAMP-stack.</div>
            </div>
          </div>

          <div className="aboutHistoryCol">
            <h2 className="aboutHistoryColHeader">Resume</h2>
            <div className="aboutHistoryColEntry">
              <div className="description">You can download my resume here: (BUTTON)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}