import React, { Component } from 'react';
import '../css/footer.css';
import FooterButton from './footer_button';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <FooterButton side="fb-left" text="About" link="/About"/>
                <h3 className="footer">This website made by Jeffrey Gaydos using <a className="external" href="https://reactjs.org/">React JS</a> and hosted using <a className="external" href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages">GitHub Pages</a></h3>
                <FooterButton side="fb-right" text="R&#233;sum&#233;" link="/Resume"/>
            </div>
        );
    }
}

export default Footer;