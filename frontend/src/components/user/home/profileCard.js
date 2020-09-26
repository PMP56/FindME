import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Link, NavLink } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';

const styles = makeStyles({
    cardBody: {
        width: '100%',
        margin: '30px 0px',
        display: 'flex',
        flexDirection: 'row',
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

    left: {
        margin: '30px',
    },

    right: {
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

    return (

        <div className={classes.cardBody}>
            <div className={classes.left}>
                <img className={classes.profilePicture} src={props.data.profilePicture} />
            </div>
            <div className={classes.right}>
                <NavLink to={`/${props.data.userName}`}>
                    <h3 className={classes.header}>{props.data.userName}</h3>
                </NavLink>
                <div style={{ display: "flex", alignItems: 'flex-start' }}>
                    <StarIcon style={{ color: (props.data.rating >= 1) ? "#edba11" : "#141414", fontSize: '18px' }} />
                    <StarIcon style={{ color: (props.data.rating >= 2) ? "#edba11" : "#141414", fontSize: '18px' }} />
                    <StarIcon style={{ color: (props.data.rating >= 3) ? "#edba11" : "#141414", fontSize: '18px' }} />
                    <StarIcon style={{ color: (props.data.rating >= 4) ? "#edba11" : "#141414", fontSize: '18px' }} />
                    <StarIcon style={{ color: (props.data.rating >= 5) ? "#edba11" : "#141414", fontSize: '18px' }} />
                    <h5 style={{ color: '#141414', margin: '2px 10px' }}>{` / ${props.data.totalRating}`}</h5>
                </div>
                <p className={classes.subheader}>{props.data.shadowText}</p>
                <div className={classes.skillBox}>
                    {
                        (props.data.skills).map((skill, index) => <div className={classes.skill} key={index}><p style={{ margin: 0 }}>{skill}</p></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;