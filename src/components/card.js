import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/card.css'
import CardContent from './card_content';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="card">
                <Link to={"/" + this.props.name}>
                    <img className="cd-image" src={this.props.image}/>
                    {/*<img className="cd-icon" src={this.props.image}/>*/}
                    <h2 className="cd-content-pos">
                        <CardContent title={this.props.title} content={this.props.content} />
                    </h2>
                    <div className="cd-date-box">
                        <h2 className="cd-date">{this.props.date}</h2>
                    </div>
                </Link>
                {/* <Link to={"/" + this.props.name}><button className="cd-read-more">Read More</button></Link> */}
            </div>
        );
    }
}

export default Card;