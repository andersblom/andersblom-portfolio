import React, { Component } from 'react';

import './Contact.css';

import contactIllustration from './contact-illu.svg';

export default class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <div className="contactContent">
                    <img className="contactIllustration" src={contactIllustration} alt="Contact me" /> 
                    <h1 className="contactHeader">Get in touch</h1>
                    <p>No matter if you want to talk business opportunities, 
                        talk design / code, or just really want to say hello, 
                        feel free to catch me anytime: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/heyimblomblom">@heyimblomblom</a> or at <a href="mailto:anders@andersblom.dk">anders@andersblom.dk</a>
                        
                    </p> 
                </div>             
            </div>
        );
    }
}