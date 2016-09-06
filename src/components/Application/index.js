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
            s0: this.props.screens[0].size,
            x1: this.props.screens[1].res_x,
            y1: this.props.screens[1].res_y,
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

    handleInputS0: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 300) {
            this.setState({
                s0: event.target.value
            });
        }
    },

    handleInputS1: function (event) {

        const value = event.target.value;

        if (value >= 0 && value <= 300) {
            this.setState({
                s1: event.target.value
            });
        }
    },

    render: function () {

        const screens = [
            {
                x: this.state.x0,
                y: this.state.y0,
                s: this.state.s0,
                handleX: this.handleInputX0,
                handleY: this.handleInputY0,
                handleS: this.handleInputS0
            },
            {
                x: this.state.x1,
                y: this.state.y1,
                s: this.state.s1,
                handleX: this.handleInputX1,
                handleY: this.handleInputY1,
                handleS: this.handleInputS1
            }
        ];

        return (
            <div className="Application">
                <div className="bg-top">
                    <main className="pageContent">
                        <Header />
                        <Specification
                            screens={screens}
                        />
                        <Comparison
                            screens={screens}
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