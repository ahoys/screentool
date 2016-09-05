import React from 'react';

const AspectDisplayFrame = React.createClass({

    render: function () {

        return (
            <div className="AspectDisplayFrame">
                <p>#AspectDisplayFrame</p>
                <p>{this.props.x0} x {this.props.y0}</p>
                <p>{this.props.x1} x {this.props.y1}</p>
            </div>
        );
    }
});

export default AspectDisplayFrame;