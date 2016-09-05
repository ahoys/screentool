import React from 'react';

const Setting = React.createClass({

    render: function () {

        return (
            <div className="Setting">
                <input type="number" defaultValue={this.props.x} onChange={this.props.handleInputX} max="16384" min="0" />
                <input type="number" defaultValue={this.props.y} onChange={this.props.handleInputY} max="16384" min="0" />
            </div>
        );
    }
});

export default Setting;