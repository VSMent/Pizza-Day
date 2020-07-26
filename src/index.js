const express = require('express');
const {GraphQLDateTime} = require('graphql-iso-date')
const {
  ApolloServer,
  gql
} = require('apollo-server-express');

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
    }

    type User{
        _id: ID!
        fullName: String!
        email: String!
        questions: [Question]
    }
`;

const users = [
  {
    _id: 'u1',
    profile: {
      fullName: 'User #1',
    },
    email: 'ema@il.com',
  },
];

const questions = [
  {
    _id: 'q1',
    title: 'Q #1',
    description: 'Laboris id dolore id aliqua aute elit amet ut incididunt dolore incididunt ex do non ut.',
    createdBy: 'u1',
    createdAt: '2020-07-26 13:40:05.091Z',
  },
  {
    _id: 'q1',
    title: 'Q #2',
    description: 'Labore qui consectetur qui culpa minim incididunt sunt excepteur officia enim in.',
  }
];

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    currentDate: () => new Date().toLocaleTimeString(),
    questions: () => questions,
    question: (_, args) => questions.find(q => q._id === args._id),
    users: () => users,
  },
  Question: {
    subDescription: (parent) => parent.description.substr(0, 10),
    author: ({createdBy}) => users.find(u => u._id === createdBy),
  },
  User: {
    fullName: ({profile}) => profile.fullName,
    questions: ({_id}) => questions.filter(q => q.createdBy === _id),
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
