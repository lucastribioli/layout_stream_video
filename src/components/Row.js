import React, { useEffect } from "react";
import { getMovies } from "../api";
import "./Row.css";

function Row({title, fetchUrl, isLarge}){
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async(_fetchUrl) => {
        try {
            const data = await getMovies(_fetchUrl)
            setMovies(data?.results);
        } catch (error) {
            console.error("Error in fetchMovies", error);
        }
    }
    useEffect(() => {
        fetchMovies(fetchUrl);
    }, [fetchUrl]);


    return(
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies?.map((movie) => {
                    return (
                    <img 
                        className={`movie-card ${isLarge && "movie-card-large"}`}
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt={movie.name}/>)
                }
                )}
            </div>
        </div>
    );
}

export default Row;