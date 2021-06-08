import React from 'react';
import { Component } from 'react';
import Card from '../components/card';
import CornerHeader from '../components/corner_header';
import Footer from '../components/footer';
import Header from '../components/header';
import '../css/webDevelopment.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Jeffrey Gaydos Protfolio - Home";
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
            <div className="corner-header-pos">
                <CornerHeader />
            </div>
            <Header title="Web Development" />
            <div className="card-grid-pos">
                <div className="cd-grid-item">
                    <Card image={require("../images/face.PNG")} date="May, 2021 - Present"/>
                </div>
                <div className="cd-grid-item">
                    <Card />
                </div>
                <div className="cd-grid-item">
                    <Card />
                </div>
            </div>
            <div className="footer-pos">
                <Footer />
            </div>
            </>
        );
    }
}

export default HomePage;