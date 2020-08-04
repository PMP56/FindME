import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    background: {
        background: 'linear-gradient(45deg, #fc9aaf 30%, #ffab80 90%)',
        width: '100vw',
        height: '100vh',
        padding: '25px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        background: 'linear-gradient(to bottom, #7e0b58 10%, #ff7557 90%)',
        width: '60vw',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '15px 15px 8px #555555',
        color: 'white',
    },
    header: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontWeight: 'bolder',
    }
});

const GetStarted = () => {
    const classes = styles();
    return (
        <div className={classes.background}>
            <div className={classes.inner}>
                <h1 className={classes.header}> Welcome </h1>
                <h4> Get started to create your portfolio.</h4>
                <button className='m-2'><Link to='/'>Not now</Link></button>
                <button className='m-2'>Get Started</button>
            </div>
        </div>
    );
}

export default GetStarted;