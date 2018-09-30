import gql from 'graphql-tag';

export default {
  Query: {
    user: (_, args, { cache }) =>
      cache
        .readQuery({
          query: gql`
            {
              users @client {
                id
                name
                email
              }
            }
          `
        })
        .users.find(user => user.id === args.id)
  }
};
