import React, { useEffect } from 'react'
import './Banner.css'
import categories, { getMovies } from '../api';

function Banner() {
    const [movie, setMovie] = React.useState({})
    const fetchRandomMovie = async () => {
        try {
            const data = await getMovies(
                categories.find((category) => category.name === "netflixOriginals").path
            );
            const randomMovie = data?.results[Math.floor(Math.random() * data.results.length)];
            setMovie(randomMovie);
            
        } catch (error) {
            console.log("Banner not found", error);
        }
    }

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    return (<header className='banner-container' style={{
        backgroundSize: "contain",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner-content">
            <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
            </div>
            <h1 className="banner-description">{movie?.overview}</h1>
        </div>
        <div className="banner-fadeBottom"></div>

    </header>)
}
export default Banner;
