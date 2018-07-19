const data = require('./data');

const helpers = {
    getPeople: () => { data.people },
    getPerson: () => { data.people.find((person) => person.id === parseInt(id)) },
    getMovies: () => {
        if (ids) {
            return data.movies.filter((movie) => ids.includes(movie.id.toString()));
        }
        return data.movies;
    },
    getMovie: () => { data.movies.find((movie) => movie.id === parseInt(id)) },
    getPersonFilmography: () => {
        data.movies.filter(movie => person.filmography.find(credit => (
            credit === movie.id))) },
    getMovieStars: () => {data.people.filter((person) => (
        person.filmography.find((credit) => (
            credit === movie.id && person.id !== movie.director
        ))
    ));},
    
};

    module.exports = helpers;