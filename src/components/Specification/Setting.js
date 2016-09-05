import React from 'react';

const Setting = React.createClass({

    render: function () {

        return (
            <div className="Setting">
                <p>x: {this.props.screen.res_x}</p>
                <p>y: {this.props.screen.res_y}</p>
            </div>
        );
    }
});

export default Setting;