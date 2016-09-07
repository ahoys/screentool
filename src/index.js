import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application/index';
import './index.css';

const defaultScreens = {
    0: {
        x: 1920,
        y: 1080,
        s: 27,
        enabled: true
    },
    1: {
        x: 3840,
        y: 2160,
        s: 42,
        enabled: true
    }
};

ReactDOM.render(
    <Application defaultScreens={defaultScreens} />,
    document.getElementById('root')
);