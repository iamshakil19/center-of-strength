import React from 'react';
import './Header.css'
import logo from '../../Images/logo.png'
import CustomLink from '../CustomLink/CustomLink';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()

    const navigateToLoginPage = () => {
        navigate("/login")
    }
    return (
        <div className='header-container'>
            <div>
                <Link to="/" className='text-white font-bold text-2xl cursor-pointer website-title'>Center of Strength</Link>
            </div>
            <div className='header-menu'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About Me</CustomLink>
                <div>
                    <button onClick={() => navigateToLoginPage()} className='login-button'>Login</button>
                </div>
            </div>

        </div>
    );
};

export default Header;