import React from 'react';
import './Specification.css';

// React components.
import AspectDisplayFrame from './AspectDisplayFrame';

const Specification = React.createClass({
    
    render: function () {

        const resolutionHTML = this.props.screens.map((screen, i) => {
            return (
                <div key={i}>
                    <div className="setting">
                        <p>X</p>
                        <input type="number" defaultValue={screen.x} onChange={screen.handleX} max="16384" min="0" />
                    </div>
                    <div className="setting">
                        <p>Y</p>
                        <input type="number" defaultValue={screen.y} onChange={screen.handleY} max="16384" min="0" />
                    </div>
                </div>
            );
        });

        const sizeHTML = this.props.screens.map((screen, i) => {
            return (
                <div key={i}>
                    <div className="setting">
                        <p>Inches</p>
                        <input type="number" defaultValue={screen.s} />
                        <input type="range" defaultValue={screen.s} onChange={screen.handleS} max="300" min="1" />
                    </div>
                </div>
            );
        });

        return (
            <div className="Specification">
                <AspectDisplayFrame
                    screens={this.props.screens}
                />
                <div>
                    <h2>Resolution</h2>
                    <p>Horisontal and vertical resolution in pixels.</p>
                </div>
                {resolutionHTML}
                <div>
                    <h2>Screen Size</h2>
                    <p>Diagonal size of the screen in inches.</p>
                </div>
                {sizeHTML}
            </div>
        );
    }
});

export default Specification;