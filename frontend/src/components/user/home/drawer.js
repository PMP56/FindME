import { Divider } from '@material-ui/core';
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/drawer.css';

import HouseIcon from '@material-ui/icons/House';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import MmsIcon from '@material-ui/icons/Mms';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';

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
            <NavLink exact to='/jobs' className="icon-box" activeClassName="active-icon-box" style={{ textDecoration: 'none' }}>
                <WorkIcon style={{ fontSize: '28px' }} />
                <p>Jobs</p>
            </NavLink>
        </div>
    );
}

export default Drawer;