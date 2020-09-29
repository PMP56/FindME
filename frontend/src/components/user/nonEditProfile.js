import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import WarningIcon from '@material-ui/icons/Warning';
import CircularProgress from './templates/utils/circularProgress';

import Template from './templates/template1';
import { getData, updateData } from '../../utils/database';


const NonEditProfile = (props) => {
    //const { currentUser } = useContext(AuthContext);
    let { username } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [found, setFound] = useState(false);
    const [database, setDatabase] = useState({});

    const fetchData = async () => {
        if (props.data.theme != "") {
            setDatabase(props.data);
            setFound(true);
            setLoaded(true);
        } else {
            setFound(found);
            setLoaded(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        (loaded) ?
            (!found) ?
                <div className='container mt-5 h-50 d-flex flex-column justify-content-center'>
                    <div className='container d-flex flex-row' style={{ alignItems: 'center' }}>
                        <WarningIcon className='mr-4' style={{ color: '#fce03f', fontSize: '48px' }} />
                        <h2 >HTTP 404 Not Found</h2>
                    </div><br />
                    <p className='ml-3'>User '{username}' not found</p>
                </div>
                :
                <Template edit={props.edit} data={database} />
            :
            <CircularProgress />
    );
}

export default NonEditProfile;