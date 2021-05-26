import React, { Component } from 'react';
import '../css/ss_arrow.css';


class SSArrow extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.clickEvent();
    }

    render() {
        return (
            <div className="ss-arrow" onClick={this.handleClick.bind(this)}>
                <div className="ss-arrow-shape" id="ss-arrow-top"></div>
                <div className="ss-arrow-shape" id="ss-arrow-bottom"></div>
            </div>
        );
    }
}

export default SSArrow