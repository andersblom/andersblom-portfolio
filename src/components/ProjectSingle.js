import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import marked from 'marked';

export default class Project extends Component {
    render() {
        let projectData =  this.props.projects;
        let projectForRender;
        for (let i = 0; i < projectData.length; i++) {
            if (this.props.match.params.projectSlug === projectData[i].fields.slug) {
                projectForRender = projectData[i];
                break;
            }
        }      
        
        if (projectForRender !== undefined) {
            return(
                <div>
                    <Link to={this.props.match.url.replace(`/project/${projectForRender.fields.slug}`, '')}>X</Link>
                    <div className="title">{projectForRender.fields.title}</div>
                    <div className="hero-img" style={{ backgroundImage: `url(${projectForRender.fields.heroimage.fields.file.url})`, "backgroundSize": "cover", "height": "200px" }}></div>
                    <div className="content" dangerouslySetInnerHTML={{__html: marked(projectForRender.fields.content)}}></div>
                </div>
            );
        } else {
            return(<div>Loading..</div>);
        }
    }
}