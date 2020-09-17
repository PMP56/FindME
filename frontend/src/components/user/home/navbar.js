import React, { Component, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import "./styles/navbar.css";

const NavBar = (props) => {
    const [searchText, setSearchText] = useState();

    const fieldChange = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
    }

    const focusChange = () => {

    }

    return (
        <div className="nav-container">
            <h3>FindME</h3>
            <div className="search-box">
                <input className="search-text-box" placeholder="Search by name, tags, skills" type="text" onFocus={focusChange} onChange={fieldChange}></input>
                <SearchIcon style={{ color: "black" }} />
            </div>
            <div className="right-buttons">
                <h5>Profile</h5>
            </div>
        </div>
    );
}

export default NavBar;