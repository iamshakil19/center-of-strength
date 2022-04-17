import React from 'react';
import useServices from '../Hooks/useServices';
import './GymPackages.css'

const GymPackages = () => {
    const [services, setServices] = useServices()
    return (
        <div>
            <p>{services.length}</p>
        </div>
    );
};

export default GymPackages;