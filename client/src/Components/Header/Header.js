import React from 'react';
import './header.css';

import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                    <h1>Khadamni</h1>
            </div>
            <div className="searchbar">
                <SearchBar />
            </div>
            <div className="login">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
            </div>
        </div>
    )
}

export default Header
