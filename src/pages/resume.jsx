import React from 'react';
import { Component } from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }

        document.title = "Jeffrey Gaydos Portfolio - Résumé";
    }
    
    render() {
        return (
            <>
            <h1>Resume JSX</h1>
            </>
        );
    }
}

export default Resume;