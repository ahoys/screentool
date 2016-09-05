import React from 'react';

const Setting = React.createClass({

    render: function () {

        return (
            <div className="Setting">
                <input type="number" defaultValue={this.props.x} onChange={this.props.handleInputX0} />
                <input type="number" defaultValue={this.props.y} onChange={this.props.handleInputY0} />
            </div>
        );
    }
});

export default Setting;