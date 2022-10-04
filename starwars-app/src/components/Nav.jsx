import React from 'react';
import './Nav.css';
import image from '../star.webp'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Nav() {
  return (
    <div>
      <img src={image} alt="banner" id='image-logo'/>
      <Navbar className='navbar'>
          <Container fluid>
            <Navbar.Brand href="#home" onClick={() => window.location.reload(true)} >
              Star Wars App
            </Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
