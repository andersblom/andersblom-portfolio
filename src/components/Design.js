import React, { Component } from 'react';

export default class Design extends Component {
    render() {
        return(
            <div>
                <h1>Design component and:</h1>
                {this.props.children}
            </div>
        );
    }
}