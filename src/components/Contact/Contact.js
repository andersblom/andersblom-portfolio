import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return(
            <div className="contentArea contact">
                <h1>Can't wait to hear from you!</h1>
                <div className="contact-email">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href="mailto:anders@andersblom.dk">anders@andersblom.dk</a>
                </div>                
            </div>
        );
    }
}