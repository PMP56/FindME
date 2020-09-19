import React, { Component, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import "./styles/navbar.css";

const NavBar = (props) => {
    const [searchText, setSearchText] = useState(null);
    const [alldata, setAllData] = useState(props.data);

    const SearchResult = (props) => {
        return (
            <div className="search-result-box">
                {(alldata).map((data, index) =>
                    (data.userName.includes(searchText)) ?
                        <Link style={{ textDecoration: 'none' }} to={`/${data.userName}`}>
                            <SearchResultTile data={data} key={index} />
                        </Link>
                        :
                        <Fragment key={index} />)
                }
            </div>
        );
    }

    const SearchResultTile = (props) => {
        return (
            <div className="search-result-tile">
                <div className="frontTile">
                    <SearchIcon style={{ margin: "5px 10px 5px 5px" }} />
                </div>
                <div className="backTile">
                    {props.data.userName}
                    <div style={{ display: "flex" }}>
                        {(props.data.skills).map((skill, index) => <h6 style={{ margin: '5px 8px 0px 0px' }} key={index}>{skill}</h6>)}
                    </div>
                </div>
            </div >
        );
    }

    const fieldChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
        console.log(searchText);
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
                <h5>Profile</h5>
            </div>
        </div>
    );
}

export default NavBar;