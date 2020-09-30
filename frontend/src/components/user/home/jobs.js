import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthContext } from '../../../utils/userContext';

import JobCard from './jobCard';
import './styles/home.css';

const HomeBody = (props) => {
    //const [data, setData] = useState({});
    const [allJobs, setAllJobs] = useState(props.data);
    const { currentUser } = useContext(AuthContext);

    return (
        <Fragment>
            <div className="main-container">
                <div className="main-box">
                    <div>
                        <h2 style={{ color: 'white', textAlign: 'center' }}>{(currentUser.is_employee) ? `Jobs recommended for you` : `Jobs available on FindME`}</h2>
                        {(allJobs.length != 0) ? (allJobs).map((data, index) =>
                            <JobCard key={index} data={data} />
                        ) : <Fragment />}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomeBody;