const data = require('../data');

class MovieModel {
    static getOne(id) {
        return data.movies.find((movie) => movie.id === parseInt(id));
    }

    static getMany(ids) {
        if (ids) {
            return data.movies.filter((movie) => ids.includes(movie.id.toString()));
        }
        return data.movies;
    }

    static getStars(movie) {
        return data.people.filter((person) => (
            person.filmography.find((credit) => (
                credit === movie.id && person.id !== movie.director
            ))
        ));
    }

    static getDirector(movie) {
        if (!movie.director) {
            return null;
        };
        return data.people.find((person) => person.id === movie.director);
    }
}

module.exports = MovieModel;