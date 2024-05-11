import React, { useContext, useMemo, useState } from 'react';

// State context
const UserSearchStateContext = React.createContext({
    searchedUser: null,
});

// Actions context
const UserSearchActionsContext = React.createContext({
    setSearchedUser: () => {},
});

export const useUsersSearchState = () => {
    const context = useContext(UserSearchStateContext);

    if (!context) {
        throw new Error('useUserSearchState must be used within a UserSearchProvider');
    }

    return context;
};

export const useUsersSearchActions = () => {
    const context = useContext(UserSearchActionsContext);

    if (!context) {
        throw new Error('useUserSearchActions must be used within a UserSearchProvider');
    }

    return context;
};

export const UserSearchContextProvider = props => {
    const [searchedUser, setSearchedUser] = useState(null);

    const actions = useMemo(
        () => ({
            setSearchedUser,
        }),
        [setSearchedUser],
    );

    const state = useMemo(
        () => ({
            searchedUser,
        }),
        [searchedUser],
    );

    return (
        <UserSearchStateContext.Provider value={state}>
            <UserSearchActionsContext.Provider value={actions}>
                {props.children}
            </UserSearchActionsContext.Provider>
        </UserSearchStateContext.Provider>
    );
};
