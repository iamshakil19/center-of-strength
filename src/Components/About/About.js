import React from 'react';
import './About.css'
import shakilImg from '../../Images/shakil.jpg'


const About = () => {
    return (
        <div className='about-container'>
            <div className='text-container'>
                <p className='text-white p-5 text-justify'>Hi, I am Shakil Ahmed. I am currently studying for a diploma in computer subjects. I've loved being in the tech world since I was a kid. The older I get, the more I love the technology world. In the next 3 months, I want to see myself as a junior front-end developer and that is why I am working hard regularly. And I want to see myself as a skilled full-stack developer in the next 2 years. Pray for me so that I can be a good developer & good person.</p>
            </div>
            <div className='p-5 pt-6'>
                <img src={shakilImg} alt="" />
            </div>
        </div>
    );
};

export default About;