import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

import { getData, getAllData } from '../../utils/database';

import Profile from './profile';
import NonEditProfile from './nonEditProfile';

import HomeBody from './home/homeBody';
import NavBar from './home/navbar';
import Drawer from './home/drawer';
import ProfileCard from './home/profileCard';
import DashBoard from './home/dashboard';
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
                <Fragment>
                    <div className="home-body">
                        <Route exact path='/'>
                            <NavBar data={allData} user={currentUser} />
                            <Drawer />
                            <HomeBody data={allData} />
                        </Route>
                        <Switch>
                            <Route exact path='/dashboard'>
                                <NavBar data={allData} user={currentUser} />
                                <Drawer />
                                <DashBoard data={allData} />
                            </Route>
                            <Route exact path='/notification'>
                                <NavBar data={allData} user={currentUser} />
                                <Drawer />
                                <DashBoard data={allData} />
                            </Route>
                            <Route exact path='/messages'>
                                <NavBar data={allData} user={currentUser} />
                                <Drawer />
                                <DashBoard data={allData} />
                            </Route>
                            <Route path="/edit/:username">
                                <Profile edit={true} />
                            </Route>
                            <Route path="/:username">
                                <NonEditProfile edit={false} />
                            </Route>
                        </Switch>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export default Home;