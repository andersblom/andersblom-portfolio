import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// TODO: RTFM: https://github.com/reactjs/react-transition-group

import './Work.css';

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'eeluqlgcpzl3',
  accessToken: '255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903'
});

/* 
JSON output of everything:
https://cdn.contentful.com/spaces/eeluqlgcpzl3/entries?access_token=255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903
*/

// TODO:    Content output is probably still suffering from some old stuff.
//          Should probably look at this

// TODO: Hover @ project: Hvidt curtain "falder ned", tekst flyvfader ind fra siden. Ease-in-out-quad (lidt mere slow-hurtig-slow curve)

// TODO: Lazyload stuff: https://github.com/jasonslyvia/react-lazyload - både portfolio oversigt men også portfolio indhold (hvis ikke det bliver animeret ind).

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
            }
        }
            
        );
        
        return <div className="projectEntryContainer">{projectNodes}</div>
    }
}
