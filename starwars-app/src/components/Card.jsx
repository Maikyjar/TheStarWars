import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import './Card.css'; 

export default function Card ({index, title, release_date, director, producer, opening_crawl, episode_id}) {
    const [active, setActive] = useState(false);
    const handleClose = () => setActive(false);
    const handleShow = () => setActive(true);

    return (
      <>
        <tr key={index}>
            <td><Link className='link-detail' to={`/film/${episode_id}`}>{title}</Link></td>
            <td>{release_date}</td>
            <td>{director}</td>
            <td>{producer}</td>
            <td>
                <Button variant="warning" onClick={handleShow}>Show Details</Button>
            </td>
        </tr>
        <Modal
            size="lg"
            show={active} 
            onHide={handleClose}
            >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>A long time ago in a galaxy far, far away</h5>
                <p>{opening_crawl}</p>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Release Date</th>
                            <th>Director</th>
                            <th>Producer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{release_date}</td>
                            <td>{director}</td>
                            <td>{producer}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
};
