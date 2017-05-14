import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Work from './Work';
import Contact from './Contact';
import Project from './Project';

export default class Code extends Component {
    render() {
        return(
            <div>
                <Sidebar match={this.props.match} />   
                <Route exact path={`${this.props.match.url}/`} component={Work} />
                <Route path={`${this.props.match.url}/contact`} component={Contact} />
                <Route path={`${this.props.match.url}/project/:projectId`} component={Project} />
            </div>
        );
    }
}