import React from 'react';
import { Component } from 'react';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/article_page.css';

class TankEnc extends Component {
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
                <h1 className="article" python-backend="title">Volunteer Web Developer - Tank Eneyclopedia</h1>
                <h2 className="article date" python-backend="date">May, 2020 - Present</h2>
                <div className="content-divider"></div>
                <img className="article" python-backend="image" src={require("../images/logo-big-border.png")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">Tank Encyclopedia is run by a community of volunteers ranging from amateur historians to professionals. Near the end of 2019, the managers of this community switched hosts for the website and started using Wordpress. After urgings from my brother Brian Gaydos (who had been considerably involved in the community), I decided to aid creating features for the website as well as helping with general maintenance. Having little to no experience in Wordpress was a learning curve, but using my background in CSS and a few tutorials, I made my first feature for the website in a week. Since MONTH DAY 2020, I have implemented roughly 7 features and other small modifications for the website over 1500 lines of code. Considerable local testing (of individual pages) was done for each feature, but some unexpected issues still arose. Looking back, I would have liked to create my own plugin for Wordpress (which is much more modular) rather than only using a child  theme. This project advanced my knowledge and experience in Web Development principles, JavaScript (and jQuery), and CSS.</h2>
                <p>Category: </p><p className="article" python-backend="category">Web Development</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default TankEnc;