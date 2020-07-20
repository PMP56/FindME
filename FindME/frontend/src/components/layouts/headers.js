import React, { Component } from 'react';
import { Link, NavLink } from "react-dom";

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
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ml-auto">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item ml-auto">
                        <a className="nav-link" href="#">LogIN</a>
                    </li>
                    <li className="nav-item ml-auto">
                        <a className="nav-link" href="#">SignUp</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;