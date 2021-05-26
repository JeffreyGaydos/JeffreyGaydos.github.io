import React from 'react';
import { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
                <h1>About: {this.props.match.params.name}</h1>                
                <button onClick={() => {this.props.history.push("/");}}>Go Home Ball</button>
                <button onClick={() => {this.props.history.goBack();}}>Go Back Ball</button>
            </>
        );
    }
}

export default About;