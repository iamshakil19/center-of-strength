import React, { useEffect, useState } from 'react';

const useProteins = () => {
    const [proteins, setProteins] = useState([])

    useEffect(() => {
        fetch("proteins.json")
            .then(res => res.json())
            .then(data => setProteins(data))
    }, [])

    return [proteins, setProteins]
};

export default useProteins;