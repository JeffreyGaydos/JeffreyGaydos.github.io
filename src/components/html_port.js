import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/htmlport.css';

function HTMLPort() {
    var htmlPath;
    var { path } = useParams();
    if(path[0] == 'i') {
        path = ''; //for index.html, we want no
    }
    //htmlPath = require('../legacy/' + path);

    return (
        <div className="html-port">
            <h1 className="html-port"><Link to="/">Back to main site</Link></h1>
            <iframe src={'https://jeffreygaydos.github.io/legacy/' + path}></iframe>
        </div>
    );
}

export default HTMLPort;