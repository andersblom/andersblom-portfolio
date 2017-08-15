import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './About.css';

import profilePic from '../Welcome/anders_profile.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="aboutSection">
        <ReactCSSTransitionGroup component="div" className="profilePicContainer" transitionName="fadeInUp" transitionAppearTimeout={300} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
          <img className="profilePic" src={profilePic} alt="Anders" />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="fadeInUp" transitionAppearTimeout={700} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
        <div className="aboutSectionContent">
          <h1 className="aboutTitle">Hi there!</h1>
          <div className="aboutParagraph">My name is Anders Blom. I'm 26 years old, and I was born and raised in Kolding, Denmark. Today, I live in the US (currently Buffalo, New York) with my fiancée and our cat, Monkey.</div>
          <div className="aboutParagraph">I &lt;3 digital things. No matter if it's a website, a mobile app or something that appears on a watch, I can't help but explore and look at the nuts and bolts of the technology behind to see how it works. I'm that guy who inspects a website in Chrome Dev Tools before actually reading what's on there.</div>
          <div className="aboutParagraph"><span className="highlight">Im currently on the lookout for new full-time adventures!</span></div>


          <div className="aboutHistoryContainer">
            <div className="aboutHistoryCol">
              <h2 className="aboutHistoryColHeader">Education</h2>
              <div className="aboutHistoryColEntry">
                <div className="year">2012 - 2014</div>
                <div className="title">Multimedia Designer</div>
                <div className="location">Nordic Multimedia Academy, Kolding, Denmark</div>
                <div className="description">As a part of the Multimedia Designer Programme you are taught various aspects of what you can do with design. 
                  From advanced design principles, to programming, to the business and communication aspects of what it means to be a designer. 
                  During this time I really got a taste for advanced Front-end web development with JavaScript.</div>
              </div>

              <div className="aboutHistoryColEntry">
                <div className="year">2008 - 2012</div>
                <div className="title">Media Graphics Designer</div>
                <div className="location">HANSENBERG, Kolding, Denmark</div>
                <div className="description">At the Media Graphics Designer programme at HANSENBERG i got introduced to the world of professional graphic design.
                  Having spent ~4 years playing around in Photoshop and Dreamweaver at this point already, I learned about typography, colors, advanced design techniques, 
                  and giving design products purpose rather than just looking fancy because that was cool.</div>
              </div>
            </div>
            <div className="aboutHistoryCol">
              <h2 className="aboutHistoryColHeader">Professional</h2>
              <div className="aboutHistoryColEntry">
                <div className="year">2014 - 2017</div>
                <div className="title">Multimedia Designer & Front-end developer</div>
                <div className="location">RED INK A/S, Odense, Denmark</div>
                <div className="description">Various tasks involving Web/Graphic/UI design and Front-end development for clients like LEGOLAND Billund Resort, Universal Robots, Danish Diabetes Academy and many more. Spent a lot of my 3 years mentoring various apprentices/interns.</div>
              </div>
              <div className="aboutHistoryColEntry">
                <div className="year">2013 - 2014</div>
                <div className="title">Graphic designer, Web developer</div>
                <div className="location">SecPro Security, Kolding, Denmark</div>
                <div className="description">Sole in-house Graphic/Web designer and Front-end developer. Daily tasks maintaining and improving 4 of the companies websites for different security systems.</div>
              </div>
              <div className="aboutHistoryColEntry">
                <div className="year">2010 - 2012</div>
                <div className="title">Graphic design apprentice</div>
                <div className="location">F. Engel K/S, Haderslev, Denmark</div>
                <div className="description">Spent the last 2,5 years of my Media Graphics Designer education apprenticing in the marketing-department of F. Engel's workwear division, producing international print and web materials for their brands WorkZone and FE Engel.</div>
              </div>
            </div>
          </div>

          <div className="aboutHistoryContainer">
            <div className="aboutHistoryCol">
              <h2 className="aboutHistoryColHeader">Skills</h2>
              <div className="aboutHistoryColSubHeader gray">To keep the list short I've picked out the most relevant subjects. Got something in mind that's not on the list? I might have worked with it! Don't hesitate to <Link to="contact">ask</Link>!</div>
              
              <div className="aboutHistoryColEntry">
                <div className="title">Code</div>
                <div className="description">HTML, (S)CSS, React, NodeJS/Express, jQuery, JavaScript ES6, REST API's, Git (GitHub & Bitbucket), Webpack, Wordpress.</div>
                <div className="description">Intermediate - basic with: AngularJS, Unit testing, Socket.io, PHP, Ubuntu LAMP-stack.</div>
              </div>

              <div className="aboutHistoryColEntry">
                <div className="title">Design</div>
                <div className="description">Wireframing, User stories, Sketch, Adobe Suite, Prototying (Invision), Mobile / Responsive</div>
                <div className="description">Intermediate - basic with: Principle, Facebook Origami.</div>
              </div>
              
            </div>

            {/* <div className="aboutHistoryCol">
              <h2 className="aboutHistoryColHeader">Resume</h2>
              <div className="aboutHistoryColEntry">
                <div className="description">You can download my resume here: (BUTTON)</div>
              </div>
            </div> */}
          </div>
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}