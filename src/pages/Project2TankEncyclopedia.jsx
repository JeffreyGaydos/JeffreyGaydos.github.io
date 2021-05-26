import React from 'react';
import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }

        document.title = "Jeffrey Gaydos Portfolio - Tank Encyclopedia";
    }
    
    render() {
        return (
            <>
            <h1 pythonBackend="title">Tank Encyclopedia - Volunteer Web Developer</h1>
            <h2 pythonBackend="date">May, 2020 - Present</h2>
            <h2 pythonBackend="content">Here is some Tank enecyclopedia content for this post. Wee look at all this DATA.</h2>
            <img pythonBackend="image" src={require("../images/project1tanksicon.PNG")} />
            </>
        );
    }
}

export default About;