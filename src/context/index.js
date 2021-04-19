import React, { useState, useEffect, useCallback, createContext } from 'react';
import { url } from '../config/endpoints';

// CONTEXT
export const DataContext = createContext();

// CONSUMER
export const withData = Component => props => (
  <DataContext.Consumer>
    {state => <Component {...props} data={state} />}
  </DataContext.Consumer>
);

// PROVIDER
export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [acceptedUsers, setAcceptedUsers] = useState([]);

  const deleteUserById = (user) => {
    const userIndex = users.indexOf(user);

    if (userIndex > -1) {
      const cloneUsers = [...users];
      cloneUsers.splice(userIndex, 1);
      setUsers(cloneUsers);
    }
  };

  const acceptUserById = (user) => {
    const userIndex = users.indexOf(user);
    const userObj = acceptedUsers.find(item => item.id === users[userIndex].id);

    if (!userObj) {
      // Add user to todo
      setAcceptedUsers([...acceptedUsers, { ...user, accepted: true }]);
      // Remove user from all users list
      const updatedUsers = users.filter(item => item.id !== user.id);
      setUsers(updatedUsers);
    }
  }

  const removeFromAcceptedListById = (user) => {
    const userIndex = acceptedUsers.indexOf(user);

    if (userIndex > -1) {
      // Add user to all users list
      setUsers([...users, { ...acceptedUsers[userIndex], accepted: false }]);
      // Remove user from accepted list
      const updatedAllUsers = acceptedUsers.filter(item => item.id !== user.id);
      setAcceptedUsers(updatedAllUsers);
    }
  };

  // Get all users
  const fetchUsersData = useCallback(async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setUsers(result);
  }, []);

  useEffect(() => { fetchUsersData(url); }, [fetchUsersData]);

  return (
    <DataContext.Provider value={{
      users,
      acceptedUsers,
      methods: {
        deleteUserById,
        acceptUserById,
        removeFromAcceptedListById,
      }
    }}>
      {children}
    </DataContext.Provider>
  );
};
