import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllService = ({ service }) => {

    const navigate = useNavigate()
    const { img, price, month, gymClass, access, text } = service

    const navigateToCheckout = () => {
        navigate("/checkout")
    }

    return (
        <div>
            <div className='service-container border-gray-300 border text-white m-5 mx-auto text-center'>
                <img src={img} alt="" />
                <h2 className=' mt-5 text-3xl font-bold'>${price}</h2>
                <h3 className='mt-1 text-xl'>{gymClass} classes</h3>
                <h3 className='mt-1 text-xl'>{month} Months</h3>
                <p className='mt-1 text-lg'>{access}</p>
                <p className='mt-1 px-4'>{text}</p>
                <button onClick={navigateToCheckout} className='mt-4 border py-2 px-6 rounded hover:bg-stone-800 duration-500 font-semibold bottom-4 right-16 purchase-btn'>Purchase</button>
            </div>
        </div>
    );
};

export default AllService;