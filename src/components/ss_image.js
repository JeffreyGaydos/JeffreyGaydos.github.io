import React, { Component } from 'react';
import '../css/ss_image.css';

var imageSrc;

class SSImage extends Component {
    constructor(props) {
        super(props);
        imageSrc = this.props.image;
    }
    render() {
        return (
            <img className="ss-image" src={process.env.PUBLIC_URL + imageSrc} />
        );
    }
}

export default SSImage;