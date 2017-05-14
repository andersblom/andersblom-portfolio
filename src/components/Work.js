import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import projectData from '../data/projects.json';

export default class Work extends Component {
    render() {
        console.log(projectData, this.props);
        return(
            <div>
                <ul>
                {projectData.projects.map((item, index) => {
                    return (
                    <li key={index}>
                        <Link to={`${this.props.match.url}/project/${item.slug}`} 
                            key={index}
                            title={item.title} 
                        >{item.title}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}