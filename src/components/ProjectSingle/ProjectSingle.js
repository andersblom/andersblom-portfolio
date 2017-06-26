import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import marked from 'marked';
import find from 'lodash/find';

export default class Project extends Component {
    render() {
        let projectData =  this.props.projects; 

        let projectForRender = find(projectData, a => {
            return a.fields.slug === this.props.match.params.projectSlug;
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