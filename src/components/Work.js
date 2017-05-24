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

var projectData;

//TODO: Use a container-component for data that needs to be passed to Work AND project.

export default class Work extends Component {
    constructor() {
        super();
        this.state = { itemsArray: null, assets: null };
    }
    componentDidMount() {
        client.getEntries().then(response => { 
            this.setState({ itemsArray: response.items });
        }).catch(error => {
            return error;
        });    

        //TODO: currently logs all images (url will be in array.fields.file.url)
        client.getAssets().then(response => { 
            console.log(response.items);
            this.setState({ assets: response });
        }).catch(error => {
            return error;
        });        
    }

    render() {
        if (this.state.itemsArray === null) {
            return(
                <div>Loading..</div>
            );
        } else {
            var projectData = this.state.itemsArray;
            return(
                <div>
                    <ul>
                    {projectData.map((item, index) => {
                        //TODO: Remove this console.log spam line
                        console.log(item,index);
                        if (item.fields.category === this.props.match.url.replace("/", '') || item.fields.category === "both") {
                            return(<li key={index}><Link to="xd">{item.fields.title}</Link></li>);
                        }

                        return false;
                    })}
                    </ul>
                </div>
            );
        }
    }
}