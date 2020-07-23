import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">FindME</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active ml-auto">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to="/login">LogIN</Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to="/register">SignUp</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;