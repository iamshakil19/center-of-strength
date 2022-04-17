import React from 'react';
import girlBanner from '../../Images/girl-banner.jpg'
import Proteins from '../Proteins/Proteins';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='banner-section'>
                <img src={girlBanner} alt="" />
            </div>
            <Services></Services>
            <Proteins></Proteins>
        </div>
    );
};

export default Home;