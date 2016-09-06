import React from 'react';
import './Specification.css';

// React components.
import Setting from './Setting';
import AspectDisplayFrame from './AspectDisplayFrame';

const Specification = React.createClass({
    
    render: function () {

        const settingsHTML = this.props.screens.map((screen, i) => {
            return (
                <Setting
                    x={screen.x}
                    y={screen.y}
                    handleX={screen.handleX}
                    handleY={screen.handleY}
                    key={i}
                />
            );
        });

        return (
            <div className="Specification">
                <AspectDisplayFrame
                    screens={this.props.screens}
                />
                {settingsHTML}
            </div>
        );
    }
});

export default Specification;