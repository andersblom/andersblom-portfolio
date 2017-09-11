import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

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
            return (<li><Link target="_blank" to="http://andersblom.dribbble.com/">Dribbble</Link></li>);
        } else if (this.props.match.url === "/code") {
            return (<li><Link target="_blank" to="https://github.com/andersblom">Github</Link></li>);
        }
    }

    changeCategoryHandler(cat) {
        this.props.categoryHandler(cat)
    }

    getTitle() {
        if (this.props.category === "code") {
            return "Front-end Developer"
        } else if (this.props.category === "design") {
            return "Product Designer"
        } else {
            return "Designer & Developer"
        }
    }

    render() {
        return(
            <div className={"sidebar " + (this.props.category === "code" ? "code" : "") + (this.props.category === "design" ? "design" : "") + (this.props.category === undefined ? "neutral" : "")}>
                <div className="stateNav">
                    <Link to="/design" onClick={this.changeCategoryHandler.bind(this, "design")}><i className="fa fa-diamond" aria-hidden="true"></i></Link>
                    <Link to="/code" onClick={this.changeCategoryHandler.bind(this, "code")}><i className="fa fa-code" aria-hidden="true"></i></Link>
                    <Link to="/contact" className="contact-mobile"><i className="fa fa-phone" aria-hidden="true"></i></Link>
                    {/* <Link to="/contact" className="about-mobile"><i className="fa fa-user" aria-hidden="true"></i></Link> */}
                </div>
                <div className="logo">
                    <Link to="/" className="name" onClick={ this.changeCategoryHandler.bind(this, "both")}>Anders Blom</Link>
                    <div className="title">
                        {this.getTitle()}
                    </div>
                </div>
                
                <nav>
                    <ul>
                        {this.getWorkLink()}
                        {this.getRelevantShowcaseWebsite()}

                        <li><Link to={(this.props.match.url === "/" || this.props.match.url === "/about" || this.props.match.url === "/contact") ? `/about` : `${this.props.match.path}/about`}>About me</Link></li>
                        <li><Link to={(this.props.match.url === "/" || this.props.match.url === "/about" || this.props.match.url === "/contact") ? `/contact` : `${this.props.match.path}/contact`}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}