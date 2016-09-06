import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header noSelect">
                <h1>Screen Tool</h1>
                <h2>Display Specifications</h2>
            </div>
        );
    }
}

export default Header;