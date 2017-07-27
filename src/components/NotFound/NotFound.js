import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './NotFound.css';

export default class NotFound extends Component {
    render() {
        return(
            <div className="errorPage">
                <span className="fourOhFour">4<span role="img" aria-label="Emoji">😱</span>4</span>
                <div className="errorExplanation">
                    Uhm. This usually doesn't happen. 
                    It appears you've found the top secret 404 page hidden in the depths of my spaghetti-code.
                    If you stumbled into this page and would like to prevent others to, feel free to <Link to="/contact">hit me up</Link>!
                </div>
                <div className="linkBackToPage"><Link to="/" className="backToPageBtn">Or go back here</Link>and keep browsing!</div>
            </div>
        );
    }
}