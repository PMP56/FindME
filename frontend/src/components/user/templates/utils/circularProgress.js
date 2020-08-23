import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const styles = makeStyles({
    alignCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    }
});

const CircularProgessIndicator = () => {
    const classes = styles();
    return (
        <CircularProgress className={classes.alignCenter} color="secondary" />
    );
}

export default CircularProgessIndicator;