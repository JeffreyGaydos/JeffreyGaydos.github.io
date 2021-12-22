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
        document.title = "Centripetal - Jeffrey Gaydos Portfolio";
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
                <h2 className="article">Those familiar with Unreal Engine know that there are 2 ways to implement game mechanics: through C++ classes or visual scripts and blueprints. Most of this game’s physics-based mechanics stayed in C++, while more visual mechanics were created in visual scripts. This coincides with suggestions made by Epic Games and allows for quick look-and-feel tweaking rather than waiting for C++ source code to compile.</h2>
                <h2 className="article heading">Handling Input</h2>
                <h2 className="article">In Unreal Engine, a specific object (known as the UPawn class) is intended to contain all controls needed to operate the pawn in that game. However, the player in my game is split between controlling the camera and controlling an object known as the gravity well (see below). All user input for the gravity well was put on the mouse to keep those controls unified and separate from the camera controls. The object that received and distributed these inputs was a child of the UPlayerController object, usually used for determining which pawn to control (at least in the simple cases). The reasons why the player controller is used instead of the pawn is because of the split nature of my player’s controls as well as the static control scheme throughout my game (excluding the title screen).</h2>
                <img src={require("../images/Centripetal/CentripetalLevelController.png")} alt="a view of the blueprint used to implement a player controller" className="article"></img>
                <p className="article no-margin">A zoomed-out view of the Unreal Engine blueprint used to handle all user input for the player while they are in a level. The white boxes are the comment system in the blueprint editor. See the bottom of this page to download the source files.</p>
                <h2 className="article heading">Getting the Right Look</h2>
                <h2 className="article inline split-left">When starting this project, I did not expect that many visual elements would be required. In fact, I specifically chose this project for my summer because of the simplicity of the game objects (planets are primitive spheres). However, I quickly realized that a sphere doesn't become a planet (or a sun) without a complex material to go with it. Therefore, the start of the project involved tweaking materials and lighting to get the sun and planets looking celestial. Being primarily a programmer, and not an artist, I looked to see if any default assets could be used to help me create my materials, and luckily, I found an excellent fire texture that, when stretched out and color modified could appear as cloudy. I ended up using this asset liberally for the planets and the sun. Additionally, I grappled with how much light my sun object should really produce. A too powerful point light could create harsh enough lighting that the engine's camera only picks up bright white and jet black. I settled on a combination of point lights, with extra bright lights being only active just outside the sun mesh, and weaker lights extending far into the distance of the solar system.</h2>
                <div className="article inline split-right">
                    <img src={require("../images/Centripetal/CentripetalSun.png")} alt="Centripetal Sun" className="article no-margin" />
                    <p className="article reduced-margin">The rendered version of the sun asset, one of the first assets I created for the project. This asset defined how the rest of the assets generally appeared.</p>
                    <img src={require("../images/Centripetal/SunMaterial.png")} alt="Centripetal Sun Material" className="article no-margin" />
                    <p className="article reduced-margin">A view of Unreal Engine's material editor and how the sun material was created. Note that the sun material here has no lighting (contrast with the above).</p>
                </div>
                <h2 className="article heading">The Danger of Explaining</h2>
                <h2 className="article">Near the end of the project, I realized that my game and its controls had become quite complex, necessitating a tutorial. I began laying out all the elements that the player needed to know about: arrows, planets, the gravity well, camera movement, etc. Seeing as I was short on time, I opted for a text-based tutorial, figuring it would be much easier to implement than an interactive walkthrough. Much to my dismay, the list of things to explain in text and image quickly bloated the tutorial to 5 pages. Most players do not want to feel the need to study a game before playing it, and a reading-intensive tutorial feels very much like studying. In hindsight, an interactive tutorial would have been the best decision, and it may not have been as difficult to implement as I had imagined.</h2>
                <h2 className="article heading">Mechanic Details</h2>
                <h3 className="article heading">Gravity Well</h3>
                <img src={require("../images/Centripetal/CentripetalGravityWell.gif")} alt="view of grvity well asset and blueprint" className="article reduced-margin" />
                <h3 className="article">The gravity well is controlled by the player and affects the planets using a Newtonian equation of gravitational attraction. Although the player controls the gravity well, it does not inherit from the UPawn class, a typical class for player-controlled objects. This is because the gravity well does not have a camera component and is separate from the player’s POV. The player can affect the intensity, direction, and position of the gravity well. The goal of the game is to use this gravity well to move planets to an appropriate orbit distance and speed (referred to as "locking" a planet). The gravity well has a small C++ foundation used mainly for sending force values for the planets to interpret.</h3>
                <h3 className="article heading">Planets</h3>
                <img src={require("../images/Centripetal/CentripetalPlanet.png")} alt="view of a planet game asset and blueprint" className="article reduced-margin" />
                <p className="article no-margin">A view of the planet game asset in the editor and its possibly over-complex mass of blueprints, most of which handle state changes.</p>
                <h3 className="article">Planets were created with a C++ foundation (the child of a UActor C++ object) that had a visual scripting child class. The C++ class deals with gravity (including from the gravity well), collision, planet rotation, and the movement of a locked (see 'Gravity Well' above) planet. The visual scripting handles the destruction animation of the planet, visual components that help direct the player to the correct position and various state changes. After the planet is locked, it uses a parametric equation of a circle to appear as if it is orbiting correctly. Moving the planet mathematically (rather than physically) was chosen since a constant velocity is needed to orbit the planet, and most physics engines (including Unreal Engine’s PhysX engine) struggle to set velocity directly. Not to mention, circular motion is easy to implement.</h3>
                <h3 className="article heading">Asteroids</h3>
                <h3 className="article inline split-left">Asteroids are relatively immobile and orbit mathematically like planets. Not all features of the planet’s C++ class could be part of the asteroids (asteroids are not affected by gravity), so it does not inherit from the planet. However, after copying a considerable amount of code from the planet's C++ source, it became apparent that my classes should have been smaller from the beginning to benefit fully from OOP. Asteroids are spawned via a separate class that handles randomization of position in C++ and randomization of the 3D model in visual scripting.</h3>
                <div className="artilce split-right inline C-AsteroidPic">
                    <img src={require("../images/Centripetal/CentripetalAsteroidsVisual.png")} alt="an in-game view of the asteroid asset" className="article C-AsteroidPic"/>
                    <p className="article reduced-margin">An in-game view of the asteroid asset</p>
                </div>
                <h3 className="article heading">Comets</h3>
                <div className="article inline split-left">
                    <h3 className="article">Comets were once again like another class, but not similar enough to be a child class. However, with a few conditions, the asteroid class could be used to create a comet in conjunction with a new object to spawn them. Again, visuals for the comet were kept strictly within visual scripting.</h3>
                    <h3 className="article">The difficulty of creating the comets came in creating proper particle effects for comet tails. Though not physically accurate, the goal was to stream the particles out the backside of the comet in a straight line opposite the comet’s direction of motion. However, this effect had to be scaled for numerous comets of different size, speed, and direction.</h3>
                </div>
                <div className="article inline split-right">
                    <img src={require("../images/Centripetal/CentripetalCommets.gif")} alt="commets in-game" className="article"/>
                    <p className="article no-margin">A view of the commet game asset in-game (playing in editor).</p>
                </div>
                <h3 className="article heading">Other Planets</h3>
                <h3 className="article inline split-left">There are some planets in the game that the gravity cannot interact with until they fall out of their orbit. These objects are similar to the asteroids but needed to react to gravity after certain conditions and must be placed individually. These objects have the added feature to orbit in an ellipse. The elliptical orbits are also done parametrically but follow velocities consistent with Newtonian physics. This feature was primarily added to allow the objects to have more impact in the game as an obstacle.</h3>
                <div className="article inline split-right">
                    <img src={require("../images/Centripetal/CentripetalDwarfVisual.png")} alt="the blueprints for the dwarf planet game asset" className="article reduced-margin"/>
                    <p className="article no-margin">The smaller planets near the sun are dwarf planets, and serve as celestial (and explosive) obsticles to the player.</p>
                </div>
                <h3 className="article heading">Music and Sounds</h3>
                <h3 className="article">The music used in this game was created in FL Studio 12 and previously composed by me. The music had a fairly unified sound that I wanted the UI and sound effects to reflect. Each song (4 used in-game) took roughly 3 hours to compose. I believe that music and sound is a primary contributor to player immersion, and I wanted my sounds and music to be as influential as possible. However, royalty free recorded sounds were used for the more realistic events of the game (such as planet collisions and explosions). The music used in Centripetal and other related compositions by me can be found and downloaded at the bottom of this page.</h3>
                <h2 className="article heading">Conclusion</h2>
                <h2 className="article">In hindsight, planning out my game more fully in advance and more accurately predicting how much time I would have would have allowed me to benefit from the object-oriented programming strewn throughout Unreal Engine. Additionally, making smaller objects would help even without thorough planning. I learned valuable lessons not just in OOP, but also in game design. I'm proud of this experience, and I hope to create another game over the course of one of my future summers.</h2>
                <h2 className="article">Here are some links, resources, and the game itself for viewing and downloading:</h2>
                <div className="flex-left">
                    <img src="https://static.itch.io/images/itchio-textless-black.svg" className="inline itch" alt="itch.io logo" />
                    <p className="article link inline"><a href="https://jeffrey-gaydos.itch.io/centripetal">Itch.io page</a></p>
                </div>
                <div className="flex-left">
                    <img src={require("../images/icons/soundcloud.png")} alt="soundcloud logo" className="inline soundcloud"/>
                    <p className="article link inline"><a href="https://soundcloud.com/jeffrey-gaydos-357993603/tracks">Jeffrey Gaydos SoundCloud Music</a></p>
                </div>
                <div className="flex-left">
                    <img src={require("../images/icons/zip.ico")} alt="zip file icon" className="icon"/>
                    <p className="article"><a className="article link" href={process.env.PUBLIC_URL + "downloads/Centripetal.zip"} download>Centripetal Executable Game</a></p>
                </div>
                <div className="flex-left">
                    <img src={require("../images/icons/zip.ico")} alt="zip file icon" className="icon"/>
                    {/* <p className="article"><a className="article link" href={process.env.PUBLIC_URL + "downloads/CentripetalSource.zip"} download>Centripetal Unreal Engine Project Source</a></p> */}
                </div>
                <p className="article inline footer">Category: <Link className="link" to="/game-development"><span python-backend="category">Game Development</span></Link></p>
                <p className="article inline footer">Last Updated: 6/20/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default Centripetal;