import React, { Component, Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Link, NavLink } from 'react-router-dom';

import { getWorkfield } from '../../../utils/database';

import StarIcon from '@material-ui/icons/Star';

const styles = makeStyles({
    cardBody: {
        width: '100%',
        margin: '30px 0px',
        alignItems: 'center',
        backgroundColor: '#eee',
        boxShadow: '0 3px 6px -2px rgba(250,250,250,0.2)',
        borderRadius: '20px',
        transitionDuration: '0.2s',
        overflowX: 'hidden',
        '&:hover': {
            zIndex: 10,
            boxShadow: '0 14px 15px -5px rgba(250,250,250,0.2)'
        }
    },
    right: {
        width: '90%',
        margin: '30px',
    },

    profilePicture: {
        height: '125px',
        width: '125px',
        objectFit: 'cover',
        objectPosition: '50%',
    },

    header: {
        fontSize: '24px'
    },

    subheader: {
        fontSize: '18px'
    },

    skillBox: {
        marginTop: 0,
        display: 'flex',
    },
    skill: {
        width: '100px',
        margin: '5px',
        padding: '5px 10px',
        backgroundColor: '#eee',
        border: '1px solid #444',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    description: {
        margin: "15px 5px 25px 5px",
        padding: '20px',
        borderRadius: '10px',
        width: '100%',
        backgroundColor: '#d3cfcf'
    },
    "@media (max-width:720px)": {
        cardBody: {
            overflowX: 'scroll'
        },
        left: {
            margin: '10px',
        },
        right: {
            margin: '10px',
        },
        header: {
            fontSize: '18px'
        },
        subheader: {
            fontSize: '12px'
        },
        profilePicture: {
            height: '100px',
            width: '100px',
        },
        skill: {
            width: '75px',
            margin: '3px',
            padding: '3px 8px',
            backgroundColor: '#eee',
            fontSize: '12px'
        },

    },
    "@media (max-width:450px)": {
        cardBody: {
            borderRadius: '10px',
            margin: '25px 0px',
            overflowX: 'scroll'
        },
        left: {
            margin: '8px',
        },
        right: {
            margin: '8px',
        },
        header: {
            fontSize: '15px'
        },
        subheader: {
            fontSize: '10px'
        },
        profilePicture: {
            height: '75px',
            width: '75px',
        },
        skill: {
            width: '60px',
            margin: '3px',
            padding: '3px 6px',
            backgroundColor: '#eee',
            fontSize: '8px'
        },
    }
});

const ProfileCard = (props) => {
    const classes = styles();
    const [loaded, setLoaded] = useState(false);
    const [workfield, setWorkfield] = useState("");

    const fetchData = async () => {
        await getWorkfield(props.data.job_field).then(result => {
            if (result != null) {
                //changeTheme(result.data.theme);
                setWorkfield(result.data.work_field);
                setLoaded(true);
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, [0]);

    return (
        <div className={classes.cardBody}>
            <div className={classes.right}>
                {/* <NavLink to={`/${props.data.userName}`}>
                    <h3 className={classes.header}>{props.data.userName}</h3>
                </NavLink> */}
                <h3>{props.data.title}</h3>
                <div className="w-100 d-flex justify-content-between mb-3">
                    <h6 style={{ color: 'black', marginRight: '25px' }}>{`Created at: ${props.data.created_at}`}</h6>
                    <h6 style={{ color: 'black' }}>{`Expire at: ${props.data.expire_date}`}</h6>
                </div>
                {(!loaded) ? <Fragment /> :
                    <div className="d-flex align-items-center">
                        <h6 style={{ color: 'black', fontWeight: '800', fontFamily: "Calibri", fontSize: '14px' }}>Work Field </h6>
                        <h6 style={{ color: 'black' }}>{`:  ${workfield}`}</h6>
                    </div>
                }
                <div className={classes.description}>
                    <h5 style={{ color: 'black' }}>Description</h5>
                    <h6 style={{ color: 'black' }}>{props.data.description}</h6>
                </div>
                <div className="d-flex align-items-center">
                    <h6 style={{ color: 'black', fontWeight: '800', fontFamily: "Calibri", fontSize: '14px' }}>Experience </h6>
                    <h6 style={{ color: 'black' }}>{`:  ${props.data.experience} years`}</h6>
                </div>
                <div className="d-flex align-items-center">
                    <h6 style={{ color: 'black', fontWeight: '800', fontFamily: "Calibri", fontSize: '14px' }}>Salary </h6>
                    <h6 style={{ color: 'black' }}>{`:  Rs ${props.data.salary_low} - ${props.data.salary_high}`}</h6>
                </div>

                <p className={classes.subheader}>{props.data.shadowText}</p>
                <div className={classes.skillBox}>
                    {
                        (!props.data.skills) ? <Fragment /> : (props.data.skills).map((skill, index) => <div className={classes.skill} key={index}><p style={{ margin: 0 }}>{skill}</p></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;