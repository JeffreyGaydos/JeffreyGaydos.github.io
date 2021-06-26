import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/Centripetal.css';
import '../css/article/article_page.css';

class Centripetal extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Jeffrey Gaydos Portfolio - NWN Toolset";
        document.body.style.backgroundColor = 'rgb(89, 89, 89)';
    }
    
    render() {
        return (
            <>
            <div className="article-ch-pos">
                <CornerHeader />
            </div>
            <div className="article-wrapper"></div>
            <div className="content-wrapper">
                <h1 className="article" python-backend="title">Centripetal - Unreal Engine 4</h1>
                <h2 className="article date" python-backend="date">May, 2020 - August 2020</h2>
                <div className="content-divider"></div>
                {/* <img className="article" python-backend="image" src={require("../images/CentripetalTitle.PNG")} /> */}
                <img className="article" src={require("../images/Centripetal/CentripetalBanner.png")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">Centripetal is a physics-based game set in space where the player has the power to "fix" the solar system they are presented with. Obstacles to achieving this goal include the fragility of the planets, incoming comets, asteroids, other planets, and a time limit. The original idea came from an artist and member of the Game Creation Club at OSU who suggested the idea for the Global Game Jam for 2019 (the theme was "repair"). Nobody created the idea for the game jam, and I was intrigued enough to create it myself afterwards. A key principle I wanted to follow was to make everything in the game myself (or as much as possible). As such, most game elements, music, and sounds were created by me using various tools. Other elements were created by Epic Games and other artists. Another goal I set for myself was to finish the game before the 2020-2021 school year. This increased my time management skills and forced me to minimize my game to the most necessary and impactful game elements, reinforcing game design principles. Additionally, this project gave me an introduction to the object-oriented side of C++ rather than the procedural side.</h2>
                <img src={require("../images/Centripetal/CentripetalLevel2.png")} alt="Centripetal: screenshot of level 2" className="article"/>
                <h2 className="article">The following is a video of me demonstrating the game to local Ohio game developers through the wonderful group of volunteers that run the <a href="https://thecogg.com/" className="article link">COGG (Central Ohio GameDev Group)</a>. Feedback and general game design principles are discussed. The video below should start at 37:13 to skip the intros.</h2>
                <iframe className="YouTube" width="560" height="315" src="https://www.youtube-nocookie.com/embed/W7BbpA--tNI?start=2233" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2 className="article heading">Unreal Engine and Obejcts</h2>
                <h2 className="article">When starting this project, I disliked Unreal Engine primarily for its complexity. Of course, now I understand that this complexity is due to the power and features of the engine. While I still don’t have a full grasp of the Engine, I have a general idea of the basic objects needed to create a game, and how those objects should be used. Of key importance to learning the engine was the use of visual scripting. By abstracting the details of C++ away, I could focus solely on understanding the object model Unreal uses.</h2>
                <h2 className="article heading">C++ With Visual Scripting</h2>
                <h2 className="article">Those familiar with Unreal Engine know that there are 2 ways to implement game mechanics: through C++ classes or visual scripts and blueprints. Most of this game’s physics-based mechanics stayed in C++, while more visual mechanics were created in visual scripts. This coincides with suggestions made by Epic Games and allows for quick changes to be made within the editor.</h2>
                <h2 className="article heading">Handling Input</h2>
                <h2 className="article">In Unreal Engine, a specific object (known as the UPawn class) is intended to contain all controls needed to operate the pawn in that game. However, the player in my game is split between controlling the camera and controlling an object known as the gravity well (see below). All user input for the gravity well was put on the mouse to keep those controls unified and separate from the camera controls. The object that received and distributed these inputs was a child of the UPlayerController object, usually used for what is the player controller used for again. The reasons why the player controller is used instead of the pawn is because of the split nature of my player’s controls as well as the exact same control scheme throughout my game (excluding the title screen).</h2>
                <h2 className="article heading">Mechanic Details</h2>
                <h3 className="article heading">Gravity Well</h3>
                <h3 className="article">The gravity well is controlled by the player and affects the planets using a Newtonian equation of gravitational attraction. Although the player controls the gravity well, it does not inherit from the UPawn class, a typical class for player-controlled objects. This is because the gravity well does not have a camera component and is separate from the player’s POV. The player can affect the intensity, direction, and position of the gravity well. The goal of the game is to use this gravity well to move planets to an appropriate orbit distance and speed (referred to as "locking" a planet). The gravity well has a small C++ foundation used mainly for sending force values for the planets to interpret.</h3>
                <h3 className="article heading">Planets</h3>
                <h3 className="article">Planets were created with a C++ foundation (the child of a UActor C++ object) that had a visual scripting child class. The C++ class deals with gravity (including from the gravity well), collision, planet rotation, and the movement of a locked planet. The visual scripting handles the visual destruction of the planet and visual components that help direct the player to the correct position and velocity to lock a planet. After the planet is locked, it uses a parametric equation of a circle to appear as if it is orbiting correctly. Moving the planet mathematically was chosen since a constant velocity needed to be maintained and most physics engines (including Unreal Engine’s PhysX engine) struggle to set velocity directly.</h3>
                <h3 className="article heading">Asteroids</h3>
                <h3 className="article">Asteroids are relatively immobile and orbit mathematically like planets. Not all features of the planet’s C++ class should be part of the asteroids (asteroids are not affected by gravity), so it does not inherit from the planet. However, after copying a considerable amount of code, it became apparent that my classes should have been smaller from the beginning to benefit fully from these objects. Asteroids are spawned via a separate class that handles randomization of position in C++ and randomization of the 3D model in visual scripting.</h3>
                <h3 className="article heading">Comets</h3>
                <h3 className="article">Comets were once again like another class, but not similar enough to be a child class. However, with a few conditions, the asteroid class could be used to create a comet in conjunction with a new object to spawn them. Again, visuals for the comet were kept strictly within visual scripting.</h3>
                <h3 className="article">The difficulty of creating the comets came in creating proper particle effects for comet tails. Though not physically accurate, the goal was to stream the particles out the backside of the comet in a straight line opposite the comet’s direction of motion. However, this effect had to be scaled for numerous comets of different size, speed, and direction.</h3>
                <h3 className="article heading">Other Planets</h3>
                <h3 className="article">There are some planets in the game that the gravity cannot interact with until they fall out of their orbit. These objects are similar to the asteroids but needed to react to gravity after certain conditions and must be placed individually. These objects have the added feature to orbit in an ellipse. The elliptical orbits are also done parametrically but follow velocities consistent with Newtonian physics. This feature was primarily added to allow the objects to have more impact in the game as an obstacle.</h3>
                <h3 className="article heading">Music and Sounds</h3>
                <h3 className="article">The music used in this game was created in FL Studio 12 previously by myself and had a unified sound that I wanted to replicate in the UI sound effects. Each song (4 used in game) took roughly 3 hours to compose. I believe that music and sound is a primary influence in immersing a player in your game, and I wanted my sounds to be as influential as possible. As such I created my own UI sounds to match my music. However, royalty free recorded sounds were used for more realistic events (such as planet collisions and explosions).</h3>
                <h2 className="article heading">Conclusion</h2>
                <h2 className="article">In hindsight, planning out my game more fully in advance and more accurately predicting how much time I would have would have allowed me to benefit from the object-oriented programming strewn throughout Unreal Engine. Additionally, making smaller objects would help even without thorough planning. This experience gave me valuable lessons not just in C++ and object-oriented programming, but in game design, time management, and even sound design.</h2>
                <h2 className="article">Here are some links, resources, and the game itself for viewing and downloading:</h2>
                <p className="article link"><a href="https://jeffrey-gaydos.itch.io/centripetal">Itch.io link</a></p>
                <p className="article inline footer">Category: <Link className="link" to="/game-development"><span python-backend="category">Game Development</span></Link></p>
                <p className="article inline footer">Last Updated: 6/20/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default Centripetal;