import React, { Component, Fragment, useContext } from 'react';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

const UserPage = () => {
    const { currentUser } = useContext(AuthContext);
    let userToken = localStorage.getItem('currentUserToken');
    return (
        <Fragment>
            <h1>Hellow, {currentUser.username}. This is userpage</h1><br />
            <button onClick={() => LogOut(userToken)}>LogOut</button>
        </Fragment>
    );
}

export default UserPage;