import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import LandingPage from './layouts/landing';

const App = () => {
    return (
        <Router>
            <LandingPage />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));