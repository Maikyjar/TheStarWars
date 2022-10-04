import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function DetailCard({characters}) {

    const [charactersR, setCharactersR] = useState([]);

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
        fetchData(characters).then(response => setCharactersR(response));
    }, [])

    return(
        <>
            {charactersR.map(c => {
                return(
                <tr key={c.name}>
                    <td>{c.name}</td>
                    <td>{c.birth_year}</td>
                    <td>{c.gender}</td>
                    <td>{c.mass}</td>
                    <td>{c.height}</td>
                    <td><Link to={`/character/${c.url}`}>See More</Link></td>
                </tr>
                )
            })}
        </>
    )
}