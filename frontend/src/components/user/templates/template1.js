import React, { Component, Fragment, useState, useEffect } from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CloseIcon from '@material-ui/icons/Close';

import { styles } from './utils/styles';
import ThemeChanger from './utils/themeChanger';
import ProjectCard from './utils/projectCard';
import SocialLinks from './utils/socialLink';

const Template1 = () => {
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

    const classes = styles();
    return (
        <ThemeChanger theme={theme}>
            <div className={classes.optionBox}>
                <SaveOutlinedIcon className={classes.optionButton} />
                <CloseIcon className={classes.optionButton} />
            </div>
            <section className={classes.s1}>
                <div className={classes.maincontainer}>
                    <div className={classes.greetingwrapper}>
                        <h1 className={classes.mainText} style={{ fontSize: '56px' }} contentEditable suppressContentEditableWarning>Hi, I'm Bibek Mishra</h1>
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

                        </div>

                        <div className={classes.rightColumn}>
                            <div className={classes.previewShadow}>
                                <div className={classes.preview}>
                                    <div className={`${classes.corner} ${classes.tl}`}></div>
                                    <div className={`${classes.corner} ${classes.tr}`}></div>
                                    <h3 className={classes.mainText}>What do i do</h3>
                                    <p className={`${classes.secondaryText}`} style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '25px' }} contentEditable suppressContentEditableWarning>
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
                            <p className={`${classes.secondaryText}`} contentEditable suppressContentEditableWarning>
                                Short Introduction <br />
                                ######################################
                            </p>
                            <p className={`${classes.secondaryText}`} contentEditable suppressContentEditableWarning>
                                Another line of Introduction <br />
                                #########################################
                                #########################################
                            </p>

                            <hr />
                            <h4 className={classes.mainText}>TOP EXPERTISE</h4>
                            <p className={`${classes.secondaryText}`} contentEditable suppressContentEditableWarning>
                                Fullstack developer with primary focus on Django + React:
                                <a className={classes.secondaryText} target="_blank" href="#">Download Resume</a>
                            </p>

                            <div className={classes.skills} contentEditable suppressContentEditableWarning>
                                <ul className={classes.secondaryText} >
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
                            <h5 className={classes.mainText}>Find me on Social Media</h5>
                            <SocialLinks data={{ 'github': 'https://github.com', 'facebook': 'https://facebook.com', 'instagram': 'https://instagram.com' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.s1}>
                <h2 className={classes.mainText} style={{ textAlign: 'center', marginTop: '15px', }}>
                    Past work and projects
                </h2>
                <div className={classes.maincontainer2}>

                    <ProjectCard data={null} />
                    <ProjectCard data={null} />
                    <ProjectCard data={null} />
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
        </ThemeChanger>
    );
}

export default Template1;