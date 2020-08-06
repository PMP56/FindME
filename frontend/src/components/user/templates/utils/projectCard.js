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
        maxWidth: 275,
        margin: '20px 20px',
    },
    media: {
        height: 140,
    },
});

const ProjectCard = (props) => {
    const [details, setDetails] = useState((props.data != null) ? props : {
        image: '/static/frontend/landing/des-3.png',
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
                    <Typography gutterBottom variant="h5" component="h2">
                        {details.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {details.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={details.link} target='_blank'>Link</a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;