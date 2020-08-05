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
        width: '90vw',
        height: '90vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '15px 15px 8px #555555',
        color: 'white',
    },
    header: {
        color: 'white',
        fontFamily: 'Raleway',
        fontWeight: 900,
        fontSize: 28,
        marginBottom: 10,
    },
    subheader: {
        color: 'white',
        fontSize: 12,
        marginBottom: 60,
    },
    image: {
        width: '95%'
    },
    buttons: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    button1: {
        padding: '8px 20px',
        margin: '0px 10px',
        borderStyle: 'none',
        background: 'linear-gradient(45deg, #016666 70%, transparent 50%)',
        backgroundPosition: '100%',
        backgroundSize: '400%',
        color: '#016666',
        border: '2px',
        borderStyle: 'solid',
        borderColor: '#016666 !important',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '600',
        transitionDuration: '0.4s',
        outline: 'none !important',
        "&:hover": {

            backgroundPosition: '0',
            color: 'white',
        }
    },
    button2: {
        padding: '8px 20px',
        borderStyle: 'none',
        background: 'linear-gradient(45deg, #ff4050 70%, transparent 50%)',
        backgroundPosition: '100%',
        backgroundSize: '400%',
        color: '#ff4050',
        border: '2px',
        borderStyle: 'solid',
        borderColor: '#ff4050 !important',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '600',
        transitionDuration: '0.4s',
        outline: 'none !important',
        "&:hover": {
            backgroundPosition: '0',
            color: 'white',
        }
    },
    "@media (min-width:560px)": {
        inner: {
            width: '80vw',
            height: '85vh',
        },
        header: {
            fontWeight: 900,
            fontSize: 38,
            marginBottom: 10,
        },
        subheader: {
            color: 'white',
            fontSize: 18,
            marginBottom: 30,
        },
        button1: {
            padding: '10px 25px',
            margin: '0px 10px',
            fontSize: 16,
        },
        button2: {
            padding: '10px 25px',
            margin: '0px 10px',
            fontSize: 16,
        },
        image: {
            width: '70%'
        },
    }
});

const GetStarted = () => {
    const classes = styles();
    return (
        <div className={classes.background}>
            <div className={classes.inner}>
                <h1 className={classes.header}> Welcome </h1>
                <h4 className={classes.subheader}> Start creating your portfolio.</h4>
                <img src={'/static/frontend/landing/des-3.png'} className={classes.image} />
                <div className={classes.buttons}>
                    <Link to='/'><button className={classes.button2}>Not now</button></Link>
                    <Link to='/profile'><button className={classes.button1}>Get Started</button></Link>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;