import React from 'react';
import './ContentComparison.css';

import Table from './parts/Table';

const ContentComparison = React.createClass({

    render: function () {

        return (
            <div className="ContentComparison">
                <div className="settingArea">
                    <h2>Comparison</h2>
                    <p>Compare screen specifications.</p>
                </div>
                <Table screens={this.props.screens}/>
            </div>
        );
    }
});

export default ContentComparison;