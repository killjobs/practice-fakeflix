import {URL_IMAGE_BASE} from '../common/common.js'
import '../scss/movieGeneral.scss'
import UseMovies from '../hooks/UseMovies.js'

function MovieGeneral({children,typeSelected,genresValue = 0}){

    const {movies} = UseMovies({typeSelected,genresValue})
    if(!movies) return null

    return(
        <main className='movie-general'>
            {children}
            <section className='movie-general_images'>
                {
                    movies.map((results,index)=>{
                        const URL_IMAGE = URL_IMAGE_BASE + results.posterImage
                        if(index!==0){
                            return(
                                <img src={URL_IMAGE} alt={results.title}/>
                            )
                        }
                    })
                }
            </section>
        </main>
    )
}

export default MovieGeneral