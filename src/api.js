const API_KEY = '9234d266db44573700a040f83f256b1d';

const categories = [
    {
        name: 'trending',
        title: 'Bombando',
        path: `trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        name: 'netflixOriginals',
        title: 'Originais Netflix',
        path: `discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
        isLarge: false,
    },
    {
        name: 'topRated',
        title: 'Populares',
        path: `movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: 'comedy',
        title: 'Comédia',
        path: `discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
        isLarge: false,
    },
    {
        name: 'romances',
        title: 'Romances',
        path: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
        isLarge: false,
    },
    {
        name: 'documentaries',
        title: 'Documentários',
        path: `discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
        isLarge: false,
    },   
]

export const getMovies = async (path) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${path}`);
        return await response.json();
    } catch (error) {
        console.error("Error in getMoveis", error);
    }
    
}

export default categories;