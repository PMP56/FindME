import React, { Component, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { LogOut } from '../../../utils/auth';

import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import VisibilityIcon from '@material-ui/icons/Visibility';

import "./styles/navbar.css";

const NavBar = (props) => {
    const [searchText, setSearchText] = useState(null);
    const [alldata, setAllData] = useState(props.data);

    let userToken = localStorage.getItem('currentUserToken');

    const SearchResult = () => {
        return (
            <div className="search-result-box">
                {(alldata).map((data, index) =>
                    (data.userName.includes(searchText)) ?
                        <Link style={{ textDecoration: 'none' }} to={`/${data.userName}`} key={index}>
                            <SearchResultTile data={data} key={index} />
                        </Link>
                        :
                        <Fragment key={index} />
                )}
            </div>
        );
    }

    const SearchResultTile = (props) => {
        let len = searchText.length;
        let index = props.data.userName.indexOf(searchText);
        return (
            <div className="search-result-tile">
                <div className="frontTile">
                    <SearchIcon style={{ margin: "5px 10px 5px 5px" }} />
                </div>
                <div className="backTile">
                    <div style={{ display: "flex", fontFamily: 'Calibri', fontSize: '16px' }}>
                        {props.data.userName.slice(0, index)}
                        <b style={{ fontWeight: '900', color: 'black' }}> {props.data.userName.slice(index, index + len)} </b>
                        {props.data.userName.slice(index + len, props.data.userName.length)}
                    </div>
                    <div style={{ display: "flex" }}>
                        {(props.data.skills).map((skill, index) => <h6 style={{ margin: '5px 8px 0px 0px' }} key={index}>{skill}</h6>)}
                    </div>
                </div>
            </div >
        );
    }

    const fieldChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    }

    const focusChange = () => {

    }

    return (
        <div className="nav-container">
            <h3>FindME</h3>
            <div className="search-box">
                {(searchText) ? <SearchResult /> : <Fragment />}
                <input className="search-text-box" placeholder="Search by name, tags, skills" type="text" onFocus={focusChange} onChange={fieldChange}></input>
                <SearchIcon style={{ color: "black" }} />
            </div>
            <div className="right-buttons">
                <div className="right-nav-button dropdown-toggle" data-toggle="dropdown">
                    <PersonIcon />
                    <h4 className="nav-text">{props.user.username.toUpperCase()}</h4>
                </div>
                <ul className="dropdown-menu">
                    <li><VisibilityIcon style={{ marginRight: '15px' }} /><Link to={'/' + props.user.username}>{props.user.username.toUpperCase()}</Link></li>
                    <li><LoyaltyIcon style={{ marginRight: '15px' }} /><Link to={'/edit/' + props.user.username}>Edit Profile</Link></li>
                    <div className="dropdown-divider"></div>
                    <li><VpnKeyIcon style={{ marginRight: '15px' }} /><span onClick={() => LogOut(userToken)}>Log out</span></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;