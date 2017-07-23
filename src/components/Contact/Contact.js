import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <div className="contactContent">
                    <h1>Get in touch</h1>
                    <p>No matter if you want to talk business opportunities, 
                        talk design or code, or just really want to say hello, 
                        feel free to catch me anytime: <a target="_blank" href="https://twitter.com/heyimblomblom">@heyimblomblom</a> or at <a href="mailto:anders@andersblom.dk">anders@andersblom.dk</a>
                        
                    </p> 
                </div>             
            </div>
        );
    }
}