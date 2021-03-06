import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './About.css';

import dualResumePDF from './andersblom_hybrid-resume.pdf';
import devResumePDF from './andersblom_developer-resume.pdf';
import designerResumePDF from './andersblom_designer-resume.pdf';

import profilePic from '../Welcome/anders_profile.jpg';
import monkeyPic from './monkey.jpg';
import samPic from './samanders.jpg';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      showingMonkey: false,
      showingSam: false
    }
  }

  toggleMonkey() {
    this.setState({
      showingMonkey: !this.state.showingMonkey
    });
  }
  toggleSam() {
    this.setState({
      showingSam: !this.state.showingSam
    });
  }

  getRelevantPic() {
    if (this.state.showingMonkey) {
      return monkeyPic;
    } else if (this.state.showingSam) {
      return samPic;
    } else {
      return profilePic;
    }
  }

  render() {
    return (
      <div className="aboutSection">
        <ReactCSSTransitionGroup component="div" className="profilePicContainer" transitionName="fadeInUp" transitionAppearTimeout={300} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
          <img className="profilePic" src={this.getRelevantPic()} alt="Anders" />
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup transitionName="fadeInUp" transitionAppearTimeout={700} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
        <div className="aboutSectionContent">
          <h1 className="aboutTitle">Hi there!</h1>
          <div className="aboutParagraph">My name is Anders Blom. I'm 26 years old, and I was born and raised in Kolding, Denmark. Today, I live in the US (currently Buffalo, New York) with my <span className="highlightWithPics" onMouseEnter={() => this.toggleSam()} onMouseLeave={() => this.toggleSam()}>wife</span> and our cat, <span className="highlightWithPics" onMouseEnter={() => this.toggleMonkey()} onMouseLeave={() => this.toggleMonkey()}>Monkey</span>.</div>
          <div className="aboutParagraph">I &lt;3 digital things. No matter if it's a website, a mobile app or something that appears on a watch, I can't help but explore and look at the nuts and bolts of the technology behind to see how it works. I'm that guy who inspects a website in Chrome Developer Tools before actually reading what's on there.</div>
          <div className="aboutParagraph">
            I also love:
            <ul>
              <li>Listen to music of any kind (Lately <em>a lot</em> of <a href="https://open.spotify.com/artist/4LEiUm1SRbFMgfqnQTwUbQ" target="_blank" className="inlineResumeLink">Bon Iver</a> and <a href="https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L" target="_blank" className="inlineResumeLink">Logic</a>)</li> 
              <li>Video games (Watching competetive games, and play an occasional game of Hearthstone)</li> 
              <li>Animals (I'm a cat-AND-dog-person. Yes, we exist.)</li>
            </ul>
          </div>

          <div className="clientsIWorkedWith">
            <div className="clientsHeader">I’ve had the pleasure of working with some pretty interesting companies so far:</div>
            <div className="clientsGrid">
              <div className="clientEntry">LEGOLAND® Billund Resort</div>			
              <div className="clientEntry">VisitSweden</div>
              <div className="clientEntry">Universal Robots</div>					
              <div className="clientEntry">LEGO® Education</div>
              <div className="clientEntry">Danish Diabetes Academy</div>			
              <div className="clientEntry">University of Southern Denmark</div>
              <div className="clientEntry">B&R Automation</div>						
              <div className="clientEntry">KOMPAN</div>
              <div className="clientEntry">Sanofi Pasteur</div>						
            </div>
            <div className="clientsMore">… and many, many more!</div>
          </div>

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
        <img src={monkeyPic} style={{display: "none"}} />
        <img src={samPic} style={{display: "none"}} />
      </div>
    );
  }
}