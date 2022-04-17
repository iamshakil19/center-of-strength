import React from 'react';
import girlBanner from '../../Images/girl-banner.jpg'
import GymPackages from '../GymPackages/GymPackages';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='banner-section'>
                <img src={girlBanner} alt="" />
            </div>
            <GymPackages></GymPackages>
        </div>
    );
};

export default Home;