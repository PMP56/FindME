import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { RegisterUser } from '../../utils/auth';

const Register = () => {
    const [samePassword, setSamePassword] = useState(true);
    const [cred, setCred] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const formSubmit = e => {
        e.preventDefault();
        if (cred.password == cred.password2) {
            RegisterUser({ username: cred.username, email: cred.email, password: cred.password });
        } else {
            setSamePassword(false);
        }
    }

    const formChange = e => {
        const { name, value } = e.target;
        setCred((prevCred) => ({
            ...prevCred,
            [name]: value
        })
        );
    }

    return (
        <Fragment>
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
                            <div className='form-group pt-2'>
                                <label>Password 2</label>
                                <input className='border border-dark rounded form-control' required type='password' name='password2' placeholder='Password Again' onChange={formChange} value={cred.password2} />
                                {
                                    !samePassword ?
                                        <label className='mt-1 text-danger'>Two passwords doen't match</label> : <label></label>
                                }
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