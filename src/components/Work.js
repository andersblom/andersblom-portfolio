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
    componentDidMount() {
        
    }

    render() {
        client.getEntries().then(response => { 
            response.items.map((item, index) => {
                console.log(item, index);
            });
        }).catch(error => {
            return error;
        })
        return(
            <div>
                <ul>
                    {this.test}
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