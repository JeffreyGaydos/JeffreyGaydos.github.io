import React, { Component } from 'react';
import '../css/slide_show.css';
import SSDecsription from './ss_description';
import SSImage from './ss_image';
import backend from '../micro-backend/JSON/backend.json';
import { Link } from 'react-router-dom';

//var currentSlideNum;
var slideActive = false;
var intervalBool = true;

class SlideShow extends Component {
    constructor(props) {
        super(props);        
        var formattedName = backend['names'][0];
        var numPages = Object.keys(backend['names']).length;
        var intID = setInterval(this.SlideInterval.bind(this), 10000);
        var currentSlideNum = 0;
        this.state = {
            currentSlide: 0,
            title: backend[0].title,
            date: backend[0].date,
            content: backend[0].content,
            image: backend[0].image,
            name: formattedName,
            length: numPages,
            intervalID: intID,
            intervalSlide: currentSlideNum
        }
        setTimeout(this.RemoveInitialAnimation, 2000);
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
        try {
            if(!slideActive) {
                slideActive = true;
                this.SSForwardsStateUpdate.bind(this);
                document.getElementsByClassName("ss-description-box")[0].style.opacity = 0;
                document.getElementsByClassName("ss-image")[0].style.setProperty("opacity", 0, "important");
                setTimeout(() => {
                    try {
                    this.SSForwardsStateUpdate();
                    document.getElementsByClassName("ss-description-box")[0].style.opacity = 1;
                    document.getElementsByClassName("ss-image")[0].style.setProperty("opacity", 1, "important");
                    } catch(e) {
                        //ignore errors, we are just on another page...
                    }
                }, 750);
                setTimeout(() => {
                    slideActive = false;
                }, 1000);
            }
        } catch (e) {
            //all errors should be the result of page naviagtion, just ignore
        }
    }

    SSForwardsStateUpdate() {
        var currentSlideNum = this.state.currentSlide < this.state.length - 1 ? this.state.currentSlide + 1 : 0;
        var formattedName = backend['names'][this.state.currentSlide];
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
        var currentSlideNum = this.state.currentSlide > 0 ? this.state.currentSlide - 1 : this.state.length - 1;
        var formattedName = backend['names'];
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
        //conditionals for stoping the automatic slideshow
        if(window.location.pathname !== "/") {
            clearInterval(this.state.intervalID);
        } else {
            if(intervalBool) { //conditionals for skiping the double click
                intervalBool = false;
            } else {
                intervalBool = true;
                //The following code must be in this false branch here to detect user input
                if(this.state.currentSlide !== this.state.intervalSlide) {
                    //pause slideshow for 1 interval
                    this.SlideIntervalStateUpdateToCurrent.bind(this);
                    this.SlideIntervalStateUpdateToCurrent();
                } else {
                    //continue slideshow as normal
                    this.SlideIntervalStateUpdate.bind(this);
                    this.SlideIntervalStateUpdate();
                    document.getElementsByClassName("ss-arrow")[1].click(); //state change & binding issues occur if the function is called directly
                }
            }
        }
    }

    SlideIntervalStateUpdate() {
        var currentSlideNum = this.state.intervalSlide < this.state.length - 1 ? this.state.intervalSlide + 1 : 0;
        this.setState((prevState) => ({
            intervalSlide: currentSlideNum
        }));
    }

    SlideIntervalStateUpdateToCurrent() {
        this.setState((prevState) => ({
            intervalSlide: this.state.currentSlide
        }));
    }

    
}

export default SlideShow;