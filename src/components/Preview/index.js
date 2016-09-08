import React from 'react';
import './Preview.css';

const Preview = React.createClass({

    /**
     * Returns aspect ratio of a screen, based on x and y resolution.
     * @param x
     * @param y
     * @returns {number}
     */
    getAspectRatio: function (x, y) {

        if (x === 0 || y === 0) {
            return Math.abs(Math.max(Math.abs(x), Math.abs(y)));
        }
        const r = x % y;
        return (r !== 0) ? this.getAspectRatio(y, r) : Math.abs(y) ;
    },

    /**
     * Returns scaling of a screen as x, y pixels.
     * @param x
     * @param y
     * @param s
     * @returns {*[]}
     */
    getScaling: function (x, y, s) {

        let w = 0;
        let h = 0;

        if (x > y) {
            w = 160;
            h = (w * y) / x;
        }
        else {
            h = 160;
            w = (h * x) / y;
        }

        return [w, h];
    },

    render: function () {

        const screensHTML = Object.keys(this.props.screens).map(function (key) {

            const screen = this.props.screens[key];
            const ratio = this.getAspectRatio(screen.x, screen.y);
            const ratio_x = screen.x/ratio;
            const ratio_y = screen.y/ratio;

            const size = this.getScaling(screen.x, screen.y, screen.s);

            if (screen.enabled) {
                return (
                    <div className="screen" style={{width: size[0] + 'px', height: size[1] + 'px'}} key={key}>
                        <div className="idCircle"><p>{Number(key) + 1}</p></div>
                        <p>{ratio_x}:{ratio_y}</p>
                    </div>
                );
            }
        }.bind(this));

        return (
            <div className="Preview">
                {screensHTML}
            </div>
        );
    }
});

export default Preview;