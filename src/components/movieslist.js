/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import PageNav from './pagination';
import {Row} from 'react-bootstrap';
import Cardmovies from './cardmovies';

const MoviesList = ({movi,val})=>{
  const [end, setEnd]=  useState(16)
  const rendering=(page)=>{
    setEnd(page*16)
  }

  return(
    <div>
        <Row className="movieslist">
          {val!==''?(movi.length >=1 ?(movi.map((item)=>{
              return(
                <Cardmovies item={item} key={item.rank}/>
              )
            })):<p style={{textAlign:'center'}}>{`No Result With ${val}`}</p>)
            : (movi.length >=1 ? (movi.filter(mov=>
              mov.rank >= end-15 && mov.rank <= end).map((item)=>{
              return(
                <Cardmovies item={item} key={item.rank}/>
              )
            })
            ):<p style={{textAlign:'center'}}>No Movies Available</p>)
          }
        </Row>
        <Row>
          <PageNav end={end} rendering={rendering} movi={movi}/>
        </Row>
    </div>

  );
}

export default MoviesList;