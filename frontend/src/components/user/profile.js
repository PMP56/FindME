import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    let { username } = useParams()
    return (
        <h1>This is your profile {username}.</h1>
    );
}

export default Profile;