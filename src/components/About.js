import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <header className="App-header">
                <div className="Title">
                    <h1>ABOUT</h1>
                </div>
                <div className="overlay">
                    <div class="Background">
                        <h1 className="innerbody">
                            SKILLS
                        </h1>
                    </div>
                    <div className="Background">
                        <h1 className="innerbody">
                            Who am I?
                        </h1>
                        <p>
                            As a recent graduate of Oregon State University Bachelor's of Science in Computer Science through their E-campus,
                            I am familiar with working and developing software remotely, meeting deadlines, and collaboration and communication
                            tools.  Additionally, with my bachelor's degree in physics, I am well prepared to dive deep and tackle complex and
                            difficult problems and strive for an intuitive understanding of the data.  My employment history consists of many
                            opportunities where team dynamics and communication were critical, so future employers can also expect the same.
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}