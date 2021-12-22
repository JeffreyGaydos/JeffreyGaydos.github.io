import React, { Component } from 'react';
import * as FTE from 'ftellipsis'; //https://github.com/ftlabs/ftellipsis
import '../css/card_content.css'

class CardContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-content">
                <h1 className="cc-title">{this.props.title}</h1>    
                <div className="cc-content-container">
                    <h2 className="cc-content" id={this.props.title}>
                        {this.props.content}
                    </h2>
                </div>
                <div className="cc-custom-ellipsis">
                    <div className="cc-dot" id="ce-dot1"></div>
                    <div className="cc-dot" id="ce-dot2"></div>
                    <div className="cc-dot" id="ce-dot3"></div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        //See ftellipsis import
        var ellipseElement = document.getElementById(this.props.title);
        var ellipsis = new FTE.Ellipsis(ellipseElement.parentElement, true);

        ellipsis.calc();
        ellipsis.set();
    }
}

export default CardContent;