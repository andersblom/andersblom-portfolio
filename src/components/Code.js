import React, { Component } from 'react';

export default class Code extends Component {
    render() {
        return(
            <div>
                <h1>Code component and:</h1>
                {this.props.children}
            </div>
        );
    }
}