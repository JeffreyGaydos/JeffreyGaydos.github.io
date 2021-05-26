import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/bb_web_design.css';

class BBWebDesign extends Component {
    render() {
        return (
            <Link to="/web-design">
                <div className="bb-web-design">
                    <h2 className="bb-web-design">
                        Web Design
                    </h2>
                    <h3 className="bb-web-design-left">
                        &#60;
                    </h3>
                    <h3 className="bb-web-design-text">
                        Front-end
                    </h3>
                    <h3 className="bb-web-design-right">
                        /&#62;
                    </h3>
                </div>
            </Link>
        );
    }
}

export default BBWebDesign;