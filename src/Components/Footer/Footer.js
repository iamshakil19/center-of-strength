import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <footer className='child-footer-container'>
                <div className='mb-7'>
                    <h3 className='text-white text-xl font-bold mb-2'>Quick Links</h3>
                    <Link to="/about">About</Link>
                    <br />
                    <Link to="/">News</Link>
                    <br />
                    <Link to="/">Event</Link>
                    <br />
                    <Link to="/">Schedule</Link>
                    <br />
                    <Link to="/">Contact</Link>
                </div>
                <div className='mb-7'>
                    <h3 className='text-white text-xl font-bold mb-2'>Member</h3>
                    <Link to="/">Event</Link>
                    <br />
                    <Link to="/">Schedule</Link>
                </div>
                <div className='mb-7'>
                    <h3 className='text-white text-xl font-bold mb-2'>Newsletter</h3>
                    <input type="email" name="email" className='outline-none rounded-sm py-1 px-2' placeholder='Enter your email' required />
                    <button className='newsletter-btn border-gray-300 border'>Submit</button>
                </div>
            </footer>
        </div>
    );
};

export default Footer;