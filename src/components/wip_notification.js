import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/htmlport.css';
import '../css/wip_notification.css';

class WIPNotification extends Component {

    render() {
        return (
            <div className="wip-notif">
                <h1 className="wip-notif">This main site is currently under development. Look through my <Link to="/react/legacy/index.html"><span onClick={this.HideAll} className="_404">Legacy Website</span></Link> for more information.</h1>
                <div className="wip-x" onClick={this.HideAll}>
                    <div className="wip-x1"></div>
                    <div className="wip-x2"></div>
                </div>
            </div>
        );
    }

    HideAll() {
        console.log("Hidden");
        document.getElementsByClassName("wip-notif")[0].style.display = 'none';
    }
}

export default WIPNotification;