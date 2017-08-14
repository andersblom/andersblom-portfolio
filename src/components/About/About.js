import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutSection">
        <h1 className="aboutTitle">About me</h1>
        <div className="aboutParagraph">My name is Anders Blom. I'm 26 years old, and I was born and raised in Kolding, Denmark. Today, I live in the US (currently Buffalo, New York) with my wife and our cat, Monkey.</div>
        <div className="aboutParagraph">I have nothing but &lt;3 for digital things. No matter if it's a website, a mobile app or something that shows on a watch, I can't help but explore and look at the nuts and bolts of the technology behind to see how it works. I'm that guy who inspects a website in Chrome Dev Tools before actually reading what's on there.</div>
      </div>
    );
  }
}