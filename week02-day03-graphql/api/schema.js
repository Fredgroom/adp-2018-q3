const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Person {
        id: ID!
        name: String!
        birthday: String
        placeOfBirth: String
        bio: String
        filmography: [Movie]
    }
    type Movie {
        id: ID!
        title: String!
        releaseDate: String
        stars: [Person]
        director: Person
    }
    type Query {
        people: [Person]
        person(id: ID!): Person
        movies(ids: [ID]): [Movie]
        movie(id: ID!): Movie
    }
`;

module.exports = typeDefs;