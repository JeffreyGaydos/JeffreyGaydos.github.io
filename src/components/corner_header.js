import React, { Component } from 'react';
import '../css/corner_header.css';
import { Link } from "react-router-dom";
import CornerMenu from './corner_menu';

class CornerHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            delayedOpen: false
        };
    }

    render() {
        return(
            <>
            <div className="corner-header">
                <div className="ch-words">
                    <Link to="/"><h2>Jeffrey Gaydos</h2></Link>
                    <Link to="/"><h1>Portfolio</h1></Link>
                </div>
                <div className="ch-hamburger" onClick={this.OpenMenu.bind(this)}>
                    <div className="ch-ham"></div>
                    <div className="ch-ham"></div>
                    <div className="ch-ham"></div>
                </div>
            </div>
            <div className={"corner-menu-pos-" + this.state.delayedOpen}>
                <CornerMenu open={this.state.open}/>
            </div>
            </>
        );
    }

    OpenMenu() {
        if(this.state.open) {
            this.setState(() => {
                this.state.open = false
                this.state.delayedOpen = false
            });
        } else {
            this.setState(() => {
                this.state.open = true
            });
            setTimeout(this.DelayedOpenMenu.bind(this), 500);
        }
        this.forceUpdate();
        console.log(this.state.open);
    }

    /*
        Sets the z-index of the menu positioner higher so that the user can click it
        This cannot be done when the user clicks, or the menu will be on top of the title

        Should be called with the same delay as the transition time on the "corner-menu-true" css class
        of the corner_menu.css file
    */
    DelayedOpenMenu() {
        try{
            this.setState(() => {
                this.state.delayedOpen = this.state.open;
            });
            console.log("Delayed: " + this.state.delayedOpen);
            this.forceUpdate();
        } catch(e) {
            //ignore this function if we have already navigated away
        }
    }
}

export default CornerHeader;