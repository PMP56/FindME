import React, { Component, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';

import Template from './templates/template1';

const Profile = () => {
    const { currentUser } = useContext(AuthContext);
    let { username } = useParams()

    return (
        (currentUser.username == username) ?
            <Template />
            :
            <div className='container mt-5 h-50 d-flex flex-column justify-content-center'>
                <h2>403 Forbidden Error</h2>
                <p>Access is provided to the user only.</p>
            </div>
    );
}

export default Profile;