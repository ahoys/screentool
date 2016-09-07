import React from 'react';
import './ContentComparison.css';

import Table from './parts/Table';

const ContentComparison = React.createClass({

    render: function () {

        return (
            <div className="ContentComparison">
                <Table screens={this.props.screens}/>
            </div>
        );
    }
});

export default ContentComparison;