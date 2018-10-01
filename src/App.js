import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import UsersView from './UsersView';
const data = require('./data.json');

/* In Apollo Boost, apollo-link-state is included by default, so we can pass all
 * its settings directly to ApolloClient. If you have a custom Apollo
 * configuration you need to set up apollo-link-state as described in the docs:
 *
 */

const client = new ApolloClient({
  clientState: {
    defaults: data, // Data from JSON

    /* GraphQL schema definitions, they are not required, but may be useful for
     * debugging and introspection
     */
    typeDefs,

    /* There are default resolvers that cover simple cases, but you can provide
     * your own ones, see resolvers.js for more info
     */
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
