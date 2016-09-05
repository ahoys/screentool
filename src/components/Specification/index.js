import React from 'react';
import './Specification.css';

// React components.
import Setting from './Setting';
import AspectDisplayFrame from './AspectDisplayFrame';

const Specification = React.createClass({
    
    render: function () {

        const screens = {
            0: this.props.screen0,
            1: this.props.screen1
        };

        return (
            <div className="Specification">
                <AspectDisplayFrame
                    res_x={screens[0].res_x}
                    res_y={screens[1].res_y}
                />
                <Setting screen={screens[0]} />
                <Setting screen={screens[1]} />
            </div>
        );
    }
});

export default Specification;