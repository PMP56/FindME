import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className='col-md-10 m-auto'>
            <h1> Welcome </h1>
            <h4> Get started to create your portfolio.</h4>
            <button className='m-2'><Link to='/'>Not now</Link></button>
            <button className='m-2'>Get Started</button>
        </div>
    );
}

export default GetStarted;