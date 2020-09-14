import React, { Component, Fragment, useContext } from 'react';
import { Route, Switch, } from 'react-router-dom';

import Home from './home';
import GetStarted from './get_started/get_started';
import Profile from './profile';
import NonEditProfile from './nonEditProfile';


const UserPage = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/get_started" component={GetStarted} />
                <Route exact path="/edit/:username">
                    <Profile edit={true} />
                </Route>
                <Route exact path="/:username">
                    <NonEditProfile edit={false} />
                </Route>
            </Switch>
        </Fragment>
    );
}

export default UserPage;