import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const contentful = require('contentful')
const client = contentful.createClient({
  space: 'eeluqlgcpzl3',
  accessToken: '255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903'
})

/* 
JSON output of everything:
https://cdn.contentful.com/spaces/eeluqlgcpzl3/entries?access_token=255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903
*/

//TODO: Use a container-component for data that needs to be passed to Work AND project. https://medium.com/@learnreact/container-components-c0e67432e005

export default class ProjectLink extends Component {
    render() {
        this.props.projects.projects.map(function(index, value){
            return <li>xd</li>
        })
    }
}
