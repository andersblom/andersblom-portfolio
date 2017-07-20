import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';

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

// TODO: This entry animation is not too bad... http://lasse-e.dk/index.html

export default class Work extends Component {
    findProjects() {
        const projectsToBeRendered = _.filter(this.props.projects, o => {
            return o.fields.category === this.props.category || o.fields.category === "both"
        });

        return (
            _.map(projectsToBeRendered, item => {
                return(
                    <div className={"projectEntry " + (this.props.category === "code" ? "code" : "") + (this.props.category === "design" ? "design" : "")} onClick={() => this.props.history.push(`${this.props.match.url}/project/${item.fields.slug}`)} 
                        style={{backgroundImage: `url(${item.fields.overviewImage.fields.file.url})`, cursor: 'pointer'}} 
                        to={`${this.props.match.url}/project/${item.fields.slug}`} 
                        key={item.sys.id}>
                        <div className="info">
                            <div className="role">{item.fields.myRole}</div>
                            <div className="title">{item.fields.title}</div>
                        </div>
                    </div>
                );
            })
        )
    }

    render() {
        return(
            <div className="projectContainer">{this.findProjects()}</div>
        )
    }
}
