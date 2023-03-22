import {useState,useEffect} from 'react';
import { getGenres } from '../services/genresServices'

function UseGenres(){
    const [genres, setGenres] = useState()

    const updateGenres = () => {
        getGenres().then(res => setGenres(res))
    }

    useEffect(updateGenres, [])

    return {genres}
}

export default UseGenres;