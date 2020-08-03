import React, { Component, Fragment, useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    let userToken = localStorage.getItem('currentUserToken');
    return (
        <Fragment>
            <h1>Hellow, {currentUser.username}. This is userpage</h1><br />
            <button onClick={() => LogOut(userToken)}>LogOut</button>
        </Fragment>
    );
}

export default Home;