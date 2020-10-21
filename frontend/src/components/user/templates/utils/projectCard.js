import React, { Component, Fragment, useState, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CircularProgress from './circularProgress';
import { uploadProjectPicture } from '../../../../utils/firebase_storage';

const styles = makeStyles({
    root: {
        width: '400px',
        margin: '20px 20px',
        backgroundColor: 'var(--previewBg)',
    },
    media: {
        margin: 10,
        padding: 10,
        height: 240,
        border: '3px solid var(--previewShadow)'
    },
    mainText: {
        letterSpacing: '0.5px',
        transitionDuration: '0.4s',
        fontWeight: '600',
        fontFamily: 'Russo One',
        color: 'var(--mainText)',
    },
    secondaryText: {
        letterSpacing: '0.75px',
        transitionDuration: '0.4s',
        color: 'var(--secondaryText)',
    },
    button: {
        backgroundColor: 'var(--mainColor)',
        color: 'var(--mainText)',
        "&:hover": {
            backgroundColor: 'var(--secondaryColor)',
        },
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        padding: '15px',
    },
    gridTiles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        fontFamily: 'Monospace',
        margin: '5px',
        width: '300px',
        height: '200px',
        backgroundColor: 'var(--secondaryColor)',
        transitionDuration: '0.3s',
        cursor: 'pointer',
        overflow: 'hidden',
        "&:hover": {
            backgroundColor: '#004040',
        },
        "&:hover $tileButton": {
            right: '10px',
        },
        '&:hover $tileImage': {
            height: '115%',
        },
        '&:hover $tileText': {
            right: '0px',
        }
    },
    tileText: {
        backgroundColor: '#222',
        borderRadius: '5px 0px 0px 5px',
        padding: '7.5px 15px',
        color: 'white',
        fontSize: '18px',
        fontFamily: 'Monospace',
        textAlign: 'center',
        position: 'absolute',
        transitionDuration: '0.3s',
        bottom: '-10px',
        right: '-200px',
        letterSpacing: '0.5px',
    },
    tileButton: {
        fontSize: '24px',
        position: 'absolute',
        top: '10px',
        right: '-50px',
        color: 'var(--secondaryText)',
        transitionDuration: '10s',
        '&:hover': {
            fontSize: '28px'
        }
    },
    tileImage: {
        height: '100%',
        transitionDuration: '0.4s',
    },
    dialog: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    dialogTitle: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        textAlign: 'center',
        color: 'white',

    },
    dialogImage: {
        display: 'block',
        contain: 'cover',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    uploadBox: {
        padding: '10px',
        margin: '20px 40px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: '2px dashed rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        height: '200px',
        alignItems: 'center',
        textAlign: 'center'
    },

    uploadButton: {
        height: '40px',
        width: '160px',
        marginTop: '20px',
        alignSelf: 'center',
        fontSize: '14px',
        color: 'grey',
        backgroundColor: 'transparent',
        transitionDuration: '0.3s',
        border: '2px solid grey'
    },
    "@media (max-width: 900px)": {
        gridContainer: {
            gridTemplateColumns: 'auto auto',
        },
    },
    "@media (max-width: 600px)": {
        gridContainer: {
            gridTemplateColumns: 'auto',
        },
        gridTiles: {
            margin: '15px',
            width: '320px',
            height: '170px',
        },
    }
});


const ProjectCard = (props) => {
    const hiddenFileInput = useRef(null);
    const [uploadImage, setUploadImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const user = props.user;

    const [dialogInfo, setDialogInfo] = useState({});
    const [open, setOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState();
    const [newProject, setNewProject] = useState({
        title: "",
        imageLink: `/static/frontend/project${Math.floor(Math.random() * Math.floor(3))}.png`,
        description: "",
        link: ""
    });

    const handleUploadClick = (e) => {
        hiddenFileInput.current.click();
    }

    const handleClickOpen = (data) => {
        setDialogInfo({
            title: data[0],
            imagelink: data[1],
            description: data[2],
            link: data[3],
        })
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //--------------------------------
    const handleAddClickOpen = () => {
        setAddOpen(true);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    //--------------------------------
    const handleDeleteClickOpen = (index) => {
        setDeleteIndex(index);
        setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };

    //--------------------------------

    const formChange = e => {
        const { name, value } = e.target;
        setNewProject({
            ...newProject,
            [name]: value
        })
    }

    const uploadPictureChange = e => {
        //console.log(e.target.files[0])
        setUploadImage(e.target.files[0]);
        //setDatabase({ ...database, profilePicture: url });
        //console.log(url);
    }

    const submitForm = async () => {
        let project = [newProject.title, newProject.imageLink, newProject.description, newProject.link];
        if (uploadImage != null) {
            const url = await uploadProjectPicture(user, props.data.length, uploadImage);
            project = [newProject.title, url, newProject.description, newProject.link];
        } else {
            project = [newProject.title, newProject.imageLink, newProject.description, newProject.link];
        }
        if (project[0].length != 0) {
            if (props.data == null) {
                props.changeProjects([project]);
            } else {
                props.changeProjects([...props.data, project]);

            }

            handleAddClose();
            setNewProject({
                title: "",
                imageLink: `/static/frontend/project${Math.floor(Math.random() * Math.floor(3))}.png`,
                description: "",
                link: ""
            });
        }
    }

    const deleteTile = (index) => {
        props.data.splice(index, 1);
        handleDeleteClose();
    }

    const Tile = (prop) => {
        const data = prop.data;
        const index = prop.index;
        return (
            <div className={classes.gridTiles} alt={data[0]}>
                <h1 className={classes.tileText}>{data[0]}</h1>
                <img src={data[1]} className={classes.tileImage} alt={data[0]} onClick={() => handleClickOpen(data)} />
                {(!props.edit) ? <Fragment /> :
                    <DeleteIcon className={classes.tileButton} onClick={() => handleDeleteClickOpen(index)} />
                }
            </div>
        );
    }

    const ProjectGrid = () => {
        return (
            <div className={classes.gridContainer}>
                {(props.data == null) ? <Fragment /> : (props.data).map((data, index) => <Tile key={index} data={data} index={index} />)}
                {(!props.edit) ? <Fragment /> :

                    <div className={`${classes.gridTiles} d-flex justify-content-center`} onClick={handleAddClickOpen}>
                        <AddIcon className={classes.tileImage} style={{ fontSize: '100px', color: 'var(--secondaryText)', textAlign: 'center' }} />
                    </div>
                }
            </div>
        )
    }

    const Delete = () => {
        return (
            <Dialog open={deleteOpen} onClose={handleDeleteClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ textAlign: 'center' }}>
                        Are you sure you want to delete this project?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary">
                        Cancle
                    </Button>
                    <Button color="primary" type='submit' onClick={() => deleteTile(deleteIndex)}>
                        Yes, delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    const Description = () => {
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}><span style={{ color: 'white', fontSize: '28px' }}>{dialogInfo.title}</span></DialogTitle>
                <DialogContent className={classes.dialog}>
                    <img className={classes.dialogImage} src={dialogInfo.imagelink} />
                    <DialogContentText style={{ color: 'white', marginTop: '30px', textAlign: 'center' }}>
                        {dialogInfo.description}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }

    const classes = styles();
    return (
        <Fragment>
            <ProjectGrid />
            <Description />

            <Delete />
            {!uploading ? <Fragment /> : <CircularProgress style={{ position: 'fixed' }} />}
            <Dialog open={addOpen} onClose={handleAddClose} aria-labelledby="form-dialog-title" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}><span style={{ color: 'white', fontSize: '20px' }}>Add Project</span></DialogTitle>
                <DialogContent className={classes.dialog}>

                    <h5 style={{ color: 'white', marginLeft: '10px' }}>
                        Title:
                        </h5>
                    <input className='form-control' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' }} autoFocus name='title' placeholder='Title' value={newProject.title} onChange={formChange} />
                    <div className={classes.uploadBox}>
                        <div className='d-flex flex-column '>
                            <AttachFileIcon style={{ color: 'grey', fontSize: '80px', textAlign: 'center', marging: '20px 10px', alignSelf: 'center' }} />
                            <button className={classes.uploadButton} onClick={handleUploadClick}>
                                Upload image here
                            </button>
                            <input type='file' accept=".jpg, .png, .jpeg, .gif, .bmp" style={{ display: 'none' }} ref={hiddenFileInput} onChange={uploadPictureChange} />


                        </div>
                    </div>
                    <h5 style={{ color: 'white', marginLeft: '10px' }}>
                        Description:
                        </h5>
                    <textarea className='form-control' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white', height: '100px' }} name='description' placeholder='Description' value={newProject.description} onChange={formChange}></textarea>
                    <br />
                    <h5 style={{ color: 'white', marginLeft: '10px' }}>
                        Link:
                        </h5>
                    <input className='form-control' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' }} type='text' name='link' placeholder='Link' value={newProject.link} onChange={formChange}></input>

                </DialogContent>
                <DialogActions style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
                    <Button onClick={handleAddClose} color="primary">
                        <h4 style={{ color: 'white', fontFamily: 'monospace', fontWeight: 'normal', letterSpacing: 0.25 }}>Cancel</h4>
                    </Button>
                    <Button color="primary" type='submit' onClick={submitForm}>
                        <h4 style={{ color: 'white', fontFamily: 'monospace', fontWeight: 'normal', letterSpacing: 0.25 }}>Submit</h4>
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment >
    );
}

export default ProjectCard;