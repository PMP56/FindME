import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

import { getData, getAllData } from '../../utils/database';

import NavBar from './home/navbar';
import ProfileCard from './home/profileCard';
import './home/styles/home.css';

const Home = () => {
    const [data, setData] = useState({});
    const [allData, setAllData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { currentUser } = useContext(AuthContext);
    let userToken = localStorage.getItem('currentUserToken');

    const fetchData = async () => {
        await getData(currentUser.username).then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setData(result.data);
            }
            //setLoaded(true);
        });
        await getAllData().then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllData(result.data);
            }
            setLoaded(true);
        });

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            {(!loaded) ? <Fragment /> :
                <NavBar data={allData} user={currentUser} />
            }
            <div className="main-container">
                <div className="main-box">
                    {/* <h3>Hellow, {currentUser.username}. This is userpage</h3><br /> */}
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>People who use FindME</h2>
                        {(!loaded) ? <Fragment /> :
                            (allData).map((data, index) =>
                                <ProfileCard key={index} data={data} />
                            )}
                    </div>
                </div>
                <div className="dashboard">
                    <h2 style={{ color: 'white', textAlign: 'center' }}>DashBoard</h2>
                    {(!loaded) ? <Fragment /> :
                        <h4 style={{ color: 'white', textAlign: 'center' }}> Your portfolio got {data.visit ?? 0} visit.</h4>
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Home;