import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    {/*TODO: Weather darksky stuff */}
                    <div className="welcome-img"><img className="profilePic" src={profilePic} alt="Anders" /></div>
                    <h1>Hi there! I'm Anders. 👋<br />
                        UI Designer and Front-end Developer from ☀️Denmark. 
                    </h1>
                    <h2>What would you like to see?</h2>
                    <span className="no-worries">Oh and don't worry. You can change your mind at any time.<br />
                    Just click these icons in the nav-bar on the left!</span>
                    <div className="welcome-icon-wrapper">
                        <Link className="designIcon" to="/design"><i className="fa fa-diamond" aria-hidden="true"></i><div>Design</div></Link>
                        <Link className="codeIcon" to="/code"><i className="fa fa-code" aria-hidden="true"></i><div>Code</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}