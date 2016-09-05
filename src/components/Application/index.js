import React from 'react';
import './Application.css';

// React components.
import Header from '../Header';
import Specification from '../Specification';
import Comparison from '../Comparison';
import Footer from '../Footer';

const Application = React.createClass({

    getInitialState: function () {

        return {
            screen0: {
                res_x: 1920,
                res_y: 1080,
                size: 27
            },
            screen1: {
                res_x: 3840,
                res_y: 2160,
                size: 42
            }
        }
    },

    render: function () {

        return (
            <div className="Application">
                <div className="bg-top">
                    <main className="pageContent">
                        <Header />
                        <Specification screen0={this.state.screen0} screen1={this.state.screen1} />
                        <Comparison screen0={this.state.screen0} screen1={this.state.screen1} />
                    </main>
                </div>
                <div className="bg-bottom">
                    <footer className="pageFooter">
                        <Footer />
                    </footer>
                </div>
            </div>
        );
    }
});

export default Application;