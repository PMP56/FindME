import React, { Component, Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import GetStarted from './get_started';

const UserPage = () => {
    return (
        <Fragment>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/get_started">
                <GetStarted />
            </Route>

        </Fragment>
    );
}

export default UserPage;