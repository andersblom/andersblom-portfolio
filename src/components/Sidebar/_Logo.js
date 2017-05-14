import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return(
            <div>
              Anders Blom
                <ul>
                    <li><Link to="/design">Design</Link></li>
                    <li><Link to="/code">Code</Link></li>
                </ul>
            </div>
        );
    }
}