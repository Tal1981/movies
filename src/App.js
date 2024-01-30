/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './components/navbar';
import MoviesList from './components/movieslist';
import MoviePage from './components/moviePage';
import Container from 'react-bootstrap/Container';
import { moviesDB } from './moviesDB';
import NotFound from './components/404';
let val = ''; //value in search engine

const App = () => {
  const [movi, setMovi] = useState(moviesDB)

  //! It's triggaring when the search engine gets en input
  const getSearch = (searchValue) => {
    val = searchValue.toLowerCase();
    let searchResult = moviesDB.filter(mov => {
      return mov?.title?.toLowerCase().includes(val)
    })
    setMovi(searchResult)
  }

  return (
    <div>
      <HashRouter>
        <NavBar getSearch={getSearch} />
        <Container>
          <Routes>
            <Route path="/" element={<MoviesList movi={movi} val={val} />} />
            <Route path="/movie/:id" element={<MoviePage moviesDB={moviesDB} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
