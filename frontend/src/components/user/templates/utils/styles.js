import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({

    optionBox: {
        zIndex: '100',
        padding: '15px 15px',
        background: 'rgba(0, 0, 0, 1)',
        position: 'fixed',
        top: 15,
        right: 0,
        display: 'flex',
        borderRadius: '15px 0px 0px 15px'
    },
    optionButton: {
        transitionDuration: '0.4s',
        margin: '0px 5px',
        fontSize: '30px',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            color: 'cyan',
        }
    },
    mainText: {
        transitionDuration: '0.4s',
        fontWeight: '800',
        fontFamily: 'Russo One',
        color: 'var(--mainText)',
    },
    secondaryText: {
        transitionDuration: '0.4s',
        color: 'var(--secondaryText)',
        padding: '7.5px 10px',
    },
    saveBox: {
        background: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        overflow: 'hidden',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    s1: {
        transitionDuration: '0.4s',
        background: 'var(--mainColor)',
        borderBottom: '2px solid var(--borderColor)',
        overflow: 'auto',
    },
    s2: {
        transitionDuration: '0.4s',
        background: 'var(--secondaryColor)',
        borderBottom: '1px solid var(--borderColor)',
        overflow: 'auto',
        padding: '20px 0px'
    },

    maincontainer: {
        margin: '0 auto',
        width: '1200px',
    },

    userName: {
        padding: '5px 30px',
        fontSize: '56px',
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
        background: 'var(--secondaryColor)',
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
        backgroundColor: 'var(--navColor)',
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
        background: '#2aca3e',
    },

    dot2: {
        background: '#fec02f',
    },

    dot3: {
        background: '#fc6058',
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

    ppContainer: {
        display: 'block',
        margin: '0 auto',
        height: '225px',
        width: '225px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        '&:hover $uploadButton': {
            opacity: '90%',
        }
    },

    profilepic: {
        transitionDuration: '0.4s',
        display: 'block',
        margin: '0 auto',
        height: '225px',
        width: '225px',
        objectFit: 'cover',
        border: '3px solid var(--borderColor)',
    },

    uploadButton: {
        position: 'absolute',
        height: '40px',
        width: '225px',
        alignSelf: 'center',
        color: 'var(--secondaryText)',
        opacity: '0%',
        background: 'var(--secondaryColor)',
        border: '2px solid var(--borderColor)',
        transitionDuration: '0.3s',
        '&:hover': {
            background: 'var(--mainColor)',
            border: '2px solid var(--borderColor)',
        }
    },

    themeOption: {
        height: '30px',
        transitionDuration: '0.3s',

        '&:onclick $themeOptionWrapper2': {
            opacity: 1
        },
    },


    themeOptionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    themeOptionWrapper2: {
        transitionDuration: '0.3s',
        opacity: 0,
        display: 'flex',
        height: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        height: '0px'
    },

    starBox: {
        color: 'var(--mainText)',
        cursor: "pointer",
        '&:hover': {
            color: '#edba11'
        }
    },

    themedot: {
        transitionDuration: '0.4s',
        height: '30px',
        width: '30px',
        background: 'black',
        borderRadius: '50%',
        border: '2px solid var(--themeDotBorder)',
        margin: '5px',
        boxShadow: '-1px 1px 3px -1px rgba(0, 0, 0, 0.75)',
        cursor: 'pointer',
        "&:hover": {
            borderWidth: '5px',
        },
    },

    themeExpand: {
        color: 'var(--mainText)',
        margin: '5px 10px',
        cursor: 'pointer'
    },

    lightMode: {
        background: '#fff',
    },

    blueMode: {
        background: '#192734',
    },

    greenMode: {
        background: '#123524',
    },

    purpleMode: {
        background: '#7E4C74',
    },
    brownMode: {
        background: '#422419',
    },
    cyanMode: {
        background: '#003333',
    },
    limeMode: {
        background: 'radial-gradient(#74EBD5 0%, #9FACE6 100%)',
    },
    tealMode: {
        background: 'radial-gradient( #30D2BE 0%, #3584A7 51%, #3b3f80 100%)',
    },

    blackMode: {
        background: '#010302',
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
        background: 'var(--previewShadow)',
        width: '300px',
        height: '155px',
        paddingLeft: '30px',
        paddingTop: '30px',
    },

    preview: {
        transitionDuration: '0.4s',
        width: '300px',
        border: '1.5px solid #17a2b8',
        background: 'var(--previewBg)',
        padding: '15px',
        position: 'relative',
    },

    corner: {
        height: '7px',
        width: '7px',
        border: '1.5px solid #17a2b8',
        background: '#fff',
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
        padding: '10px 5px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: 'var(--previewShadow)',
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
        background: 'var(--mainColor)',
        marginBottom: '50px',
        color: 'var(--mainText)'
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
        background: 'var(--secondaryColor)',
        borderRadius: '5px',
        border: '1px solid var(--borderColor)',
        fontSize: '14px',
        color: 'var(--mainText)'
    },

    submitBtn: {
        transitionDuration: '0.4s',
        marginTop: '10px',
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        color: '#fff',
        background: 'var(--buttonColor)',
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
        },
        optionBox: {
            zIndex: '100',
            padding: '15px 15px',
            background: 'rgba(0, 0, 0, 1)',
            position: 'fixed',
            top: 15,
            right: 0,
            display: 'flex',
            borderRadius: '15px 0px 0px 15px'
        },
        optionButton: {
            transitionDuration: '0.4s',
            margin: '0px 5px',
            fontSize: '30px',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                color: 'cyan',
            }
        },
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
        userName: {
            fontSize: '44px',
        },

        optionBox: {
            padding: '10px 10px',
            top: 10,
            right: 0,
        },
        optionButton: {
            margin: '0px 3px',
            fontSize: '24px',
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                color: 'cyan',
            }
        },

    }
});

export { styles };