import React, { Component, useState, useContext, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';

//Auth State
export const authStateChange = (token) => {
    //console.log(token);
    const config = {
        headers: {
            'Authorization': `Token ${token}`,
        }

    };
    axios.get('/api/auth/user', config).
        then(
            result => {
                console.log("Logged in with", result.data);
                localStorage.setItem('currentUserToken', token);
                localStorage.setItem('currentUserInfo', JSON.stringify(result.data));

            }
        ).catch(
            err => {
                console.log(err.response.data);
            }
        );
}

//Return User if exist
export const getUser = () => { }


//Login User from backend
export const LoginUser = (creds) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(creds);
    axios.post('/api/auth/login', body, config)
        .then(
            (result) => {
                let token = result.data.token;
                //console.log(token);
                authStateChange(result.data.token);
            }
        ).catch(
            err => {
                console.log(err.response.data);
                alert("Incorrect credentials");
            }
        );
}

//Register User from backend
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
        err => {
            if (err.response.data['username']) {
                alert(err.response.data['username'][0]);
            }
            if (err.response.data['email']) {
                alert(err.response.data['email'][0]);
            }
        }
    );
}