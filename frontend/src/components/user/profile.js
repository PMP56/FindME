import React, { Component, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../utils/userContext';
import WarningIcon from '@material-ui/icons/Warning';
import CircularProgress from './templates/utils/circularProgress';

import Template from './templates/template1';

import { getData } from '../../utils/database';

const Profile = (props) => {
    const { currentUser } = useContext(AuthContext);
    const date = new Date();
    let { username } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [database, setDatabase] = useState({});

    const fetchData = async () => {
        await getData(username).then(result => {
            if (result != null) {
                setDatabase(result.data);
                setLoaded(true);

                //console.log(result.data);
            } else {
                setDatabase({
                    id: currentUser.id,
                    userName: currentUser.username,
                    userHeader: `Hi I'm ${currentUser.username}`,
                    shadowText: 'I am a student/ professional/ designer/ ..................',
                    firstIntro: 'Short Introduction \n ###########################',
                    secondIntro: 'Another Line of Introduction \n ############################ \n ############################',
                    skills: ['Skills 1', 'Skills 2', 'Skills 3', 'Skills 4',],
                    theme: 'white',
                    profilePicture: '/static/frontend/user.png',
                    socialLinks: [],
                    projects: [["Title", `/static/frontend/project${Math.floor(Math.random() * Math.floor(3))}.png`, "Description", "Link"]],
                    visits: 0,
                    rating: 0,
                    totalRating: 0,
                    visitTimeline: [[0, 0]]
                });
                setLoaded(true);
            }
        });
    }

    useEffect(() => {

        fetchData();
        console.log("Edit = ", props.edit)
    }, []);

    return (
        (currentUser.username == username) ?
            (!loaded) ?
                <CircularProgress />
                :
                <Template edit={props.edit} data={database} />
            :
            <div className='container mt-5 h-50 d-flex flex-column justify-content-center'>
                <div className='container d-flex flex-row' style={{ alignItems: 'center' }}>
                    <WarningIcon className='mr-4' style={{ color: '#fce03f', fontSize: '48px' }} />
                    <h2 >403 Forbidden Error</h2>
                </div><br />
                <p className='ml-3'>Access is provided to the user only.</p>
            </div>
    );
}

export default Profile;