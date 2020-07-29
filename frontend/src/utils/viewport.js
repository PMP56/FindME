import React, { Component } from 'react';

export default callbackFunc = (entries, observer) => {
    entries.forEach(entry => {
        var txt = "view" + entry.isIntersecting;
        if (entry.isIntersecting) {
            setDescription('viewed');
        } else {
            setDescription('');
        }
        //[...document.querySelectorAll('.description')].map((each) => { each.id = txt; });
        //document.getElementById(entry.target.id).className = txt;
    })
}