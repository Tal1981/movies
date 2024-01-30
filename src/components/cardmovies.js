import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';


const Cardmovies = ({ item }) => {

  return (
    <Col xs="12" sm={6} md={4} lg={3} style={{ marginBottom: "24px" }}
      onClick={() => window.scrollTo(0, 0)}>
      <Link to={`/movie/${item.id}`}>
        <div className="card_movie">
          <img src={item.image} alt="movie" className="img_movie" />
          <div className="overlay_movie_name">
            <div className="text_movie">
              <h6>{item.title}</h6>
              {
                item.genre.length > 1 ? (item.genre.map(genre => {
                  return (
                    <p style={{ display: 'inline-block' }} key={Math.random()}>
                      {genre !== item.genre[item.genre.length - 1] ? genre + '~' : genre}
                    </p>
                  )
                })) : <p key={item.id}>{item.genre}</p>
              }
              <p>{item.year}</p>
              <p>Rating: {item.rating}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default Cardmovies;