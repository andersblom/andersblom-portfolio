import React, { Component } from 'react';

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
                this is the project: {projectForRender.title}
            </div>
        );
    }
}