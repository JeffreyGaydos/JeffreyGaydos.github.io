import React from 'react';
import { Component } from 'react';
import Card from '../components/card';
import CornerHeader from '../components/corner_header';
import Footer from '../components/footer';
import Header from '../components/header';
import backend from '../micro-backend/JSON/backend.json';
import '../css/category_page.css';

class CategoryPage extends Component {
    constructor(props) {
        super(props);
        var numPages = Object.keys(backend['names']).length;
        var cat_pages = [];
        var page_names = [];
        for(var i = 0; i < numPages; i++) {
            if(backend[i].category == this.props.category) {
                cat_pages.push(backend[i])
                page_names.push(backend['names'][i])
            }
        }

        var cards = [];
        for (var j = 0; j < cat_pages.length; j++) {
            cards.push(
                <div className="card-grid-pos">
                    <div className="cd-grid-item">
                        <Card image={cat_pages[j].image} date={cat_pages[j].date} title={cat_pages[j].title} content={cat_pages[j].content} name={page_names[j]}/>
                    </div>
                </div>
            );
        }

        this.state={
            menu: false,
            pages: cat_pages,
            names: page_names,
            length: cat_pages.length,
            cards: cards
        }

        document.title = props.category + " - Jeffrey Gaydos Protfolio";
        document.body.style.backgroundColor = 'rgb(89, 89, 89)';
    }

    componentWillReceiveProps() {
        window.location.reload(); //forces a card update
    }

    componentDidMount() {
        this.PostFormatCards();
    }

    PostFormatCards() {
        var cardElements = document.getElementsByClassName("cd-grid-item");
        var parentElements = document.getElementsByClassName('card-grid-pos');
        const pageWidth = document.body.clientWidth;
        const cardWidth = cardElements[0].clientWidth;
        var cardsPerWidth = Math.floor(pageWidth / cardWidth);
        //console.log(cardsPerWidth + ', ' + cardElements.length);
        for(var k = 0; k < cardElements.length; k += cardsPerWidth) {
            for(var l = k + 1; l < cardsPerWidth + k; l++) {
                try {
                    parentElements[k].appendChild(cardElements[l]);
                } catch (e) {
                    //reached end of page list so we couldn't find the next node
                }
            }
        }
    }
    
    render() {
        return (
            <>
                <div className="corner-header-pos">
                    <CornerHeader />
                </div>
                <Header title={this.props.category} />
                <div className="card-section">
                    {this.state.cards}
                </div>
                <div className="footer-pos">
                    <Footer />
                </div>
            </>
        );
    }
}

export default CategoryPage;