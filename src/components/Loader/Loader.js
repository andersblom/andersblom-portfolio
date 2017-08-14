import React, { Component } from 'react';

import NotFound from '../NotFound/NotFound';

import './Loader.css';

export default class Loader extends Component {    
    constructor() {
        super();
        this.state = {
            timeout: false
        }
    }

    componentDidMount() {
        let loaderTimeout = setTimeout(() => {
            this.setState({timeout: true});
        },3500)
    }

    render() {
        if (this.state.timeout === false) {
            return(
                <div className="loaderContainer">
                    <div className="loader"></div>
                </div>
            );
        } else {
            return <NotFound />;
        }
    }
}