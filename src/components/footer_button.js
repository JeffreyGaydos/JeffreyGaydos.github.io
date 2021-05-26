import React, { Component } from 'react';
import '../css/footer_button.css';
import { Link } from "react-router-dom";

class FooterButton extends Component {
    render() {
        return (
            <div className="footer-button" id={this.props.side}>
                <h2 className="footer-button"><Link className="footer-button" to={this.props.link}>{this.props.text}</Link></h2>
            </div>
        );
    }
}

export default FooterButton;