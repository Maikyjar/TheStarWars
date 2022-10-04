import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DetailCharacter from './DetailCharacter';
import Card from 'react-bootstrap/Card';
import './Character.css'

export default function Character() {
    const [character, setCharacter] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                    const data = response.data;
                    setCharacter(data)
            }).catch(console.log)
      }, [id])

    return(
        <div id='page-detail'>
             {character.name?
            <Card
                bg='dark'
                text='white'
                style={{ width:'50rem'}}
                className="text-center"
            >
                <Card.Body>
                    <div className='sub-title'> {character.name} </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Birth Year</th>
                                <th>Gender</th>
                                <th>Mass</th>
                                <th>Height</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{character.birth_year}</td>
                                <td>{character.gender}</td>
                                <td>{character.mass}</td>
                                <td>{character.height}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='sub-title'> Starships </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Starship Class</th>
                                <th>Passengers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {<DetailCharacter starships={character.starships}/>}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            :<h3 id='loading'>Loading...</h3>}
        </div>
    )
}