import React, { Component } from 'react';

import SpecificationScreen from './SpecificationScreen';
import Resolution from './Resolution';
import ScreenSize from './ScreenSize';

class Specification extends Component {
    render() {
        return (
            <div className="Specification">
                <SpecificationScreen id={0} />
                <SpecificationScreen id={1} />
                <Resolution/>
                <ScreenSize/>
            </div>
        );
    }
}

export default Specification;