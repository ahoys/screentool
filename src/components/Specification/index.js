import React from 'react';
import './Specification.css';

// React components.
import Setting from './Setting';
import AspectDisplayFrame from './AspectDisplayFrame';

const Specification = React.createClass({
    
    render: function () {

        const screen0 = this.props.screens[0];
        const screen1 = this.props.screens[1];

        return (
            <div className="Specification">
                <AspectDisplayFrame
                    res_x={screen0.res_x}
                    res_y={screen1.res_y}
                />
                <Setting screen={screen0} />
                <Setting screen={screen1} />
            </div>
        );
    }
});

export default Specification;