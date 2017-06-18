import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
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

    changeCategoryHandler(cat) {
        this.props.categoryHandler(cat)
    }

    render() {
        return(
            <div className="sidebar">
                <Link to="/" onClick={ this.changeCategoryHandler.bind(this, "both") }>Anders Blom</Link>
                <ul>
                    <li><Link to="/design" onClick={this.changeCategoryHandler.bind(this, "design")}>Design</Link></li>
                    <li><Link to="/code" onClick={this.changeCategoryHandler.bind(this, "code")}>Code</Link></li>
                </ul>
                <hr />
                <ul>
                    {this.getWorkLink()}
                    {this.getRelevantShowcaseWebsite()}
                    <li><Link to={(this.props.match.url === "/") ? `/contact` : `${this.props.match.path}/contact`}>Contact</Link></li>
                </ul>
            </div>
        );
    }
}