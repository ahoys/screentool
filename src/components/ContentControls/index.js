import React from 'react';
import './ContentControls.css';

// React components.
import AspectDisplayFrame from './parts/AspectDisplayFrame';

const ContentControls = React.createClass({
    
    render: function () {

        const resolutionHTML = this.props.screens.map((screen, i) => {
            return (
                <div className="screenOptions" key={i}>
                    <h2 className="screenId">{i+1}</h2>
                    <div className="inputBlock">
                        <div><p>X</p></div>
                        <input type="number" defaultValue={screen.x} onChange={screen.handleX} max="16384" min="0" />
                    </div>
                    <div className="inputBlock">
                        <div><p>Y</p></div>
                        <input type="number" defaultValue={screen.y} onChange={screen.handleY} max="16384" min="0" />
                    </div>
                </div>
            );
        });

        const sizeHTML = this.props.screens.map((screen, i) => {
            return (
                <div className="screenOptions" key={i}>
                    <h2 className="screenId">{i+1}</h2>
                    <div className="inputBlock">
                        <div><p>Inches</p></div>
                        <input type="number" defaultValue={screen.s} onChange={screen.handleS} max="300" min="1" />
                    </div>
                    <div className="inputBlock">
                        <input className="range" type="range" defaultValue={screen.s} onInput={screen.handleS} onChange={screen.handleS} max="300" min="1" />
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