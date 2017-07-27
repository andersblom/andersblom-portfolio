import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './WorkListItem.css';

export default class WorkListItem extends Component {
    constructor() {
        super();
        this.state = {
            projectisHovered: false
        }
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }
    hoverOn() {
        this.setState({projectisHovered: true});
    }
    hoverOff() {
        this.setState({projectisHovered: false});
    }
    render() {
        return(
            <Link className={"projectEntry " + 
            (this.props.category === "code" ? "code" : "") + 
            (this.props.category === "design" ? "design" : "") +
            (this.state.projectisHovered === true ? " hover" : "")} 
                to={(`${this.props.match.url}/project/${this.props.project.fields.slug}`)} 
                onMouseOver={this.hoverOn}
                onMouseLeave={this.hoverOff}
                style={{backgroundImage: `url(${this.props.project.fields.overviewImage.fields.file.url})`, cursor: 'pointer'}} 
                key={this.props.project.sys.id}>
                <div className="info">
                    <div className="role">{this.props.project.fields.myRole}</div>
                    <div className="title">{this.props.project.fields.title}</div>
                </div>
            </Link>
        )
    }
}
