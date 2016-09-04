import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footerContent">
                    <header>
                        <h1>About the tool</h1>
                    </header>
                    <p>Text</p>
                </div>
                <div className="footerContent">
                    <header>
                        <h1>Aspect Ratio</h1>
                    </header>
                    <p>Text</p>
                </div>
            </div>
        );
    }
}

export default Footer;