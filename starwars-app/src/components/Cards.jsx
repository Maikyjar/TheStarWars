import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import Table from 'react-bootstrap/Table';

export default function Cards({films}) {

  return (
    <div className='cards'>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Director</th>
            <th>Producer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {films.map((f) => 
            <Card
            key={f.episode_id}
            episode_id={f.episode_id}
            title={f.title}
            release_date={f.release_date}
            director={f.director}
            producer={f.producer}
            opening_crawl={f.opening_crawl}
            />
          )}
        </tbody>
      </Table>
    </div>
  );
}