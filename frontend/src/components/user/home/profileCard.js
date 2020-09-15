import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect, Link, NavLink } from 'react-router-dom';

const styles = makeStyles({
    cardBody: {
        margin: '25px 0px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        borderRadius: '10px',
        boxShadow: '10px 10px 5px #aaaaaa',
        cursor: 'pointer',
        '&:hover': {
            zIndex: 10,
        }
    },

    left: {
        margin: '10px',
    },

    right: {
        margin: '10px',
    },

    profilePicture: {
        height: '100px',
        width: '100px',
        objectFit: 'cover',
        objectPosition: '50%',
    },
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
        <NavLink style={{ textDecoration: 'none' }} to={`/${props.data.userName}`}>
            <div className={classes.cardBody}>
                <div className={classes.left}>
                    <img className={classes.profilePicture} src={props.data.profilePicture} />
                </div>
                <div className={classes.right}>
                    <h3>{props.data.userName}</h3>
                    <p>{props.data.shadowText}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default ProfileCard;