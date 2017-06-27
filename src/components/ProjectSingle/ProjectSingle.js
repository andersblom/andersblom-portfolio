import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import marked from 'marked';
import find from 'lodash/find';

import './ProjectSingle.css';

export default class Project extends Component {
    render() {
        let projectData =  this.props.projects; 

        let projectForRender = find(projectData, a => {
            return a.fields.slug === this.props.match.params.projectSlug;
        });
        
        if (projectForRender !== undefined) {
            return(
                <div className="projectSingle">
                    <Link className="backBtn" to={`/${this.props.category}`}>X</Link>
                    <div className="heroImgContainer">
                        <div className="hero-img" style={{ backgroundImage: `url(${projectForRender.fields.heroimage.fields.file.url})`}}></div>
                        <div className="projectTitle">{projectForRender.fields.title}</div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: marked(projectForRender.fields.content)}}></div>
                    <Link to={`/${this.props.category}`}>Back to projects</Link>
                </div>
            );
        } else {
            return(<div>Loading..</div>);
        }
    }
}