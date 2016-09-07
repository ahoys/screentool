import React from 'react';
import './ContentControls.css';

// React components.
import AspectDisplayFrame from './parts/AspectDisplayFrame';

const ContentControls = React.createClass({
    
    render: function () {

        const handleChange = this.props.handleChange;
        const handleNew = this.props.handleNew;
        const handleToggle = this.props.handleToggle;

        const resolutionHTML = Object.keys(this.props.screens).map((key) => {
            const screen = this.props.screens[key];
            const style = screen.enabled ? "screenOptions" : "screenOptions disabled" ;
            return (
                <div className={style} key={key}>
                    <h2 className="screenId">{Number(key) + 1}</h2>
                    <div className="inputBlock">
                        <div><p>X</p></div>
                        <input
                            id={'x' + key}
                            type="number"
                            defaultValue={screen.x}
                            onChange={handleChange}
                            min="1"
                            max="16384"
                        />
                    </div>
                    <div className="inputBlock">
                        <div><p>Y</p></div>
                        <input
                            id={'y' + key}
                            type="number"
                            defaultValue={screen.y}
                            onChange={handleChange}
                            min="1"
                            max="16384"
                        />
                    </div>
                    <button
                        id={key}
                        className="toggleScreen"
                        onClick={handleToggle}
                    >
                        Toggle
                    </button>
                </div>
            );
        });

        const addHTML = (
            <button
                className="addScreen"
                onClick={handleNew}
            >
                + Add Screen
            </button>
        );

        const sizeHTML = Object.keys(this.props.screens).map((key) => {
            const screen = this.props.screens[key];
            const style = screen.enabled ? "screenOptions" : "screenOptions disabled" ;
            return (
                <div className={style} key={key}>
                    <h2 className="screenId">{Number(key) + 1}</h2>
                    <div className="inputBlock">
                        <div><p>Inches</p></div>
                        <input
                            id={'s' + key}
                            type="number"
                            value={screen.s}
                            onChange={handleChange}
                            min="1"
                            max="300"
                        />
                    </div>
                    <div className="inputBlock">
                        <input
                            id={'s' + key}
                            type="range"
                            className="range"
                            value={screen.s}
                            onInput={handleChange}
                            onChange={handleChange}
                            min="5"
                            max="75"
                        />
                    </div>
                </div>
            );
        });

        return (
            <div className="ContentControls">
                <AspectDisplayFrame
                    screens={this.props.screens}
                />
                <div className="divider"></div>
                <div className="settingArea noSelect">
                    <h2>Resolution</h2>
                    <p>Horizontal and vertical resolution in pixels.</p>
                    {resolutionHTML}
                    {addHTML}
                </div>
                <div className="settingArea noSelect">
                    <h2>Screen Size</h2>
                    <p>Diagonal size of the screen in inches.</p>
                    {sizeHTML}
                </div>
            </div>
        );
    }
});

export default ContentControls;