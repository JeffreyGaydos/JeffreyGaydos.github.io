import React, { Component } from 'react';
import '../css/slide_show.css';
import SSDecsription from './ss_description';
import SSImage from './ss_image';
import backend from '../micro-backend/JSON/backend.json';
import { Link } from 'react-router-dom';

class SlideShow extends Component {
    constructor(props) {
        super(props)
        this.setImage(0)
        var formattedName = backend['names'][0].substr(0, backend['names'][0].length - 5);
        var numPages = Object.keys(backend['names']).length;
        this.SSForwards.bind(this);
        this.SSBackwards.bind(this);
        this.state = {
            currentSlide: 0,
            title: backend[0].title,
            date: backend[0].date,
            content: backend[0].content,
            image: backend[0].image,
            name: formattedName,
            length: numPages
        }
    }

    setImage(i) {
        console.log(backend.names[i]);        
    }

    render() {
        return (
            <div className="slide-show">
                <SSDecsription title={this.state.title} date={this.state.date} content={this.state.content} link={this.state.name} length={this.state.length} clickEventForwards={this.SSForwards} clickEventBackwards={this.SSBackwards}/>
                <SSImage image={this.state.image} link={this.props.name}/>
            </div>
        );
    }

    SSForwards() {
        console.log("forwards: ");
        this.setState((prevState) => ({
            currentSlide: prevState.currentSlide + 1 % this.state.length
        }));
    }

    SSBackwards() {
        console.log("backwards");
    }
}

export default SlideShow;