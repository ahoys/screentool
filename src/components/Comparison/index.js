import React, { Component } from 'react';
import './Comparison.css';

// React components.
import SizeDisplayFrame from './SizeDisplayFrame';
import ComparisonTable from './ComparisonTable';

class Comparison extends Component {
    render() {
        return (
            <div className="Comparison">
                <SizeDisplayFrame/>
                <ComparisonTable/>
            </div>
        );
    }
}

export default Comparison;