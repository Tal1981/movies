import React from 'react';
import { Link } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import '../index.css'
import { Container } from 'react-bootstrap';


const MovieDetails = ({ movie }) => {

  const handle = useFullScreenHandle()


  const openFullScreen = () => {
    handle.enter();
  };

  const closeFullScreen = () => {
    handle.exit();
  };

  return (
    <Container className="container_moviesDetails">
      <div className="d-flex justify-content-around flex-sm-column-reverse
                  align-items-center flex-lg-row gap-5 movie_page">
        <div className='bg-light w-100 py-5 px-sm-2 px-md-3 px-lg-5 m-1  border-bottom'>
          <div className='bg-white p-3 font-weight-light fs-5 border-bottom mb-2 mx-2'>
            <span className='details_txt'>Movie title: </span>{movie?.title && movie.title}
          </div>
          <div className='bg-white px-3 py-2 font-weight-light fs-6 border-bottom mb-2 mx-2'>
            <span className='details_txt'>Director: </span>{movie?.director}
          </div>
          <div className='bg-white px-3 py-2 font-weight-light fs-6 border-bottom mb-2 mx-2'>
            <span className='details_txt me-2'>Genre: </span>
            {movie?.genre?.map((gen) => {
              return (
                <span key={Math.random()} >
                  <span >{gen}</span>
                  {
                    gen !== movie?.genre[movie.genre.length - 1]
                    &&
                    (<span className="details_txt"> | </span>)
                  }
                </span>
              )
            })}
          </div>
          <div className='bg-white px-3 py-2 font-weight-light fs-6 border-bottom mb-2 mx-2'>
            <span className='details_txt'>Writers: </span>
            {movie?.writers?.map(write => {
              return (<p style={{ margin: '0 16px' }} key={Math.random()}>{write}</p>)
            })}
          </div>
          <div className='bg-white px-3 py-2 font-weight-light fs-6 border-bottom mb-2 mx-2'>
            <span className='details_txt'>Rating: </span>{movie?.rating}
          </div>
          <div className='bg-white px-3 py-2 font-weight-light fs-6 border-bottom mb-2 mx-2'>
            <span className='details_txt'>Year: </span>{movie?.year}
          </div>
          <div className='bg-white px-3 py-2 font-weight-light fs-6 border-bottom mb-2 mx-2'>
            <p key={movie.rank}><span className='details_txt'>Description: </span>{movie?.description}</p>
          </div>
          <div className='d-flex py-2 mb-2 flex-nowrap justify-content-center'>
            <Link to={movie?.trailer}>
              <button className="bg-warning border-bottom border-0 m-3 py-2 px-4 rounded shadow button">Trailer</button>
            </Link>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-warning border-bottom border-0 m-3 py-2 px-4 rounded shadow button">Back</button>
            </Link>
          </div>
        </div>

        <div className='p-3 bg-light  border-bottom'>
          <FullScreen handle={handle}>
            {handle.active ? (
              <div className='position-relative d-flex justify-content-center bg bg-secondary'>
                <span onClick={() => closeFullScreen()} className="close_icon position-fixed top-0 start-10 mt-3 badge border
                  border-3 border-light rounded-circle bg-danger p-3 fs-5">X</span>
                <img src={movie?.image} alt="movie" className="img_fullScreen"
                  style={{ boxShadow: '0 0 5px 5px #ddd', cursor: 'pointer' }} />
              </div>
            ) : (
              <div onClick={() => openFullScreen()}>
                <img src={movie?.image} alt="movie" className="w-100"
                  style={{ boxShadow: '0 0 5px 5px #ddd', cursor: 'pointer' }} />
              </div>
            )}
          </FullScreen>
        </div>
      </div>
    </Container>
  );
}


export default MovieDetails;