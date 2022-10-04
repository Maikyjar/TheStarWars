import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Detail.css';
import Table from 'react-bootstrap/Table';
import DetailCard from './DetailCard';

export default function Detail() {
    const [film, setFilm] = useState([]);
    let { filmId } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/films/${filmId}`)
            .then(response => {
                    const data = response.data;
                    setFilm(data)
            }).catch(console.log)
    }, [filmId])
    
    return(
        <div id='page-detail'>
            {film.title?    
            <Card
                bg='dark'
                text='white'
                style={{ width:'50rem'}}
                className="text-center"
            >
                <Card.Header className="text-primary">A long time ago in a galaxy far, far away </Card.Header>
                <Card.Body>
                    <div className="title"> {film.title} </div>
                    <Card.Text>{film.opening_crawl}</Card.Text>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Release Date</th>
                                <th>Director</th>
                                <th>Producer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{film.release_date}</td>
                                <td>{film.director}</td>
                                <td>{film.producer}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className='title'> Characters </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth Year</th>
                                <th>Gender</th>
                                <th>Mass</th>
                                <th>Height</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {<DetailCard characters={film.characters}/>}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            :<h3 id='loading'>Loading...</h3>}
        </div>
    )
}