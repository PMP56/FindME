import React, { Component, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import WarningIcon from '@material-ui/icons/Warning';

import Template from './templates/template1';

const Profile = (props) => {
    const { currentUser } = useContext(AuthContext);
    let { username } = useParams()

    return (
        (currentUser.username == username) ?
            <Template edit={props.edit} username={username} />
            :
            <div className='container mt-5 h-50 d-flex flex-column justify-content-center'>
                <div className='container d-flex flex-row' style={{ alignItems: 'center' }}>
                    <WarningIcon className='mr-4' style={{ color: '#fce03f', fontSize: '48px' }} />
                    <h2 >403 Forbidden Error</h2>
                </div><br />
                <p className='ml-3'>Access is provided to the user only.</p>
            </div>
    );
}

export default Profile;