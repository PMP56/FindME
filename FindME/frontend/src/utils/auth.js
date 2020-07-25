import React, { Component, useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export const LoginUser = (creds) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify(creds);

    axios.post('/api/auth/login', body, config).then(
        result => { console.log(result.data) }
    ).catch(
        err => console.log(err)
    );
}

export const RegisterUser = (creds) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify(creds);

    axios.post('/api/auth/register', body, config).then(
        result => { console.log(result.data) }
    ).catch(
        err => console.log(err)
    );
}