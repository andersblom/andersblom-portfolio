import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Work from './Work';
import Contact from './Contact';

export default class Design extends Component {
    render() {
        return(
            <div>
                <Sidebar match={this.props.match} />
                Design component             
                <Route exact path={this.props.match.url} component={Work} />
                <Route path={`${this.props.match.url}/contact`} component={Contact} />
                
            </div>
        );
    }
}