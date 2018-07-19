const { PersonModel, MovieModel } = require('./models');

const resolvers = {
    Query: {
        people: () => PersonModel.getMany(),
        person: (root, { id }) => PersonModel.getOne(id),
        movies: (root, { ids }) => MovieModel.getMany(ids),
        movie: (root, { id }) => MovieModel.getOne(id)
    },
    Person: {
        filmography: (person) => PersonModel.getFilmography(person)
    },
    Movie: {
        stars: (movie) => MovieModel.getStars(movie),
        director: (movie) => MovieModel.getDirector(movie)
    },
    Mutation: {
        addPerson: (root, { person }) => PersonModel.addOne(person)
    }
};

module.exports = resolvers;