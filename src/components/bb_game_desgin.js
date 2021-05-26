import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/bb_game_design.css';

class BBGameDesign extends Component {
    render() {
        return (
            <Link to="/game-design">
                <div className="bb-game-design">
                    <h2 className="bb-game-design">
                        Game Design
                        <img className="target-image" src={require("../images/targetWhite.png")} />
                    </h2>
                </div>
            </Link>
        );
    }
}

export default BBGameDesign;