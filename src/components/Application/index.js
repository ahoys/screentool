import React from 'react';
import './Application.css';

// React components.
import Header from '../Header';
import Specification from '../Specification';
import Comparison from '../Comparison';
import Footer from '../Footer';

const Application = React.createClass({

    render: function () {

        return (
            <div className="Application">
                <div className="bg-top">
                    <main className="pageContent">
                        <Header />
                        <Specification screens={this.props.screens} />
                        <Comparison screens={this.props.screens} />
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