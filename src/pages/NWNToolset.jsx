import React from 'react';
import { Component } from 'react';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import { Link } from 'react-router-dom';
import '../css/article/NWNToolset.css';
import '../css/article/article_page.css';

class NWNToolset extends Component {
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
                <h1 className="article" python-backend="title">Neverwinter Nights Toolset - High School Capstone</h1>
                <h2 className="article date" python-backend="date">May, 2017 - August 2018</h2>
                <div className="content-divider"></div>
                <img className="article NWN" python-backend="image" src={require("../images/project4toolset.PNG")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">My high school capstone, this project involved the use of a relatively obscure tool known as the "Neverwinter Nights Toolset" from the 2002 game "Neverwinter Nights". The project consisted of world building, creative writing, general game design principles, and scripting in a custom C-based language. Though the programming was not difficult, learning the API of the language proved to be a challenge due to the obscurity of the old program. However, there was plenty of in-editor documentation, and the tool itself was designed for beginning programmers.</h2>
                <h2 className="heading article">Learning the Neverwinter Nights Toolset</h2>
                <h2 className="article">My exploration into game design began with this project, though I had been experimenting within other games previously. Because this was my high school capstone, I was required to provide an outline and a plan on what I would do. When looking for tutorials, I stumbled across the YouTube channel (<a href="https://www.youtube.com/channel/UCsQglNCu3peRlSJF7fsx1DQ" className="link article">Mr. Hanson Videos</a>) for a high school professor's introduction to game design course, which had a playlist of highly relevant tutorials for the tool. The tutorials went over the basic operations of the toolset and then scraped the surface of the scripting language. Looking back, you could consider this the first game engine tutorials I ever viewed.</h2>
                <h2 className="heading article">Making an Interesting and Immersive Game</h2>
                <h2 className="article inline split-left">After working through the tutorials, it was time to start (world) building. I already had an idea of what I wanted, but I need to brainstorm the storyline a bit more. I began the project before I had finished brainstorming, as there were parts of the story that I knew would not change. From there, I used the art style of the game and assessed my capabilities within the toolset to determine where the story should & could go. One issue I had with the original game developers' stories for the game was that they did not push the game to its limit, and often had only a few entities on screen at the same time. Large scale battles were obviously not an option, but I soon learned the limitations of the program and the game as I added more characters with high level (and therefore visually intensive) abilities.</h2>
                <div className="inline split-right">
                    <img src={require("../images/NWNToolset/Lag Example.PNG")} alt="example of lag instance in the project" className="split-right"></img>
                    <p className="article">An example of visual elements (spells) causing lag in-game</p>
                </div>
                <h2 className="article inline split-left">I started with the "home" city that so many RPGs have, and quickly fell in love with the instant world-building that came along with the toolset. I was able to create a detailed trade hub city that I called Fendport using built in AI and custom dialogues. A docks area, town square, town hall, and city walls were soon created, all with fleshed out, custom characters that could sell players items and direct them to quests. I found the music and sound customizations to be the most fun to customize. I am huge fan of game soundtracks, especially Neverwinter Nights'. I hold the opinion that the right music and sounds is the most essential part of creating an immersive experience, so I put lots of effort into picking the right music for the areas I created. All this detail allowed for an immersive world that I could not have created on my own at the time.</h2>
                <div className="article split-right inline">
                    <img src={require("../images/NWNToolset/Sound Example.PNG")} alt="an example of sound placement in editor" className="split-right"/>
                    <p className="article">A top-down in-editor view of the Elven city of Arholand, a great example of sound placement. The pale blue spheres and circles represent 3D sounds that were placed in the scene.</p>
                </div>
                <img className="split-right" src={require("../images/NWNToolset/Fendport Header.PNG")} alt="the city of fendport, shown in editor" />
                <p className="article">The city of Fendport, where the player first spawns, viewed from the docks overlooking the market square (in-editor).</p>
                <h2 className="heading article">Embracing Game Development</h2>
                <div className="inline split-left">
                    <img src={require("../images/NWNToolset/Dialogue Example.PNG")} alt="an example of the in-editor dialogue system" className="split-left"/>
                    <p className="article">A view of the in-editor dialogue system. By far the best dialogue system I have ever worked with.</p>
                </div>
                <h2 className="article inline split-right">Creating a story and a world is great, but the true power in games comes from their reactive nature. Story-based games have a tendency to balloon into massive projects with numerous possible outcomes. If this ballooning were embraced, these kinds of projects would never make it to production or would be developed for so long that its platform would become obsolete. With this and my capstone's deadline in mind, I had to figure out a way to give the player the "illusion of choice" that so many RPGs use. This can mainly be found in the dialogue of my story, but after turning in the capstone and deciding to pursue the project further, I decided to create side-quests.</h2>
                <h2 className="article">As for the scripting, I found that I quickly mastered the basics and moved on to more advanced topics like cutscenes. When I first began looking into cutscenes, I was confused, as I had thought that I knew everything that the scripts of the toolset could do (a common misconception that I began recognizing in the future). Unfortunately, my previous tutorials had no mention of the cutscene system in the toolset, and I had to dig considerably into very old wikis and even older documentation. This was the primary struggle I faced during this project, and after breaking through this issue the rest of the project continued fairly smoothly (unless that is, I wanted to do something more complicated or experimental). As it turns out, the cutscene system wasn't a system at all, but a library full of very hacky, and sometimes unreliable code that could easily force the player to reload their latest save if used incorrectly. I personally love hacky solutions to hard problems, and they remind me of my past attempts to bend games like Minecraft to my will.</h2>
                <img src={require("../images/NWNToolset/Cutscene Example.PNG")} alt="an example of cutscene code" className="split-right"/>
                <p className="article">An example of the kind of scripting typical to this project. Here, cutscene code is shown, with a cutscene library imported at the top. The panel on the right side shows a list of built-in functions that are not imported from a library explicitly.</p>
                <h2 className="heading article">Results</h2>
                <h2 className="article">All in all, I made a project that I can still be proud of today with almost an hour of main-plot gameplay. That includes 62 custom areas, 146 dialogue sequences, over 900 scripts (some generated and modified), and countless other customized items and characters. I feel that these large numbers are not just a testament to my efforts in this project, but the speed at which this tool allowed me to develop. It is seriously an excellent tool for teaching beginning programmers how to develop games, and it does not dumb down the process enough that students won't really know what they're getting into. I'm so glad that I found this game and this tool as this project was one of the primary factors in why I chose my major of computer science, and its why I'm so passionate about game design today.</h2>
                <img src={require("../images/NWNToolset/Spawn-point example.PNG")} alt="Fendport, in-editor" className="split-left"/>
                <p className="article">A top-down view of Fendport, showing almost the entire city. The yellow points are known as Waypoints and are locations at which entities can be spawned or moved towards.</p>
                <h2 className="article">Below is a .zip file with the contents of the project if you happen to have Neverwinter Nights 1 (the 2002 or updated version) installed:</h2>
                <div className="flex-left"><a className="link" href={process.env.PUBLIC_URL + "downloads/TheRetributionOfScengaul.zip"} download><img className="icon inline" src={require("../images/icons/zip.ico")} alt="zip icon"/><p className="article link inline">The Retribution of Scengaul.zip</p></a></div>
                <h2 className="heading article">Play Testing and Feedback</h2>
                <h2 className="article">Throughout the creation of the project, many of my friends were interested in play testing it, and my brother was essential to the project's success. He often tested aspects of my project in ways I had never considered, breaking and blocking the story. This was my first real experience with how important testing code really was (especially since I had not taken any programming courses up to this point), and I took those lessons to heart in my future projects.</h2>
                <h2 className="article">The feedback I received after "releasing" the project was generally positive. Though I no longer have the exact feedback I received, here are some general points that I remember:</h2>
                <div className="split-left inline">
                    <ul className="inline">
                        <li className="article">Good world building in the city you spawn in. It really feels like you are in a fantasy town rather than a computer science project</li>
                        <li className="article">The second city the player finds uses music very well to convey how tragic the death of that city was</li>
                        <li className="article">There were times when the combat was too difficult</li>
                        <li className="article">There were times when the player needed to restart because of a story state bug</li>
                        <li className="article">There are too many entities on screen at times, and the game struggles to keep up</li>
                        <li className="article">Impressive project that gives hours of gameplay</li>
                    </ul>
                </div>
                <div className="inline split-right">
                    <img src={require("../images/NWNToolset/In-game Toriden.PNG")} alt="in-game Toriden" className="split-right" id="NWNW-FeedbackImage"/>
                    <p className="article">A view of Toriden, the second city the player finds, in ruins from an orc attack. This was the city in which positive feedback about the music and general atmosphere was given.</p>
                </div>
                <h2 className="article">I took this feedback at face value, and I feel that I have effectively resolved the issues that they present except for the one about too many entities and performance issues. Luckily, Neverwinter Nights was recently re-made by the original developers (super exciting for me!), and among the major changes was a serious performance increase. I speculate that this was due to the developers multithreading entity behavior (especially pathfinding), as this was the primary source of lag during the project.</h2>
                <p className="article inline footer">Category: <Link className="link" to="/game-development"><span python-backend="category">Game Development</span></Link></p>
                <p className="article inline footer">Last Updated: 6/19/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default NWNToolset;