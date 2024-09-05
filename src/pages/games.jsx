import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/games.css';
import '../css/article/article_page.css';

class Games extends Component {
    constructor(props) {
        super(props);
        this.flipTile = this.flipTile.bind(this);
        this.flipElement = this.flipElement.bind(this);
        this.checkSuccess = this.checkSuccess.bind(this);
        this.applyFlips = this.applyFlips.bind(this);
        this.flipAllAdjacent = this.flipAllAdjacent.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
        this.newGame = this.newGame.bind(this);

        this.state={
            menu: false,
            success: false,
            flipsLeft: 0,
            flipRecord: []
        };
        document.title = "Jeffrey Gaydos Portfolio - Games";
        document.body.style.backgroundColor = 'rgb(89, 89, 89)';
        this.generateBoard();
    }

    flipElement(element) {
        if(!element) return;
        if(element.classList.contains("tile-black")) {
            element.classList.remove("tile-black");
            element.classList.add("tile-white");
        } else {
            element.classList.remove("tile-white");
            element.classList.add("tile-black");
        }
    }

    checkSuccess(flipsLeftEarly) {
        var allDestinationTiles = document.querySelectorAll(".destination.tile");
        var allSourceTiles = document.querySelectorAll(".source.tile");
        var isRunSuccess = true;
        var incorrectTilesDest = [];
        var incorrectTilesSource = [];
        allDestinationTiles.forEach((dt, i) => {
            allSourceTiles.forEach((st, j) => {
                if(i == j) {
                    if((dt.classList.contains("tile-black") && st.classList.contains("tile-white")) || (dt.classList.contains("tile-white") && st.classList.contains("tile-black"))) {
                        isRunSuccess = false;
                        if(flipsLeftEarly === 0) {
                            incorrectTilesDest.push(dt);
                            incorrectTilesSource.push(st);
                        } else {
                            return; //one was off, return early so we don't hit the default success
                        }
                    }
                }
            })
        });
        
        if(isRunSuccess) {
            this.setState({
                success: true
            });   
        } else {
            this.setState({
                success: false
            });
            if(flipsLeftEarly === 0) {
                incorrectTilesDest.forEach(dt => {
                    dt.classList.add("error");
                });
                incorrectTilesSource.forEach(st => {
                    st.classList.add("error");
                });
                setTimeout(() => {
                    this.resetBoard();
                }, 3000);
            }
        }
    }

    resetBoard() {
        var allDestinationTiles = document.querySelectorAll(".destination.tile");
        var allSourceTiles = document.querySelectorAll(".source.tile");
        allDestinationTiles.forEach(dt => {
            if(dt.classList.contains("error")) {
                dt.classList.remove("error");
            }
        });
        allSourceTiles.forEach(st => {
            if(st.classList.contains("error")) {
                st.classList.remove("error");
            }
        });

        var delay = 0;
        this.state.flipRecord.reverse().forEach((fr) => {
            delay += 500
            setTimeout(() => {
                this.flipAllAdjacent(fr[0], fr[1]);
                this.setState({
                    flipsLeft: this.state.flipsLeft + 1
                });
            }, delay);
        });
        setTimeout(() => {
            this.setState({
                flipRecord: []
            });
        }, delay);
    }

    flipAllAdjacent(flipX, flipY) {
        var center = document.querySelector(".source.tile-" + flipY + flipX + ".tile");
        var left = document.querySelector(".source.tile-" + flipY + (flipX - 1) + ".tile");
        var right = document.querySelector(".source.tile-" + flipY + (flipX + 1) + ".tile");
        var up = document.querySelector(".source.tile-" + (flipY + 1) + flipX + ".tile");
        var down = document.querySelector(".source.tile-" + (flipY - 1) + flipX + ".tile");
        var upleft = document.querySelector(".source.tile-" + (flipY + 1) + (flipX - 1) + ".tile");
        var upright = document.querySelector(".source.tile-" + (flipY + 1) + (flipX + 1) + ".tile");
        var downleft = document.querySelector(".source.tile-" + (flipY - 1) + (flipX - 1) + ".tile");
        var downright = document.querySelector(".source.tile-" + (flipY - 1) + (flipX + 1) + ".tile");

        this.flipElement(center);
        this.flipElement(left);
        this.flipElement(right);
        this.flipElement(up);
        this.flipElement(down);
        this.flipElement(upleft);
        this.flipElement(upright);
        this.flipElement(downleft);
        this.flipElement(downright);
    }

    componentDidMount() {
        this.applyFlips();
    }

    flipTile(e) {
        if(this.state.success || this.state.flipsLeft === 0) return;

        var center = e.currentTarget;
        var flipY = NaN;
        center.classList.forEach(c => { if(c.startsWith("tile-") && !c.startsWith("tile-black") && !c.startsWith("tile-white")) flipY = parseInt(c[5]) });
        var flipX = NaN;
        center.classList.forEach(c => { if(c.startsWith("tile-") && !c.startsWith("tile-black") && !c.startsWith("tile-white")) flipX = parseInt(c[6]) });

        this.flipAllAdjacent(flipX, flipY);

        this.checkSuccess(this.state.flipsLeft - 1);

        this.setState({
            flipsLeft: this.state.flipsLeft - 1,
            flipRecord: [...(this.state.flipRecord ?? []), [flipX, flipY]]
        });
    }

    generateBoard(square = true) {
        var width = Math.ceil(Math.random() * 6 + 3);
        var height = Math.ceil(Math.random() * 6 + 3);
        if(square) {
            height = width;
        }

        var allRowsDestination = [];
        var allRowsSource = [];
        for(var i = 0; i < height; i++) {
            var rowTdsDestination = [];
            var rowTdsSource = [];
            for(var j = 0; j < width; j++) {
                if(Math.random() > 0.5) {
                    rowTdsDestination.push(
                        <td className={"destination tile tile-white tile-" + i + j}></td>
                    );
                    rowTdsSource.push(
                        <td className={"source tile tile-white tile-" + i + j} onClick={this.flipTile}></td>
                    );
                } else {
                    rowTdsDestination.push(
                        <td className={"destination tile tile-black tile-" + i + j}></td>
                    );
                    rowTdsSource.push(
                        <td className={"source tile tile-black tile-" + i + j} onClick={this.flipTile}></td>
                    );
                }
            }
            allRowsDestination.push(
                <tr>
                    {rowTdsDestination}
                </tr>
            );
            allRowsSource.push(
                <tr>
                    {rowTdsSource}
                </tr>
            )
        }

        var totalFlips = 0;
        if(width > height) {
            totalFlips = Math.ceil(Math.random() * Math.ceil(width / 2.0));
        } else {
            totalFlips = Math.ceil(Math.random() * Math.ceil(height / 2.0));
        }        

        this.state = {
            destinationRows: allRowsDestination,
            sourceRows: allRowsSource,
            flips: totalFlips,
            flipsLeft: totalFlips,
            width: width,
            height: height
        };
    }

    applyFlips() {
        var currentFlips = [];
        for(var k = 0; k < this.state.flips; k++) {
            var randX = Math.floor(Math.random() * this.state.width);
            var randY = Math.floor(Math.random() * this.state.height);
            while(currentFlips.includes([randX, randY])) {
                randX = Math.floor(Math.random() * this.state.width);
                randY = Math.floor(Math.random() * this.state.height);
            }
            this.flipAllAdjacent(randX, randY);
            currentFlips.push([randX, randY]);
        }
    }

    newGame() {
        //reset state
        this.setState({
            flips: 0,
            flipsLeft: 0,
            destinationRows: [],
            sourceRows: [],
            success: false,
            flipRecord: [],
            menu: false,
            width: 0,
            height: 0
        });

        //recreate board
        this.generateBoard();
    }
    
    render() {
        return (
            <>
            <div className="article-ch-pos">
                <CornerHeader />
            </div>
            <div className="article-wrapper">
            </div>
            <div className="content-wrapper">
                <ul className="game-list">
                    <li className="tile-flip">
                        <p>Tile Flip:</p>
                        <p>Flip tiles to change the source grid into the destination grid. Each flip will swap the color of all adjacent tiles and the title you clicked. Refresh to get a new random board. The number of flips needed for this puzzle is listed below.</p>
                        <label><b>{this.state.flips} Flip(s) total</b></label>
                        <label><b>Remaining Flips: {this.state.flipsLeft}</b></label>
                        <label>Destination Grid:</label>
                        <table className={"destination success-" + this.state.success}>
                            <tbody>
                                {this.state.destinationRows}
                            </tbody>
                        </table>
                        <label>Source Grid:</label>
                        <table className={"source success-" + this.state.success}>
                            <tbody>
                                {this.state.sourceRows}
                            </tbody>
                        </table>
                        {this.state.success && <label>You Win!</label>}
                        {/* <button onClick={this.newGame}>New Puzzle</button> */}
                    </li>
                </ul>
            </div>
            <Footer />
            </>
        );
    }
}

export default Games;