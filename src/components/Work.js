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

export default class Work extends Component {
    constructor() {
        super();
        this.state = {
            projects: null, 
            assets: null 
        };
    }
    componentDidMount() {
        client.getEntries()
        .then(response => { 
            this.setState({ projects: response.items });
        }).catch(error => {
            console.error(error);
        });    

        //TODO: currently logs all images (url will be in array.fields.file.url)
        client.getAssets()
        .then(response => { 
            this.setState({ assets: response });
        }).catch(error => {
            console.error(error);
        });        
    }

    render() {
        if (this.state.projects === null) {
            return(
                <div>Loading..</div>
            );
        } else {
            return(
                <div>
                    <ul>
                    {this.state.projects.map((item, index) => {
                        if (item.fields.category === this.props.match.url.replace("/", '') || item.fields.category === "both") {
                            return(<li key={index}><Link to={`${this.props.match.url}/project/${item.fields.slug}`}>{item.fields.title}</Link></li>);
                        }

                        return false;
                    })}
                    </ul>
                </div>
            );
        }
    }
}