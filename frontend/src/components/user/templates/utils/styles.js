import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({

    optionBox: {
        position: 'absolute',
        top: 15,
        right: 15,
        display: 'flex'
    },
    optionButton: {
        transitionDuration: '0.4s',
        margin: '0px 5px',
        fontSize: '30px',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--mainText)',
        cursor: 'pointer',
        '&:hover': {
            color: 'var(--secondaryText)',
        }
    },
    mainText: {
        transitionDuration: '0.4s',
        fontWeight: '800',
        fontFamily: 'Cambria',
        color: 'var(--mainText)',
    },
    secondaryText: {
        transitionDuration: '0.4s',
        color: 'var(--secondaryText)',
    },
    s1: {
        transitionDuration: '0.4s',
        backgroundColor: 'var(--mainColor)',
        borderBottom: '2px solid var(--borderColor)',
        overflow: 'auto',
    },
    s2: {
        transitionDuration: '0.4s',
        backgroundColor: 'var(--secondaryColor)',
        borderBottom: '1px solid var(--borderColor)',
        overflow: 'auto',
    },

    maincontainer: {
        margin: '0 auto',
        width: '1200px',
    },
    maincontainer2: {
        padding: '15px 30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    greetingwrapper: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: '10em',
    },

    introwrapper: {
        transitionDuration: '0.4s',
        backgroundColor: 'var(--secondaryColor)',
        border: '1px solid var(--borderColor)',
        borderRadius: '5px 5px 0 0',
        boxShadow: '-1px 1px 3px -1px rgba(0, 0, 0, 0.75)',

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `${'"nav-area nav-area"'} ${'"left-area right-area"'}`,
    },
    navwrapper: {
        transitionDuration: '0.4s',
        borderRadius: '5px 5px 0 0',
        gridArea: 'nav-area',
        borderBottom: '1px solid var(--borderColor)',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--mainColor)',
    },

    navigation: {
        margin: 0,
        padding: 10,
    },

    navLi: {
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
    },
    navLink: {
        transitionDuration: '0.4s',
        color: 'var(--mainText)',
    },
    dotswrapper: {
        display: 'flex',
        padding: '10px',
        cursor: 'pointer',
    },

    dot1: {
        backgroundColor: '#2aca3e',
    },

    dot2: {
        backgroundColor: '#fec02f',
    },

    dot3: {
        backgroundColor: '#fc6058',
    },
    browserdot: {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        margin: '5px',
        boxShadow: '-1px 1px 3px -1px rgba(0, 0, 0, 0.75)',
    },
    leftcolumn: {
        gridArea: '"left-area"',
        paddingTop: '50px',
        paddingBottom: '50px',
    },

    profilepic: {
        transitionDuration: '0.4s',
        display: 'block',
        margin: '0 auto',
        marginBottom: '20px',
        height: '200px',
        width: '200px',
        objectFit: 'contain',
        border: '2px solid var(--borderColor)',
    },

    themeOptionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    themedot: {
        transitionDuration: '0.4s',
        height: '30px',
        width: '30px',
        backgroundColor: 'black',
        borderRadius: '50%',
        border: '2px solid var(--themeDotBorder)',
        margin: '5px',
        boxShadow: '-1px 1px 3px -1px rgba(0, 0, 0, 0.75)',
        cursor: 'pointer',
        "&:hover": {
            borderWidth: '5px',
        },
    },
    lightMode: {
        backgroundColor: '#fff',
    },

    blueMode: {
        backgroundColor: '#192734',
    },

    greenMode: {
        backgroundColor: '#123524',
    },

    purpleMode: {
        backgroundColor: '#7E4C74',
    },

    blackMode: {
        backgroundColor: '#010302',
    },
    settingsNote: {
        fontSize: '12px',
        fontStyle: 'italic',
        textAlign: 'center',
    },

    rightColumn: {
        gridArea: 'right-area',
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
    },
    previewShadow: {
        transitionDuration: '0.4s',
        backgroundColor: 'var(--previewShadow)',
        width: '300px',
        height: '155px',
        paddingLeft: '30px',
        paddingTop: '30px',
    },

    preview: {
        transitionDuration: '0.4s',
        width: '300px',
        border: '1.5px solid #17a2b8',
        backgroundColor: 'var(--previewBg)',
        padding: '15px',
        position: 'relative',
    },

    corner: {
        height: '7px',
        width: '7px',
        border: '1.5px solid #17a2b8',
        backgroundColor: '#fff',
        position: 'absolute',
    },
    tl: {
        top: '-5px',
        left: '-5px',
    },

    tr: {
        top: '-5px',
        right: '-5px',
    },

    bl: {
        bottom: '-5px',
        left: '-5px',
    },

    br: {
        bottom: '-5px',
        right: '-5px',
    },
    aboutWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        paddingTop: '50px',
        paddingBottom: '50px',
        gap: '50px',
    },

    skills: {
        transitionDuration: '0.4s',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'var(--previewShadow)',
    },

    socialLinks: {
        display: 'grid',
        alignContent: 'center',
        textAlign: 'center',
    },
    contactForm: {
        transitionDuration: '0.4s',
        display: 'block',
        maxWidth: '600px',
        marginTop: '15px',
        margin: '0 auto',
        border: '1px solid var(--borderColor)',
        padding: '15px',
        borderRadius: '5px',
        backgroundColor: 'var(--mainColor)',
        marginBottom: '50px',
    },

    contactFormLabel: {
        lineHeight: '2.7em',
    },

    contactFormTextArea: {
        minHeight: '100px',
        fontSize: '14px',
    },

    inputField: {
        transitionDuration: '0.4s',
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'var(--secondaryColor)',
        borderRadius: '5px',
        border: '1px solid var(--borderColor)',
        fontSize: '14px',
    },

    submitBtn: {
        transitionDuration: '0.4s',
        marginTop: '10px',
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        color: '#fff',
        backgroundColor: 'var(--buttonColor)',
        border: 'none',
    },
    "@media (max-width:1200px)": {
        maincontainer: {
            width: '95%',
        },
    },
    "@media (max-width: 800px)": {
        introwrapper: {
            gridTemplateColumns: '1fr',
            gridTemplateAreas: '"nav-area" "left-area" "right-area"',
        },

        rightcolumn: {
            justifyContent: 'center'
        }
    },
    "@media (max-width: 400px)": {
        previewshadow: {
            maxWidth: '280px',
            height: '180px',
            paddingLeft: '10px',
            paddingTop: '10px',
        },
        preview: {
            width: '280px',

        },

    }
});

export { styles };