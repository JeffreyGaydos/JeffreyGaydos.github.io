import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/NWNToolset.css';
import '../css/article/article_page.css';

class Unum extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Unum - Accessibility Web Developer - Jeffrey Gaydos Portfolio";
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
                <h1 className="article" python-backend="title">Unum - Accessibility Web Developer</h1>
                <h2 className="article date" python-backend="date">June, 2021 - August 2021</h2>
                <div className="content-divider"></div>
                <img className="article NWN" python-backend="image" src={require("../images/UnumLogoWhite.jpg")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">Description about Unum to come...</h2>
                <p className="article inline footer">Category: <Link className="link" to="/web-development"><span python-backend="category">Web Development</span></Link></p>
                <p className="article inline footer">Last Updated: 8/8/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default Unum;