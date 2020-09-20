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
            <NavLink exact to='/' className="icon-box" activeClassName="active-icon-box" style={{ textDecoration: 'none' }}>
                <HouseIcon style={{ fontSize: '28px' }} />
                <p>Home</p>
            </NavLink>
            <NavLink exact to='/dashboard' className="icon-box" activeClassName="active-icon-box" style={{ textDecoration: 'none' }}>
                <DashboardIcon style={{ fontSize: '28px' }} />
                <p>Panel</p>
            </NavLink>
            <NavLink exact to='/notification' className="icon-box" activeClassName="active-icon-box" style={{ textDecoration: 'none' }}>
                <NewReleasesIcon style={{ fontSize: '28px' }} />
                <p>Infos</p>
            </NavLink>
            <NavLink exact to='/messages' className="icon-box" activeClassName="active-icon-box" style={{ textDecoration: 'none' }}>
                <MmsIcon style={{ fontSize: '28px' }} />
                <p>Email</p>
            </NavLink>
        </div>
    );
}

export default Drawer;