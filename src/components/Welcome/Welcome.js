import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

// TODO: Welcome could draw inspiration from:
// https://dribbble.com/shots/3557349-Personal-Website-2017/attachments/791599

export default class Welcome extends Component {
    render() {
        return(
            <div className="container">
                <Sidebar match={this.props.match} />
                <div className="contentArea welcome">
                    <div className="welcome-img"><img src="http://placehold.it/400x500" alt="Anders" /></div>
                    <h1>Hi there! I'm Anders.<br />
                        Product Designer and Front-end Developer from Denmark.
                    </h1>
                    <h2>What would you like to see?</h2>
                    
                    <span className="no-worries">Oh and don't worry. You can change your mind at any time.<br />
                    Just click these icons in the nav-bar on the left!</span>
                    <div className="welcome-icon-wrapper">
                        <Link to="/design"><i className="fa fa-diamond" aria-hidden="true"></i></Link>
                        <Link to="/code"><i className="fa fa-code" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
}