import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices()
    const top3Services = services.slice(0, 3)

    const navigate = useNavigate()

    const navigateToAllProteins = () => {
        navigate("/allServices")
    }


    return (
        <div className=''>
            <h1 className='mt-12 mb-5 protein-title text-center'>Our Services</h1>
            <div className='services-container'>
                {
                    top3Services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='w-full text-center'>
                <button onClick={navigateToAllProteins} className='text-white border-gray-300 border py-2 px-4 my-4 rounded font-medium'>All Services</button>
            </div>
        </div>
    );
};

export default Services;