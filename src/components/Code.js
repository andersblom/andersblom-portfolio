import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import ProjectLink from './ProjectLink';
import Contact from './Contact';
import ProjectSingle from './ProjectSingle';

export default class Code extends Component {
    render() {
        return(
            <div>
                <Sidebar match={this.props.match} />   
                <Route exact path={`${this.props.match.url}/`} component={ProjectLink} />
                {/*TODO: Contact-Route doesnt work if you dont select a category*/}
                <Route path={`${this.props.match.url}/contact`} component={Contact} />
                <Route path={`${this.props.match.url}/project/:projectSlug`} component={ProjectSingle} />
            </div>
        );
    }
}