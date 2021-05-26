import React, { Component } from 'react';
import '../css/ss_arrow.css';

class SSArrow extends Component {
    constructor(props) {
        super(props);
    }

    hondleClick() {
        this.props.clickEvent();
    }

    render() {
        return (
            <div className="ss-arrow" onClick={this.handleClick}>
                <div className="ss-arrow-shape" id="ss-arrow-top"></div>
                <div className="ss-arrow-shape" id="ss-arrow-bottom"></div>
            </div>
        );
    }
}

export default SSArrow