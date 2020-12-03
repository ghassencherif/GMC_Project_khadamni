import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                    <h1><Link to="/" className="logo" style={{ textDecoration: 'none' }}>Khadamni</Link></h1>
            </div>
            <div className="searchbar">
                <SearchBar />
            </div>
            <div className="login">
                    <Link to="/login" className="login-btn" style={{ textDecoration: 'none' }}>Login</Link>
                    <Link to="/chooseuser/signup" className="register-btn" style={{ textDecoration: 'none' }}>Register</Link>
            </div>
        </div>
    )
}

export default Header
