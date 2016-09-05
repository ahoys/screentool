import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application/index';
import './index.css';

const defaultScreens = [
    {
        res_x: 1920,
        res_y: 1080,
        size: 27
    },
    {
        res_x: 3840,
        res_y: 2160,
        size: 42
    }
];

ReactDOM.render(
    <Application screens={defaultScreens} />,
    document.getElementById('root')
);