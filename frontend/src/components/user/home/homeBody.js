import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../../utils/userContext';

import ProfileCard from './profileCard';
import './styles/home.css';

const HomeBody = (props) => {
    //const [data, setData] = useState({});
    const [allEmployeeData, setAllEmployeeData] = useState(props.employeeData);
    const [allEmployerData, setAllEmployerData] = useState(props.employerData);
    const { currentUser } = useContext(AuthContext);

    return (
        <Fragment>
            <div className="main-container">
                <div className="main-box">
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>People who use FindME</h2>
                        {(allEmployeeData.length != 0) ? (allEmployeeData).map((data, index) =>
                            <ProfileCard key={index} data={data} />
                        ) : <Fragment />}
                    </div>
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>Employers on FindME</h2>
                        {(allEmployerData.length != 0) ? (allEmployerData).map((data, index) =>
                            <ProfileCard key={index} data={data} />
                        ) : <Fragment />}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomeBody;