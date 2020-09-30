import React, { Component } from 'react';
import './styles/dashboard.css';

import StarIcon from '@material-ui/icons/Star';

const DashBoard = (props) => {
    return (
        <div className="dashboard-body">
            <div className="dash-top">
                <h1 style={{ color: "white" }}>DashBoard</h1>
                <h5 style={{ color: "white" }}>See how many people have reached upto you</h5>
            </div>
            <div className="card-container">
                <div className="dash-card card-1">
                    <img className="graph" src="https://user-images.githubusercontent.com/2003804/28792313-152e0acc-7627-11e7-895b-8bfb9b818bce.png" />
                </div>
                <div className="dash-card card-2">
                    <h3 className="card-legend">Rating</h3>
                    <div style={{ display: "flex", justifyContent: 'center', margin: '20px 0px 10px 0px' }}>
                        <StarIcon style={{ color: (props.data.rating >= 1) ? "#edba11" : "white", fontSize: '36px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 2) ? "#edba11" : "white", fontSize: '36px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 3) ? "#edba11" : "white", fontSize: '36px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 4) ? "#edba11" : "white", fontSize: '36px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 5) ? "#edba11" : "white", fontSize: '36px' }} />
                    </div>
                    {(props.data.rating == 5) ?
                        <h5 style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>Excellent</h5> :
                        (props.data.rating == 4) ?
                            <h5 style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>Awesome</h5> :
                            (props.data.rating == 3) ?
                                <h5 style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>Good</h5> :
                                (props.data.rating == 2) ?
                                    <h5 style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>NotWell</h5> :
                                    (props.data.rating == 1) ?
                                        <h5 style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>Bad</h5> :
                                        <h5 style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: '20px' }}>NoRating</h5>
                    }
                    <div style={{ margin: '30px', zIndex: 10 }}>
                        <h5 style={{ color: 'white', fontSize: '16px', textTransform: 'capitalize' }}>{`Average Rating: \t  ${props.data.rating}`}</h5>
                        <h5 style={{ color: 'white', fontSize: '16px', textTransform: 'capitalize' }}>{`Total Ratings:  ${props.data.totalRating}`}</h5>
                        <h5 style={{ color: 'white', fontSize: '16px', textTransform: 'capitalize' }}>{`Rating per visit:  ${(props.data.totalRating / props.data.visit * 100).toFixed(2)}%`}</h5>
                    </div>
                    <img className="rating-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hand_Gesture_-_Raising_a_Trophy_Vector.svg/1280px-Hand_Gesture_-_Raising_a_Trophy_Vector.svg.png"></img>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;