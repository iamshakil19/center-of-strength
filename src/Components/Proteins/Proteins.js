import React from 'react';
import useProteins from '../Hooks/useProteins';
import Protein from '../Protein/Protein';
import './Proteins.css'

const Proteins = () => {
    const [proteins, setProteins] = useProteins()
    return (
        <div className='py-3'>
            <h1 className='mt-12 mb-5 protein-title text-center'>PROTEIN PRODUCTS</h1>
            <div className='proteins-container'>
                {
                    proteins.map(protein => <Protein
                        key={protein.id}
                        protein={protein}
                    ></Protein>)
                }
            </div>
        </div>
    );
};

export default Proteins;