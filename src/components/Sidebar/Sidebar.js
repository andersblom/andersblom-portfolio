import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './_Logo';

export default class Sidebar extends Component {

    // Print "Work" link in sidebar
    getWorkLink() {
        if (this.props.match.url === "/design" || this.props.match.url === "/code") {
            return (<li><Link to={`${this.props.match.url}`}>Work</Link></li>);
        }
    }

    // Get Dribbble or Github profile according to category
    getRelevantShowcaseWebsite() {
        if (this.props.match.url === "/design") {
            return (<li><Link target="_blank" to="http://www.dribbble.com/andersblom">Dribbble</Link></li>);
        } else if (this.props.match.url === "/code") {
            return (<li><Link target="_blank" to="https://github.com/andersblom">Github</Link></li>);
        }
    }

    render() {
        return(
            <div style={{background: '#dedede'}}>
                <Logo />
                <hr />
                <ul>
                    {this.getWorkLink()}
                    {this.getRelevantShowcaseWebsite()}
                    <li><Link to={`${this.props.match.url}/contact`}>Contact</Link></li>
                </ul>
            </div>
        );
    }
}