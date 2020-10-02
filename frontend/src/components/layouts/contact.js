import React, { Component, Fragment } from 'react';

const Contact = () => {
    return (
        <div className="contact" style={{ color: 'white', textAlign: "center", width: "auto", height: '100vh', paddingTop: '12%', background: 'url("https://wallpapercave.com/wp/wp4863801.jpg")' }}>
            <div className="infobox mb-5">
                <h4 style={{ color: 'white', fontSize: '26px', textShadow: "0 0 3px #FF0000" }} className="name">Aditi Baral</h4>
                <h6 style={{ color: 'white', textTransform: 'none' }} className="email">(aditibaral0819@gmail.com)</h6>
            </div>
            <div className="infobox mb-5">
                <h4 style={{ color: 'white', fontSize: '26px', textShadow: "0 0 3px #FF0000" }} className="name">Salina Koirala</h4>
                <h6 style={{ color: 'white', textTransform: 'none' }} className="email">(saleena.koirala1@gmail.com)</h6>
            </div>
            <div className="infobox mb-5">
                <h4 style={{ color: 'white', fontSize: '26px', textShadow: "0 0 3px #FF0000" }} className="name">Bibek Mishra</h4>
                <h6 style={{ color: 'white', textTransform: 'none' }} className="email">(bibekmishra@gmail.com)</h6>
            </div>
            <div className="infobox mb-5">
                <h4 style={{ color: 'white', fontSize: '26px', textShadow: "0 0 3px #FF0000" }} className="name">Prasanna Mani Paudel</h4>
                <h6 style={{ color: 'white', textTransform: 'none' }} className="email">(prashannapaudel2@gmail.com)</h6>
            </div>
            <div className="infobox mb-5">
                <h4 style={{ color: 'white', fontSize: '26px', textShadow: "0 0 3px #FF0000" }} className="name">Gautam Buddha Shakya</h4>
                <h6 style={{ color: 'white', textTransform: 'none' }} className="email">(shakyagautam123@gmail.com)</h6>
            </div>
        </div >
    );
}

export default Contact;