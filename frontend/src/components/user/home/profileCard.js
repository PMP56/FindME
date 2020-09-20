import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Link, NavLink } from 'react-router-dom';

const styles = makeStyles({
    cardBody: {
        width: '100%',
        margin: '15px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: '20px',
        boxShadow: '4px 4px 2px #666',
        transitionDuration: '0.1s',
        overflowX: 'hidden',
        '&:hover': {
            zIndex: 10,
            boxShadow: '10px 10px 5px #666',
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
                <p className={classes.subheader}>{props.data.shadowText}</p>
                <div className={classes.skillBox}>
                    {
                        (props.data.skills).map((skill, index) => <div className={classes.skill} key={index}><p style={{ margin: 0 }}>{skill.substring(0, 8)}</p></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;