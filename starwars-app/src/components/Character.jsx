import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function Character() {
    const [character, setCharacter] = useState([]);
    let { url } = useParams();

    useEffect(() => {
        axios
            .get(`${url}`)
            .then(response => {
                    const data = response.data;
                    setCharacter(data)
            }).catch(console.log)
      }, [url])


    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                        <th>Mass</th>
                        <th>Height</th>
                        <th>Starships</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={character.name}>
                        <td>{character.name}</td>
                        <td>{character.birth_year}</td>
                        <td>{character.gender}</td>
                        <td>{character.mass}</td>
                        <td>{character.height}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}