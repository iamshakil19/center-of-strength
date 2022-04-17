import React from 'react';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices()
    return (
        <div className='services-container'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;