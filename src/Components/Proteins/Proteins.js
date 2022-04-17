import React from 'react';
import useProteins from '../Hooks/useProteins';
import Protein from '../Protein/Protein';
import './Proteins.css'

const Proteins = () => {
    const [proteins, setProteins] = useProteins()
    return (
        <div>
            {
                proteins.map(protein => <Protein
                key={protein.id}
                protein={protein}
                ></Protein>)
            }
        </div>
    );
};

export default Proteins;