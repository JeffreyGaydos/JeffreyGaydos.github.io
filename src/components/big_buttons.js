import React, { Component } from 'react';
import '../css/big_buttons.css';
import BBGameDesign from './bb_game_desgin';
import BBWebDesign from './bb_web_design';
import VerticleDivider from './vertical divider';

class BigButtons extends Component {
    render() {
        return (
            <div className="big-button">
                <BBWebDesign />
                <VerticleDivider />
                <BBGameDesign />
            </div>
        );
    }
}

export default BigButtons;