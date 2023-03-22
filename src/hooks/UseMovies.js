import {useState, useEffect} from 'react'
import {getMovies,getMoviesGenres} from '../services/movieServices.js'

function UseMovies({typeSelected,genresValue}){
    const [movies, setMovies] = useState()

    const updateMovies = () =>{
      genresValue === 0 ?
        getMovies({typeSelected}).then(res => { setMovies(res) }) :
        getMoviesGenres({genresValue}).then(res => { setMovies(res) }) 
    }
  
    useEffect(updateMovies, [])
  
    return {movies}
  }

export default UseMovies;