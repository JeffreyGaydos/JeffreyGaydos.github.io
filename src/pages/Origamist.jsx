/*
    This is a template for you to copy to create move articles
    as needed. All comments with 'python-backend' in them shuold
    be included and replaced with the appropriate values.

    Everything that seems to be part of the NWN project is
    something that you should replace.

    Happy Hacking!
*/

import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/Origamist.css';
import '../css/article/article_page.css';

class Origamist extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Origamist - Jeffrey Gaydos Portfolio";
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
                <h1 className="article" python-backend="title">Origamist - Unity</h1>
                <h2 className="article date" python-backend="date">December, 2019 - December 2020</h2>
                <div className="content-divider"></div>
                <img className="article Origamist" python-backend="image" src={require("../images/project2origamist.PNG")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">A smaller, more experimental project that allowed me to explore asset creation, animation, shaders, and procedural generation. Inspired from my childhood hobby (of origami), I aimed to create a relaxing, origami world rather than a full game. Currently, this project serves as a playground for me to try out new skills and techniques without diving into a large scale project.</h2>
                <h2 className="article heading">Modeling in Blender</h2>
                <h2 className="article third-left inline">In order to model accurate origami models, it was necessary to create those origami models to learn the fold patterns and the "theoretical" structure of the designs. By theoretical, I mean a design in which folding is precise and the thickness of the paper is 0. This is obviously applicable with modeling in a surface-based system like blender. For each model, I started by folding (and unfolding) the origami version of it myself to determine the fold patterns. These fold patterns were then translated into a face with all creases marked. I then used this information to ensure the scaling and proportionality of the models held in general. For obvious reasons, I opted for not truely folding the model within Blender using rotate tools. Once the model was complete, it was ready to be animated.</h2>
                <div className="two-thirds-right inline">
                    <div>
                        <div className="article split-left inline">
                            <img className="article real-to-blend crop" src={require('../images/project2origami/RealCrane.jpg')} alt="paper crane"></img>
                        </div>
                        <div className="arrow inline">
                            <div className="arrow-base inline"></div>
                            <div className="arrow-head inline"></div>
                            <div className="arrow-head blocker-top"></div>
                            <div className="arrow-head blocker-bottom"></div>
                        </div>
                        <div className="article split-right inline">
                            <img className="article real-to-blend crop" src={require('../images/project2origami/CraneColored.PNG')} alt="3d model crane"></img>
                        </div>
                    </div>
                    <div>
                        <div className="article split-left inline">
                            <img className="article real-to-blend crop" src={require('../images/project2origami/RealLily.jpg')} alt="paper lily"></img>
                        </div>
                        <div className="arrow inline">
                            <div className="arrow-base inline"></div>
                            <div className="arrow-head inline"></div>
                            <div className="arrow-head blocker-top"></div>
                            <div className="arrow-head blocker-bottom"></div>
                        </div>
                        <div className="article split-right inline">
                            <img className="article real-to-blend crop" src={require('../images/project2origami/LilyColored.PNG')} alt="3d model lily"></img>
                        </div>
                    </div>
                    <div>
                        <div className="article split-left inline">
                            <img className="article real-to-blend crop" src={require('../images/project2origami/RealTree.jpg')} alt="paper tree part"></img>
                        </div>
                        <div className="arrow inline">
                            <div className="arrow-base inline"></div>
                            <div className="arrow-head inline"></div>
                            <div className="arrow-head blocker-top"></div>
                            <div className="arrow-head blocker-bottom"></div>
                        </div>
                        <div className="article split-right inline">
                            <img className="article real-to-blend crop" src={require('../images/project2origami/TreesColored.PNG')} alt="3d model tree"></img>
                        </div>
                    </div>
                </div>
                <h2 className="article heading">Animating in Blender</h2>
                <h2 className="article">I had previously been introduced to Blender animating in a Game Jam hosted by the <a className="link article" href="https://org.osu.edu/gamedev/">Game Creation Club at The Ohio State University (GCC)</a>. Using a tutorial by <a class="link article" href="https://www.immersivelimit.com/tutorials/blender-unity-armature-weight-painting-animation-blend-trees">Immersive Limit</a>, I learned how to create armatures, weight painting, and poses. I attempted to animate a humanoid, which was difficult since humans can easily percieve anomilies in walking and running. As such, I knew sticking to non-humanoid origami figures would be feasile.</h2>
                <div className="article split-left inline">
                    <img className="article reduced-margin" alt="weight painted crane model" src={require("../images/project2origami/WeightPaint.PNG")} />
                    <p className="article no-margin">A view of the crane model, weight painted for the central bone (not the root bone). The red parts represent high weight and the blue represents low weight, meaning this bone will primarily move the central part of the crane, but will not affect the tips of the wings as much.</p>
                </div>
                <div className="article split-right inline">
                    <h2 className="article">First, an armature had to be created in a way that would most intuitively move the model. An important part of making the armature was making sure that a "root" bone existed. This way i could modify the transform of the model from within the animation rather than changing it in Unity.</h2>
                    <h2 className="article">Next, each armature bone needed to be "assigned" to move a specific part of the model. This involved weight painting the verticies of the model for each bone on each model. This step is crucial, and if weight paints are incorrect, the armature may not react to pose changes as expected.</h2>
                </div>
                <h2 className="article">Finally, each model needed to be posed on a timeline. Blender has features that easily blend between 2 poses over a certain amount of time, which simplifies animating considerably. However, during the start and end of an animation, the program tends to "pause" the movement momentarily in an attempt to blend the start of the animation with the end of the animation. This is usually undesired for animations that are intended to repeat as long as needed. This required me to manually change how Blender blends animations using the Graph Editor. Once those final tweaks are resolved, the model has 1 animation. The model is then posed and blended for each animation needed. The video below shows the various parts of the "flapping" animation for the crane asset.</h2>
                <video controls className="article">
                    <source src={require("../videos/project2origamist/BlenderAnim.mp4")} type="video/mp4" />
                </video>
                <h2 className="article heading">Porting to Unity</h2>
                <h2 className="article">Unity and blender are mostly compatible, and the community of Blender developers have made changes that have increased compatibility with Unity. Once all the models and animations were ported to Unity, I began to develop AI for the variouis assets. This took a considerable amount of time, as I was unsure how I wanted some of the assets to behave and experimented with multiple behaviors. Another challenge faced with creating the AI invovled readability of the code. I thus created an overzealous form of documentation that had numerous redundancies but also all information that a developer would need when viewing any section of the code. After revisiting this project roughly a year later, I have since removed redundant comments, cleaned up the code, and began using accepted design patterns like the command and state patterns to make a player-controllable crane model.</h2>
                <h2 className="article">Additionally, after creating a fully functional player character, I decided to explore procedural generation. Again, I had experimented with procedural generation while participating in another Game Jam hosted by the <a className="link article" href="https://org.osu.edu/gamedev/">Game Creation Club at The Ohio State University</a> (see "The Cave" project). The first step to understanding procedural generation was to simply place planes as the player moved closer to unloaded land. I then moved on to creating a way to store already loaded planes so that the terrain was persistent. Finally, I wanted to make the appearance of terrain smooth, and added mechanics to load up terrain one triangle at a time. I was able to create a procedurally generated map with only fully tileable terrain objects, though I plan to look into more advanced procedural generation with non-tileable terrain in the future.</h2>
                <h2 className="article">Obviously, this project is still a work in progress. A video showing the progress as 3/5/2020 is below. The current source code is below that.</h2>
                <video controls className="article">
                    <source src={require("../videos/project2origamist/UnityProgress.mp4")} type="video/mp4"/>
                </video>
                <div className="flex-left">
                    <img src={require("../images/icons/zip.ico")} alt="zip file icon" className="icon"/>
                    {/* <p className="article"><a className="article link" href={process.env.PUBLIC_URL + "downloads/Origamist.zip"} download>Origamist Unity Project Source</a></p> */}
                </div>
                <p className="article inline footer">Category: <Link className="link" to="/game-development"><span python-backend="category">Game Development</span></Link></p>
                <p className="article inline footer">Last Updated: 8/8/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default Origamist;