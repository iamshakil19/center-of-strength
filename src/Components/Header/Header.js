import React, { useState } from 'react';
import './Header.css'
import logo from '../../Images/logo.png'
import CustomLink from '../CustomLink/CustomLink';
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Header = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const navigateToLoginPage = () => {
        navigate("/login")
    }
    return (
        <div className='header-container'>
            <div className='flex items-center justify-between'>
                <div>
                    <Link to="/" className='text-white font-bold text-2xl cursor-pointer website-title'>Center of Strength</Link>
                </div>
                <div onClick={() => setOpen(!open)} className='menu-icon'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
            </div>
            <div className={`header-menu absolute ${open ? "right-10" : "top-[-200px]"}`}>
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