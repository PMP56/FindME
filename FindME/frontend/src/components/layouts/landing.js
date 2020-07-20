import React, { Component } from 'react';

const Landing = () => {
    return (
        <div className='landingBody'>
            <div className="landing-top">
                <img className='landing-image' src={"/static/frontend/portfolio5.png"} />
                <img className='landing-background' src={"/static/frontend/portfolio7.png"} />
                <p className="landing-header">Amazing Portfolios</p>
                <ul className="landing-subheader">
                    <li>Create your designer portfolio</li>
                    <li>Connect with professionals</li>
                    <li>Showcase your work</li>
                </ul>
                <button className="landing-button">Get Started</button>
            </div>
            <div className='landingMiddle'>

                <div className='description d1'>
                    <div className='des-body'>
                        <h2> Variety of templates.</h2>
                        <p>Choose your favourite portfolio design from various templates available.</p>
                    </div>
                    <img src={'/static/frontend/landing/des-3.png'} height='80%' />
                </div>
                <div className='description d2'>
                    <img src={'/static/frontend/landing/des-1.png'} height='90%' />
                    <div className='des-body'>
                        <h2> Connect with professionals.</h2>
                        <p>Meet the experts in various fields and collaborate with them in various projects.</p>
                    </div>
                </div>
                <div className='description d3'>
                    <div className='des-body'>
                        <h2> Showcase your work</h2>
                        <p>Share your projects with the world, discuss about it and maintain your work documents.</p>
                    </div>
                    <img src={'/static/frontend/landing/des-2.png'} height='90%' />
                </div>
            </div>
        </div>
    );
}

export default Landing;