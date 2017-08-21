import React, { Component } from 'react';

import NotFound from '../NotFound/NotFound';

import './Loader.css';

export default class Loader extends Component {    
    constructor() {
        super();
        this.state = {
            timeout: false,
        }
    }

    componentDidMount() {
        this.loadTimeout = setTimeout(() => {
            this.setState({timeout: true});
        },2500)
    }

    componentWillUnmount() {
        window.clearTimeout(this.loadTimeout);
        this.loadTimeout = false;
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