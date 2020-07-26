import React, { Component, useContext } from 'react';
import { AuthContext } from '../../utils/userContext';

const UserPage = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <h1>Hellow, {currentUser.username}</h1>
    );
}

export default UserPage;