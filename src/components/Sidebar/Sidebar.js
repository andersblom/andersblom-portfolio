import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './_Logo';

export default class Sidebar extends Component {
    getRelevantWorkLink() {
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
                <ul>
                    <li><Link to="/design">Design</Link></li>
                    <li><Link to="/code">Code</Link></li>
                </ul>
                <hr />
                <ul>
                    <li><Link to={`${this.props.match.url}`}>Work</Link></li>
                    {this.getRelevantWorkLink()}
                    <li><Link to={`${this.props.match.url}/contact`}>Contact</Link></li>
                </ul>
            </div>
        );
    }
}