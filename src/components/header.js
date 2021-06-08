import React, { Component } from 'react';
import '../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="corner-header header">
                <h1 className="h-heading">{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;