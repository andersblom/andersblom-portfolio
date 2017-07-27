import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sidebar from '../Sidebar/Sidebar';

import './Welcome.css';

import profilePic from './anders_profile.jpg';

export default class Welcome extends Component {
    
    render() {
        return(
            <div className="container">
                <Sidebar match={this.props.match} />
                <div className="contentArea">
                    <div className="welcome">
                        <div className="welcomeContent">
                            <ReactCSSTransitionGroup component="div" className="welcome-img" transitionName="fadeIn-delayed" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}><img className="profilePic" src={profilePic} alt="Anders" /></ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup transitionName="slideIn" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}><h1>Hi there! I'm Anders. <span role="img" aria-label="Emoji">👋</span></h1></ReactCSSTransitionGroup>
                        
                            <ReactCSSTransitionGroup component="div" className="welcome-content-wrapper" transitionName="fadeIn-delayed" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}>
                            <span className="about">
                                Designer who codes. From Denmark. I've been at it since back when "optimized for IE in 800x600" was not an internet crime.
                                Today, whether I'm pixel-pushing UI, neck-deep in JavaScript-hacking, or brainstorming ideas with a team, I still love what I do.
                            </span>
                            
                            <h2>What would you like to see?</h2>
                            <span className="no-worries">Don't worry. You can change your mind at any time.<br />
                            Just click either of the two icons in the nav-bar!</span>
                            <div className="welcome-icon-wrapper">
                                <Link className="designIcon" to="/design"><i className="fa fa-diamond" aria-hidden="true"></i><div className="iconExplainer">Design</div></Link>
                                <Link className="codeIcon" to="/code"><i className="fa fa-code" aria-hidden="true"></i><div className="iconExplainer">Code</div></Link>
                            </div>

                            <div className="extraProjectsTeaser">If you want to see more things from me, I'm throwing a few shots over at <a target="_blank" rel="noopener noreferrer" href="http://andersblom.dribbble.com/">Dribbble</a> or committing to projects at <a target="_blank" rel="noopener noreferrer" href="https://github.com/andersblom">Github</a>.</div>
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}