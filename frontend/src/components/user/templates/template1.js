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
        gridTemplateAreas: 'nav-area nav-area left-area right-area',
    },
    navwrapper: {
        borderRadius: '5px 5px 0 0',
        gridArea: 'nav-area',
        borderBottom: '1px solid var(--borderColor)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--mainColor)',
    },

    navigation: {
        margin: 0,
        padding: 10,
        li: {
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '5px',
        },
        a: {
            color: 'var(--mainText)',
        }
    },
    dotswrapper: {
        display: 'flex',
        padding: '10px',
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
        backgroundColor: 'black',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        margin: '5px',
        boxShadow: '-1px 1px 3px -1px rgba(0, 0, 0, 0.75)',
    },
    leftcolumn: {
        gridArea: 'left-area',
        paddingTop: '50px',
        paddingBottom: '50px',
    },

    profilepic: {
        display: 'block',
        margin: '0 auto',
        height: '200px',
        width: '200px',
        objectFit: 'cover',
        border: '2px solid var(--borderColor)',
    },

    themeOptionWrapper: {
        display: 'flex',
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
                                <li>
                                    <a href="index.html#contact">Contact</a>
                                </li>
                            </ul>
                            <a href="index.html">
                                <div className={classes.dotswrapper}>
                                    <div id={classes.dot1} className={classes.browserdot}></div>
                                    <div id={classes.dot2} className={classes.browserdot}></div>
                                    <div id={classes.dot3} className={classes.browserdot}></div>
                                </div>
                            </a>
                        </div>

                        <div className={classes.leftcolumn}>
                            <img id={classes.profilepic} src="images/bibek.jpg" alt="Profile_pic" />
                            <h5>
                                Personalize Theme
                            </h5>

                            <div id={classes.themeOptionWrapper}>
                                <div data-mode="light" id="light-mode" className={classes.themedot}></div>
                                <div data-mode="blue" id="blue-mode" className={classes.themedot}></div>
                                <div data-mode="green" id="green-mode" className={classes.themedot}></div>
                                <div data-mode="purple" id="purple-mode" className={classes.themedot}></div>
                                <div data-mode="black" id="black-mode" className={classes.themedot}></div>
                            </div>

                            <p id="settings-note">
                                Theme settings will be saved for next visit
                            </p>
                        </div>

                        <div className={"right-column"}>
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className={"corner"}></div>
                                    <div id="corner-tr" className={"corner"}></div>
                                    <h3>What do i do</h3>
                                    <p>
                                        I am a student based in Nepal and I enjoy programming.
                                    </p>
                                    <div id="corner-bl" className={"corner"}></div>
                                    <div id="corner-br" className={"corner"}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.s2}>
                <div className={"main-container"}>
                    <div className={"about-wrapper"}>
                        <div className={"about-me"}>
                            <h4>More about me</h4>
                            <p>
                                Short ######################################
                                ##################### Introduction
                            </p>
                            <p>
                                Another line ###############################
                                ######################################### of
                                ############introductio
                            </p>

                            <hr />
                            <h4>TOP EXPERTISE</h4>
                            <p>
                                Fullstack developer with primary focus on Django+ React:
                                <a target="_blank" href="#">Download Resume</a>
                            </p>

                            <div id="skills">
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

                        <div className={"social-links"}>
                            <img id="social-image" src="images/Youtube.PNG" alt="twitter-ss" />

                            <h3>Find me on Twitter and Instagram</h3>

                            <a target="_blank" href="#">Instagram: @BibekM</a>
                            <br />
                            <a target="_blank" href="#">Twitter: @Bibek222</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"s1"}>
                <div className={"main-container"}>
                    <h2>
                        Past work and projects
                        Description
                        Picture
                    </h2>

                </div>
            </section>

            <section className={"s2"}>
                <div className={"main-container"}>
                    <a href=""></a>
                    <h3>Get In Touch</h3>

                    <form id="contact-form">
                        <a name="contact"></a>
                        <label>Name</label>
                        <input className={"input-field"} type="text" name="name" />
                        <label>Subject</label>
                        <input className={"input-field"} type="text" name="subject" />
                        <label>Email</label>
                        <input className={"input-field"} type="text" name="email" />
                        <label>Message</label>
                        <textarea className={"input-field"} name="message"></textarea>

                        <input id="submit-btn" type="submit" value="send" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Template1;