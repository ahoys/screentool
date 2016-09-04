import React, { Component } from 'react';

import SpecificationScreen from './SpecificationScreen';

class Specification extends Component {
    render() {
        return (
            <div className="specification">
                <SpecificationScreen id={0} />
                <SpecificationScreen id={1} />
            </div>
        );
    }
}

export default Specification;