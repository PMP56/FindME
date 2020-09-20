import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../../utils/userContext';

import ProfileCard from './profileCard';
import './styles/home.css';

const HomeBody = (props) => {
    const [data, setData] = useState({});
    const [allData, setAllData] = useState(props.data);
    const { currentUser } = useContext(AuthContext);
    let userToken = localStorage.getItem('currentUserToken');

    return (
        <Fragment>
            <div className="main-container">
                <div className="main-box">
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>People who use FindME</h2>
                        {(allData).map((data, index) =>
                            <ProfileCard key={index} data={data} />
                        )}
                    </div>
                </div>
                {/* <div className="dashboard">
                    <h2 style={{ color: 'white', textAlign: 'center' }}>DashBoard</h2>
                    {(!loaded) ? <Fragment /> :
                        <h4 style={{ color: 'white', textAlign: 'center' }}> Your portfolio got {data.visit ?? 0} visit.</h4>
                    }
                </div> */}
            </div>
        </Fragment>
    );
}

export default HomeBody;