import React, { Component } from 'react';
import '../css/slide_show.css';
import SSDecsription from './ss_description';
import SSImage from './ss_image';
import backend from '../micro-backend/JSON/backend.json';
import { Link } from 'react-router-dom';

var currentSlideNum;
var slideActive = false;
var intervalBool = true;

class SlideShow extends Component {
    constructor(props) {
        super(props)
        this.setImage(0)
        var formattedName = backend['names'][0].substr(0, backend['names'][0].length - 5);
        var numPages = Object.keys(backend['names']).length;
        var intID = setInterval(this.SlideInterval.bind(this), 10000);
        currentSlideNum = 0;
        this.state = {
            currentSlide: 0,
            title: backend[0].title,
            date: backend[0].date,
            content: backend[0].content,
            image: backend[0].image,
            name: formattedName,
            length: numPages,
            intervalID: intID,
        }
        setTimeout(this.RemoveInitialAnimation, 2000);
    }

    setImage(i) {
        console.log(backend.names[i]);        
    }

    render() {
        return (
            <div className="slide-show">
                <SSDecsription title={this.state.title} date={this.state.date} content={this.state.content} link={this.state.name} length={this.state.length} clickEventForwards={this.SSForwards.bind(this)} clickEventBackwards={this.SSBackwards.bind(this)} slide={this.state.currentSlide} slideNum={this.state.currentSlide}/>
                <SSImage image={this.state.image} link={this.state.name}/>
                <Link to={"/" + this.state.name}>
                    <div className="ss-link-box"></div>
                </Link>
            </div>
        );
    }

    SSForwards() {
        if(!slideActive) {
            slideActive = true;
            this.SSForwardsStateUpdate.bind(this);
            document.getElementsByClassName("ss-description-box")[0].style.opacity = 0;
            document.getElementsByClassName("ss-image")[0].style.setProperty("opacity", 0, "important");
            setTimeout(() => {
                this.SSForwardsStateUpdate();
                document.getElementsByClassName("ss-description-box")[0].style.opacity = 1;
                document.getElementsByClassName("ss-image")[0].style.setProperty("opacity", 1, "important");
            }, 750);
            setTimeout(() => {
                slideActive = false;
            }, 1000);
        }
    }

    SSForwardsStateUpdate() {
        currentSlideNum = currentSlideNum < this.state.length - 1 ? currentSlideNum + 1 : 0;
        var formattedName = backend['names'][currentSlideNum].substr(0, backend['names'][currentSlideNum].length - 5);
        this.setState((prevState) => ({
            currentSlide: currentSlideNum,
            title: backend[currentSlideNum].title,
            date: backend[currentSlideNum].date,
            content: backend[currentSlideNum].content,
            image: backend[currentSlideNum].image,
            name: formattedName,
        }));
    }

    SSBackwards() {
        if(!slideActive) {
            slideActive = true;
            this.SSBackwardsStateUpdate.bind(this);
            document.getElementsByClassName("ss-description-box")[0].style.opacity = 0;
            document.getElementsByClassName("ss-image")[0].style.setProperty("opacity", 0, "important");
            setTimeout(() => {
                this.SSBackwardsStateUpdate();
                document.getElementsByClassName("ss-description-box")[0].style.opacity = 1;
                document.getElementsByClassName("ss-image")[0].style.setProperty("opacity", 1, "important");
            }, 750);
            setTimeout(() => {
                slideActive = false;
            }, 1000);
        }
    }

    SSBackwardsStateUpdate() {
        currentSlideNum = currentSlideNum > 0 ? currentSlideNum - 1 : this.state.length - 1;
        var formattedName = backend['names'][currentSlideNum].substr(0, backend['names'][currentSlideNum].length - 5);
        this.setState((prevState) => ({
            currentSlide: currentSlideNum,
            title: backend[currentSlideNum].title,
            date: backend[currentSlideNum].date,
            content: backend[currentSlideNum].content,
            image: backend[currentSlideNum].image,
            name: formattedName,
        }));
    }

    RemoveInitialAnimation() {
        try {
            document.getElementsByClassName("ss-image")[0].style.animationName = 'nothing'; //messes up the starting animatino enough to effectively remove it
        } catch (allErrors) {
            //if the user navigates away from the homepage too quickly, this function will run, finding undefined tags to set styles
        }
    }

    SlideInterval() {
        if(intervalBool) {
            document.getElementsByClassName("ss-arrow")[1].click(); //state change & binding issues occur if the function is called directly
            intervalBool = false;
        } else {
            intervalBool = true;
        }
    }
}

export default SlideShow;