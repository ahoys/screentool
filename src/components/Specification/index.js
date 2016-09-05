import React from 'react';
import './Specification.css';

// React components.
import Setting from './Setting';
import AspectDisplayFrame from './AspectDisplayFrame';

const Specification = React.createClass({
    
    render: function () {

        return (
            <div className="Specification">
                <AspectDisplayFrame
                    x0={this.props.x0}
                    y0={this.props.y0}
                    x1={this.props.x1}
                    y1={this.props.y1}
                />
                <Setting
                    x={this.props.x0}
                    y={this.props.y0}
                    handleInputX={this.props.handleInputX0}
                    handleInputY={this.props.handleInputY0}
                />
                <Setting
                    x={this.props.x1}
                    y={this.props.y1}
                    handleInputX={this.props.handleInputX0}
                    handleInputY={this.props.handleInputY0}
                />
            </div>
        );
    }
});

export default Specification;