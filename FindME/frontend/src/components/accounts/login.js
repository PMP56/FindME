import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Fragment>
            <div className='pt-5 vh-100' style={{ backgroundColor: 'rgb(10, 10, 10)' }}>
                <div className='col-md-4 m-auto' style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
                    <div className='card card-body mt-5 text-white' style={{ backgroundColor: 'rgb(30, 30, 30)' }}>
                        <h2 className='text-center text-white'>Login</h2><br />
                        <form>
                            <div className='form-group pt-2'>
                                <label>Email</label>
                                <input className='border border-dark rounded form-control' name='email' placeholder='Email' />
                            </div><br />
                            <div className='form-group pt-2'>
                                <label>Password</label>
                                <input className='border border-dark rounded form-control' name='password' placeholder='Password' />
                            </div><br />
                            <div className='form-group pt-2 text-center'>
                                <button type='submit' className='border border-white rounded btn btn-primary px-5 py-2'>Login</button>
                            </div><br />
                            <p className='text-center pr-3 text-muted'>Don't Have an Account?  <Link className='text-white fw-800' to='/register'>Register</Link> </p>

                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Login;