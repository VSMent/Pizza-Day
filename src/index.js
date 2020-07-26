const express = require('express');
const {GraphQLDateTime} = require('graphql-iso-date');
const {ApolloServer, gql} = require('apollo-server-express');
const {Question} = require('./question/modal');
const {User} = require('./user/modal');
require('./db');

const typeDefs = gql`
    scalar DateTime

    type Query{
        hello: String
        currentDate: String
        questions: [Question]
        question(_id: ID!): Question!
        users: [User]
    }

    type Question{
        _id: ID!
        title: String!
        description: String!
        subDescription: String!
        createdBy: ID
        createdAt: DateTime
        author: User
        tags: [Tags]
    }
    enum Tags{
        JS
        React
        GraphQL
        Mongo
        NodeJS
    }

    type User{
        _id: ID!
        fullName: String!
        email: String!
        questions: [Question]
    }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    currentDate: () => new Date().toLocaleTimeString(),
    questions: () => Question.find({}, null, {limit: 20}),
    question: (_, {_id}) => Question.findById(_id),
    users: () => User.find({}, null, {limit: 20}),
  },
  Question: {
    subDescription: (parent) => parent.description.substr(0, 10),
    author: ({createdBy}) => User.findById(createdBy),
  },
  User: {
    fullName: ({profile}) => profile.fullName,
    questions: ({_id}) => Question.find({createdBy: _id}),
  },
  DateTime: GraphQLDateTime,
};
const schema = new ApolloServer({
  typeDefs,
  resolvers
});
const app = express();
schema.applyMiddleware({app});


app.listen(3000, () => {
  console.log("graphql: http://localhost:3000/graphql");
})
