import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/htmlport.css';

function HTMLPort() {
    var { path } = useParams();

    return (
        <div className="html-port">
            <h1 className="html-port"><Link to="/">Back to main site</Link></h1>
            <iframe src={process.env.PUBLIC_URL + '/legacy/' + path}></iframe>
        </div>
    );
}

export default HTMLPort;