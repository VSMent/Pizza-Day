const express = require('express');
const {
  ApolloServer,
  gql
} = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        hello: String
        currentDate: String
        questions: [Question]
        question(_id: ID!): Question!
    }

    type Question{
        _id: ID!
        title: String!
        description: String!
        subDescription: String!
    }
`;

const questions = [
  {
    _id: 'q1',
    title: 'Q #1',
    description: 'Laboris id dolore id aliqua aute elit amet ut incididunt dolore incididunt ex do non ut.'
  },
  {
    _id: 'q1',
    title: 'Q #2',
    description: 'Labore qui consectetur qui culpa minim incididunt sunt excepteur officia enim in.'
  }
];

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    currentDate: () => new Date().toLocaleTimeString(),
    questions: () => questions,
    question: (_, args) => questions.find(q => q._id === args._id),
  },
  Question: {
    subDescription: (parent) => parent.description.substr(0, 10),
  },
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
