import React from 'react';
import { Component } from 'react';
import '../css/404page.css';
import { Link } from 'react-router-dom';

class _404Page extends Component {
    constructor(props) {
        super(props);
        document.title = "Jeffrey Gaydos Portfolio - 404 Page";
    }

    render() {
        return (
            <div className="_404">
                <h1 className="_404">404 Error</h1>
                <h4 className="_404">The page you are trying to acces does not exist, was removed, or is under development.</h4>
                <h4 className="_404">Try looking through the <Link to="/"><span className="_404">Homepage</span></Link> or take a look at the <Link to="../legacy/index.html"><span className="_404">Legacy Website</span></Link></h4>
            </div>
        );
    }
}

export default _404Page;