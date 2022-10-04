import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DetailCharacter.css';

export default function DetailCharacter({starships}) {
    const [starshipsR, setStarshipsR] = useState([]);
    const fetchData = async (urls) => {
        try {
            const response = await Promise.all(
                urls.map(url => axios.get(url).then(res => res.data))
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(starships).then(response => setStarshipsR(response));
    }, [starships])

    return(
        <>
            {starships.length?starshipsR.map(s => {
                return(
                    <tr key={s.name}>
                        <td>{s.name}</td>
                        <td>{s.model}</td>
                        <td>{s.starship_class}</td>
                        <td>{s.passengers}</td>
                    </tr>
                )
            }):<tr >
                <td id='loading'>The character has no starships</td>
            </tr>}
        </>
    )
}