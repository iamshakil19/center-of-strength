import React from 'react';
import './Protein.css'
const Protein = ({protein}) => {
    const {img, name, price} = protein
    return (
        <div>
            <img src={img} alt="" />
            <h2 className='text-white'>{name}</h2>
        </div>
    );
};

export default Protein;