import React, { Component, Fragment } from 'react';

import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    root: {
        '--mainColor': '#eaeaea',
        '--secondaryColor': '#fff',

        '--borderColor': '#c1c1c1',

        '--mainText': 'black',
        '--secondaryText': '#4b5156',

        '--themeDotBorder': '#24292e',

        '--previewBg': 'rgb(251, 249, 253, 0.8)',
        '--previewShadow': '#f0ead6',

        '--buttonColor': 'black',
    },
    s1: {
        backgroundColor: 'var(--mainColor)',
        borderBottom: '2px solid var(--borderColor)',
        //borderBottom: 1px solid var(--borderColor),
        overflow: 'auto',
    },
    s2: {
        backgroundColor: 'var(--secondaryColor)',
        borderBottom: '1px solid var(--borderColor)',
        overflow: 'auto',
    },

    maincontainer: {
        margin: '0 auto',
        width: '1200px',
    },

    greetingwrapper: {
        display: 'grid',
        textAlign: 'center',
        alignContent: 'center',
        minHeight: '10em',
    },

    introwrapper: {
        backgroundColor: 'var(--secondaryColor)',
        border: '1px solid var(--borderColor)',
        borderRadius: '5px 5px 0 0',
        boxShadow: '-1px 1px 3px -1px rgba(0, 0, 0, 0.75)',

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `${'"nav-area nav-area"'} ${'"left-area right-area"'}`,
    },
    navwrapper: {
        borderRadius: '5px 5px 0 0',
        gridArea: 'nav-area',
        borderBottom: '1px solid var(--borderColor)',
        display: 'flex',
        flexDirection: 'row',
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
        paddingTop: '50px',
        paddingBottom: '50px',
    },
    previewShadow: {
        backgroundColor: 'var(--previewShadow)',
        width: '300px',
        height: '155px',
        paddingLeft: '30px',
        paddingTop: '30px',
    },

    preview: {
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
        top: -'5px',
        right: -'5px',
    },

    bl: {
        bottom: -'5px',
        left: -'5px',
    },

    br: {
        bottom: -'5px',
        right: -'5px',
    },
    aboutWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))',
        paddingTop: '50px',
        paddingBottom: '50px',
        gap: '50px',
    },

    skills: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'var(--previewShadow)',
    },

    socialLinks: {
        display: 'grid',
        alignContent: 'center',
        textAlign: 'center',
    },
    socialImage: {
        width: '100%',
    },

    contactForm: {
        display: 'block',
        maxWidth: '600px',
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
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'var(--secondaryColor)',
        borderRadius: '5px',
        border: '1px solid var(--borderColor)',
        fontSize: '14px',
    },

    submitBtn: {
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

const Template1 = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <section className={classes.s1}>
                <div className={classes.maincontainer}>
                    <div className={classes.greetingwrapper}>
                        <h1>Hi, I'm Bibek Mishra</h1>
                    </div>

                    <div className={classes.introwrapper}>
                        <div className={classes.navwrapper}>
                            <ul className={classes.navigation}>
                                <li className={classes.navLi}>
                                    <a className={classes.navLink} href="#">Contact</a>
                                </li>
                            </ul>
                            <div className={classes.dotswrapper}>
                                <div className={`${classes.browserdot} ${classes.dot1}`}></div>
                                <div className={`${classes.browserdot} ${classes.dot2}`}></div>
                                <div className={`${classes.browserdot} ${classes.dot3}`}></div>
                            </div>
                        </div>

                        <div className={classes.leftcolumn}>
                            <img className={classes.profilepic} src={'/static/frontend/landing/des-2.png'} alt="Profile_pic" />
                            <h5 style={{ textAlign: 'center' }}>
                                Personalize Theme
                            </h5>
                            <div className={classes.themeOptionWrapper}>
                                <div data-mode="light" className={`${classes.themedot} ${classes.lightMode}`}></div>
                                <div data-mode="blue" className={`${classes.themedot} ${classes.blueMode}`}></div>
                                <div data-mode="green" className={`${classes.themedot} ${classes.greenMode}`}></div>
                                <div data-mode="purple" className={`${classes.themedot} ${classes.purpleMode}`}></div>
                                <div data-mode="black" className={`${classes.themedot} ${classes.blackMode}`}></div>
                            </div>

                            <p className={classes.settingsNote}>
                                Theme settings will be saved for next visit
                            </p>
                        </div>

                        <div className={classes.rightColumn}>
                            <div className={classes.previewShadow}>
                                <div className={classes.preview}>
                                    <div className={`${classes.corner} ${classes.tl}`}></div>
                                    <div className={`${classes.corner} ${classes.tr}`}></div>
                                    <h3>What do i do</h3>
                                    <p>
                                        I am a student based in Nepal and I enjoy programming.
                                    </p>
                                    <div className={`${classes.corner} ${classes.bl}`}></div>
                                    <div className={`${classes.corner} ${classes.br}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.s2}>
                <div className={classes.maincontainer}>
                    <div className={classes.aboutWrapper}>
                        <div className={"about-me"}>
                            <h4>More about me</h4>
                            <p>
                                Short ######################################
                                ##################### Introduction
                            </p>
                            <p>
                                Another line ###############################
                                ######################################### of
                                ############ introduction
                            </p>

                            <hr />
                            <h4>TOP EXPERTISE</h4>
                            <p>
                                Fullstack developer with primary focus on Django + React:
                                <a target="_blank" href="#">Download Resume</a>
                            </p>

                            <div className={classes.skills}>
                                <ul>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Postgres</li>
                                </ul>

                                <ul>
                                    <li>Google Maps API</li>
                                    <li>JS Charts</li>
                                    <li>AWS (RDS/S3)</li>
                                    <li>Heroku</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                        </div>

                        <div className={classes.socialLinks}>
                            <img className={classes.socialImage} src="images/Youtube.PNG" alt="twitter-ss" />

                            <h3>Find me on Twitter and Instagram</h3>

                            <a target="_blank" href="#">Instagram: @BibekM</a>
                            <br />
                            <a target="_blank" href="#">Twitter: @Bibek222</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.s1}>
                <div className={classes.maincontainer}>
                    <h2>
                        Past work and projects
                        Description
                        Picture
                    </h2>

                </div>
            </section>

            <section className={classes.s2}>
                <div className={classes.maincontainer}>
                    <a href=""></a>
                    <h3 style={{ textAlign: 'center' }}>Get In Touch</h3>

                    <form className={classes.contactForm}>
                        <a name="contact"></a>
                        <label className={classes.contactFormLabel}>Name</label>
                        <input className={classes.inputField} type="text" name="name" />
                        <label className={classes.contactFormLabel}>Subject</label>
                        <input className={classes.inputField} type="text" name="subject" />
                        <label className={classes.contactFormLabel}>Email</label>
                        <input className={classes.inputField} type="text" name="email" />
                        <label className={classes.contactFormLabel}>Message</label>
                        <textarea className={classes.inputField} name="message"></textarea>

                        <input className={classes.submitBtn} type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Template1;