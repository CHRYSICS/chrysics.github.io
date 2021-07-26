import React, { Component } from 'react';
import { archivedProjects, activeProjects } from '../data/projects_data';

export class Projects extends Component {
    static displayName = Projects.name;

    render() {
        const showArchived = this.props.match.params.type === 'archive';
        let projectData;
        let projectTitle;
        if (showArchived) {
            projectData = archivedProjects;
            projectTitle = <div className="Title">
                <h1>PAST PROJECTS</h1>
            </div>;
        } else {
            projectData = activeProjects;
            projectTitle = <div className="Title">
                <h1>CURRENT PROJECTS</h1>
            </div>;
        }



        return (
            <div>
                <header className="App-header">
                    {projectTitle}
                    <div>
                    {projectData.map((project) => (
                        <a href={project.link} key={project.image}>
                            <div className="overlay">
                                <video poster={require(`../image/${project.image}`).default} autoPlay loop>
                                    <source src={require(`../video/${project.preview}`).default} type="video/mp4" />
                                </video>
                                <div className="overlay_top overlay_text">
                                    <h2>
                                        {project.subtitle}
                                    </h2>
                                    <h1>
                                        {project.title}
                                    </h1>
                                    <p>{project.description}</p>
                                </div>
                                <div className="overlay_top_show overlay_text">
                                    <h1>See Project Repository</h1>
                                </div>
                            </div>
                        </a>
                    ))}
                    </div>
                </header>
            </div>
        );
    }
}