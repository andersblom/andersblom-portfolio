import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import ProjectLink from './ProjectLink';
import Contact from './Contact';
import ProjectSingle from './ProjectSingle';

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'eeluqlgcpzl3',
  accessToken: '255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903'
})

export default class Design extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    // TODO: if containerizing succeeds, merge Design+Code.js
    componentDidMount() {
        client.getEntries()
        .then(response => { 
            this.setState({ projects: response.items });
        }).catch(error => {
            console.error(error);
        });    
    }


    render() {
        return(
            <div>
                <Sidebar match={this.props.match} />
                <Route exact path={`${this.props.match.url}/`} render={(props) => (
                    <ProjectLink {...props} projects={this.state} />
                )}/>
                <Route path={`${this.props.match.url}/contact`} component={Contact} />
                <Route path={`${this.props.match.url}/project/:projectSlug`} render={(props) => (
                    <ProjectSingle {...props} projects={this.state.projects}/>
                )} />
            </div>
        );
    }
}