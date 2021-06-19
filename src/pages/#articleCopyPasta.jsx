/*
    This is a template for you to copy to create move articles
    as needed. All comments with 'python-backend' in them shuold
    be included and replaced with the appropriate values.

    Everything that seems to be part of the NWN project is
    something that you should replace.

    Happy Hacking!
*/

import React from 'react';
import { Component } from 'react';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/NWNToolset.css';
import '../css/article/article_page.css';

class NWNToolset extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Jeffrey Gaydos Portfolio - NWN Toolset";
    }
    
    render() {
        return (
            <>
            <div className="article-ch-pos">
                <CornerHeader />
            </div>
            <div className="article-wrapper"></div>
            <div className="content-wrapper">
                <h1 className="article" python-backend="title">Neverwinter Nights Toolset - High School Capstone</h1>
                <h2 className="article date" python-backend="date">May, 2017 - August 2018</h2>
                <div className="content-divider"></div>
                <img className="article NWN" python-backend="image" src={require("../images/project4toolset.PNG")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">My high school capstone, this project involved the use of a relatively obscure tool known as the “Neverwinter Nights Toolset” from the 2002 game “Neverwinter Nights”. The project consisted of world building, creative writing, general game design principles, and scripting in a custom C-based language.</h2>
                <p className="article" python-backend="category">Category: Game Development</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default NWNToolset;