import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Contact.css';

import contactIllustration from './contact-illu.png';

export default class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <div className="contactContent">
                    <ReactCSSTransitionGroup component="div" className="contactPicContainer" transitionName="fadeInUp" transitionAppearTimeout={300} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
                        <img className="contactIllustration" src={contactIllustration} alt="Contact me" /> 
                    </ReactCSSTransitionGroup>
                    
                    <ReactCSSTransitionGroup component="div" transitionName="fadeInUp" transitionAppearTimeout={700} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
                        <h1 className="contactHeader">Get in touch</h1>
                        <p>No matter if you want to talk business opportunities, 
                            talk design / code, or just really want to say hello, 
                            feel free to catch me anytime: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/heyimblomblom">@heyimblomblom</a> or at <a href="mailto:anders@andersblom.dk">anders@andersblom.dk</a>
                            
                        </p>
                    </ReactCSSTransitionGroup> 
                </div>             
            </div>
        );
    }
}