import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, BrowserRouter } from "react-router-dom";
import { AuthProvider } from '../utils/userContext';

import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime";

import LandingPage from './layouts/landing';
import UserPage from '../components/user/user';
import PrivateRoute from '../routes/PrivateRoutes';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <PrivateRoute path="/" component={UserPage} />
                <LandingPage />
            </AuthProvider>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));