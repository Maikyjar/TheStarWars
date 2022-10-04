import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Character from './components/Character.jsx';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
        .get(`https://swapi.dev/api/films/`)
        .then(response => {
                const data = response.data
                setFilms(data.results)
        }).catch(console.log)
  }, [])

  return (
    <BrowserRouter>
      <div id='app'>
        <Container fluid>
          <Nav />
          <Routes>
            <Route path='/' element={<Cards films={films} />} />
            <Route path="film/:filmId" element={<Detail />} />
            <Route path="character/:id" element={<Character />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
