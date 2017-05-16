import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const contentful = require('contentful')

/* 
TODO: Remove these comments
https://cdn.contentful.com
/spaces/eeluqlgcpzl3/entries?access_token=255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903

https://cdn.contentful.com/spaces/eeluqlgcpzl3/entries?access_token=255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903

*/

const client = contentful.createClient({
  space: 'eeluqlgcpzl3',
  accessToken: '255fc48deab6dd5408e34a23b067f57642ca699179a369cd8a8ae5910cf37903'
})

var projectData;

export default class Work extends Component {
    constructor() {
        super();
        this.state = { itemsArray: "" };
    }
    componentDidMount() {
        // Code from: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/entries/entries-collection
        client.getEntries().then(response => { 
            this.setState({ itemsArray: response.items });
        }).catch(error => {
            return error;
        });        
    }

    render() {
        // TODO: this returns the array but async. messes it up when you try to go deeper
        console.log("render: ", this.state.itemsArray[0]);
        return(
            <div>
                <ul>
                   {this.state.itemsArray[0]}
                </ul>
            </div>
        );
    }
}

/*{projectData.map((item, index) => {
    if ("/" + item.category === this.props.match.url || item.category === "both") {
        return (
        <li key={index}>
            <Link to={`${this.props.match.url}/project/${item.slug}`} 
                key={index}
                title={item.title} 
            >{item.title}
            </Link>
        </li>
        ); 
    }
    return false;
})}*/