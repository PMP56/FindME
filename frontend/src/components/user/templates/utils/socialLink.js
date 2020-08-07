import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';


const SocialLink = (props) => {
    const NoLinks = () => {
        return (
            <div>
                <h4>Add social links</h4>
            </div>
        );
    }

    const Links = (props) => {
        const key = props.icon;
        const val = props.val;
        if (key == 'github') {
            return (
                <div style={{ margin: '10px 0px' }}>
                    <GitHubIcon />
                    <a style={{ margin: '0px 20px', color: 'var(--mainText)' }} target="_blank" href={val}>GitHub</a>
                </div>
            );
        }
        else if (key == 'twitter') {
            return (
                <div style={{ margin: '10px 0px' }}>
                    <TwitterIcon color='primary' />
                    <a style={{ margin: '0px 20px', color: 'var(--mainText)' }} target="_blank" href={val}>Twitter</a>
                </div>
            );
        }
        else if (key == 'facebook') {
            return (
                <div style={{ margin: '10px 0px' }}>
                    <FacebookIcon color='primary' />
                    <a style={{ margin: '0px 20px', color: 'var(--mainText)' }} target="_blank" href={val}>Facebook</a>
                </div>
            );
        }
        else if (key == 'instagram') {
            return (
                <div style={{ margin: '10px 0px' }}>
                    <InstagramIcon style={{ color: '#E1306C' }} />
                    <a style={{ margin: '0px 20px', color: 'var(--mainText)' }} target="_blank" href={val}>Instagram</a>
                </div>
            );
        }
        else if (key == 'reddit') {
            return (
                <div style={{ margin: '10px 0px' }}>
                    <RedditIcon color='secondary' />
                    <a style={{ margin: '0px 20px', color: 'var(--mainText)' }} target="_blank" href={val}>Reddit</a>
                </div>
            );
        }
    }

    return (
        (props.data == null) ?
            <NoLinks />
            :
            Object.keys(props.data).map((key, val) => <Links key={key} icon={key} val={props.data[`${key}`]} />)
        //Object.entries(props.data).forEach(([key, val]) => <NoLinks />)
    );
}

export default SocialLink;