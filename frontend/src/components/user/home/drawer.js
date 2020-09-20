import { Divider } from '@material-ui/core';
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/drawer.css';

import HouseIcon from '@material-ui/icons/House';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import MmsIcon from '@material-ui/icons/Mms';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Drawer = () => {
    return (
        <div className="drawer">
            <NavLink to='/' className="icon-box" activeClassName="active-icon-box">
                <HouseIcon style={{ fontSize: '28px' }} />
                <p>Home</p>
            </NavLink>
            <NavLink to='/dashboard'>
                <div className="icon-box">
                    <DashboardIcon style={{ fontSize: '28px' }} />
                    <p>Panel</p>
                </div>
            </NavLink>
            <div className="icon-box">
                <NewReleasesIcon style={{ fontSize: '28px' }} />
                <p>Infos</p>
            </div>
            <div className="icon-box">
                <MmsIcon style={{ fontSize: '28px' }} />
                <p>Email</p>
            </div>
        </div>
    );
}

export default Drawer;