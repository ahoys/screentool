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

        // Calculate aspect ratios.
        const ratio0 = this.getAspectRatio(this.props.x0, this.props.y0);
        const ratio1 = this.getAspectRatio(this.props.x1, this.props.y1);
        
        const largestX = this.props.x0 > this.props.x1 ? this.props.x0 : this.props.x1 ;
        const largestY = this.props.y0 > this.props.y1 ? this.props.y0 : this.props.y1 ;

        // Setup styles.
        const x0 = largestX / (this.props.x0/ratio0) + 'px';
        const y0 = largestY / (this.props.x0/ratio0) + 'px';
        const x1 = largestX / (this.props.x1/ratio1) + 'px';
        const y1 = largestY / (this.props.x1/ratio1) + 'px';

        return (
            <div className="AspectDisplayFrame">
                <div className="aspectScreen" style={{width: x0, height: y0}}>
                    <p>{this.props.x0/ratio0}:{this.props.y0/ratio0}</p>
                </div>
                <div className="aspectScreen" style={{width: x1, height: y1}}>
                    <p>{this.props.x1/ratio1}:{this.props.y1/ratio1}</p>
                </div>
            </div>
        );
    }
});

export default AspectDisplayFrame;