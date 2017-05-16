import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// TODO: Use contentful for content in stead of static JSON
import projectData from '../data/projects.json';

export default class Project extends Component {
    render() {
        var projectForRender;        
        for (let i = 0; i < projectData.projects.length; i++) {
            // console.log("ran: ", projectData.projects[i].slug, " ? ", this.props.match.params.projectId);
            if (projectData.projects[i].slug === this.props.match.params.projectId) {
                // console.log("got em", projectData.projects[i]);
                projectForRender = projectData.projects[i];
            }
        }

        return(
            <div>
                {/*TODO: Project: X-Link has to point to -1 history*/}
                <Link to="#">X</Link>
                <div className="title">{projectForRender.title}</div>
                <div className="hero-img" style={{ backgroundImage: `url(${projectForRender.heroimage})`, "backgroundSize": "cover", "height": "200px" }}></div>
                
                {/*TODO: Find alternative for dangerouslySetInnerHTML*/}
                <div className="content" dangerouslySetInnerHTML={{__html: projectForRender.content}}></div>
            </div>
        );
    }
}