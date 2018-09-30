import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import UsersView from './UsersView';
const data = require('./data.json');

const client = new ApolloClient({
  clientState: {
    defaults: data,
    typeDefs,
    resolvers
  }
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UsersView />
      </ApolloProvider>
    );
  }
}

export default App;
