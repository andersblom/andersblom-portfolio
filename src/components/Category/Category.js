import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import NotFound from '../NotFound/NotFound';

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'eeluqlgcpzl3',
  accessToken: '255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903'
})

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            category: undefined
        };
    }

    componentWillMount() {
        client.getEntries()
        .then(response => { 
            this.setState({ projects: response.items });
        }).catch(error => {
            console.error(error);
        }); 
        this.setState({ category: this.props.category });   
    }

    changeCategory = (newCat) => {
        this.setState({
            category: newCat
        });
    }

    render() {
        return(
            <div className="container work">
                <Sidebar match={this.props.match} category={this.state.category} categoryHandler={this.changeCategory} />
                <div className="contentArea">
                    <Switch>
                    <Route exact path={`${this.props.match.url}/`} render={(props) => (
                        <Work {...props} projects={this.state.projects} category={this.state.category} />
                    )}/>
                    
                    <Route path={`${this.props.match.url}/about/`} component={About} />
                    <Route path={`${this.props.match.url}/contact/`} component={Contact} />
                    
                    <Route path={`${this.props.match.url}/project/:projectSlug`} render={(props) => (
                        <ProjectSingle {...props} projects={this.state.projects} category={this.state.category}/>
                    )} />
                    <Route component={NotFound} />
                    </Switch>  
                </div>
            </div>
        );
    }
}