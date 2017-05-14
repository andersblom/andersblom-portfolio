import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                this is the project: {this.props.match.params.projectId}
            </div>
        );
    }
}