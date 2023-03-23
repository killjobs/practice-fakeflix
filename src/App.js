import './scss/app.scss'
import MoviePoster from './components/MoviePoster'
import UseMovies from './hooks/UseMovies'
import MovieGeneral from './components/MovieGeneral'
import {TYPE_SELECTED,TYPE_SELECTED_TEXT} from './common/common'
import MovieOriginal from './components/MovieOriginal'
import UseGenres from './hooks/UseGenres'
import Footer from './components/Footer'

function App() {

  const {movies} = UseMovies({typeSelected:TYPE_SELECTED.NOW_PLAYING})
  const {genres} = UseGenres()
  const DISCOUNT_ELEMENTS = 2

  if(!movies || !genres) return null

  return (
    <main className='wrapper'>
      { 
        movies.map((results,index) => {
        if (index===0) {
          return(
            <MoviePoster
            posterImage = {results.posterImage}
            overview = {results.overview}
            title = {results.title}
            key={index}>
            </MoviePoster>
          )}
        return null
        })
      }
      {
        Object.values(TYPE_SELECTED).map((results) => {
          let lastValue = Object.values(TYPE_SELECTED)[ Object.values(TYPE_SELECTED).length - DISCOUNT_ELEMENTS]
          if(results < lastValue){
            return(
              <MovieGeneral
              typeSelected = {results}>
                <h2>{Object.values(TYPE_SELECTED_TEXT)[results]}</h2>
              </MovieGeneral>
            )
          }
          return null
        })
      }
      <MovieOriginal>
        <h2>{Object.values(TYPE_SELECTED_TEXT)[4]}</h2>
      </MovieOriginal>
      {
        genres.map((result)=>{
          return(
            <MovieGeneral
              typeSelected = {TYPE_SELECTED.GENRES}
              genresValue = {result.id}>
                <h2>{result.name}</h2>
            </MovieGeneral>
          )
        })
      }
      <Footer/>
    </main>
  );
}

export default App;
