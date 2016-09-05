import React from 'react';

const Setting = React.createClass({

    getInitialState: function () {
        return {
            x: this.props.screen.res_x,
            y: this.props.screen.res_y
        }
    },

    /**
     * Handles horizontal resolution input.
     * @param event
     */
    handleInputX: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 16384) {
            this.setState({
                x: event.target.value
            });
        }
    },

    /**
     * Handles vertical resolution input.
     * @param event
     */
    handleInputY: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 16384) {
            this.setState({
                y: event.target.value
            });
        }
    },

    render: function () {

        return (
            <div className="Setting">
                <input type="number" value={this.state.x} onChange={this.handleInputX} />
                <input type="number" value={this.state.y} onChange={this.handleInputY} />
            </div>
        );
    }
});

export default Setting;