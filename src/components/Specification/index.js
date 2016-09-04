import React, { Component } from 'react';
import './Specification.css';

// React components.
import Setting from './Setting';
import AspectDisplayFrame from './AspectDisplayFrame';

class Specification extends Component {
    render() {
        return (
            <div className="Specification">
                <AspectDisplayFrame/>
                <Setting/>
                <Setting/>
            </div>
        );
    }
}

export default Specification;