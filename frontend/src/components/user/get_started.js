import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    background: {
        background: 'linear-gradient(to bottom, #12d9e0 30%, #a0fab9 90%)',
        width: '100vw',
        height: '100vh',
        padding: '25px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        background: 'linear-gradient(to bottom, #0c8f94 30%, #77f79b 90%)',
        width: '70vw',
        height: '85vh',
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
        fontSize: 42,
        marginBottom: 30,
    },
    subheader: {
        color: 'white',
        fontSize: 32,
        marginBottom: 50,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const GetStarted = () => {
    const classes = styles();
    return (
        <div className={classes.background}>
            <div className={classes.inner}>
                <h1 className={classes.header}> Welcome </h1>
                <h4 className={classes.subheader}> Create your portfolio.</h4>
                <div>
                    <button className='m-2'><Link to='/'>Not now</Link></button>
                    <button className='m-2'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;