import React from 'react';
import useUsers from '../hooks/useUsers';

const UsersContext = React.createContext({
    users: [],
    error: null,
    isLoading: false,
    clearError: () => {},
    getUsers: () => {},
    addUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
});

export const UsersContextProvider = props => {
    const { users, error, isLoading, clearError, getUsers, addUser, updateUser, deleteUser } =
        useUsers();

    return (
        <UsersContext.Provider
            value={{
                users,
                error,
                isLoading,
                clearError,
                getUsers,
                addUser,
                updateUser,
                deleteUser,
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
