import React from 'react';

const Setting = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <div className="Setting">
                <p>x: {this.props.screen.res_x}</p>
                <p>y: {this.props.screen.res_y}</p>
            </div>
        );
    }
});

export default Setting;