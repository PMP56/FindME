import React, { Component, useContext, useState, useEffect, Fragment } from 'react';
import './styles/dashboard.css';

import { getAllWorkfields, addJob } from '../../../utils/database';

import { AuthContext } from '../../../utils/userContext';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from '@material-ui/core/MenuItem';

const DashBoard = (props) => {
    const { currentUser } = useContext(AuthContext);
    const [currentField, setCurrentField] = useState((loaded) ? workFields[0] : "");
    const [currentFieldId, setCurrentFieldId] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const [workFields, setWorkFields] = useState([])
    const [jobDescription, setJobDescription] = useState({
        posted_by: currentUser.id,
        // title: "",
        // description: "",
        // salary_low: 0,
        // salary_high: 0,
        // experience: 2,
        // expire_date: "",
        // job_field: 0, 
    })

    const fetchData = async () => {
        await getAllWorkfields().then(result => {
            if (result != null) {
                setLoaded(true);
                setWorkFields(result.data);
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        setCurrentField(event.target.value);
        setCurrentFieldId(event.target.id);
        setJobDescription((prevDes) => ({
            ...prevDes,
            ["job_field"]: parseInt(event.target.value)
        }))
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (name == "salary_low" || name == "salary_high" || name == "experience") {
            setJobDescription((prevDes) => ({
                ...prevDes,
                [name]: parseInt(value)
            }))
        } else {
            setJobDescription((prevDes) => ({
                ...prevDes,
                [name]: value
            }))
        }
    }


    const handleClose = () => {
        setOpen(false);
    };

    const jobPost = () => {
        if (jobDescription.title && jobDescription.description && jobDescription.salary_low && jobDescription.salary_high && jobDescription.experience && jobDescription.expire_date) {
            console.log(jobDescription);
            addJob(jobDescription);
            handleClose();
        }
    }

    return (
        <div className="dashboard-body">
            <div className="dash-top">
                <div>
                    <h1 style={{ color: "white" }}>DashBoard</h1>
                    <h5 className="dash-subheader" style={{ color: "white" }}>See how your profile did</h5>
                </div>
                {(currentUser.is_employer) ?
                    <button className="job-post" onClick={() => { setOpen(true) }}>Post a job</button>
                    : <Fragment />
                }
            </div>
            <div className="card-container">
                <div className="dash-card card-1">
                    <img className="graph" src="https://user-images.githubusercontent.com/2003804/28792313-152e0acc-7627-11e7-895b-8bfb9b818bce.png" />
                </div>
                <div className="dash-card card-2">
                    <h3 className="card-legend">Rating</h3>
                    <div style={{ display: "flex", justifyContent: 'center', margin: '20px 0px 10px 0px' }}>
                        <StarIcon style={{ color: (props.data.rating >= 1) ? "#edba11" : "white", fontSize: '32px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 2) ? "#edba11" : "white", fontSize: '32px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 3) ? "#edba11" : "white", fontSize: '32px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 4) ? "#edba11" : "white", fontSize: '32px' }} />
                        <StarIcon style={{ color: (props.data.rating >= 5) ? "#edba11" : "white", fontSize: '32px' }} />
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
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a Job</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hire people for any sort of task to be completed.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        name="title"
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        required
                        onChange={handleFormChange}
                    />
                    <TextField
                        name="description"
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        required
                        multiline={true}
                        onChange={handleFormChange}
                    />
                    <div className="salary-box">
                        <h5 style={{ fontSize: "14px", color: 'grey', letterSpacing: '0.5px', textTransform: "none" }}>Salary Range: </h5>
                        <input className="salary-text-box" type="number" id="quantity" name="salary_low" required onChange={handleFormChange}></input>
                        <h6 style={{ fontSize: "15px", color: 'grey', textTransform: "none" }}> - </h6>
                        <input className="salary-text-box" type="number" id="quantity" name="salary_high" required onChange={handleFormChange}></input>

                    </div>
                    <div className="experience-box">
                        <h5 style={{ fontSize: "14px", color: 'grey', letterSpacing: '0.5px', textTransform: "none" }}>Experience: </h5>
                        <input className="salary-text-box" type="number" id="quantity" name="experience" required onChange={handleFormChange}></input>
                        <h6 style={{ fontSize: "15px", color: 'grey', textTransform: "none" }}> years </h6>
                    </div>
                    <TextField
                        name="expire_date"
                        margin="dense"
                        id="name"
                        label="Expire Date (YYYY-MM-DD)"
                        type="text"
                        fullWidth
                        required
                        multiline={true}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        select
                        label="Job Field"
                        value={currentField}
                        required
                        onChange={handleChange}
                        helperText="Please select the field of job"
                    >
                        {workFields.map((option, index) => (
                            <MenuItem key={index} value={option.id}>
                                {option.work_field}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                        </Button>
                    <Button onClick={jobPost} color="primary">
                        Post
                        </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DashBoard;