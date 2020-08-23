import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

import { getData } from '../../utils/database';

const Home = () => {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { currentUser } = useContext(AuthContext);
    let userToken = localStorage.getItem('currentUserToken');

    const fetchData = async () => {
        await getData(currentUser.username).then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setData(result.data);
            }
            setLoaded(true);
        });

    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <Fragment>
            <div className='p-4 d-flex flex-row justify-content-between'>
                <div>
                    <h1>Hellow, {currentUser.username}. This is userpage</h1><br />
                    <button className='btn btn-success mr-3'>
                        <Link to={'/edit/' + currentUser.username}>Edit Profile</Link>
                    </button>
                    <button className='btn btn-primary' onClick={() => LogOut(userToken)}>LogOut</button>
                </div>
                <div>
                    <h2>DashBoard</h2>
                    {(!loaded) ? <Fragment /> :
                        <h4>Your portfolio got {data.visit} visit.</h4>
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Home;