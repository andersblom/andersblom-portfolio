import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import marked from 'marked';
import find from 'lodash/find';
import Loader from '../Loader/Loader';

import './ProjectSingle.css';

export default class ProjectSingle extends Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    
    render() {
        let projectData =  this.props.projects; 

        let projectForRender = find(projectData, a => {
            return a.fields.slug === this.props.match.params.projectSlug;
        });
        
        if (projectForRender !== undefined) {
            return(
                <div className="projectSingle">
                    <Link className="backBtn" to={`/${this.props.category}`}>X</Link>
                    <ReactCSSTransitionGroup component="div" transitionName="growIn" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
                    <div className="heroImgContainer">
                        <div className="hero-img" style={{ backgroundImage: `url(${projectForRender.fields.heroimage.fields.file.url})`}}></div>
                        <ReactCSSTransitionGroup transitionName="fadeIn" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={true} transitionEnterTimeout={500} transitionLeave={false}>
                            <div className="projectTitle">{projectForRender.fields.title}</div>
                        </ReactCSSTransitionGroup>
                    </div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup component="div" transitionName="fadeIn" transitionAppearTimeout={0} transitionAppear={true} transitionEnter={false} transitionLeave={false}>
                    <div className="content" dangerouslySetInnerHTML={{__html: marked(projectForRender.fields.content)}}></div>
                    <div className="btnHolder"><Link className="backBtnBottom hover" to={`/${this.props.category}`}>Back to projects</Link></div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        } else {
            return(<Loader />);
        }
    }
}