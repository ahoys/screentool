import React from 'react';
import './ContentControls.css';

// React components.
import AspectDisplayFrame from './parts/AspectDisplayFrame';

const ContentControls = React.createClass({
    
    render: function () {

        const resolutionHTML = this.props.screens.map((screen, i) => {
            return (
                <div className="inputs" key={i}>
                    <div>
                        <p>SCREEN {i+1}: X</p>
                        <input type="number" defaultValue={screen.x} onChange={screen.handleX} max="16384" min="0" />
                    </div>
                    <div>
                        <p>SCREEN {i+1}: Y</p>
                        <input type="number" defaultValue={screen.y} onChange={screen.handleY} max="16384" min="0" />
                    </div>
                </div>
            );
        });

        const sizeHTML = this.props.screens.map((screen, i) => {
            return (
                <div key={i}>
                    <div className="inputs">
                        <p>Inches</p>
                        <input type="number" defaultValue={screen.s} />
                        <input type="range" defaultValue={screen.s} onChange={screen.handleS} max="300" min="1" />
                    </div>
                </div>
            );
        });

        return (
            <div className="ContentControls">
                <AspectDisplayFrame
                    screens={this.props.screens}
                />
                <div className="divider" />
                <div className="setting noSelect">
                    <h2>Resolution</h2>
                    <p>Horisontal and vertical resolution in pixels.</p>
                    {resolutionHTML}
                </div>
                <div className="setting noSelect">
                    <h2>Screen Size</h2>
                    <p>Diagonal size of the screen in inches.</p>
                    {sizeHTML}
                </div>
            </div>
        );
    }
});

export default ContentControls;