//https://api.themoviedb.org/3/genre/movie/list?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&language=en-US
import {URL_BASE,API_KEY,LANGUAGE} from '../common/common'

export const getGenres = async() =>{
    const urlGenres = `${URL_BASE}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`
    const response = await fetch(urlGenres)
    const json = await response.json()
    //const genres = json.genres.sort((x,y) => x.name.localeCompare(y.name)).slice(0,5)
    const genres = json.genres.sort((x , y) => x.id - y.id)
                              .slice(0,5)
    return genres?.map(genres  => ({
        id :genres.id,
        name: genres.name
    }))
}