import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';

const ThemeChanger = (props) => {
    const theme = props.theme;
    const styles = makeStyles({
        root: {
            transitionDuration: '0.4s',
            '--mainColor': theme.mainColor,
            '--secondaryColor': theme.secondaryColor,

            '--borderColor': theme.borderColor,

            '--mainText': theme.mainText,
            '--secondaryText': theme.secondaryText,

            '--themeDotBorder': theme.themeDotBorder,

            '--previewBg': theme.previewBg,
            '--previewShadow': theme.previewShadow,

            '--buttonColor': theme.buttonColor,
        },
    });

    const classes = styles();
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default ThemeChanger;