import React from 'react';
import { Component } from 'react';
import BigButtons from '../components/big_buttons.js';
import CornerHeader from '../components/corner_header';
import Footer from '../components/footer.js';
import SlideShow from '../components/slide_show';
import '../css/homepage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Jeffrey Gaydos Protfolio - Home";
        document.body.style.backgroundColor = 'black';
    }

    state = {showSideNav:false}
 
    handleSideNavToggle = ()=>{
        this.setState((currentState)=>{
            return {showSideNav: !currentState.showSideNav}
        })
    }
    
    render() {
        return (
            <>
            <script src="http://localhost:8097"></script>
            <SlideShow />
            <div className="corner-header-pos">
                <CornerHeader />
            </div>
            {/*<BigButtons />*/}
            <Footer />
            </>
        );
    }
}

export default HomePage;