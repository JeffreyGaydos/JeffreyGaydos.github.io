import React, { Component } from 'react';
import '../css/ss_image.css';

class SSImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="ss-image" src={process.env.PUBLIC_URL + this.props.image} />
        );
    }
}

export default SSImage;