import React from 'react';
import './Table.css';

const Table = React.createClass({

    render: function () {

        const highlight = {
            aspectRatio: 0
        };

        const dataHTML = Object.keys(this.props.screens).map(function (key) {

            const screen = this.props.screens[key];
            return(
                <div class="screen">
                    test
                </div>
            );
        }.bind(this));

        return (
            <div className="Table">
                {dataHTML}
            </div>
        );
    }
});

export default Table;