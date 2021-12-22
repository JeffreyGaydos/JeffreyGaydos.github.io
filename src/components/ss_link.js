import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ss_link.css';

class SSLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Rendered... " + this.props.name);
        return (
            <Link to={"/" + this.props.name}>
                    <div className="ss-link-box"></div>
            </Link>
        );
    }
}

export default SSLink;