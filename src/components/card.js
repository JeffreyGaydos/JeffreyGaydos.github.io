import React, { Component } from 'react';
import '../css/card.css'

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="card">
                <img className="cd-image" src={this.props.image}/>
                <h2 className="cd-content-pos">
                    content goes here
                </h2>
                <div className="cd-date-box">
                    <h2 className="cd-date">{this.props.date}</h2>
                </div>
            </div>
        );
    }
}

export default Card;