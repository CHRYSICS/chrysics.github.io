import React, { Component } from 'react';
import BioImage from '../image/bioImage.jpg';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={BioImage} className="App-Image"/>
                    <h1 className="innerbody">
                        Welcome to Chrysics Homepage
                    </h1>
                </header>
            </div>
        );
    }
}