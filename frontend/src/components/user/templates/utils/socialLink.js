import React, { Component, Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ClearIcon from '@material-ui/icons/Clear';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = makeStyles({
    addButton: {
        cursor: 'pointer',
        alignSelf: 'center',
        marginTop: '10px',
        padding: '10px 20px',
        maxWidth: 'fit-content',
        transitionDuration: '0.3s',
        backgroundColor: 'var(--mainColor)',
        "&:hover": {
            backgroundColor: 'var(--previewShadow)',
        }
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '70px',
        width: '100%',
        marginBottom: '15px',
    },
    iconBox: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        boxShadow: '0 0 5px 2px #aaaaaa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        cursor: 'pointer',
        transitionDuration: '0.2s',

        "&:hover": {
            width: '60px',
            height: '60px',
            boxShadow: '0 0 5px 4px #aaaaaa',
            margin: '0px 0px',
            zIndex: '10',
        }
    },
    tileContainer: {
        margin: '5px 5px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        borderRadius: '5px',
        backgroundColor: '#ededed',
        boxShadow: '0 0 5px 3px #aaaaaa',
    },
    tileBox: {
        paddingLeft: '10px',
        width: '100%',
        borderWidth: '0px',
        backgroundColor: '#fafafa',
    },
});
const SocialLink = (props) => {
    const classes = styles();
    const [tempData, setTempData] = useState(props.data);
    const [open, setOpen] = useState(false);

    const IconButtons = () => {
        return (
            <div className={classes.iconContainer}>
                <div className={classes.iconBox}>
                    <FacebookIcon style={{ fontSize: '32px' }} />
                </div>
                <div className={classes.iconBox}>
                    <InstagramIcon style={{ fontSize: '32px' }} />
                </div>
                <div className={classes.iconBox}>
                    <GitHubIcon style={{ fontSize: '32px' }} />
                </div>
                <div className={classes.iconBox}>
                    <TwitterIcon style={{ fontSize: '32px' }} />
                </div>
                <div className={classes.iconBox}>
                    <RedditIcon style={{ fontSize: '32px' }} />
                </div>
            </div>
        );
    }

    const Tile = (props) => {
        const key = props.icon;
        const val = props.val;
        return (
            <div className={classes.tileContainer}>
                {(key == 'github') ? <GitHubIcon style={{ margin: '5px 10px' }} /> :
                    (key == 'twitter') ? <TwitterIcon color='primary' style={{ margin: '5px 10px' }} /> :
                        (key == 'facebook') ? <FacebookIcon color='primary' style={{ margin: '5px 10px' }} /> :
                            (key == 'instagram') ? <InstagramIcon style={{ color: '#E1306C', margin: '5px 10px' }} /> :
                                (key == 'reddit') ? <RedditIcon color='secondary' style={{ margin: '5px 10px' }} /> :
                                    <Fragment />
                }
                <input className={classes.tileBox} type='text' placeholder='Address' value={val} onChange={() => { }}></input>
                <ClearIcon style={{ margin: '5px 5px', cursor: 'pointer' }} onClick={() => deleteLink([key, val])} />
            </div>
        );
    }

    const NoLinks = () => {
        return (
            <div>
                <h4>Add social links</h4>
            </div>
        );
    }

    const Links = (props) => {
        const edit = props.edit
        const key = props.icon;
        const val = props.val;
        return (
            <div style={{ margin: '8px 0px' }}>
                {(key == 'github') ? <GitHubIcon /> :
                    (key == 'twitter') ? <TwitterIcon color='primary' /> :
                        (key == 'facebook') ? <FacebookIcon color='primary' /> :
                            (key == 'instagram') ? <InstagramIcon style={{ color: '#E1306C' }} /> :
                                (key == 'reddit') ? <RedditIcon color='secondary' /> :
                                    <Fragment />
                }
                <a style={{ margin: '0px 20px', color: 'var(--secondaryText)', fontSize: '14px' }} target="_blank" href={val}>{key.toUpperCase()}</a>
            </div>
        );
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const deleteLink = (arr) => {
        console.log(arr);
        // const index = tempData.findIndex(arr);
        // console.log(index);
        // if (index > -1) {
        //     setTempData(tempData.splice(index, 1));
        // }
        // console.log(tempData);
    }

    return (
        <Fragment>
            {(props.data == null) ?
                <NoLinks />
                :
                (props.data).map((link) => <Links key={link[0]} icon={link[0]} val={link[1]} />)
            }
            <div className='d-flex justify-content-center'>
                <div className={classes.addButton} onClick={handleClickOpen} >
                    <AddBoxIcon className='d-inline' style={{ color: 'var(--secondaryText)', fontSize: '30px' }} />
                    <h6 className='ml-3 d-inline' style={{ color: 'var(--secondaryText)' }}>Add/Edit social links</h6>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Social Links</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add your social media links so that people can connect with you more often.
                    </DialogContentText>
                    <IconButtons />
                    {(tempData).map((link) => <Tile key={link[0]} icon={link[0]} val={link[1]} style={{ marginBottom: '5px' }} />)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default SocialLink;