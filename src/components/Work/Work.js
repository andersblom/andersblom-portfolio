import React, { Component } from 'react';
import _ from 'lodash';

import WorkListItem from './WorkListItem/WorkListItem';

import './Work.css';

/* 
JSON output of everything:
https://cdn.contentful.com/spaces/eeluqlgcpzl3/entries?access_token=255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903
*/ 

export default class Work extends Component {
    findProjects() {
        const projectsToBeRendered = _.filter(this.props.projects, o => {
            return o.fields.category === this.props.category || o.fields.category === "both"
        });

        return (
            _.map(projectsToBeRendered, item => {
                return(
                    <WorkListItem category={this.props.category} match={this.props.match} project={item} key={item.sys.id} />
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
