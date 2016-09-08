import React from 'react';
import './ContentComparison.css';

import Table from './parts/Table';

const ContentComparison = React.createClass({

    render: function () {

        const highlights = {};

        return (
            <div className="ContentComparison">
                <div className="settingArea">
                    <h2>Comparison</h2>
                    <p>Compare screen specifications.</p>
                    <Table screens={this.props.screens} highlights={highlights}/>
                </div>
            </div>
        );
    }
});

export default ContentComparison;