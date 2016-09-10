import React from 'react';
import './Content.css';

const Content = React.createClass({

    getInitialState: function () {

        return this.props.data;
    },

    /**
     * Adds a new screen.
     */
    handleAddScreen: function () {

        const key = Object.keys(this.state).length;

        // Amount of screens allowed.
        if (key < 4) {

            const returnObj = {};
            returnObj[key] = {
                x: 1920,
                y: 1080,
                s: 27,
                enabled: true
            };
        }
    },

    /**
     * Handles visibility of a screen.
     * @param event
     */
    handleToggleScreen: function (event) {

        const key = Number(event.target.id);
        const screen = this.state[key];
        screen['enabled'] = !screen.enabled;
        const returnObj = {};
        returnObj[key] = screen;

        this.setState(returnObj);
    },

    /**
     * Handles changes in screen properties.
     * @param event
     */
    handleChange: function (event) {

        const target = event.target.id.charAt(0);
        const key = Number(event.target.id.substr(1, 9));
        const screen = this.state[key];
        screen[target] = Number(event.target.value);
        const returnObj = {};
        returnObj[key] = screen;

        this.setState(returnObj);
    },

    render: function () {
        return (
            <div className="Content">

            </div>
        );
    }
});

export default Content;