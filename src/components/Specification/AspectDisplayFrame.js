import React from 'react';
import './AspectDisplayFrame.css';

const AspectDisplayFrame = React.createClass({

    /**
     * Returns aspect ratio.
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

    render: function () {

        const aspectsHTML = this.props.screens.map((screen, i) => {

            const ratio = this.getAspectRatio(screen.x, screen.y);
            const ratio_x = screen.x/ratio;
            const ratio_y = screen.y/ratio;

            let w = 0;
            let h = 0;
            if (screen.x > screen.y) {
                w = 160;
                h = (w * screen.y) / screen.x;
            }
            else {
                h = 160;
                w = (h * screen.x) / screen.y;
            }

            return (
                <div className="aspectScreen" style={{width: w + 'px', height: h + 'px'}} key={i}>
                    <p>{ratio_x}:{ratio_y}</p>
                </div>
            );
        });

        return (
            <div className="AspectDisplayFrame">
                {aspectsHTML}
            </div>
        );
    }
});

export default AspectDisplayFrame;