import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import { LogOut } from '../../utils/auth';

import { getData, getEmployerData, getAllData, getAllEmployerData } from '../../utils/database';

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
    const [allEmployeeData, setAllEmployeeData] = useState({});
    const [allEmployerData, setAllEmployerData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { currentUser } = useContext(AuthContext);
    let userToken = localStorage.getItem('currentUserToken');

    const fetchData = async () => {
        await getAllData().then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllEmployeeData(result.data);
            }
        });
        await getAllEmployerData().then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllEmployerData(result.data);
            }
        });
        if (currentUser.is_employee) {
            await getData(currentUser.username).then(result => {
                if (result.theme != "") {
                    setData(result.data);
                    setLoaded(true);
                    //console.log(result.data);
                } else {
                    setLoaded(true);
                }
            });
        } else {
            await getEmployerData(currentUser.username).then(result => {
                if (result.theme != "") {
                    setData(result.data);
                    setLoaded(true);
                } else {
                    setLoaded(true);
                }
            });
        }

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
                            <NavBar data={allEmployeeData} user={currentUser} />
                            <Drawer />
                            <HomeBody employeeData={allEmployeeData} employerData={allEmployerData} />
                        </Route>
                        <Switch>
                            <Route exact path='/dashboard'>
                                <NavBar data={allEmployeeData} user={currentUser} />
                                <Drawer />
                                <DashBoard data={data} />
                            </Route>
                            <Route exact path='/notification'>
                                <NavBar data={allEmployeeData} user={currentUser} />
                                <Drawer />
                                <DashBoard data={allEmployeeData} />
                            </Route>
                            <Route exact path='/messages'>
                                <NavBar data={allEmployeeData} user={currentUser} />
                                <Drawer />
                                <DashBoard data={allEmployeeData} />
                            </Route>
                            <Route path="/edit/:username">
                                <Profile data={data} edit={true} />
                            </Route>
                            <Route path="/:username">
                                <NonEditProfile data={data} edit={false} />
                            </Route>
                        </Switch>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export default Home;