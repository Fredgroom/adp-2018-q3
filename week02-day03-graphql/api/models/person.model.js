const data = require('../data');

class PersonModel {
    static getOne(id) {
        return data.people.find((person) => person.id === parseInt(id));
    }

    static getMany() {
        return data.people;
    }

    static getFilmography(person) {
        return data.movies.filter(movie => person.filmography.find(credit => (
            credit === movie.id
        )));
    }

    static addOne(person) {
        const id = data.people.length + 1;
        const { name, birthday, placeOfBirth, bio, filmography } = person;
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

module.exports = PersonModel;