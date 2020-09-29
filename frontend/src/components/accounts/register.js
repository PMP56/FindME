import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

import { RegisterUser } from '../../utils/auth';

const Register = () => {
    const [cred, setCred] = useState({
        username: '',
        email: '',
        password: '',
        is_employee: true,
        is_employer: false
    });

    const styles = makeStyles({
        toggle: {
            background: 'white',
            position: 'absolute',
            right: '40px',
            top: '100px',
            display: 'flex',
            padding: '10px 0px',
            color: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            width: '240px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        switch: {
            position: 'absolute',
            transitionDuration: '0.3s',
            left: (cred.is_employee) ? 5 : 115,
            zIndex: 1,
            width: '120px',
            height: '40px',
            backgroundColor: 'rgb(50, 50, 50)',
            cursor: 'pointer',
            borderRadius: '5px'
        }
    });

    const classes = styles();


    const formSubmit = e => {
        e.preventDefault();
        RegisterUser({ username: cred.username, email: cred.email, password: cred.password, is_employee: cred.is_employee, is_employer: cred.is_employer });
    }

    const formChange = e => {
        const { name, value } = e.target;
        setCred((prevCred) => ({
            ...prevCred,
            [name]: value
        })
        );
    }

    const switchChange = e => {
        setCred({ ...cred, is_employee: cred.is_employer, is_employer: cred.is_employee, });
    }

    return (
        <Fragment>
            <div className={classes.toggle} onClick={switchChange}>
                <h6 style={{ color: (cred.is_employee) ? 'white' : 'black', marginRight: 15, marginTop: 10, zIndex: 10 }}>Employee</h6>
                <div className={classes.switch} onClick={switchChange}></div>
                <h6 style={{ color: (cred.is_employer) ? 'white' : 'black', marginTop: 10, zIndex: 10 }}>Employer</h6>
            </div>
            <div className='pt-5 vh-100' style={{ backgroundColor: 'rgb(10, 10, 10)' }}>
                <div className='col-md-4 m-auto' style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
                    <div className='card card-body mt-5 text-white' style={{ backgroundColor: 'rgb(30, 30, 30)' }}>
                        <h2 className='text-center text-white'>Register</h2><br />
                        <form onSubmit={formSubmit}>
                            <div className='form-group pt-2'>
                                <label>Username</label>
                                <input className='border border-dark rounded form-control' required name='username' placeholder='Username' onChange={formChange} value={cred.username} />
                            </div>
                            <div className='form-group pt-2'>
                                <label>Email</label>
                                <input className='border border-dark rounded form-control' required name='email' placeholder='Email' onChange={formChange} value={cred.email} />
                            </div>
                            <div className='form-group pt-2'>
                                <label>Password</label>
                                <input className='border border-dark rounded form-control' required type='password' name='password' placeholder='Password' onChange={formChange} value={cred.password} />
                            </div>
                            <div className='form-group pt-1 text-center'>
                                <button type='submit' className='border border-white rounded btn btn-primary px-5 py-2'>Submit</button>
                            </div><br />
                            <p className='text-center pr-3 text-muted'>Already Have an Account?  <Link className='text-white fw-800' to='/login'>Login</Link> </p>

                        </form>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Register;