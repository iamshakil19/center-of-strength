import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProteins from '../Hooks/useProteins';
import Protein from '../Protein/Protein';
import './Proteins.css'

const Proteins = () => {
    const navigate = useNavigate()

    const navigateToAllProteins = () => {
        navigate("/allProteins")
    }
    const [proteins, setProteins] = useProteins()

    const top3proteins = proteins.slice(0, 3)
    return (
        <div className='py-3'>
            <h1 className='mt-12 mb-5 protein-title text-center'>PROTEIN PRODUCTS</h1>
            <div className='proteins-container'>
                {
                    top3proteins.map(protein => <Protein
                        key={protein.id}
                        protein={protein}
                    ></Protein>)
                }

            </div>
            <div className='w-full text-center'>
                <button onClick={navigateToAllProteins} className='text-white border-gray-300 border py-2 px-4 my-4 rounded font-medium'>All Proteins</button>
            </div>
        </div>
    );
};

export default Proteins;