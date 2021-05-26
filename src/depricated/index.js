import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fade from 'react-reveal/Fade';

import slideImage1 from './images/project1tanksicon.PNG';
import slideImage2 from './images/project2origamist.PNG';
import slideImage3 from './images/project3tacoterror.PNG';
import slideImage4 from './images/project4toolset.PNG';
//import * as serviceWorker from './serviceWorker';
//import { render } from '@testing-library/react';

class Meat extends React.Component {
  render() {
    const URLItem = this.sanitizeURL(this.props.item);
    return(
      <a className="meat" href={URLItem}>
        <h3 className="meat-item">{this.props.item}</h3>
        <div className="meat underline"></div>
      </a>
    );
  }

  sanitizeURL(str) {
    while(str.indexOf(":") > -1) {
      str = str.replace(":", "");
    }
    while(str.indexOf(" ") > -1) {
      str = str.replace(" ", "");
    }
    return str;
  }
}

class MeatFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
  }
  
  render() {
    const meats = this.state.items.map((a) => <Meat item={a} key={a.replace(" ", "")}/>);

    return (
      <div id={this.props.open} className="meat-frame" values={this.state.items}>
        {meats}
      </div>
    );
  }
}

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      meatId: "meat-closed",
    };
  }
  
  render() {
    return(
      <div className="hamburger-wrapper" onClick={this.props.clickHandle}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    );
  }
}

class HamburgerHelper extends React.Component {
  constructor(props) {
    super(props);
    var itemsArray = [];
    itemsArray.push("Resume");
    itemsArray.push("Centripetal: Unreal Engine")
    itemsArray.push("Tank Simulation: Unreal Engine");
    itemsArray.push("Origamist: Unity");
    itemsArray.push("Taco Terror Redux: GCC at OSU");
    itemsArray.push("The Retribution of Scenegaul: NWN Toolset");
    this.state = {
      open: this.props.open,
      meatId: this.props.open ? "meat-open" : "meat-closed",
      items: itemsArray,
    }
    console.log("MeatId: " + this.state.meatId);
  }

  render() {
    return (
        <div className="hamburger-helper">
          <Fade collapse when={this.props.open}>
            <MeatFrame open={this.state.meatId} items={this.state.items}/>
          </Fade>
        </div>
      );
  }
}

class MenuBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);

    this.state = {
      HamburgerOpen: false,
    }
  }
  
  render() {
    return (
      <div id={this.props.id}>
        <div id={this.props.top}>
        <img src={require("./images/face.PNG")} className="profile" alt="Jeffrey Gaydos"/>
          <div className="myName">
            <h1 className="top">Jeffrey</h1>
            <h1 className="bottom">Gaydos</h1>
          </div>
          <h1 className="portfolio">Portfolio</h1>
          <Hamburger clickHandle={this.handleHamburgerClick}/>
          <HamburgerHelper open={this.state.HamburgerOpen}/>
        </div>
        <div id={this.props.bottom}></div>
      </div>
    );
  }

  handleHamburgerClick() {
    const newOpen = !this.state.HamburgerOpen;
    this.setState({
      HamburgerOpen: newOpen,
    });
  }
}

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    var imgArray = [];
    imgArray.push(slideImage1);
    imgArray.push(slideImage2);
    imgArray.push(slideImage3);
    imgArray.push(slideImage4);

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    this.mainRef = React.createRef();
    this.prevRef = React.createRef();
    this.currentRef = React.createRef();
    this.nextRef = React.createRef();

    this.state = {
      imgs: imgArray,
      index: 0,
      slideVal: 0,
    }
  }
  
  render() {
    const imgElements = this.state.imgs.map((a) => <img src={a} alt={a} key={a + "1"} className="ss-image" ref={this.currentRef}/>);
    const prevImgElements = this.state.imgs.map((a) => <img src={a} alt={a} key={a + "2"} className="ss-image-prev" ref={this.prevRef}/>);
    const nextImgElements = this.state.imgs.map((a) => <img src={a} alt={a} key={a + "3"} className="ss-image-next" ref={this.nextRef}/>);

    const nextIndex = this.state.index + 1 >= imgElements.length ? 0 : this.state.index + 1;
    const prevIndex = this.state.index - 1 < 0 ? imgElements.length - 1 : this.state.index - 1;

    return (
      <div className="slide-show" ref={this.mainRef}>
        {prevImgElements[prevIndex]}
        {imgElements[this.state.index]}
        {nextImgElements[nextIndex]}
        <SSLeft handle={this.previousSlide} />
        <SSRight handle={this.nextSlide} />
      </div>
    );
  }

  nextSlide() {
    // const nextIndex = this.state.index + 1 >= this.state.imgs.length ? 0 : this.state.index + 1;
    // this.setState({
    //   index: nextIndex,
    // });
    useEffect(() => {
      const interval = setInterval(() => {
        console.log('This will run every second!');
      }, 1000);
      return () => clearInterval(interval);
    }, []);


    const newSlideVal = this.state.slideVal + 1;
    this.setState({
      slideVal: newSlideVal,
    })
    var id = setInterval(() => {
      if(this.state.slideVal < -150) {
        console.log("NEXT ENDED");
        clearInterval(id);
      }
      this.currentRef.current.style.left = -this.state.slideVal + "%";
      this.nextRef.current.style.left = 100 - this.state.slideVal + "%";
    }, 5);
  
    console.log("NextSlide: " + this.state.index);
    // this.mainRef.current.classList.toggle("next");
    // this.prevRef.current.classList.toggle("next");
    // this.currentRef.current.classList.toggle("next");
    // this.nextRef.current.classList.toggle("next");
  }

  previousSlide() {
    const prevIndex = this.state.index - 1 < 0 ? this.state.imgs.length - 1 : this.state.index - 1;
    this.setState({
      index: prevIndex,
    });
    console.log("PrevSlide: " + this.state.index);
  }
}

class SSLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="ss-arrow" id="left" onClick={this.props.handle}>
        <div className="diag-pos-l">
          <div className="front"></div>
        </div>
        <div className="diag-neg-l">
          <div className="front"></div>
        </div>
      </div>
    );
  }
}

class SSRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="ss-arrow" id="right" onClick={this.props.handle}>
        <div className="diag-neg-r">
          <div className="front"></div>
        </div>
        <div className="diag-pos-r">
          <div className="front"></div>
        </div>
      </div>
    );
  }
}

class Bottom extends React.Component {
  render() {
    return (
      <div className="ss-bottom"></div>
    );
  }
}

class Frame extends React.Component {
  render() {
    //rendering slideshow first so we can get shadows on top of it
    return (
      <div>
      <SlideShow />
      <MenuBar id="menu_bar" bottom="mb_thin_light" top="mb_thick_dark"/>
      <Bottom />
      </div>
    );
  }
}

ReactDOM.render(
  <Frame />,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
