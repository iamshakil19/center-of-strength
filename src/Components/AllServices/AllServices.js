import React from 'react';
import AllService from '../AllService/AllService';
import useServices from '../Hooks/useServices';

const AllServices = () => {
    const [services, setServices] = useServices()
    return (
        <div>
            <h1 className='mt-12 mb-5 protein-title text-center'>All Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <AllService
                        key={service.id}
                        service={service}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;