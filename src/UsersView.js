import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserButton from './UserButton';

export default class UsersView extends React.Component {
  state = { displayUserId: null };

  setDisplayUserId = id => {
    this.setState({ displayUserId: id });
  };

  render() {
    const { displayUserId } = this.state;
    return (
      <React.Fragment>
        <b>Pick a user:</b>
        <Query
          query={gql`
            {
              users @client {
                id
                name
              }
            }
          `}
        >
          {({ loading, error, data }) =>
            !data ? null : (
              <ul>
                {data.users.map(user => (
                  <li key={user.id}>
                    <UserButton
                      user={user}
                      setDisplayUserId={this.setDisplayUserId}
                    />
                  </li>
                ))}
              </ul>
            )
          }
        </Query>
        <b>User info:</b>
        {displayUserId === null ? (
          'No user selected.'
        ) : (
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
            variables={{ id: displayUserId }}
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
        )}
      </React.Fragment>
    );
  }
}
