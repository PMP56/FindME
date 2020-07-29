import React, { Component, useState, useContext, useEffect } from 'react';
import { authStateChange } from './auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    let user = localStorage.getItem('currentUserInfo');

    useEffect(() => {
        setCurrentUser(JSON.parse(user));
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}