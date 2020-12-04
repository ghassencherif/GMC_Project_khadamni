import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../JS/actions/actionUser';
import './header.css';
import SearchBar from './SearchBar';

function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const [searchAnnonce, setSearchAnnonce] = useState("");

    useEffect(() => {
        dispatch(getProfile());
    }, []);

        const handleInput = (e) => {
        setSearchAnnonce(e.target.value);
        };
    return (
        <div className="header">
            <div className="logo">
                    <h1><Link to="/" className="logo" style={{ textDecoration: 'none' }}>Khadamni</Link></h1>
            </div>
            <div className="searchbar">
                <SearchBar handleInput={handleInput} />
            </div>
            <div className="login">
                    <Link to="/login" className="login-btn" style={{ textDecoration: 'none' }}>{!isAuth ? "Login" : "Profile"}</Link>
                    <Link to="/chooseuser" className="register-btn"  style={{ textDecoration: 'none' }}>{!isAuth ? "Register" : "Créer Annonce"}</Link>
            </div>
        </div>
    )
}

export default Header
