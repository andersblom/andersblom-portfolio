import React, { Component } from 'react';

import Sidebar from './Sidebar/Sidebar';

export default class Welcome extends Component {
    render() {
        return(
            <div>
                <Sidebar match={this.props.match} />
                Welcome zzz
            </div>
        );
    }
}