import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <header className="App-header">
                    <p>
                        Welcome to Chrysics Homepage
                    </p>
                </header>
            </div>
        );
    }
}