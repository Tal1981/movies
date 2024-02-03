/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PageNav from './pagination';
import { Row } from 'react-bootstrap';
import Cardmovies from './cardmovies';
import Loading from './loading';

const MoviesList = ({ movi, val }) => {
  // end = It is an indicator that changes when the page number is clicked
  const [end, setEnd] = useState(16);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    console.log("rerender")
  }, [])

  const rendering = (page) => {
    setEnd(page * 16);
  }

  return (
    <div>
      {
        isLoading ?
          (<Loading />) :
          (
            <>
              <Row className="movieslist">
                {val !== '' ? (movi.length >= 1 ? (movi.map((item) => { //! val = the value in the search engine: (input) tag
                  return (
                    <Cardmovies item={item} key={item.rank} />
                  )
                }))
                  : <p style={{ textAlign: 'center' }}>{`No Result With ${val}`}</p>)
                  : (movi.length >= 1 ? (movi.filter(mov =>
                    mov.rank >= end - 15 && mov.rank <= end).map((item) => {
                      return (
                        <Cardmovies item={item} key={item.rank} />
                      )
                    })
                  ) : <p style={{ textAlign: 'center' }}>No Movies Available</p>)
                }
              </Row>
              <Row>
                <PageNav end={end} rendering={rendering} movi={movi} />
              </Row>
              <Row className="mb-5 mt-3" style={{ transition: "all 0.5s ease-in-out" }}>
                <div className="back_to_up text-center position-relative mb-5">
                  <p className="position-absolute start-50 translate-middle-x font-monospace"
                    style={{ top: "-55px", color: "#FFA500", textShadow: "0 2px #aaa", cursor: "pointer", fontSize: "75PX" }}
                    onClick={() => window.scrollTo(0,0)}>
                    ^
                  </p>
                  <p className="position-absolute start-50 translate-middle-x d-inline fs-5 fw-bolder
                    text-decoration-underlineg" style={{ top: "-4px", color: "#FFA500", textShadow: "0 2px #999", cursor: "pointer"}}
                    onClick={() => window.scrollTo(0,0)}>
                    TOP
                  </p>
                </div>
              </Row>
            </>
          )
      }
    </div>

  );
}

export default MoviesList;