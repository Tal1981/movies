/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './movieDetails';
import Loading from './loading'
import '../index.css'

const MoviePage = ({ moviesDB }) => {

   const [movie, setMovie] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const params = useParams()

   useEffect(() => {
      setIsLoading(true)
      const getMovie = async () => {
         let selected_movie = moviesDB.find(movies => movies.id === params.id)
         setMovie({ ...selected_movie })
         return movie
      }
      const fetchMovie = async () => {
         await getMovie();
         setTimeout(() => {
            setIsLoading(false);
         }, 4000);
      };
      fetchMovie();
   }, [])



   return (<>
      {
         isLoading ?
            (<Loading />) :
            (<MovieDetails movie={movie} />)
      }
   </>
   );
}


export default MoviePage;