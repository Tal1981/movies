/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ getSearch }) => {

  const [search, setSearch] = useState('')
  useEffect(() => {
    if (!search.startsWith(' ') && !search.endsWith(' ')) {
      return getSearch(search)
    };
  }, [search])

  return (
    <div className='Navbar'>
      <Container>
        <Row className="d-flex justify-content-around gap-3">
          <Col sm="10" lg={10} className="nav_col_left">
            <div className="search_box">
              <input type="text" className="search_input" value={search}
                placeholder="Search..." onChange={(e) => setSearch(e.target.value.toString())} />
              {/* <span className="material-symbols-outlined search_icon">search</span> */}
            </div>
          </Col>
          <Col sm="1" lg={1} className="nav_col_right">
            <div >
              <Link to="/" className="logo_box" onClick={() => setSearch('')}>
                <span className="logo_text">Movies</span>
                <img src="/movies/movies.png" alt="logo" className="logo" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
