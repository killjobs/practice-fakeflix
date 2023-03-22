import React from "react"
import '../scss/moviePoster.scss'
import {URL_IMAGE_BASE} from '../common/common.js'
import ButtonSection from "./ButtonSection.js"

const MoviePoster = ({posterImage,overview,title}) =>{
    const URL_IMAGE = URL_IMAGE_BASE + posterImage

    const stylePoster = {
        backgroundImage : `url(${URL_IMAGE})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        //backgroundAttachment: 'fixed',
        backgroundPosition: '50%'
    }

    return(
        <main className="poster" style={stylePoster}>
            <section className="poster-container">
                <h1>{title}</h1>
                <section className="poster-container_button">
                    <ButtonSection backgorundColor={'red-color'}> 
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                        </svg>
                        {' Play'} 
                    </ButtonSection>
                    <ButtonSection backgorundColor={'grey-color'}> 
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                        </svg>
                        {'More info'}
                    </ButtonSection>
                </section>
                <p>{overview}</p>
            </section>
        </main>
    )
}

export default MoviePoster;