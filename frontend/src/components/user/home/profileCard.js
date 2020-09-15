import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Link, NavLink } from 'react-router-dom';

const styles = makeStyles({
    cardBody: {
        margin: '15px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: '10px',
        boxShadow: '4px 4px 2px #aaaaaa',
        transitionDuration: '0.1s',
        '&:hover': {
            zIndex: 10,
            boxShadow: '10px 10px 5px #aaaaaa',
        }
    },

    left: {
        margin: '30px',
    },

    right: {
        margin: '30px',
    },

    profilePicture: {
        height: '100px',
        width: '100px',
        objectFit: 'cover',
        objectPosition: '50%',
    },
    skillBox: {
        display: 'flex'
    },
    skill: {
        margin: '5px',
        padding: '5px 10px',
        backgroundColor: '#eee',
        border: '1px solid #444',
        borderRadius: '5px'
    }
});

const ProfileCard = (props) => {
    const classes = styles();

    const cardClick = (username) => {
        console.log(username);
        // return (
        //     <Link to={`/${username}`} />
        // );
    }

    return (

        <div className={classes.cardBody}>
            <div className={classes.left}>
                <img className={classes.profilePicture} src={props.data.profilePicture} />
            </div>
            <div className={classes.right}>
                <NavLink to={`/${props.data.userName}`}>
                    <h3>{props.data.userName}</h3>
                </NavLink>
                <p>{props.data.shadowText}</p>
                <div className={classes.skillBox}>
                    {
                        (props.data.skills).map((skill, index) => <div className={classes.skill}><p style={{ margin: 0 }} key={index}>{skill}</p></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;