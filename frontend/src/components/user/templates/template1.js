import React, { Component, Fragment, useState, useContext, useRef } from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CloseIcon from '@material-ui/icons/Close';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import StarIcon from '@material-ui/icons/Star';

import { uploadPicture } from '../../../utils/firebase_storage';

import { styles } from './utils/styles';
import { addData, getData, updateData, updateEmployerData, userRating, employerRating } from '../../../utils/database';
import { AuthContext } from '../../../utils/userContext';
import ThemeChanger from './utils/themeChanger';
import Projects from './utils/projectCard';
import SocialLinks from './utils/socialLink';
import { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
//import { values } from 'regenerator-runtime';

const Template1 = (props) => {
    const classes = styles();
    const hiddenFileInput = useRef(null);
    const editable = props.edit;
    const { currentUser } = useContext(AuthContext);
    const [database, setDatabase] = useState(props.data);

    const [rating, setRating] = useState(database.rating);
    const [hoverRating, setHoverRating] = useState(0);
    const [totalRating, setTotalRating] = useState(database.totalRating);
    const [rated, setRated] = useState(false);
    const [rateMessage, setrateMessage] = useState("");
    const visit = database.visit + 1;

    const [saving, setSaving] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        changeTheme(database.theme);
        if (!editable) {
            updateData(database.userName, { ...database, visit: visit });
        }
    }, [])

    const [theme, setTheme] = useState({
        mainColor: '#eaeaea',
        navColor: '#eaeaea',
        secondaryColor: "#fff",
        borderColor: "#c1c1c1",
        mainText: "black",
        secondaryText: "#4b5156",
        themeDotBorder: "#24292e",
        previewBg: "rgb(251, 249, 253, 0.8)",
        previewShadow: '#f0ead6',
        buttonColor: "black",
    });

    const publish = (database) => {
        if (currentUser.is_employee) {
            updateData(database.userName, database);
        } else {
            console.log('false')
            updateEmployerData(database.userName, database);
        }
        setSaving(true);
        setInterval(() => { setSaving(false); location.reload(); }, 2000);
    }

    const uploadProfileChange = async e => {
        console.log(e.target.files[0])
        const url = await uploadPicture(database.userName, e.target.files[0]);
        setDatabase({ ...database, profilePicture: url });
        //console.log(url);
    }

    const handleUploadClick = (e) => {
        hiddenFileInput.current.click();
    }

    const themeExpand = () => {
        if (!expanded) {
            document.querySelector('#themeBox').style.height = '60px';
            document.querySelector('#themeOption2').style.opacity = 1;
            setExpanded(true);
        } else {
            document.querySelector('#themeBox').style.height = '30px';
            document.querySelector('#themeOption2').style.opacity = 0;
            setExpanded(false);
            //Preview
        }
    }

    const update = () => {
        var tags = document.querySelectorAll('[contenteditable]');
        tags.forEach(tag => {
            let currentTag = tag.getAttribute("name");
            let currentTagVal = tag.innerText;
            if (currentTag == 'skills') {
                let skills = currentTagVal.split("\n");
                setDatabase(prevData => ({
                    ...prevData,

                    [currentTag]: skills
                }));
            } else if (currentTag == 'projects') {
                setDatabase(prevData => ({
                    ...prevData,

                    [currentTag]: [["Projects"]]
                }));
            } else if (currentTag == 'socialLinks') {
                setDatabase(prevData => ({
                    ...prevData,

                    [currentTag]: 'Socail Links'
                }));
            }
            else {
                setDatabase(prevData => ({
                    ...prevData,

                    [currentTag]: currentTagVal
                }));
                //XSS proof
                //tag.innerHTML = currentTagVal;
            }
        });
        console.log(database);
    }

    const changeRating = (rate) => {
        let newRating = Math.round(((rating * totalRating) + rate) / (totalRating + 1));
        console.log(newRating);
        if (currentUser.is_employee){
            await employerRating(database.userName, { ...database, rating: newRating, totalRating: totalRating + 1 })
            .then(
                ((result) => { 
                    setrateMessage("Thank you for rating.");
                })
            ).catch(err => {
                setrateMessage("Sorry, you can't rate this portfolio.");
                })
        }
        else {
            await userRating(database.userName, { ...database, rating: newRating, totalRating: totalRating + 1 })
            .then(
                ((result) => { 
                    setrateMessage("Thank you for rating.");
                })
            ).catch(err => {
                setrateMessage("Sorry, you can't rate this employer.");
                })
            }
        setRated(true);
    }
    const changeHoverRating = (rating) => {
        setHoverRating(rating);
    }

    const changeSocialLinks = (data) => {
        setDatabase({ ...database, socialLinks: data });
    }

    const changeProjects = (data) => {
        setDatabase({ ...database, projects: data });
    }

    const changeTheme = (mode) => {
        setDatabase({ ...database, theme: mode });

        if (mode == 'white') {
            setTheme({
                mainColor: '#eaeaea',
                navColor: '#eaeaea',
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
                navColor: '#15202B',
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
                navColor: '#123524',
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
                navColor: '#46344E',
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
        else if (mode == 'cyan') {
            setTheme({
                mainColor: 'linear-gradient(to right, #003333, #005a5a, #003333)',
                navColor: '#003333',
                secondaryColor: "#004444",
                borderColor: "#1d1520",
                mainText: "#fff",
                secondaryText: "#eeeeee",
                themeDotBorder: "#FFF",
                previewBg: "rgb(0, 13, 13, 0.8)",
                previewShadow: '#001a1a',
                buttonColor: "#006666",
            });
        }
        else if (mode == 'brown') {
            setTheme({
                mainColor: '#422419',
                navColor: '#401e11',
                secondaryColor: "#111",
                borderColor: "#2c1503",
                mainText: "#fff",
                secondaryText: "#eeeeee",
                themeDotBorder: "#FFF",
                previewBg: "rgb(23, 5, 0, 0.8)",
                previewShadow: '#170500',
                buttonColor: "#170500",
            });
        }
        else if (mode == 'lime') {
            setTheme({
                mainColor: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
                navColor: '#018068',
                secondaryColor: "radial-gradient(#74EBD5 0%, #9FACE6 100%)",
                borderColor: "#164D56",
                mainText: "#000",
                secondaryText: "#111",
                themeDotBorder: "#FFF",
                previewBg: "rgb(240,234,214, 0.8)",
                previewShadow: '#d6f0e3',
                buttonColor: "#170500",
            });
        }
        else if (mode == 'teal') {
            setTheme({
                mainColor: 'radial-gradient( #30D2BE 0%, #3584A7 51%, #3b3f80 100%)',
                navColor: '#0b121d',
                secondaryColor: "rgba(21, 35, 56, 0.9)",
                borderColor: "#164D56",
                mainText: "#fff",
                secondaryText: "#eee",
                themeDotBorder: "#FFF",
                previewBg: "rgb(16, 28, 48, 0.8)",
                previewShadow: '#0b121d',
                buttonColor: "#170500",
            });
        }
    };

    const SaveProgess = () => {
        return (

            <div className={classes.saveBox}>
                <CircularProgress color='secondary' />
                <h6 className='mt-3' style={{ color: 'white', }}>Saving</h6>
            </div>
        );
    }

    return (
        <ThemeChanger theme={theme}>
            {editable ?
                <div className={classes.optionBox}>
                    <SaveOutlinedIcon className={classes.optionButton} onClick={() => { update(); publish(database); }} />
                    <CloseIcon className={classes.optionButton} onClick={() => { location.reload(); }} />
                </div>
                :
                <Fragment />
            }
            {saving ? <SaveProgess /> : <Fragment />}
            <section className={classes.s1}>
                <div className={classes.maincontainer}>
                    <div className={classes.greetingwrapper}>
                        <h1 className={`${classes.mainText} ${classes.userName}`} name="userHeader" onBlur={update} spellCheck={false} contentEditable={editable} suppressContentEditableWarning>{database.userHeader}</h1>
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
                            <div className={classes.ppContainer}>
                                <img className={classes.profilepic} src={database.profilePicture} alt="Profile_pic" />
                                {!editable ? <Fragment /> :
                                    <Fragment>
                                        <button className={classes.uploadButton} onClick={handleUploadClick}>
                                            <AddPhotoAlternateIcon style={{ margin: '0px 5px' }} />
                                            Update
                                        </button>
                                        <input type='file' accept=".jpg, .png, .jpeg, .gif, .bmp" style={{ display: 'none' }} ref={hiddenFileInput} onChange={uploadProfileChange} />

                                    </Fragment>
                                }
                            </div>
                            {!editable ?
                                (rated) ? <Fragment>
                                    <h5 style={{ textAlign: 'center', marginTop: '10px' }} className={classes.mainText}>
                                        {rateMessage}
                                    </h5>
                                </Fragment> :
                                    <Fragment >
                                        <div className={classes.themeOptionWrapper}>
                                            <div className={classes.starBox}>
                                                <StarIcon style={{ fontSize: '36px', color: (hoverRating >= 1) ? "#edba11" : "var(--mainText)" }} onMouseOver={() => changeHoverRating(1)} onMouseOut={() => changeHoverRating(0)} onClick={() => changeRating(1)} />
                                            </div>
                                            <div className={classes.starBox}>
                                                <StarIcon style={{ fontSize: '36px', color: (hoverRating >= 2) ? "#edba11" : "var(--mainText)" }} onMouseOver={() => changeHoverRating(2)} onMouseOut={() => changeHoverRating(0)} onClick={() => changeRating(2)} />
                                            </div>
                                            <div className={classes.starBox}>
                                                <StarIcon style={{ fontSize: '36px', color: (hoverRating >= 3) ? "#edba11" : "var(--mainText)" }} onMouseOver={() => changeHoverRating(3)} onMouseOut={() => changeHoverRating(0)} onClick={() => changeRating(3)} />
                                            </div>
                                            <div className={classes.starBox}>
                                                <StarIcon style={{ fontSize: '36px', color: (hoverRating >= 4) ? "#edba11" : "var(--mainText)" }} onMouseOver={() => changeHoverRating(4)} onMouseOut={() => changeHoverRating(0)} onClick={() => changeRating(4)} />
                                            </div>
                                            <div className={classes.starBox}>
                                                <StarIcon style={{ fontSize: '36px', color: (hoverRating >= 5) ? "#edba11" : "var(--mainText)" }} onMouseOver={() => changeHoverRating(5)} onMouseOut={() => changeHoverRating(0)} onClick={() => changeRating(5)} />
                                            </div>

                                        </div>
                                        <h5 style={{ textAlign: 'center', marginTop: '10px' }} className={classes.mainText}>
                                            Rate this portfolio
                                    </h5>
                                    </Fragment>
                                :
                                <Fragment>
                                    <h5 style={{ textAlign: 'center' }} className={classes.mainText}>
                                        Personalize Theme
                                            </h5>
                                    <div id='themeBox' className={classes.themeOption}>
                                        <div className={classes.themeOptionWrapper}>
                                            <div data-mode="light" onClick={() => changeTheme('white')} className={`${classes.themedot} ${classes.lightMode}`}></div>
                                            <div data-mode="blue" onClick={() => changeTheme('blue')} className={`${classes.themedot} ${classes.blueMode}`}></div>
                                            <div data-mode="brown" onClick={() => changeTheme('brown')} className={`${classes.themedot} ${classes.brownMode}`}></div>
                                            <div data-mode="cyan" onClick={() => changeTheme('cyan')} className={`${classes.themedot} ${classes.cyanMode}`}></div>
                                            {!expanded ?
                                                <ExpandMoreIcon className={classes.themeExpand} onClick={themeExpand} />
                                                :
                                                <ExpandLessIcon className={classes.themeExpand} onClick={themeExpand} />
                                            }
                                        </div>
                                        <div id="themeOption2" className={classes.themeOptionWrapper2}>
                                            <div data-mode="green" onClick={() => changeTheme('green')} className={`${classes.themedot} ${classes.greenMode}`}></div>
                                            <div data-mode="purple" onClick={() => changeTheme('purple')} className={`${classes.themedot} ${classes.purpleMode}`}></div>
                                            <div data-mode="lime" onClick={() => changeTheme('lime')} className={`${classes.themedot} ${classes.limeMode}`}></div>
                                            <div data-mode="teal" onClick={() => changeTheme('teal')} className={`${classes.themedot} ${classes.tealMode}`}></div>
                                        </div>
                                    </div>
                                </Fragment>
                            }
                        </div>

                        <div className={classes.rightColumn}>
                            <div className={classes.previewShadow}>
                                <div className={classes.preview}>
                                    <div className={`${classes.corner} ${classes.tl}`}></div>
                                    <div className={`${classes.corner} ${classes.tr}`}></div>
                                    <h3 className={classes.mainText}>What do i do</h3>
                                    <p className={`${classes.secondaryText}`} style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '25px' }} name="shadowText" onBlur={update} contentEditable={editable} suppressContentEditableWarning>
                                        {database.shadowText}
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
                            <p className={`${classes.secondaryText}`} style={{ fontSize: '14px' }} name="firstIntro" onBlur={update} contentEditable={editable} suppressContentEditableWarning>
                                {database.firstIntro}
                            </p>
                            <p className={`${classes.secondaryText}`} name="secondIntro" onBlur={update} contentEditable={editable} suppressContentEditableWarning>
                                {database.secondIntro}
                            </p>

                            <hr />
                            <h4 className={classes.mainText}>TOP EXPERTISE</h4>
                            <p className={`${classes.secondaryText}`}>
                                These are some of my fields of expertise:
                            </p>

                            <div className={classes.skills} name='skills' onBlur={update} contentEditable={editable} suppressContentEditableWarning>
                                <div className={classes.secondaryText} >
                                    {(database.skills == null) ? <Fragment /> : database.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                                </div>
                            </div>
                        </div>

                        <div className={classes.socialLinks}>
                            <h5 className={classes.mainText}>Find me on Social Media</h5>
                            <SocialLinks data={database.socialLinks} edit={editable} changeLinks={changeSocialLinks} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.s1}>
                <br />
                <h2 className={classes.mainText} style={{ textAlign: 'center', marginTop: '15px', }}>
                    Past work and projects
                </h2>
                <div className={classes.maincontainer2}>

                    <Projects data={database.projects} user={database.userName} edit={editable} changeProjects={changeProjects} />
                </div>
            </section>

            <section className={classes.s2}>
                <div className={classes.maincontainer}>
                    <br />
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