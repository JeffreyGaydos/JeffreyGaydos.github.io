import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/ThisSite.css';
import '../css/article/article_page.css';

class ThisSite extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "This Site - Jeffrey Gaydos Portfolio";
        document.body.style.backgroundColor = 'rgb(89, 89, 89)';
    }
    
    render() {
        return (
            <>
            <div className="article-ch-pos">
                <CornerHeader />
            </div>
            <div className="article-wrapper"></div>
            <div className="content-wrapper">
                <h1 className="article" python-backend="title">This Site - React.js and GitHub Pages</h1>
                <h2 className="article date" python-backend="date">May, 2021 - Present</h2>
                <div className="content-divider"></div>
                <img className="article crop thisSite" python-backend="image" src={require("../images/ThisSite.png")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">This site was previously implemented using Bootstrap, and after learning of the power of React.js, I wanted to put it to work. Additionally, I found my bootstrap site to have an outdated style. Resolving to make an overall better portfolio site, I decided to create this site very carefully, with plenty of input from others about styling.</h2>
                <p className="article inline footer">Category: <Link className="link" to="/web-development"><span python-backend="category">Web Development</span></Link></p>
                <p className="article inline footer">Last Updated: 8/8/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default ThisSite;