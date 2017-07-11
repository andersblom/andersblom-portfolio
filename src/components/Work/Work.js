import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// TODO: RTFM: https://github.com/reactjs/react-transition-group

import './Work.css';

/* 
JSON output of everything:
https://cdn.contentful.com/spaces/eeluqlgcpzl3/entries?access_token=255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903
*/

// TODO:    Content output is probably still suffering from some old stuff.
//          Should probably look at this

// TODO: Hover @ project: Hvidt curtain "falder ned", tekst flyvfader ind fra siden. Ease-in-out-quad (lidt mere slow-hurtig-slow curve)

export default class Work extends Component {
    render() {
        console.log(this.props.projects[0]);
        var projectNodes = this.props.projects.map((value) => {
            if (value.fields.category === this.props.category || value.fields.category === "both") {
                return(
                    <div className={"projectEntry " + (this.props.category === "code" ? "code" : "") + (this.props.category === "design" ? "design" : "")} onClick={() => this.props.history.push(`${this.props.match.url}/project/${value.fields.slug}`)} 
                        style={{backgroundImage: `url(${value.fields.overviewImage.fields.file.url})`, cursor: 'pointer'}} 
                        to={`${this.props.match.url}/project/${value.fields.slug}`} 
                        key={value.sys.id}>
                        <div className="info">
                            <div className="role">{value.fields.myRole}</div>
                            <div className="title">{value.fields.title}</div>
                        </div>
                    </div>
                );
            } else {
                return (<div>Oops! I did a bad getting the projects. Please try again.</div>)
            }
        }
            
        );
        
        return (
            <ReactCSSTransitionGroup component="div" transitionName="fadeIn" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}>
                <div className="projectEntryContainer">{projectNodes}</div>
            </ReactCSSTransitionGroup>
        );
    }
}
