import React from 'react';
import { withData } from './context/';
import ListItem from './component/ListItem';
import { isEmpty } from './utils';
import './App.css';

const App = ({
  data: {
    users,
    acceptedUsers,
  } }) => {

  return (
    <div className="App">
      <h1>Users Table</h1>
      <hr />

      {isEmpty(acceptedUsers) && (
        <>
          <h2>Accepted users</h2>
          <ul>
            {acceptedUsers.map(user => (
              <ListItem
                key={user.id}
                user={user}
              />
            ))}
          </ul>
        </>
      )}

      {isEmpty(users) && (
        <>
          <h2>All users</h2>
          <ul>
            {users.map(user => (
              <ListItem
                key={user.id}
                user={user}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default withData(App);
