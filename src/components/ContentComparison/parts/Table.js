import React from 'react';
import './Table.css';

const Table = React.createClass({

    render: function () {

        const screens = this.props.screens;
        const highlights = this.props.highlights;

        const headerHTML = (
            <thead>
                <tr>
                    <td className="tableHeader">Comparison</td>
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
                <td className="tableDescription">Aspect Ratio</td>
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
                <td className="tableDescription">Screen Size</td>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['aspectRatio'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.s}"</th>
                    );
                })}
            </tr>
        );

        const dimensionsHTML = (
            <tr>
                <td className="tableDescription">Dimensions</td>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['aspectRatio'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.w} x {screen.h}</th>
                    );
                })}
            </tr>
        );

        const resolutionHTML = (
            <tr>
                <td className="tableDescription">Resolution</td>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['aspectRatio'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.x} x {screen.y}</th>
                    );
                })}
            </tr>
        );

        const pixelDensityHTML = (
            <tr>
                <td className="tableDescription">Pixel Density</td>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['aspectRatio'] === key ? 'cell win' : 'cell' ;
                    return (
                        <th className={styling} key={key}>{screen.pixelDensity} PPI</th>
                    );
                })}
            </tr>
        );

        const viewingDistanceHTML = (
            <tr>
                <td className="tableDescription">Viewing Distance</td>
                {Object.keys(screens).map(function (key) {
                    const screen = screens[key];
                    const styling = highlights['aspectRatio'] === key ? 'cell win' : 'cell' ;
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