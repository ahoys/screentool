import React from 'react';
import './Content.css';

import Input from './parts/Input';
import Preview from './parts/Preview';
import Table from './parts/Table';

const Content = React.createClass({
    
    getInitialState: function () {

        return this.props.screens;
    },

    handleAddNewScreen: function () {

        const key = Object.keys(this.state).length;

        if (key < 4) {

            const returnObj = {};
            returnObj[key] = {
                x: 1920,
                y: 1080,
                s: 27,
                enabled: true
            };

            this.setState(returnObj);
        }
    },

    handleToggleScreen: function (i) {

        const screen = this.state[i];
        screen['enabled'] = !screen.enabled;
        const returnObj = {};
        returnObj[i] = screen;

        this.setState(returnObj);
    },
    
    handleResolutionChange: function (i, x, y) {
        
    },

    handleSizeChange: function (i, size) {

    },
    
    render: function () {

        const screens = this.props.screens;

        const resolutionInputHTML = Object.keys(screens).map(function (key) {
            const screen = screens[key];
        });

        const sizeInputHTML = Object.keys(screens).map(function (key) {
            const screen = screens[key];
        });

        return (
            <main className="Content">
                <Preview screen={screens}/>
                <div>
                    <h2>Resolution</h2>
                    <p>text</p>
                    {resolutionInputHTML}
                    <h2>Size</h2>
                    <p>text</p>
                    {sizeInputHTML}
                </div>
                <div>
                    <Table screen={screens}/>
                </div>
            </main>
        );
    }

});

export default Content;