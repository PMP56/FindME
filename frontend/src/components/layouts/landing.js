import React, { useContext, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../utils/userContext';

import Header from './headers';
import LandingBody from './landing_body';
import Footer from './footer';
import Contact from './contact';
import Login from '../accounts/login';
import Register from '../accounts/register';
import NonEditProfile from '../user/nonEditProfile';


const LandingPage = () => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <Fragment>
            <Route exact path="/">
                <Header />
            </Route>

            <Route exact path="/">
                <LandingBody />
            </Route>
            <Route exact path="/contact">
                <Header />
                <Contact />
            </Route>
            <Route exact path="/login">
                <Header />
                <Login />
            </Route>
            <Route exact path="/register">
                <Header />
                <Register />
            </Route>
            <Route exact path="/">
                <Footer />
            </Route>
            <Route exact path="/:username">
                <NonEditProfile edit={false} />
            </Route>
        </Fragment>
    );
}

export default LandingPage;