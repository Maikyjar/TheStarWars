import React from 'react';
import './Nav.css';
import image from '../star.webp'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <img src={image} alt="banner" id='image-logo'/>
      <Navbar className="justify-content-center">
            <Navbar.Brand>
              <Link className='link-home' to={'/'}>
                Home Films
              </Link>
            </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
