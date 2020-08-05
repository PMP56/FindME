import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import Template from './templates/template1';

const Profile = () => {
    let { username } = useParams()

    return (
        <Template />
    );
}

export default Profile;