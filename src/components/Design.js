import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Work from './Work';
import Contact from './Contact';
import Project from './Project';

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'eeluqlgcpzl3',
  accessToken: '255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903'
})

export default class Design extends Component {
    constructor() {
        super();
        this.state = {
            projects: [], 
            assets: []
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

        //TODO: currently logs all images (url will be in array.fields.file.url)
        client.getAssets()
        .then(response => { 
            this.setState({ assets: response });
        }).catch(error => {
            console.error(error);
        });        
    }


    render() {
        return(
            <div>
                <Sidebar match={this.props.match} />
                <Route exact path={`${this.props.match.url}/`} component={Work} />
                <Route path={`${this.props.match.url}/contact`} component={Contact} />
                <Route path={`${this.props.match.url}/project/:projectId`} render={(props) => (
                    <Project {...props} projects={this.state.projects} />
                )} />
            </div>
        );
    }
}