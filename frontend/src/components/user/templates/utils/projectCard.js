import React, { Component, Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    }
});

const ProjectCard = (props) => {
    const [details, setDetails] = useState((props.data != null) ? props : {
        image: '/static/frontend/landing/des-2.png',
        title: 'Project Title',
        description: 'Project Description here. Make it short to look beautiful.',
        link: 'Project Link',
    });

    const classes = styles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={details.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.mainText} name='projects' contentEditable suppressContentEditableWarning>
                        {details.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.secondaryText} name='projects' contentEditable suppressContentEditableWarning>
                        {details.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" className={classes.button}>
                    <a href={details.link} className={classes.secondaryText} target='_blank'>Link</a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;