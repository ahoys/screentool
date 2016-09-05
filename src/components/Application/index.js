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
            x0: this.props.screens[0].res_x,
            y0: this.props.screens[0].res_y,
            x1: this.props.screens[1].res_x,
            y1: this.props.screens[1].res_y,
            s0: this.props.screens[0].size,
            s1: this.props.screens[1].size
        }
    },

    /**
     * Handles horizontal resolution input.
     * @param event
     */
    handleInputX0: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 16384) {
            this.setState({
                x0: event.target.value
            });
        }
    },

    /**
     * Handles vertical resolution input.
     * @param event
     */
    handleInputY0: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 16384) {
            this.setState({
                y0: event.target.value
            });
        }
    },

    /**
     * Handles horizontal resolution input.
     * @param event
     */
    handleInputX1: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 16384) {
            this.setState({
                x1: event.target.value
            });
        }
    },

    /**
     * Handles vertical resolution input.
     * @param event
     */
    handleInputY1: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 16384) {
            this.setState({
                y1: event.target.value
            });
        }
    },

    render: function () {

        return (
            <div className="Application">
                <div className="bg-top">
                    <main className="pageContent">
                        <Header />
                        <Specification
                            x0={this.state.x0}
                            y0={this.state.y0}
                            x1={this.state.x1}
                            y1={this.state.y1}
                            s0={this.state.s0}
                            s1={this.state.s1}
                            handleInputX0={this.handleInputX0}
                            handleInputY0={this.handleInputY0}
                            handleInputX1={this.handleInputX1}
                            handleInputY1={this.handleInputY1}
                        />
                        <Comparison
                            x0={this.state.x0}
                            y0={this.state.y0}
                            x1={this.state.x1}
                            y1={this.state.y1}
                            s0={this.state.s0}
                            s1={this.state.s1}
                        />
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