import React from 'react';
import './Table.css';

const Table = React.createClass({

    render: function () {

        const screens = this.props.screens;
        const highlights = this.props.highlights;

        const headerHTML = (
            <thead>
                <tr>
                    <th className="tableHeader">Comparison</th>
                    {Object.keys(screens).map(function (key) {
                        return (
                            <th key={key}>Screen {Number(key) + 1}</th>
                        );
                    })}
                </tr>
            </thead>
        );

        const aspectRatioHTML = (
            <tr>
                <th className="tableDescription">Aspect Ratio</th>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['aspectRatio'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.rx} : {screen.ry}</th>
                    );
                })}
            </tr>
        );

        const screenSizeHTML = (
            <tr>
                <th className="tableDescription">Screen Size</th>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['screenSize'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.s}"</th>
                    );
                })}
            </tr>
        );

        const dimensionsHTML = (
            <tr>
                <th className="tableDescription">Dimensions</th>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['dimensions'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.w} x {screen.h}</th>
                    );
                })}
            </tr>
        );

        const resolutionHTML = (
            <tr>
                <th className="tableDescription">Resolution</th>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['resolution'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.x} x {screen.y}</th>
                    );
                })}
            </tr>
        );

        const pixelDensityHTML = (
            <tr>
                <th className="tableDescription">Pixel Density</th>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['pixelDensity'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.pixelDensity} PPI</th>
                    );
                })}
            </tr>
        );

        const viewingDistanceHTML = (
            <tr>
                <th className="tableDescription">Viewing Distance</th>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['viewingDistance'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.viewingDistance} cm</th>
                    );
                })}
            </tr>
        );

        return (
            <div className="Table">
                <table>
                    {headerHTML}
                    <tbody>
                        {aspectRatioHTML}
                        {screenSizeHTML}
                        {dimensionsHTML}
                        {resolutionHTML}
                        {pixelDensityHTML}
                        {viewingDistanceHTML}
                    </tbody>
                </table>
            </div>
        );
    }
});

export default Table;