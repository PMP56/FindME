import React, { Component, Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = makeStyles({
    root: {
        maxWidth: 300,
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
        textAlign: 'center',
        fontFamily: 'Monospace',
        margin: '5px',
        width: '300px',
        height: '200px',
        backgroundColor: 'var(--secondaryColor)',
        transitionDuration: '0.3s',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: 'teal',
        }
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
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    uploadBox: {
        padding: '10px',
        margin: '20px 0px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: '2px dashed rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        height: '200px',
        alignItems: 'center',
        textAlign: 'center'
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
    const [details, setDetails] = useState(props.data);
    const [dialogInfo, setDialogInfo] = useState({});

    const [open, setOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);

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
        console.log('hgsdhfshg');
        setAddOpen(true);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    const Tile = (props) => {
        const data = props.data
        return (
            <div className={classes.gridTiles} onClick={() => handleClickOpen(data)} alt={data[0]}>
                <h1 style={{ color: 'var(--secondaryText)', fontSize: '36px', textAlign: 'center' }}>{data[0]}</h1>
                <img src='/static/frontend/landing/des-1.png' style={{ height: '65%' }} />
            </div>
        );
    }

    const ProjectGrid = () => {
        return (
            <div className={classes.gridContainer}>
                {(details).map((data, index) => <Tile key={index} data={data} />)}
                <div className={`${classes.gridTiles} d-flex justify-content-center`} onClick={handleAddClickOpen}>
                    <AddIcon style={{ fontSize: '100px', color: 'var(--secondaryText)', textAlign: 'center' }} />
                </div>
            </div>
        )
    }

    const Description = () => {
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}><span style={{ color: 'white', fontSize: '28px' }}>{dialogInfo.title}</span></DialogTitle>
                <DialogContent className={classes.dialog}>
                    <img className={classes.dialogImage} src='/static/frontend/landing/des-1.png' />
                    <DialogContentText style={{ color: 'white', marginTop: '30px', textAlign: 'center' }}>
                        {dialogInfo.description}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }

    const AddDescription = () => {
        return (
            <Dialog open={addOpen} onClose={handleAddClose} aria-labelledby="form-dialog-title" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}><span style={{ color: 'white', fontSize: '20px' }}>Add Project</span></DialogTitle>
                <DialogContent className={classes.dialog}>
                    <h5 style={{ color: 'white', marginLeft: '10px' }}>
                        Title:
                        </h5>
                    <input className='form-control' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} type='text' name='title' placeholder='Title' onChange={() => { }}></input>
                    <div className={classes.uploadBox}>
                        <div>
                            <AttachFileIcon style={{ color: 'grey', fontSize: '80px', textAlign: 'center', marging: '20px 10px' }} />
                            <h6 style={{ color: 'grey', marginTop: '25px' }}>Drag and drop your image here</h6>
                        </div>
                    </div>
                    <h5 style={{ color: 'white', marginLeft: '10px' }}>
                        Description:
                        </h5>
                    <textarea className='form-control' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100px' }} name='description' placeholder='Description' onChange={() => { }}></textarea>
                    <br />
                    <h5 style={{ color: 'white', marginLeft: '10px' }}>
                        Link:
                        </h5>
                    <input className='form-control' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} type='text' name='link' placeholder='Link' onChange={() => { }}></input>

                </DialogContent>
                <DialogActions style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
                    <Button onClick={handleAddClose} color="primary">
                        <h4 style={{ color: 'white', fontFamily: 'monospace', fontWeight: 'normal', letterSpacing: 0.25 }}>Cancel</h4>
                    </Button>
                    <Button color="primary">
                        <h4 style={{ color: 'white', fontFamily: 'monospace', fontWeight: 'normal', letterSpacing: 0.25 }}>Submit</h4>
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    const classes = styles();
    return (
        <Fragment>
            {/*<Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={details.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.mainText} name='projects' contentEditable={props.edit} suppressContentEditableWarning>
                            {details.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.secondaryText} name='projects' contentEditable={props.edit} suppressContentEditableWarning>
                            {details.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" className={classes.button}>
                        <a href={details.link} className={classes.secondaryText} target='_blank'>Link</a>
                    </Button>
                </CardActions>
            </Card><br />*/}
            <ProjectGrid />
            <Description />
            <AddDescription />
        </Fragment>
    );
}

export default ProjectCard;