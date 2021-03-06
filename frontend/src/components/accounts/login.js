import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginUser } from '../../utils/auth';

const Login = () => {
    const [cred, setCred] = useState({
        username: '',
        password: '',
    });

    const formSubmit = e => {
        e.preventDefault();
        LoginUser(cred);
        //console.log(cred);
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
                        <h2 className='text-center text-white'>Login</h2><br />
                        <form onSubmit={formSubmit}>
                            <div className='form-group pt-2'>
                                <label>Username</label>
                                <input className='border border-dark rounded form-control' required name='username' placeholder='Username' onChange={formChange} value={cred.username} />
                            </div>
                            <div className='form-group pt-2'>
                                <label>Password</label>
                                <input className='border border-dark rounded form-control' required type='password' name='password' placeholder='Password' onChange={formChange} value={cred.password} />
                            </div>
                            <div className='form-group pt-2 text-center'>
                                <button type='submit' className='border border-white rounded btn btn-primary px-5 py-2'>Submit</button>
                            </div><br />
                            <p className='text-center pr-3 text-muted'>Already Have an Account?  <Link className='text-white fw-800' to='/register'>Register</Link> </p>

                        </form>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Login;