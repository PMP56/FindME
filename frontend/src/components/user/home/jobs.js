import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../../utils/userContext';

import { getAllJobs } from '../../../utils/database';

import JobCard from './jobCard';
import './styles/home.css';

const HomeBody = (props) => {
    //const [data, setData] = useState({});
    const [userWorkField, setUserWorkField] = useState(props.userField);
    const [loaded, setLoaded] = useState(false);
    const [allJobs, setAllJobs] = useState({});
    const { currentUser } = useContext(AuthContext);

    const fetchData = async () => {
        await getAllJobs(props.userField[0]).then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setAllJobs(result.data);
                setLoaded(true);
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Fragment>
            <div className="main-container">
                <div className="main-box">
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>{(currentUser.is_employee) ? `Jobs recommended for you` : `Jobs available on FindME`}</h2>
                        {(!loaded) ? <Fragment /> :
                            (allJobs.length != 0) ? (allJobs).map((data, index) =>
                                <JobCard key={index} data={data} />
                            ) : <Fragment />}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomeBody;