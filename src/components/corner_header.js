import React, { Component } from 'react';
import '../css/corner_header.css';
import { Link } from "react-router-dom";

class CornerHeader extends Component {
    render() {
        return(
            <div className="corner-header">
                <div className="ch-words">
                    <Link to="/"><h2>Jeffrey Gaydos</h2></Link>
                    <Link to="/"><h1>Portfolio</h1></Link>
                </div>
                <div className="ch-hamburger">
                    <div className="ch-ham"></div>
                    <div className="ch-ham"></div>
                    <div className="ch-ham"></div>
                </div>
            </div>
        );
    }
}

export default CornerHeader;