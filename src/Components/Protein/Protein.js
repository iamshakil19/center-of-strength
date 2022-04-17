import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Protein.css'


const Protein = ({protein}) => {
    const navigate = useNavigate()
    const {img, name, price} = protein

    const navigateToCheckout = () => {
        navigate("/checkout")
    }

    return (
        <div className='protein-container text-white border-gray-300 border'>
            <img src={img} alt="" />
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p className='text-3xl font-bold'>${price}</p>
            <button onClick={navigateToCheckout} className='mt-4 border py-2 px-6 rounded hover:bg-stone-800 duration-500 font-semibold bottom-4 right-20 purchase-btn'>Purchase</button>
        </div>
    );
};

export default Protein;