import {URL_IMAGE_BASE, TYPE_SELECTED} from '../common/common.js'
import '../scss/movieOriginal.scss'
import UseMovies from '../hooks/UseMovies.js'

function MovieOriginal({children}){
    
    const {movies} = UseMovies({typeSelected:TYPE_SELECTED.ORIGINALS})
    if(!movies) return null

    return(
        <main className='movie-original'>
            {children}
            <section className='movie-original_images'>
                {
                    movies.map((results)=>{
                        const URL_IMAGE = URL_IMAGE_BASE + results.mainImage
                        return(
                            <img src={URL_IMAGE} alt={results.title}/>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default MovieOriginal
