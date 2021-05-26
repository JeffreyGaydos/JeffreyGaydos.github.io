import React from 'react';
import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }

        document.title = "Jeffrey Gaydos Portfolio - About";
    }
    
    render() {
        return (
            <>
            <h1>About JSX: {this.props.match.params.name}</h1>
            </>
        );
    }
}

export default About;