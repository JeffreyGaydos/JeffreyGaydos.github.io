import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/article_standard.css';
import backend from '../micro-backend/JSON/backend.json';

class Article extends Component {
    constructor(props) {
        super(props);
        document.body.style.backgroundColor = 'nothing !important';
        document.body.style.backgroundImage = '"' + this.props.image + '"';        

        document.body.style.backgroundColor = 'rgb(89, 89, 89)';
    }

    render() {
        return (
            <div className="article-std">
                
            </div>
        );
    }
}

export default Article;