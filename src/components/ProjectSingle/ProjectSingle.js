import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import marked from 'marked';
const _ = require("lodash");

export default class Project extends Component {
    render() {
        let projectData =  this.props.projects;
        let projectForRender;

        // old code. bad performance.
        // for (let i = 0; i < projectData.length; i++) {
        //     if (this.props.match.params.projectSlug === projectData[i].fields.slug) {
        //         projectForRender = projectData[i];
        //         break;
        //     }
        // }      
        
        // TODO: Great. Now the same project is loaded every time..
        projectForRender = _.find(projectData, (object) => {
             return object.slug = this.props.match.params.projectSlug;
        });
        
        if (projectForRender !== undefined) {
            return(
                <div>
                    <Link to={`/${this.props.category}`}>X</Link>
                    <div className="title">{projectForRender.fields.title}</div>
                    <div className="hero-img" style={{ backgroundImage: `url(${projectForRender.fields.heroimage.fields.file.url})`, "backgroundSize": "cover", "height": "200px" }}></div>
                    <div className="content" dangerouslySetInnerHTML={{__html: marked(projectForRender.fields.content)}}></div>
                    <Link to={`/${this.props.category}`}>Back to projects</Link>
                </div>
            );
        } else {
            return(<div>Loading..</div>);
        }
    }
}