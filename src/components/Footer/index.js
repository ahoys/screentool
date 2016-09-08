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
                    <p>This tool displays you techincal features of screens. You can calculate a pixel density for a screen or see what would be a optimal viewing distance for the certain screen.<br/><br/>
                        You can also compare screens. The tool shows you the difference between screens with visual examples of aspect ratio and size.</p>
                </div>
                <div className="footerContent">
                    <header>
                        <h1>Aspect Ratio</h1>
                    </header>
                    <p>The aspect ratio of an image describes the proportional relationship between its width and its height.<br/><br/>
                        It is commonly expressed as two numbers separated by a colon, as in 16:9. For an x:y aspect ratio, no matter how big or small the image is, if the width is divided into x units of equal length and the height is measured using this same length unit, the height will be measured to be y units.</p>
                </div>
            </div>
        );
    }
}

export default Footer;