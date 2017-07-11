import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sidebar from '../Sidebar/Sidebar';

import './Welcome.css';

import profilePic from './anders_profile.jpg';

// TODO: Welcome could draw inspiration from:
// https://dribbble.com/shots/3557349-Personal-Website-2017/attachments/791599

// TODO: Should add something about "If you want to see more stuff, I'm throwing a few shots over at _Dribbble_ or committing projects to _Github_"
export default class Welcome extends Component {
    
    render() {
        return(
            <div className="container">
                <Sidebar match={this.props.match} />
                <div className="contentArea welcome">
                    <ReactCSSTransitionGroup component="div" className="welcome-img" transitionName="fadeIn-delayed" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}><img className="profilePic" src={profilePic} alt="Anders" /></ReactCSSTransitionGroup>
                        <ReactCSSTransitionGroup transitionName="slideIn" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}><h1>Hi there! I'm Anders. <span role="img" aria-label="Emoji">👋</span></h1></ReactCSSTransitionGroup>
                    
                    <ReactCSSTransitionGroup component="div" className="welcome-content-wrapper" transitionName="fadeIn-delayed" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}>
                    <span className="about">
                        Designer who codes. From Denmark. I've been at it since back when "optimized for IE in 800x600" was okay.
                        Today, whether I'm pixel-pushing UI, neck-deep in JavaScript-hacking, or brainstorming ideas with a team, I still love what I do.
                    </span>
                    
                    <h2>What would you like to see?</h2>
                    <span className="no-worries">Don't worry. You can change your mind at any time.<br />
                    Just click these icons in the nav-bar on the left!</span>
                    <div className="welcome-icon-wrapper">
                        <Link className="designIcon" to="/design"><i className="fa fa-diamond" aria-hidden="true"></i><div className="iconExplainer">Design</div></Link>
                        <Link className="codeIcon" to="/code"><i className="fa fa-code" aria-hidden="true"></i><div className="iconExplainer">Code</div></Link>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}