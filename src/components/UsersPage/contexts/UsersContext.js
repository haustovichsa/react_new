import React, { useContext, useEffect, useMemo } from 'react';
import useUsers from '../hooks/useUsers';

// State context
const UsersStateContext = React.createContext({
    users: [],
    error: null,
    isLoading: false,
});

// Actions context
const UsersActionsContext = React.createContext({
    clearError: () => {},
    getUsers: () => {},
    addUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
});

export const useUsersState = () => {
    const context = useContext(UsersStateContext);

    if (!context) {
        throw new Error('useUsersState must be used within a UsersProvider');
    }

    return context;
};

export const useUsersActions = () => {
    const context = useContext(UsersActionsContext);

    if (!context) {
        throw new Error('useUsersActions must be used within a UsersProvider');
    }

    return context;
};

export const UsersContextProvider = props => {
    const { users, error, isLoading, clearError, getUsers, addUser, updateUser, deleteUser } =
        useUsers();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const actions = useMemo(
        () => ({
            clearError,
            getUsers,
            addUser,
            updateUser,
            deleteUser,
        }),
        [clearError, getUsers, addUser, updateUser, deleteUser],
    );

    const state = useMemo(
        () => ({
            users,
            error,
            isLoading,
        }),
        [users, error, isLoading],
    );

    return (
        <UsersStateContext.Provider value={state}>
            <UsersActionsContext.Provider value={actions}>
                {props.children}
            </UsersActionsContext.Provider>
        </UsersStateContext.Provider>
    );
};
