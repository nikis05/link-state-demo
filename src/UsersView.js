import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserButton from './UserButton';
import UserInfo from './UserInfo';

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
          <UserInfo userId={this.state.displayUserId} />
        )}
      </React.Fragment>
    );
  }
}
