import React, { Component } from 'react';
import BioImage from '../image/bioImage.jpg';
import * as icons from 'react-icons/di';
import { techskills } from '../data/projects_data';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <header className="App-header">
                <div className="Title">
                    <h1>Hi! I'm Chris!</h1>
                </div>
                <img src={BioImage} className="App-Image" alt="Portrait" />
                {/*<div class="Background">*/}
                {/*    <h1 className="innerbody">*/}
                {/*        SKILLS*/}
                {/*    </h1>*/}
                {/*    <p>*/}
                {/*        Languages: <icons.DiPython size={70} /><br />*/}
                {/*        Web Development: <icons.DiHtml5 size={70} /><icons.DiJavascript1 size={70} /><icons.DiCss3 size={70} /><br/>*/}
                {/*        OS Platforms: <icons.DiWindows size={70} /><icons.DiLinux size={70} />*/}
                {/*    </p>*/}
                {/*</div>*/}
                
                <div className="overlay">

                    <div className="Background">
                        <h2 className="innerbody">
                            A Little about myself...
                        </h2>
                        <p>
                            Having grown up in the Pacific Northwest, I have 
                            As a recent graduate of Oregon State University Bachelor's of Science in Computer Science through their E-campus,
                            I am familiar with working and developing software remotely, meeting deadlines, and collaboration and communication
                            tools.  Additionally, with my bachelor's degree in physics, I am well prepared to dive deep and tackle complex and
                            difficult problems and strive for an intuitive understanding of the data.  My employment history consists of many
                            opportunities where team dynamics and communication were critical, so future employers can also expect the same.
                        </p>
                        <h2 className="innerbody">
                            Tech
                        </h2>
                        <p>
                            {techskills.map((skill) => (
                                <span> <code className="skills">{skill}</code> </span>
                            ))}
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}