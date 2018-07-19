const { data } = require('./data');
const resolvers = {
    Query: {
        people: () => data.people,
        person(root, { id }) {
            return data.people.find((person) => person.id === parseInt(id));
        },
        movies(root, { ids }) {
            if (ids) {
                return data.movies.filter((movie) => ids.includes(movie.id.toString()));
            }
            return data.movies;
        },
        movie(root, { id }) {
            return data.movies.find((movie) => movie.id === parseInt(id));
        }
    },
    Person: {
        filmography(person) {
            return data.movies.filter(movie => person.filmography.find(credit => (
                credit === movie.id
            )));
        }
    },
    Movie: {
        stars(movie) {
            return data.people.filter((person) => (
                person.filmography.find((credit) => (
                    credit === movie.id && person.id !== movie.director
                ))
            ));
        },
        director(movie) {
            if (!movie.director) {
                return null;
            };
            return data.people.find((person) => person.id === movie.director);
        }
    },
    Mutation: {
        addPerson(root, { name, birthday, placeOfBirth, bio, filmography}) {
            const id = data.people.length + 1;
            const newPerson = {
            id,
            name,
            birthday,
            placeOfBirth,
            bio,
            filmography
          }
          data.people.push(newPerson);
          return newPerson;
        }
      }
};

module.exports = resolvers;