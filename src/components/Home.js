import React, { Component } from 'react';
import portrait from '../image/portrait.jpg';
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
                <img src={portrait} className="App-Image" alt="Portrait" />
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
                            I grew up in the Pacific Northwest, having lived in Alaska, Washington, and Oregon.  I have always had an interest
                            in mathematics and in sharing that knowledge with others.  Through a great deal of hard-work, passion, and determination,
                            I recieved both a bachelor's of science in physics and computer science and consider myself to be an constant learner.
                            Through my journey, I shared this knowledge through the years through wonderful opportunities as a volunteer GED math
                            tutor, a program director for a educational summer ecology program, and becoming a laboratory TA for physics labs.
                        </p>
                        <p>
                            As a Sealaska Scholarship recipent, it gave me the wonderful opportunity to continue education and receive my BS
                            in computer science through Oregon State University Post-Bachelor Ecampus program. I am familiar with working and
                            developing software remotely, meeting deadlines, and collaboration and communication tools.
                        </p>
                        <p>
                            Additionally, with my bachelor's degree in physics, I am well prepared to dive deep and tackle complex and
                            difficult problems and strive for an intuitive understanding of the data.  My employment history consists of many
                            opportunities where team dynamics and communication were critical, so future employers can also expect the same.
                        </p>
                        <p>
                            In my free time, I love to play music and tackle projects from sound editing a friend's podcast on MMIWG2S to repairing
                            and repurposing broken and discarded electronics.  
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