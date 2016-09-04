import React, { Component } from 'react';
import './Application.css';

// React Components.
import Header from '../Header';
import Specification from '../Specification';
import Comparison from '../Comparison';
import Footer from '../Footer';

class Application extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Specification/>
                <Comparison/>
                <Footer/>
            </div>
        );
    }
}

export default Application;