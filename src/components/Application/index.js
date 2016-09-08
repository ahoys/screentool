import React from 'react';
import './Application.css';

// React components.
import Header from '../Header';
import Preview from '../Preview';
import ContentControls from '../ContentControls';
import ContentComparison from '../ContentComparison';
import Footer from '../Footer';

const Application = React.createClass({

    getInitialState: function () {

        return this.props.defaultScreens;
    },

    /**
     * Handles all kind of input changes.
     * @param event
     */
    handleChange: function (event) {

        const tar = event.target.id.charAt(0);
        const key = Number(event.target.id.substr(1, 9999));
        const obj = this.state[key];
        obj[tar] = Number(event.target.value);
        const returnObj = {};
        returnObj[key] = obj;

        this.setState(returnObj);
    },

    handleNew: function () {

        const key = Object.keys(this.state).length;

        if (key < 4) {

            const returnObj = {};
            returnObj[key] = {
                x: 1920,
                y: 1080,
                s: 27,
                enabled: true
            };

            this.setState(returnObj);
        }
    },

    handleToggle: function (event) {

        const key = Number(event.target.id);
        const obj = this.state[key];
        obj['enabled'] = !obj.enabled;
        const returnObj = {};
        returnObj[key] = obj;

        this.setState(returnObj);
    },

    render: function () {

        return (
            <div className="Application">
                <div className="bg-top">
                    <main className="pageContent">
                        <Header/>
                        <Preview
                            screens={this.state}
                        />
                        <div className="divider"></div>
                        <ContentControls
                            screens={this.state}
                            handleChange={this.handleChange}
                            handleNew={this.handleNew}
                            handleToggle={this.handleToggle}
                        />
                        <ContentComparison
                            screens={this.state}
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