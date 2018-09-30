import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const UserInfo = ({ userId }) => (
  <Query
    query={gql`
      query getUser($id: ID) {
        user(id: $id) @client {
          id
          name
          email
        }
      }
    `}
    variables={{ id: userId }}
  >
    {({ loading, error, data }) => {
      const user = data.user;
      if (!data || !user) return null;
      return (
        <ul>
          <li>Id: {user.id}</li>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      );
    }}
  </Query>
);

export default UserInfo;
