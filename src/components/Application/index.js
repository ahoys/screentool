import React, { Component } from 'react';
import './Application.css';

// React components.
import Header from '../Header';
import Specification from '../Specification';
import Comparison from '../Comparison';
import Footer from '../Footer';

class Application extends Component {
    render() {
        return (
            <div className="Application">
                <div className="bg-top">
                    <main className="pageContent">
                        <Header/>
                        <Specification/>
                        <Comparison/>
                    </main>
                </div>
                <div className="bg-bottom">
                    <footer className="pageFooter">
                        <Footer/>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Application;