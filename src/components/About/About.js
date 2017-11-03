import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './About.css';

import dualResumePDF from './andersblom_resume_dual.pdf';
import devResumePDF from './andersblom_resume_dev.pdf';
import designerResumePDF from './andersblom_resume_design.pdf';

import profilePic from '../Welcome/anders_profile.jpg';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      showingMonkey: false
    }
  }

  toggleMonkey() {
    this.setState({
      showingMonkey: !this.state.showingMonkey
    });
  }

  render() {
    return (
      <div className="aboutSection">
        <ReactCSSTransitionGroup component="div" className="profilePicContainer" transitionName="fadeInUp" transitionAppearTimeout={300} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
          <img className="profilePic" src={profilePic} alt="Anders" />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="fadeInUp" transitionAppearTimeout={700} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
        <div className="aboutSectionContent">
          <h1 className="aboutTitle">Hi there!</h1>
          <div className="aboutParagraph">My name is Anders Blom. I'm 26 years old, and I was born and raised in Kolding, Denmark. Today, I live in the US (currently Buffalo, New York) with my wife and our cat, <span style={{textDecoration: "underline"}} onMouseEnter={() => this.toggleMonkey()} onMouseEnter={() => this.toggleMonkey()}>Monkey</span>.</div>
          <div className="aboutParagraph">I &lt;3 digital things. No matter if it's a website, a mobile app or something that appears on a watch, I can't help but explore and look at the nuts and bolts of the technology behind to see how it works. I'm that guy who inspects a website in Chrome Developer Tools before actually reading what's on there.</div>
          <div className="aboutParagraph">
            I also love:
            <ul>
              <li>Listen to music of any kind (Lately <em>a lot</em> of <a href="https://open.spotify.com/artist/4LEiUm1SRbFMgfqnQTwUbQ" target="_blank" className="inlineResumeLink">Bon Iver</a> and <a href="https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L" target="_blank" className="inlineResumeLink">Logic</a>)</li> 
              <li>Video games (Watching competetive games, and play an occasional game of Hearthstone)</li> 
              <li>Animals (I'm a cat-AND-dog-person. Yes, we exist.)</li>
            </ul>
          </div>
          <div className="aboutParagraph"><span className="highlight">Im currently on the lookout for new full-time adventures! <br />Does this tickle your interest? <a href="mailto:anders@andersblom.dk" className="inlineResumeLink">Let's talk!</a></span></div>

          <div className="aboutHistoryContainer">
            <div className="aboutHistoryCol">
              <h2 className="aboutHistoryColHeader">Tools I use to build cool stuff!</h2>
              <div className="aboutHistoryColSubHeader gray">To keep the list short I've picked out the most relevant subjects. Got something in mind that's not on the list? I might have worked with it! Don't hesitate to <Link to="contact">ask</Link>!</div>
              
              <div className="aboutHistoryColEntry">
                <div className="title">Code</div>
                <div className="description">HTML, (S)CSS, React, NodeJS/Express, JavaScript ES6, MongoDB, jQuery, REST API's, Git (GitHub & Bitbucket), Webpack, Lodash, Wordpress.</div>
                <div className="description">Understanding of Redux, AngularJS, Unit testing, Socket.io, PHP, Ubuntu LAMP-stack management.</div>
              </div>

              <div className="aboutHistoryColEntry">
                <div className="title">Design</div>
                <div className="description">Wireframing, User stories, Sketch, Adobe Suite, Prototying (Invision), Mobile / Responsive</div>
                <div className="description">Basic level experience with Principle and Facebook Origami.</div>
              </div>
              
            </div>

            <div className="aboutHistoryCol">
              <h2 className="aboutHistoryColHeader">Resume</h2>
              <div className="aboutHistoryColEntry">
                <div className="description">My resume can be downloaded here. Please feel free to reach out if you are missing any information.</div>
                <div className="downloadResumeBtnContainer">
                  <a href={dualResumePDF} target="_blank" className="downloadResumeBtn">Designer & Developer</a>
                  <a href={designerResumePDF} target="_blank" className="downloadResumeBtn">Designer</a>
                  <a href={devResumePDF} target="_blank" className="downloadResumeBtn">Developer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}