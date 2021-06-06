import React, { Component } from 'react';
import '../css/corner_menu.css';
import { Link } from "react-router-dom";

class CornerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open
        };
    }

    render() {
        return(
            <div className={"corner-menu-" + this.props.open}>
                <div className="cm-content">
                    <Link to="/about"><h2 className="cm-text">About</h2></Link>
                    <div className="cm-divider"></div>
                    <Link to="/resume"><h2 className="cm-text">R&#233;sum&#233;</h2></Link>
                    <div className="cm-divider"></div>
                    <Link to="/web-development"><h2 className="cm-text">Web Development</h2></Link>
                    <div className="cm-divider"></div>
                    <Link to="/game-development"><h2 className="cm-text">Game Development</h2></Link>
                </div>
                <div className="cm-bottom">
                </div>
            </div>
        );
    }
}

export default CornerMenu;