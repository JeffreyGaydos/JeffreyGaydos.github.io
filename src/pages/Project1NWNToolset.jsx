import React from 'react';
import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        
        document.title = "Jeffrey Gaydos Portfolio - NWN Toolset";
    }
    
    render() {
        return (
            <>
            <h1 pythonBackend="title">Neverwinter Nights Toolset - High School Capstone</h1>
            <h2 pythonBackend="date">May, 2018</h2>
            <h2 pythonBackend="content">Knowing that ray casting would be essential to getting the correct collision of high-velocity projectiles in game, I assumed that the projectile could be modeled by a ray cast. First, I researched the functionality of the Unreal Engine to see if there was any way to get the normals of a mesh's face that a ray cast collided with, but I found no usable results. So I had to come up with an algorithm to determine the angle that a ray cast made with a face. Originally, I came up with an algrithm that worked similarly to a linear search algorithm under the assumption that Unreal Engine could ray cast around 180 rays at once without serious performance side effects (this was clearly not the case). Essentially, the algorithm used the location of the ray's hit (determined by the engine), and found a position slightly away from that location (so that fucture ray casts would not also collide at the original collision location). It then ray casted in the opposite direction of the original raycast, but rotated by 1 degree (in 1 axis), moving clockwise until hitting the mesh face a second time. After hitting the mesh face a second time, the angle between the original raycast and the final raycast was calculated (see video, above). Unfortunately, the algorithm only worked reasonably quickly when the calculated angle was around 20 degrees or less. Additionally, it could have an inaccuracy of up to 1 degree, possibly the diference between the projectile penetrating a tank, or bouncing off its armor.</h2>
            <img pythonBackend="image" src={require("../images/project4toolset.PNG")} />
            </>
        );
    }
}

export default About;