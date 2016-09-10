import React from 'react';

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
        
        return (
            <main className="Content">
                
            </main>
        );
    }

});

export default Content;