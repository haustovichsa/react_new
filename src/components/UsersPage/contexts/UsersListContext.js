import React, { useContext, useMemo, useState } from 'react';

// State context
const UsersListStateContext = React.createContext({
    editedUser: null,
});

// Actions context
const UsersListActionsContext = React.createContext({
    setEditedUser: () => {},
});

export const useUsersListState = () => {
    const context = useContext(UsersListStateContext);

    if (!context) {
        throw new Error('useUsersListState must be used within a UsersListProvider');
    }

    return context;
};

export const useUsersListActions = () => {
    const context = useContext(UsersListActionsContext);

    if (!context) {
        throw new Error('useUsersListActions must be used within a UsersListProvider');
    }

    return context;
};

export const UsersListContextProvider = props => {
    const [editedUser, setEditedUser] = useState(null);

    const actions = useMemo(
        () => ({
            setEditedUser,
        }),
        [setEditedUser],
    );

    const state = useMemo(
        () => ({
            editedUser,
        }),
        [editedUser],
    );

    return (
        <UsersListStateContext.Provider value={state}>
            <UsersListActionsContext.Provider value={actions}>
                {props.children}
            </UsersListActionsContext.Provider>
        </UsersListStateContext.Provider>
    );
};
