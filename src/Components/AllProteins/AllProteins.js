import React from 'react';
import AllProtein from '../AllProtein/AllProtein';
import useProteins from '../Hooks/useProteins';

const AllProteins = () => {
    const [proteins, setProteins] = useProteins()

    return (
        <div className='py-3'>
            <h1 className='mt-12 mb-5 protein-title text-center'>All PROTEIN PRODUCTS</h1>
            <div className='proteins-container'>
                {
                    proteins.map(protein => <AllProtein
                        key={protein.id}
                        protein={protein}
                    ></AllProtein>)
                }
            </div>
        </div>
    );
};

export default AllProteins;