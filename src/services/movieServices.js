//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1 -> Popular
  //https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1 -> Movies on cinemas
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-Es -> Specific movie
  //https://image.tmdb.org/t/p/w500/ url Imagen

//https://api.themoviedb.org/3/movie/upcoming?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&language=en-US
//https://api.themoviedb.org/3/trending/movie/week?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&sort_by=popularity.desc&language=en-US
//https://api.themoviedb.org/3/movie/top_rated?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&sort_by=popularity.desc&region=US

//https://api.themoviedb.org/3/discover/tv?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&with_networks=213&sort_by=popularity.desc&language=en-US
//https://api.themoviedb.org/3/discover/movie?api_key=e8d53ad78d99a4722c3f0f0f6a5c9014&with_genres=10749&sort_by=popularity.desc&language=en-US


import {TYPE_SELECTED,URL_SECTION,URL_BASE,API_KEY,LANGUAGE} from '../common/common'

export const getMovies = async ({typeSelected}) => {
  let optionSelected = '';
  switch (typeSelected) {
    case TYPE_SELECTED.NOW_PLAYING:
      optionSelected = URL_SECTION.URL_NOW_PLAYING
      break;
    case TYPE_SELECTED.UPCOMING:
      optionSelected = URL_SECTION.URL_UPCOMING
    break;
    case TYPE_SELECTED.WEEK:
      optionSelected = URL_SECTION.URL_WEEK
    break;
    case TYPE_SELECTED.TOP_RATED:
      optionSelected = URL_SECTION.URL_TOP_RATED
    break;
    case TYPE_SELECTED.ORIGINALS:
      optionSelected = URL_SECTION.URL_ORIGINAL
    break;
    case TYPE_SELECTED.GENRES:
      optionSelected = URL_SECTION.URL_GENRES
    break;
    default:
      break;
  }
  const urlMovies = `${URL_BASE}/${optionSelected}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
  const response = await fetch(urlMovies)
  const json = await response.json()
  const movies = json.results
  return movies?.map(movie => ({
    id : movie.id,
    releaseDate : movie.release_date,
    title : movie.title,
    originalTitle : movie.original_title,
    posterImage : movie.backdrop_path,
    mainImage: movie.poster_path,
    overview: movie.overview,
    genders : movie.genre_ids,
    rating : movie.vote_average,
    votes : movie.vote_count
  }))
}

export const getMoviesGenres = async ({genresValue}) => {
  const urlMovies = `${URL_BASE}/${URL_SECTION.URL_GENRES}?api_key=${API_KEY}&with_genres=${genresValue}&language=${LANGUAGE}&page=1`
  const response = await fetch(urlMovies)
  const json = await response.json()
  const movies = json.results
  return movies?.map(movie => ({
    id : movie.id,
    releaseDate : movie.release_date,
    title : movie.title,
    originalTitle : movie.original_title,
    posterImage : movie.backdrop_path,
    mainImage: movie.poster_path,
    overview: movie.overview,
    genders : movie.genre_ids,
    rating : movie.vote_average,
    votes : movie.vote_count
  }))
}

export const getMovie = async (movieId) =>{
  const urlMovie = `${URL_BASE}/${movieId}/credits?api_key=${API_KEY}&language=${LANGUAGE}`
  const response = await fetch(urlMovie)
  const json = await response.json()
  const movie = json.results
  return {
    id : movie.id,
    releaseDate : movie.release_date,
    title : movie.title,
    originalTitle : movie.original_title,
    posterImage : movie.backdrop_path,
    mainImage: movie.poster_path,
    overview: movie.overview,
    genders : movie.genre_ids,
    rating : movie.vote_average,
    votes : movie.vote_count
  }
}
