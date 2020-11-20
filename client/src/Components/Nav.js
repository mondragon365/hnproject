import React from 'react';
import './styles/Navbar.css';

export default function Nav() {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <div className="Navbar__brand">
                    <h1 className="Navbar__title">HN Feed</h1>
                    <h3 className="Navbar__title">We love hacker news!</h3>
                </div>
            </div>
        </div>
    );
}