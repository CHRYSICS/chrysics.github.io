import React, { Component } from 'react';

export class Projects extends Component {
    static displayName = Projects.name;

    render() {
        return (
            <div>
                <header className="App-header">
                    <p>
                        Projects
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/CHRYSICS/CS340_group123"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link to a project
                    </a>
                </header>
            </div>
        );
    }
}