import React, { Component } from 'react';
import '../css/ss_description.css';
import SSArrow from './ss_arrow.js';
import * as FTE from 'ftellipsis'; //https://github.com/ftlabs/ftellipsis
import { Link } from 'react-router-dom';

class SSDecsription extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="ss-description">
                <Link to={"/" + this.props.link}>
                    <div className="ss-description-box">
                        <h3 className="ss-description-text" id="ss-description-text-title">
                            {this.props.title}
                        </h3>
                        <br />
                        <h3 className="ss-description-text" id="ss-description-text-date">
                            <span className="red">{this.props.date}</span>
                        </h3>
                        <br />
                        <div className="ellipsis-wrapper">
                        <h3 className="ss-description-text content" id={this.props.title}>
                            {/* My high school capstone, this project involved the use of a relatively obscure tool known as the “Neverwinter Nights Toolset” from the 2002 game “Neverwinter Nights”. The project consisted of world building, creative writing, general game design principles, and scripting in a custom C-based language. */}
                            {this.props.content}
                        </h3>
                        </div>
                        <div className="custom-ellipsis">
                            <div className="ce-dot" id="ce-dot1"></div>
                            <div className="ce-dot" id="ce-dot2"></div>
                            <div className="ce-dot" id="ce-dot3"></div>
                        </div>
                    </div>
                </Link>
                <div className="text-blocker"></div>
                <div className="ss-arrow-left-pos">
                    <SSArrow clickEvent={this.HandleClickBackwards.bind(this)}/>
                </div>
                <h2 className="ss-slide-num">
                    {this.props.slideNum + 1}/{this.props.length}
                </h2>
                <div className="ss-arrow-right-pos">
                    <SSArrow clickEvent={this.HandleClickForwards.bind(this)}/>
                </div>
            </div>
        );
    }

    HandleClickForwards() {
        this.props.clickEventForwards();
    }

    HandleClickBackwards() {
        this.props.clickEventBackwards();
    }

    componentDidMount() {
        //See ftellipsis import
        var ellipseElement = document.getElementById(this.props.title);
        var ellipsis = new FTE.Ellipsis(ellipseElement.parentElement);

        ellipsis.calc();
        ellipsis.set();

    }
}

export default SSDecsription;