import React, { useContext, Fragment } from "react";
import { Route } from "react-router-dom";

import Header from './headers';
import LandingBody from './landing_body';
import Footer from './footer';
import Contact from './contact';
import Login from '../accounts/login';
import Register from '../accounts/register';


const LandingPage = () => {
    return (
        <Fragment>
            <Header />
            <Route exact path="/">
                <LandingBody />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/">
                <Footer />
            </Route>
        </Fragment>
    );
}

export default LandingPage;