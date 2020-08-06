import React, { Component, Fragment, useState, useEffect } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core';



const Template1 = () => {
    let currentTheme = localStorage.getItem("theme");
    //console.log(currentTheme);

    if (currentTheme == null) {
        () => changeTheme('white');
    } else {
        () => changeTheme(currentTheme);
    }

    const [theme, setTheme] = useState({
        mainColor: '#eaeaea',
        secondaryColor: "#fff",
        borderColor: "#c1c1c1",
        mainText: "black",
        secondaryText: "#4b5156",
        themeDotBorder: "#24292e",
        previewBg: "rgb(251, 249, 253, 0.8)",
        previewShadow: '#f0ead6',
        buttonColor: "black",
    });

    const changeTheme = (mode) => {
        console.log(mode);
        if (mode == 'white') {
            setTheme({
                mainColor: '#eaeaea',
                secondaryColor: "#fff",
                borderColor: "#c1c1c1",
                mainText: "black",
                secondaryText: "#4b5156",
                themeDotBorder: "#24292e",
                previewBg: "rgb(251, 249, 253, 0.8)",
                previewShadow: '#f0ead6',
                buttonColor: "black",
            });
        }
        else if (mode == 'blue') {
            setTheme({
                mainColor: '#15202B',
                secondaryColor: "#192734",
                borderColor: "#164D56",
                mainText: "#fff",
                secondaryText: "#eeeeee",
                themeDotBorder: "#FFF",
                previewBg: "rgb(25, 39, 52, 0.8)",
                previewShadow: '#111921',
                buttonColor: "#17a2b8",
            });
        }
        else if (mode == 'green') {
            setTheme({
                mainColor: '#123524',
                secondaryColor: "#004225",
                borderColor: "#161914",
                mainText: "#fff",
                secondaryText: "#eeeeee",
                themeDotBorder: "#FFF",
                previewBg: "rgb(81, 90, 72, 0.8)",
                previewShadow: '#2a2f25',
                buttonColor: "#669966",
            });
        }
        else if (mode == 'purple') {
            setTheme({
                mainColor: '#46344E',
                secondaryColor: "#382a3f",
                borderColor: "#1d1520",
                mainText: "#fff",
                secondaryText: "#eeeeee",
                themeDotBorder: "#FFF",
                previewBg: "rgb(29, 21, 32, 0.8)",
                previewShadow: '#2b202f',
                buttonColor: "#8534a3",
            });
        }
        localStorage.setItem("theme", mode);
    };

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

        greetingwrapper: {
            display: 'grid',
            textAlign: 'center',
            alignContent: 'center',
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
        socialIcon: {
            margin: '0px 20px',

        },
        socialImage: {
            width: '100%',
        },

        contactForm: {
            transitionDuration: '0.4s',
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


    const classes = styles();
    return (
        <div className={classes.root}>
            <section className={classes.s1}>
                <div className={classes.maincontainer}>
                    <div className={classes.greetingwrapper}>
                        <h1 className={classes.mainText} style={{ fontSize: '56px' }}>Hi, I'm Bibek Mishra</h1>
                    </div>

                    <div className={classes.introwrapper}>
                        <div className={classes.navwrapper}>
                            <ul className={classes.navigation}>
                                <li className={classes.navLi}>
                                    <a className={`${classes.navLink} ${classes.secondaryText}`} href="#">Contact</a>
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
                            <h5 style={{ textAlign: 'center' }} className={classes.mainText}>
                                Personalize Theme
                            </h5>
                            <div className={classes.themeOptionWrapper}>
                                <div data-mode="light" onClick={() => changeTheme('white')} className={`${classes.themedot} ${classes.lightMode}`}></div>
                                <div data-mode="blue" onClick={() => changeTheme('blue')} className={`${classes.themedot} ${classes.blueMode}`}></div>
                                <div data-mode="green" onClick={() => changeTheme('green')} className={`${classes.themedot} ${classes.greenMode}`}></div>
                                <div data-mode="purple" onClick={() => changeTheme('purple')} className={`${classes.themedot} ${classes.purpleMode}`}></div>
                            </div>

                            <p className={`${classes.settingsNote} ${classes.secondaryText}`}>
                                Theme settings will be saved for next visit
                            </p>
                        </div>

                        <div className={classes.rightColumn}>
                            <div className={classes.previewShadow}>
                                <div className={classes.preview}>
                                    <div className={`${classes.corner} ${classes.tl}`}></div>
                                    <div className={`${classes.corner} ${classes.tr}`}></div>
                                    <h3 className={classes.mainText}>What do i do</h3>
                                    <p className={`${classes.secondaryText}`} style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '25px' }}>
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
                            <h4 className={classes.mainText}>More about me</h4>
                            <p className={`${classes.secondaryText}`}>
                                Short ######################################
                                ##################### Introduction
                            </p>
                            <p className={`${classes.secondaryText}`}>
                                Another line ###############################
                                ######################################### of
                                ############ introduction
                            </p>

                            <hr />
                            <h4 className={classes.mainText}>TOP EXPERTISE</h4>
                            <p className={`${classes.secondaryText}`}>
                                Fullstack developer with primary focus on Django + React:
                                <a className={classes.secondaryText} target="_blank" href="#">Download Resume</a>
                            </p>

                            <div className={classes.skills}>
                                <ul className={classes.secondaryText}>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Postgres</li>
                                </ul>

                                <ul className={classes.secondaryText}>
                                    <li>Google Maps API</li>
                                    <li>JS Charts</li>
                                    <li>AWS (RDS/S3)</li>
                                    <li>Heroku</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                        </div>

                        <div className={classes.socialLinks}>
                            {/*<img className={classes.socialImage} src="images/Youtube.PNG" alt="twitter-ss" />*/}

                            <h5 className={classes.mainText}>Find me on Twitter and Instagram</h5>
                            <div>
                                <InstagramIcon className={classes.socialIcon} style={{ color: '#E1306C' }} />
                                <a className={classes.secondaryText} target="_blank" href="#">@BibekM</a>

                            </div><br />
                            <div>
                                <TwitterIcon className={classes.socialIcon} color='primary' />
                                <a className={classes.secondaryText} target="_blank" href="#">@Bibek222</a>

                            </div><br />
                            <div>
                                <GitHubIcon className={classes.socialIcon} />
                                <a className={classes.secondaryText} target="_blank" href="#">@BibekGit</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.s1}>
                <div className={classes.maincontainer}>
                    <h2 className={classes.mainText}>
                        Past work and projects
                        Description
                        Picture
                    </h2>

                </div>
            </section>

            <section className={classes.s2}>
                <div className={classes.maincontainer}>
                    <a className={classes.secondaryText} href=""></a>
                    <h3 style={{ textAlign: 'center' }} className={classes.mainText}>Get In Touch</h3>

                    <form className={classes.contactForm}>
                        <a name="contact"></a>
                        <label style={{ color: 'var(--secondaryText)' }} className={classes.contactFormLabel}>Name</label>
                        <input className={classes.inputField} type="text" name="name" />
                        <label style={{ color: 'var(--secondaryText)' }} className={classes.contactFormLabel}>Subject</label>
                        <input className={classes.inputField} type="text" name="subject" />
                        <label style={{ color: 'var(--secondaryText)' }} className={classes.contactFormLabel}>Email</label>
                        <input className={classes.inputField} type="text" name="email" />
                        <label style={{ color: 'var(--secondaryText)' }} className={classes.contactFormLabel}>Message</label>
                        <textarea className={classes.inputField} name="message"></textarea>

                        <input className={classes.submitBtn} type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Template1;